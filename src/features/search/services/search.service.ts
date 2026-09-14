import { supabase } from '@/lib/supabase';
import { SearchResultItem, SearchCategory } from '../types/search.types';

export const SearchService = {
  /**
   * Performs a multi-entity global search across authorized resources.
   */
  search: async (query: string, category: SearchCategory = 'all'): Promise<SearchResultItem[]> => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed || trimmed.length < 2) return [];

    const results: SearchResultItem[] = [];

    try {
      // 0. Dedicated Structured Skill Courses Check
      if (category === 'all' || category === 'lessons' || category === 'roadmaps') {
        if ('python masterclass'.includes(trimmed) || trimmed.includes('python') || 'python course'.includes(trimmed)) {
          results.push({
            id: 'course_python_masterclass',
            title: 'Python Masterclass (Beginner to Advanced)',
            subtitle: 'Dedicated Course • 3 Levels (43 Modules) • 3 Certifications',
            description: 'Structured comprehensive Python curriculum covering fundamentals, OOP, async, APIs, and Docker with hands-on projects.',
            category: 'lesson',
            url: '/courses/python',
            badge: 'Approved Masterclass',
          });
        }
        if ('shopify liquid'.includes(trimmed) || trimmed.includes('liquid') || 'shopify liquid course'.includes(trimmed) || (trimmed.includes('shopify') && !trimmed.includes('developer') && !trimmed.includes('app'))) {
          results.push({
            id: 'course_shopify_liquid',
            title: 'Shopify Liquid — Complete Professional Development Course',
            subtitle: 'Dedicated Course • 3 Levels (43 Modules) • Master Certification',
            description: 'Comprehensive 3-level Shopify Liquid theme development curriculum covering objects, tags, filters, sections, JSON templates, metafields, performance, and capstones.',
            category: 'lesson',
            url: '/courses/shopify',
            badge: 'Approved Masterclass',
          });
        }
        if ('shopify developer masterclass app development theme cli graphql functions checkout extensibility remix'.includes(trimmed) || trimmed.includes('shopify') || trimmed.includes('shopify dev') || trimmed.includes('shopify developer') || trimmed.includes('shopify app') || trimmed.includes('shopify cli') || trimmed.includes('checkout extensibility') || trimmed.includes('shopify function') || trimmed.includes('hydrogen') || 'shopify developer course'.includes(trimmed)) {
          results.push({
            id: 'course_shopify_developer',
            title: 'Shopify Developer Masterclass',
            subtitle: 'Dedicated Course • 3 Levels (47 Modules & Projects) • Master Certification',
            description: 'A complete production-ready masterclass covering Online Store 2.0 theme engineering, JSON templates, Metafields & Metaobjects, GraphQL Admin & Storefront APIs, Remix app development, BullMQ webhook queues, Checkout Extensibility, and Shopify Functions with 3 formal assessments.',
            category: 'lesson',
            url: '/courses/shopify-developer',
            badge: 'Approved Masterclass',
          });
        }
        if ('english email writing masterclass business formal informal greetings subject lines follow up cold email salary negotiation conflict resolution job application customer support executive status updates workplace communication'.includes(trimmed) || trimmed.includes('email') || trimmed.includes('email writing') || trimmed.includes('english email') || trimmed.includes('business email') || trimmed.includes('cold email') || trimmed.includes('follow-up email') || 'english email writing course'.includes(trimmed) || trimmed.includes('workplace communication')) {
          results.push({
            id: 'course_english_email_writing',
            title: 'English Email Writing Masterclass',
            subtitle: 'Dedicated Course • 3 Levels (47 Modules & Projects) • Master Certification',
            description: 'A comprehensive 3-level production masterclass teaching high-impact workplace communication, formal and informal registers, executive status reports, cold outreach, salary negotiations, and conflict de-escalation with 3 formal assessments.',
            category: 'lesson',
            url: '/courses/english-email-writing',
            badge: 'Approved Masterclass',
          });
        }
        if ('professional english speaking masterclass spoken english pronunciation accent public speaking presentation meetings interviews negotiation small talk fluency executive communication workplace conversation debate pitch'.includes(trimmed) || trimmed.includes('speaking') || trimmed.includes('spoken english') || trimmed.includes('english speaking') || trimmed.includes('pronunciation') || trimmed.includes('presentation') || trimmed.includes('public speaking') || trimmed.includes('accent') || 'professional english speaking course'.includes(trimmed) || trimmed.includes('fluency') || trimmed.includes('speech')) {
          results.push({
            id: 'course_professional_english_speaking',
            title: 'Professional English Speaking Masterclass',
            subtitle: 'Dedicated Course • 3 Levels (40 Modules & Projects) • Master Certification',
            description: 'A comprehensive 3-level production masterclass teaching fluent workplace communication, executive briefings, boardroom presentations, high-stakes negotiations, job interviews, accent neutralization, and cross-cultural leadership with 3 formal assessments.',
            category: 'lesson',
            url: '/courses/professional-english-speaking',
            badge: 'Approved Masterclass',
          });
        }
        if ('meta ads'.includes(trimmed) || trimmed.includes('meta') || trimmed.includes('facebook') || trimmed.includes('instagram') || trimmed.includes('ads') || 'meta course'.includes(trimmed) || trimmed.includes('media buying')) {
          results.push({
            id: 'course_meta_ads',
            title: 'Meta Ads — Complete Professional Development Course',
            subtitle: 'Dedicated Course • 3 Levels (44 Modules) • Master Certification',
            description: 'Comprehensive 3-level Meta Ads performance marketing curriculum covering Business Manager, Advantage+ campaigns, CAPI, creative psychology, bidding, scaling, and master assessments.',
            category: 'lesson',
            url: '/courses/meta-ads',
            badge: 'Approved Masterclass',
          });
        }
        if ('seo search engine optimization'.includes(trimmed) || trimmed.includes('seo') || trimmed.includes('search engine') || trimmed.includes('optimization') || 'seo course'.includes(trimmed) || trimmed.includes('keyword') || trimmed.includes('ranking') || trimmed.includes('canonical') || trimmed.includes('sitemap') || trimmed.includes('backlink')) {
          results.push({
            id: 'course_seo_masterclass',
            title: 'SEO — Search Engine Optimization',
            subtitle: 'Dedicated Course • 3 Levels (47 Modules & Projects) • Master Certification',
            description: 'Comprehensive 3-level SEO curriculum covering crawling, keyword research, on-page optimization, technical architecture, Core Web Vitals, JSON-LD schema, e-commerce facets, and Python data diagnostics.',
            category: 'lesson',
            url: '/courses/seo',
            badge: 'Approved Masterclass',
          });
        }
        if ('prompt engineering masterclass'.includes(trimmed) || trimmed.includes('prompt') || trimmed.includes('prompt engineering') || trimmed.includes('llm') || 'ai prompt engineering'.includes(trimmed) || trimmed.includes('few-shot') || trimmed.includes('rag') || trimmed.includes('tokens') || trimmed.includes('agentic')) {
          results.push({
            id: 'course_prompt_engineering',
            title: 'Prompt Engineering — AI Prompt Engineering Masterclass',
            subtitle: 'Dedicated Course • 3 Levels (47 Modules & Projects) • Master Certification',
            description: 'A complete practical course teaching learners how to design, test, optimize, evaluate, and deploy reliable prompts for modern AI systems, including text generation, structured outputs, reasoning workflows, multimodal prompts, RAG systems, agents, automation, safety, evaluation, and production AI applications.',
            category: 'lesson',
            url: '/courses/prompt-engineering',
            badge: 'Approved Masterclass',
          });
        }
        if ('html css masterclass web development frontend'.includes(trimmed) || trimmed.includes('html') || trimmed.includes('css') || trimmed.includes('web development') || trimmed.includes('frontend') || trimmed.includes('flexbox') || trimmed.includes('grid') || trimmed.includes('responsive') || trimmed.includes('semantic') || trimmed.includes('accessibility') || trimmed.includes('landing page') || trimmed.includes('portfolio') || trimmed.includes('design system')) {
          results.push({
            id: 'course_html_css',
            title: 'HTML & CSS Masterclass — From Beginner to Professional Web Developer',
            subtitle: 'Dedicated Course • 3 Levels (47 Modules & Projects) • Master Certification',
            description: 'Comprehensive 3-level web development curriculum covering semantic HTML5 landmarks, forms, accessibility, modern CSS Grid, Flexbox, Container Queries, Cascade Layers, and production design systems with 3 formal assessments.',
            category: 'lesson',
            url: '/courses/html-css',
            badge: 'Approved Masterclass',
          });
        }
        if ('3d animation masterclass blender character rigging modeling walk cycle render'.includes(trimmed) || trimmed.includes('3d') || trimmed.includes('animation') || trimmed.includes('blender') || trimmed.includes('rigging') || trimmed.includes('walk cycle') || trimmed.includes('graph editor') || trimmed.includes('keyframe') || trimmed.includes('render') || trimmed.includes('cycles') || trimmed.includes('eevee') || trimmed.includes('cgi') || trimmed.includes('mesh')) {
          results.push({
            id: 'course_3d_animation',
            title: '3D Animation Masterclass',
            subtitle: 'Dedicated Course • 3 Levels (47 Modules & Projects) • Master Certification',
            description: 'Comprehensive 3-level 3D animation curriculum covering Blender navigation, modeling, PBR shaders, three-point lighting, character rigging, walk cycles, FACS facial performance, physics simulations, multi-pass compositing, and animated short film production.',
            category: 'lesson',
            url: '/courses/3d-animation',
            badge: 'Approved Masterclass',
          });
        }
        if ('javascript masterclass js ecmascript web development frontend async promises dom v8 runtime closures event loop'.includes(trimmed) || trimmed.includes('javascript') || trimmed.includes('js') || trimmed.includes('ecmascript') || trimmed.includes('async') || trimmed.includes('promises') || trimmed.includes('event loop') || trimmed.includes('closures') || trimmed.includes('fetch') || trimmed.includes('dom')) {
          results.push({
            id: 'course_javascript_masterclass',
            title: 'JavaScript Masterclass',
            subtitle: 'Dedicated Course • 3 Levels (47 Modules & Projects) • Master Certification',
            description: 'A comprehensive 3-level production masterclass covering core JavaScript syntax, DOM manipulation, asynchronous programming, V8 internals, Web APIs, design patterns, testing, security, and enterprise full-stack web applications with 3 formal assessments.',
            category: 'lesson',
            url: '/courses/javascript',
            badge: 'Approved Masterclass',
          });
        }
        if ('google ads masterclass ppc sem paid search pmax performance max smart bidding adwords cpc roas quality score'.includes(trimmed) || trimmed.includes('google ads') || trimmed.includes('google') || trimmed.includes('ppc') || trimmed.includes('sem') || trimmed.includes('paid search') || trimmed.includes('pmax') || trimmed.includes('adwords') || trimmed.includes('smart bidding')) {
          results.push({
            id: 'course_google_ads_masterclass',
            title: 'Google Ads Masterclass',
            subtitle: 'Dedicated Course • 3 Levels (47 Modules & Projects) • Master Certification',
            description: 'A comprehensive 3-level production masterclass covering Google Paid Search, auction mechanics, conversion tracking, GTM, GA4, Smart Bidding, Performance Max, scripts automation, and enterprise scaling with 3 formal assessments.',
            category: 'lesson',
            url: '/courses/google-ads',
            badge: 'Approved Masterclass',
          });
        }
        if ('facebook ads masterclass facebook advertising fb ads meta ads manager capi lead generation e-commerce scaling pixel dynamic creative lookalikes'.includes(trimmed) || trimmed.includes('facebook ads') || trimmed.includes('facebook') || trimmed.includes('fb ads') || trimmed.includes('facebook marketing') || trimmed.includes('facebook masterclass')) {
          results.push({
            id: 'course_facebook_ads_masterclass',
            title: 'Facebook Ads Masterclass',
            subtitle: 'Dedicated Course • 3 Levels (47 Modules & Projects) • Master Certification',
            description: 'A complete production-ready masterclass teaching Meta Ads Manager, CAPI server tracking, audience research, creative strategy, Advantage+ automation, lead generation, e-commerce scaling, and enterprise account management with 3 formal assessments.',
            category: 'lesson',
            url: '/courses/facebook-ads',
            badge: 'Approved Masterclass',
          });
        }
        if ('youtube ads masterclass youtube advertising yt ads video action campaigns vac demand gen bumper ads in-stream shorts ads video media buying ads data hub'.includes(trimmed) || trimmed.includes('youtube ads') || trimmed.includes('youtube') || trimmed.includes('yt ads') || trimmed.includes('video ads') || trimmed.includes('demand gen') || trimmed.includes('video action')) {
          results.push({
            id: 'course_youtube_ads_masterclass',
            title: 'YouTube Ads Masterclass',
            subtitle: 'Dedicated Course • 3 Levels (47 Modules & Projects) • Master Certification',
            description: 'A comprehensive 3-level production masterclass covering YouTube Video Action Campaigns (VAC), Demand Gen, ABCD creative scripting, custom intent segments, GTM tracking, Connected TV co-viewing, Ads Data Hub SQL, and incrementality testing with 3 formal assessments.',
            category: 'lesson',
            url: '/courses/youtube-ads',
            badge: 'Approved Masterclass',
          });
        }
        if ('instagram ads masterclass instagram advertising ig ads reels ads stories ads carousel ads partnership ads whitelisting creator ads asc advantage plus shopping conversions api capi marketing mix modeling robyn'.includes(trimmed) || trimmed.includes('instagram ads') || trimmed.includes('instagram') || trimmed.includes('ig ads') || trimmed.includes('reels ads') || trimmed.includes('stories ads') || trimmed.includes('partnership ads') || trimmed.includes('creator ads') || trimmed.includes('asc')) {
          results.push({
            id: 'course_instagram_ads_masterclass',
            title: 'Instagram Ads Masterclass',
            subtitle: 'Dedicated Course • 3 Levels (47 Modules & Projects) • Master Certification',
            description: 'A complete production-ready masterclass teaching Instagram Reels, Stories, Carousels, Creator Partnership Ads, Meta Conversions API (CAPI), Advantage+ Shopping Campaigns (ASC), Marketing Mix Modeling (Robyn), and closed-loop omnichannel scaling with 3 formal assessments.',
            category: 'lesson',
            url: '/courses/instagram-ads',
            badge: 'Approved Masterclass',
          });
        }
        if ('web development masterclass full stack frontend backend html css javascript typescript react node express postgresql rest api webdev docker system design'.includes(trimmed) || trimmed.includes('web development') || trimmed.includes('web dev') || trimmed.includes('full stack') || trimmed.includes('frontend') || trimmed.includes('backend') || trimmed.includes('html') || trimmed.includes('css') || trimmed.includes('react') || trimmed.includes('node') || trimmed.includes('express') || trimmed.includes('typescript') || trimmed.includes('postgresql') || trimmed.includes('docker') || trimmed.includes('system design')) {
          results.push({
            id: 'course_web_development_masterclass',
            title: 'Web Development Masterclass',
            subtitle: 'Dedicated Course • 3 Levels (44 Modules & Projects) • Master Certification',
            description: 'A comprehensive 3-level production masterclass covering semantic HTML5, modern CSS Grid/Flexbox, TypeScript, React 18, Node.js & Express REST APIs, PostgreSQL databases, Docker containerization, CI/CD, and distributed system design with 3 formal assessments.',
            category: 'lesson',
            url: '/courses/web-development',
            badge: 'Approved Masterclass',
          });
        }
      }

      // 1. Search Roadmaps & Modules (Tasks)
      if (category === 'all' || category === 'roadmaps' || category === 'lessons') {
        const { data: tasks, error: tasksError } = await supabase
          .from('tasks')
          .select('id, title, description, status, xp_reward, roadmap_id')
          .ilike('title', `%${trimmed}%`)
          .limit(6);

        if (!tasksError && tasks) {
          for (const task of tasks) {
            let taskBadge = 'Locked';
            if (task.status === 'completed') taskBadge = 'Completed';
            else if (task.status === 'in_progress') taskBadge = 'Active';

            results.push({
              id: `task_${task.id}`,
              title: task.title,
              subtitle: `Module • ${task.xp_reward} XP • Status: ${task.status}`,
              description: task.description,
              category: 'lesson',
              url: `/roadmap?task=${task.id}`,
              badge: taskBadge,
            });
          }
        }

        const { data: roadmaps, error: roadmapsError } = await supabase
          .from('roadmaps')
          .select('id, title, description, progress_percentage')
          .ilike('title', `%${trimmed}%`)
          .limit(4);

        if (!roadmapsError && roadmaps) {
          for (const r of roadmaps) {
            results.push({
              id: `roadmap_${r.id}`,
              title: r.title,
              subtitle: `Roadmap • ${r.progress_percentage}% Completed`,
              description: r.description,
              category: 'roadmap',
              url: '/roadmap',
              badge: `${r.progress_percentage}%`,
            });
          }
        }
      }

      // 2. Search Public Portfolios
      if (category === 'all' || category === 'portfolios') {
        const { data: profiles, error: profileError } = await supabase
          .from('profiles')
          .select('id, full_name, headline, bio, skills')
          .or(`full_name.ilike.%${trimmed}%,headline.ilike.%${trimmed}%`)
          .limit(5);

        if (!profileError && profiles) {
          for (const p of profiles) {
            results.push({
              id: `profile_${p.id}`,
              title: p.full_name || 'Skillora Creator',
              subtitle: p.headline || 'Tech Professional',
              description: p.bio,
              category: 'portfolio',
              url: `/portfolio/${p.id}`,
              badge: 'Public Portfolio',
            });
          }
        }
      }

      // 3. Search Certificates
      if (category === 'all' || category === 'certificates') {
        const { data: certs, error: certError } = await supabase
          .from('certificates')
          .select('id, title, issuer, badge_type')
          .ilike('title', `%${trimmed}%`)
          .limit(4);

        if (!certError && certs) {
          for (const c of certs) {
            results.push({
              id: `cert_${c.id}`,
              title: c.title,
              subtitle: `Verified Certificate • Issuer: ${c.issuer || 'Skillora AI'}`,
              category: 'certificate',
              url: `/verify/${c.id}`,
              badge: 'Verified Credential',
            });
          }
        }
      }

      // 4. Default Static Skills if few results returned
      if ((category === 'all' || category === 'skills') && results.length < 5) {
        const popularSkills = [
          { name: 'Python', role: 'AI Software Engineer', desc: 'Core language for machine learning, data engineering, and automation.' },
          { name: 'React & TypeScript', role: 'Full-Stack Developer', desc: 'Modern frontend architecture with strict type safety.' },
          { name: 'Prompt Engineering', role: 'AI Solutions Architect', desc: 'Designing optimized system prompts and multi-modal interactions.' },
          { name: 'Tailwind CSS', role: 'Frontend UI Designer', desc: 'Utility-first modern CSS framework for high-velocity UI.' },
          { name: 'Supabase & PostgreSQL', role: 'Cloud Backend Developer', desc: 'Relational data modeling, RLS security, and serverless functions.' },
        ];

        for (const skill of popularSkills) {
          if (
            skill.name.toLowerCase().includes(trimmed) ||
            skill.role.toLowerCase().includes(trimmed) ||
            skill.desc.toLowerCase().includes(trimmed)
          ) {
            const isPython = skill.name.toLowerCase() === 'python';
            results.push({
              id: `skill_${skill.name}`,
              title: skill.name,
              subtitle: isPython ? 'Dedicated Masterclass Course' : `Skill Benchmark • Target Role: ${skill.role}`,
              description: skill.desc,
              category: 'skill',
              url: isPython ? '/courses/python' : `/career-gps?skill=${encodeURIComponent(skill.name)}`,
              badge: isPython ? 'Masterclass' : 'Career GPS',
            });
          }
        }
      }
    } catch (err) {
      console.warn('[SearchService] Global search error:', err);
    }

    return results;
  },
};
