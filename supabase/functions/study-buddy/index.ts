import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ChatContext {
  taskId?: string;
  taskTitle?: string;
  taskDescription?: string;
  userGoal?: string;
  skillLevel?: string;
}

interface MessageHistoryItem {
  role: "user" | "assistant" | "system";
  content: string;
}

function extractGeminiResponseText(geminiRawResponse: any): string {
  if (!geminiRawResponse) return "";

  const candidate = geminiRawResponse.candidates?.[0];
  if (candidate?.content?.parts && Array.isArray(candidate.content.parts)) {
    const combinedText = candidate.content.parts
      .map((p: any) => (typeof p === "string" ? p : p.text || ""))
      .filter(Boolean)
      .join("\n");
    if (combinedText.trim()) return combinedText.trim();
  }

  if (typeof candidate?.text === "string" && candidate.text.trim()) {
    return candidate.text.trim();
  }

  if (typeof candidate?.content === "string" && candidate.content.trim()) {
    return candidate.content.trim();
  }

  if (typeof geminiRawResponse.text === "string" && geminiRawResponse.text.trim()) {
    return geminiRawResponse.text.trim();
  }

  return "";
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { message, context, history } = await req.json() as {
      message: string;
      context?: ChatContext;
      history?: MessageHistoryItem[];
    };

    console.log("=============================================================");
    console.log("[EdgeFunction:study-buddy] 📩 Incoming user message:", message);
    console.log("[EdgeFunction:study-buddy] 📦 Active context:", JSON.stringify(context));

    if (!message || typeof message !== "string") {
      return new Response(
        JSON.stringify({ error: "Missing or invalid 'message' in request body." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const geminiApiKey = Deno.env.get("GEMINI_API_KEY");

    // Skillora AI Pedagogical System Prompt (Khan Academy / Coursera Style)
    const topicContext = context?.taskTitle ? `Current Learning Topic: "${context.taskTitle}"` : "General Tech & AI Learning";
    const topicDesc = context?.taskDescription ? `Topic Description: "${context.taskDescription}"` : "";
    const userGoal = context?.userGoal ? `Career Goal: "${context.userGoal}"` : "";
    const skillLevel = context?.skillLevel || "beginner";

    const systemPrompt = `You are Skillora AI Study Buddy, an empathetic, encouraging, and world-class educational AI mentor designed to help beginners, students, career changers, and freelancers master tech skills and answer questions accurately.

STUDENT LEARNING CONTEXT:
- ${topicContext}
- ${topicDesc}
- ${userGoal}
- Student Level: ${skillLevel}

PEDAGOGICAL TEACHING RULES (Coursera / Khan Academy / Duolingo Style):
1. Plain English First: Always explain concepts simply and clearly. Avoid dense jargon without immediately explaining what it means intuitively.
2. Real-World Analogies: Start new or difficult concepts with a vivid, relatable real-world analogy.
3. Short & Digestible: Keep explanations concise and structured. Use bullet points and bold headers for clarity.
4. Code With Line-by-Line Breakdown: If providing code, keep it brief (under 12 lines) and provide an intuitive line-by-line breakdown explaining what each key line does.
5. Direct & Accurate Answers: Always answer the student's exact question directly (even if general knowledge or off-topic), while maintaining an encouraging, educational tone.
6. Supportive Takeaway: End with a supportive key takeaway or a mini practice question to reinforce learning.`;

    if (!geminiApiKey) {
      console.warn("[EdgeFunction:study-buddy] ⚠️ GEMINI_API_KEY secret is not configured in Supabase Secrets.");
      const diagnosticReply = `### Study Buddy AI Gateway ⚠️\n\nI received your question: **"${message}"**.\n\nPlease set your Google Gemini API key in Supabase Secrets using:\n\`\`\`bash\nsupabase secrets set GEMINI_API_KEY=your_gemini_api_key\n\`\`\`\n\n*Once set, Study Buddy will deliver real-time Gemini answers!*`;

      return new Response(
        JSON.stringify({ reply: diagnosticReply, taskId: context?.taskId || null }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Format conversation history for Gemini API
    const contents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history)) {
      const recentHistory = history.slice(-6);
      for (const item of recentHistory) {
        if (item.role === "user") {
          contents.push({ role: "user", parts: [{ text: item.content }] });
        } else if (item.role === "assistant") {
          contents.push({ role: "model", parts: [{ text: item.content }] });
        }
      }
    }

    // Add current user prompt
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const geminiPayload = {
      systemInstruction: {
        parts: [{ text: systemPrompt }],
      },
      contents,
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    };

    console.log("[EdgeFunction:study-buddy] 📦 Gemini request payload:", JSON.stringify(geminiPayload, null, 2));

    const candidateModels = [
      "gemini-2.5-flash",
      "gemini-1.5-flash",
      "gemini-2.0-flash",
      "gemini-3.5-flash",
    ];
    let generatedText = "";
    let lastError: Error | null = null;

    // Detect if key is an OAuth / AQ Bearer token or standard Google AI Studio key
    const isBearerToken = geminiApiKey.startsWith("AQ.") || geminiApiKey.startsWith("ya29.");

    for (const model of candidateModels) {
      const geminiUrl = isBearerToken
        ? `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`
        : `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(geminiApiKey)}`;

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      if (isBearerToken) {
        headers["Authorization"] = `Bearer ${geminiApiKey}`;
      } else {
        headers["x-goog-api-key"] = geminiApiKey;
      }

      try {
        const geminiResponse = await fetch(geminiUrl, {
          method: "POST",
          headers,
          body: JSON.stringify(geminiPayload),
        });

        if (!geminiResponse.ok) {
          const errText = await geminiResponse.text();
          console.warn(`[EdgeFunction:study-buddy] Model ${model} returned status ${geminiResponse.status}:`, errText);
          lastError = new Error(`Status ${geminiResponse.status}: ${errText}`);
          if (geminiResponse.status === 503 || geminiResponse.status === 429 || geminiResponse.status === 404) {
            continue;
          }
          throw lastError;
        }

        const geminiData = await geminiResponse.json();
        console.log("[EdgeFunction:study-buddy] 🤖 Gemini raw response:", JSON.stringify(geminiData, null, 2));

        generatedText = extractGeminiResponseText(geminiData);
        if (generatedText) {
          break;
        }
      } catch (err: any) {
        lastError = err;
      }
    }

    if (!generatedText) {
      throw lastError || new Error("No text content returned in Gemini API response.");
    }

    console.log("=============================================================");

    return new Response(
      JSON.stringify({
        reply: generatedText,
        taskId: context?.taskId || null,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("[EdgeFunction:study-buddy] ❌ Internal Error:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "Failed to process Study Buddy request.",
        reply: `I encountered a temporary delay connecting to the AI provider (${error.message || "Service Busy"}). Please click retry in a moment!`
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
