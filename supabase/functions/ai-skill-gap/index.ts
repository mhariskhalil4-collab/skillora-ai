import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface SkillGapRequest {
  careerGoal?: string;
  targetRole?: string;
  currentSkills?: string[];
  completedMilestones?: number;
  totalMilestones?: number;
  quizScoreAverage?: number;
  projectsCount?: number;
  experienceLevel?: string;
}

interface SkillGapResult {
  overallMatchScore: number;
  summary: string;
  strengths: string[];
  missingSkills: string[];
  prioritySkills: Array<{
    skill: string;
    importance: "High" | "Medium" | "Low";
    reason: string;
  }>;
  suggestedProjects: Array<{
    title: string;
    description: string;
    keySkills: string[];
  }>;
  estimatedLearningSequence: string[];
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
  return "";
}

function parseStructuredJson(text: string): SkillGapResult {
  let clean = text.trim();
  if (clean.startsWith("```json")) {
    clean = clean.replace(/^```json\s*/, "").replace(/\s*```$/, "");
  } else if (clean.startsWith("```")) {
    clean = clean.replace(/^```\s*/, "").replace(/\s*```$/, "");
  }

  try {
    const parsed = JSON.parse(clean);
    return {
      overallMatchScore: typeof parsed.overallMatchScore === "number" ? Math.min(100, Math.max(0, parsed.overallMatchScore)) : 65,
      summary: parsed.summary || "Skill Gap analysis completed based on current profile and industry requirements.",
      strengths: Array.isArray(parsed.strengths) ? parsed.strengths : [],
      missingSkills: Array.isArray(parsed.missingSkills) ? parsed.missingSkills : [],
      prioritySkills: Array.isArray(parsed.prioritySkills) ? parsed.prioritySkills : [],
      suggestedProjects: Array.isArray(parsed.suggestedProjects) ? parsed.suggestedProjects : [],
      estimatedLearningSequence: Array.isArray(parsed.estimatedLearningSequence) ? parsed.estimatedLearningSequence : [],
    };
  } catch (err) {
    console.error("[ai-skill-gap] JSON parsing fallback error:", err);
    return {
      overallMatchScore: 60,
      summary: "Strategic Skill Gap analysis generated based on target role requirements.",
      strengths: ["Foundational understanding", "Active learning progression"],
      missingSkills: ["Advanced system architecture", "Production deployment pipelines"],
      prioritySkills: [
        { skill: "Core Framework Mastery", importance: "High", reason: "Directly aligned with market requirements for your target role." }
      ],
      suggestedProjects: [
        { title: "Production Portfolio Application", description: "Build and deploy a full-stack production application showcasing role competencies.", keySkills: ["Full-Stack Architecture", "Testing", "Deployment"] }
      ],
      estimatedLearningSequence: ["Master Core Frameworks", "Build Portfolio Capstone", "Apply for Target Roles"],
    };
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const payload = (await req.json()) as SkillGapRequest;
    const targetRole = payload.targetRole || payload.careerGoal || "Full Stack Software Engineer";
    const currentSkills = payload.currentSkills || [];
    const completedMilestones = payload.completedMilestones || 0;
    const totalMilestones = payload.totalMilestones || 1;
    const quizScoreAverage = payload.quizScoreAverage || 85;
    const experienceLevel = payload.experienceLevel || "Intermediate";

    const systemPrompt = `You are the Skillora AI Career Intelligence Engine. You perform data-grounded, highly realistic, and actionable skill gap analysis for students and tech professionals.
You must return your output ONLY as valid, raw JSON matching this TypeScript schema:
{
  "overallMatchScore": number (integer between 0 and 100 representing market readiness for the target role),
  "summary": string (2-3 concise, encouraging yet objective sentences assessing current positioning),
  "strengths": string[] (3-5 verified skills they have that align with the role),
  "missingSkills": string[] (3-5 crucial industry skills required for this role that they have not mastered yet),
  "prioritySkills": [
    {
      "skill": string,
      "importance": "High" | "Medium" | "Low",
      "reason": string (short sentence on why this is vital for the target role)
    }
  ],
  "suggestedProjects": [
    {
      "title": string,
      "description": string,
      "keySkills": string[]
    }
  ],
  "estimatedLearningSequence": string[] (3-5 actionable sequential milestones to close the skill gap)
}

STRICT RULES:
1. Do not hallucinate or invent qualifications.
2. Ground all strengths in the provided user skills.
3. Align missing skills and projects specifically to real-world ${targetRole} industry expectations.
4. Output raw JSON only. Do not add markdown introductory text outside JSON.`;

    const userPrompt = `Analyze the student's profile against their target role:
- Target Role / Career Goal: ${targetRole}
- Current Verified Skills: ${currentSkills.length > 0 ? currentSkills.join(", ") : "Introductory skills, fundamentals"}
- Completed Roadmap Milestones: ${completedMilestones} / ${totalMilestones}
- Average Quiz Mastery: ${quizScoreAverage}%
- Experience Level: ${experienceLevel}

Generate the comprehensive Skill Gap Analysis in JSON.`;

    const geminiApiKey = Deno.env.get("GEMINI_API_KEY");

    if (!geminiApiKey) {
      console.warn("[ai-skill-gap] ⚠️ GEMINI_API_KEY not configured. Returning deterministic fallback analysis.");
      const fallbackResult: SkillGapResult = {
        overallMatchScore: Math.min(90, Math.max(35, Math.round((completedMilestones / Math.max(1, totalMilestones)) * 60 + 30))),
        summary: `Strategic skill assessment for ${targetRole}. You have completed ${completedMilestones} learning milestones with strong fundamental readiness.`,
        strengths: currentSkills.length > 0 ? currentSkills.slice(0, 4) : ["Foundational Tech Literacy", "Roadmap Discipline"],
        missingSkills: ["Advanced Production Patterns", "Performance Optimization", "CI/CD & Cloud Deployment"],
        prioritySkills: [
          { skill: "System Architecture", importance: "High", reason: `Essential for ${targetRole} technical interviews and real-world system reliability.` },
          { skill: "Testing & Automation", importance: "High", reason: "Standard requirement for production-grade software delivery." },
          { skill: "Cloud Architecture", importance: "Medium", reason: "Expands deployability and system scalability." }
        ],
        suggestedProjects: [
          { title: `${targetRole} Portfolio Capstone`, description: "A scalable, production-deployed web application demonstrating real-world user workflows.", keySkills: ["State Management", "API Design", "Security"] }
        ],
        estimatedLearningSequence: [
          "Deepen Framework Fundamentals",
          "Implement Automated Testing & CI/CD",
          "Build & Deploy Full Capstone Project",
          "Optimize Portfolio for Job Applications"
        ]
      };

      return new Response(JSON.stringify(fallbackResult), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    const geminiPayload = {
      systemInstruction: { parts: [{ text: systemPrompt }] },
      contents: [{ role: "user", parts: [{ text: userPrompt }] }],
      generationConfig: {
        temperature: 0.3,
        topP: 0.95,
        maxOutputTokens: 1200,
      },
    };

    const candidateModels = ["gemini-2.5-flash", "gemini-1.5-flash", "gemini-2.0-flash"];
    let generatedText = "";
    let lastError: Error | null = null;
    const isBearerToken = geminiApiKey.startsWith("AQ.") || geminiApiKey.startsWith("ya29.");

    for (const model of candidateModels) {
      const geminiUrl = isBearerToken
        ? `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`
        : `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(geminiApiKey)}`;

      const headers: Record<string, string> = { "Content-Type": "application/json" };
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
          lastError = new Error(`Status ${geminiResponse.status}: ${errText}`);
          continue;
        }

        const geminiData = await geminiResponse.json();
        generatedText = extractGeminiResponseText(geminiData);
        if (generatedText) break;
      } catch (err: any) {
        lastError = err;
      }
    }

    if (!generatedText) {
      throw lastError || new Error("No response from Gemini models.");
    }

    const structuredResult = parseStructuredJson(generatedText);

    return new Response(JSON.stringify(structuredResult), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  } catch (error: any) {
    console.error("[ai-skill-gap] ❌ Error:", error);
    return new Response(
      JSON.stringify({
        overallMatchScore: 65,
        summary: "Skill gap evaluation completed. Focus on your upcoming milestone priorities.",
        strengths: ["Consistent learning", "Curriculum alignment"],
        missingSkills: ["Production Optimization", "End-to-End System Testing"],
        prioritySkills: [
          { skill: "Hands-on Project Implementation", importance: "High", reason: "Validates your skill profile." }
        ],
        suggestedProjects: [
          { title: "Production Application", description: "Build a production-grade application for your portfolio.", keySkills: ["Full Stack Development"] }
        ],
        estimatedLearningSequence: ["Complete Active Tasks", "Build Portfolio Project"],
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
