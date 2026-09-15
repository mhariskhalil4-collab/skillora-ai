import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PythonCourseService } from '../services/pythonCourse.service';
import { ShopifyCourseService } from '../services/shopifyCourse.service';
import { MetaAdsCourseService } from '../services/metaAdsCourse.service';
import { SeoCourseService } from '../services/seoCourse.service';
import { PromptEngineeringCourseService } from '../services/promptEngineeringCourse.service';
import { HtmlCssCourseService } from '../services/htmlCssCourse.service';
import { ThreeDAnimationCourseService } from '../services/threeDAnimationCourse.service';
import { JavaScriptCourseService } from '../services/javascriptCourse.service';
import { GoogleAdsCourseService } from '../services/googleAdsCourse.service';
import { FacebookAdsCourseService } from '../services/facebookAdsCourse.service';
import { YouTubeAdsCourseService } from '../services/youtubeAdsCourse.service';
import { InstagramAdsCourseService } from '../services/instagramAdsCourse.service';
import { WebDevelopmentCourseService } from '../services/webDevelopmentCourse.service';
import { ShopifyDeveloperCourseService } from '../services/shopifyDeveloperCourse.service';
import { EnglishEmailWritingCourseService } from '../services/englishEmailWritingCourse.service';
import { ProfessionalEnglishSpeakingCourseService } from '../services/professionalEnglishSpeakingCourse.service';
import { Card } from '@/components/data-display/Card';
import { Button } from '@/components/elements/Button';
import { Badge } from '@/components/elements/Badge';
import { ProgressBar } from '@/components/data-display/ProgressBar';
import {
  AcademicCapIcon,
  SparklesIcon,
  TrophyIcon,
  ArrowRightIcon,
  BookOpenIcon,
  CheckBadgeIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  CubeTransparentIcon,
  MegaphoneIcon,
  MagnifyingGlassIcon,
  FilmIcon,
  VideoCameraIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MicrophoneIcon,
} from '@heroicons/react/24/outline';

export const CourseCatalogScreen: React.FC = () => {
  const navigate = useNavigate();
  const pythonState = PythonCourseService.getCourseState();
  const shopifyState = ShopifyCourseService.getCourseState();
  const shopifyDevState = ShopifyDeveloperCourseService.getCourseState();
  const englishEmailState = EnglishEmailWritingCourseService.getCourseState();
  const professionalSpeakingState = ProfessionalEnglishSpeakingCourseService.getCourseState();
  const metaAdsState = MetaAdsCourseService.getCourseState();
  const seoState = SeoCourseService.getCourseState();
  const promptEngineeringState = PromptEngineeringCourseService.getCourseState();
  const htmlCssState = HtmlCssCourseService.getCourseState();
  const threeDAnimationState = ThreeDAnimationCourseService.getCourseState();
  const javascriptState = JavaScriptCourseService.getCourseState();
  const googleAdsState = GoogleAdsCourseService.getCourseState();
  const facebookAdsState = FacebookAdsCourseService.getCourseState();
  const youtubeAdsState = YouTubeAdsCourseService.getCourseState();
  const instagramAdsState = InstagramAdsCourseService.getCourseState();
  const webDevState = WebDevelopmentCourseService.getCourseState();

  const courses = [
    {
      id: 'professional-english-speaking',
      title: 'Professional English Speaking Masterclass',
      category: 'English Communication / Professional Skills',
      description:
        'Build confidence and fluency in professional English speaking for workplace conversations, interviews, meetings, presentations, customer service, business communication, networking, and leadership situations.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 40,
      assessmentsCount: 3,
      projectsCount: 3,
      progress: professionalSpeakingState.overallProgress,
      route: '/courses/professional-english-speaking',
      isAvailable: true,
      icon: MicrophoneIcon,
      accentColor: 'from-emerald-600 via-teal-600 to-cyan-600',
    },
    {
      id: 'english-email-writing',
      title: 'English Email Writing Masterclass',
      category: 'Business & Professional Communication',
      description:
        'A comprehensive 3-level production masterclass teaching high-impact workplace communication, formal and informal registers, executive status reports, cold outreach, salary negotiations, and conflict de-escalation with 3 formal assessments.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 47,
      assessmentsCount: 3,
      projectsCount: 4,
      progress: englishEmailState.overallProgress,
      route: '/courses/english-email-writing',
      isAvailable: true,
      icon: EnvelopeIcon,
      accentColor: 'from-sky-600 via-blue-600 to-indigo-600',
    },
    {
      id: 'shopify-developer',
      title: 'Shopify Developer Masterclass',
      category: 'E-commerce & App Engineering',
      description:
        'A comprehensive 3-level production masterclass covering Online Store 2.0 theme engineering, JSON templates, Metafields & Metaobjects, GraphQL Admin & Storefront APIs, Remix app development, BullMQ webhook queues, Checkout Extensibility, and Shopify Functions with 3 formal assessments.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 47,
      assessmentsCount: 3,
      projectsCount: 4,
      progress: shopifyDevState.overallProgress,
      route: '/courses/shopify-developer',
      isAvailable: true,
      icon: CommandLineIcon,
      accentColor: 'from-emerald-600 via-teal-600 to-cyan-600',
    },
    {
      id: 'web-development',
      title: 'Web Development Masterclass',
      category: 'Full-Stack Software Engineering',
      description:
        'A comprehensive 3-level production masterclass covering HTML5, CSS Grid/Flexbox, modern JavaScript, React 18, TypeScript, Node.js, Express REST APIs, PostgreSQL databases, Docker containerization, and system design with 3 formal assessments.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 47,
      assessmentsCount: 3,
      projectsCount: 4,
      progress: webDevState.overallProgress,
      route: '/courses/web-development',
      isAvailable: true,
      icon: CodeBracketIcon,
      accentColor: 'from-indigo-600 via-blue-600 to-cyan-600',
    },
    {
      id: 'instagram-ads',
      title: 'Instagram Ads Masterclass',
      category: 'Visual Discovery & Social Commerce',
      description:
        'A complete production-ready masterclass teaching Instagram Reels, Stories, Carousels, Creator Partnership Ads, Meta Conversions API (CAPI), Advantage+ Shopping Campaigns (ASC), Marketing Mix Modeling (Robyn), and closed-loop omnichannel scaling with 3 formal assessments.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 47,
      assessmentsCount: 3,
      projectsCount: 4,
      progress: instagramAdsState.overallProgress,
      route: '/courses/instagram-ads',
      isAvailable: true,
      icon: DevicePhoneMobileIcon,
      accentColor: 'from-pink-600 via-purple-600 to-amber-600',
    },
    {
      id: 'youtube-ads',
      title: 'YouTube Ads Masterclass',
      category: 'Video Media Buying & Direct Response',
      description:
        'A comprehensive 3-level production masterclass covering YouTube Video Action Campaigns (VAC), Demand Gen, ABCD creative scripting, custom intent segments, GTM tracking, Connected TV co-viewing, Ads Data Hub SQL, and incrementality testing with 3 formal assessments.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 47,
      assessmentsCount: 3,
      projectsCount: 4,
      progress: youtubeAdsState.overallProgress,
      route: '/courses/youtube-ads',
      isAvailable: true,
      icon: VideoCameraIcon,
      accentColor: 'from-red-600 to-rose-600',
    },
    {
      id: 'facebook-ads',
      title: 'Facebook Ads Masterclass',
      category: 'Paid Advertising & Social Media Growth',
      description:
        'A complete production-ready masterclass teaching Meta Ads Manager, CAPI server tracking, audience research, creative strategy, Advantage+ automation, lead generation, e-commerce scaling, and enterprise account management with 3 formal assessments.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 47,
      assessmentsCount: 3,
      projectsCount: 4,
      progress: facebookAdsState.overallProgress,
      route: '/courses/facebook-ads',
      isAvailable: true,
      icon: MegaphoneIcon,
      accentColor: 'from-blue-600 to-cyan-600',
    },
    {
      id: 'google-ads',
      title: 'Google Ads Masterclass',
      category: 'Paid Advertising & Digital Marketing',
      description:
        'A comprehensive 3-level production masterclass covering Google Paid Search, auction mechanics, conversion tracking, GTM, GA4, Smart Bidding, Performance Max, scripts automation, and enterprise scaling with 3 formal assessments.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 47,
      assessmentsCount: 3,
      projectsCount: 4,
      progress: googleAdsState.overallProgress,
      route: '/courses/google-ads',
      isAvailable: true,
      icon: MegaphoneIcon,
      accentColor: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'javascript',
      title: 'JavaScript Masterclass',
      category: 'Web Development',
      description:
        'A comprehensive 3-level production masterclass covering core JavaScript syntax, DOM manipulation, asynchronous programming, V8 internals, Web APIs, design patterns, testing, security, and enterprise full-stack web applications with 3 formal assessments.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 47,
      assessmentsCount: 3,
      projectsCount: 4,
      progress: javascriptState.overallProgress,
      route: '/courses/javascript',
      isAvailable: true,
      icon: CodeBracketIcon,
      accentColor: 'from-amber-500 to-yellow-600',
    },
    {
      id: '3d-animation',
      title: '3D Animation Masterclass',
      category: '3D Design & Animation',
      description:
        'Complete 3-level production-ready 3D animation curriculum covering Blender fundamentals, modeling, materials, lighting, character rigging, walk cycles, FACS facial performance, physics simulations, multi-pass compositing, and full short film production.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 47,
      assessmentsCount: 3,
      projectsCount: 4,
      progress: threeDAnimationState.overallProgress,
      route: '/courses/3d-animation',
      isAvailable: true,
      icon: FilmIcon,
      accentColor: 'from-purple-600 to-pink-600',
    },
    {
      id: 'html-css',
      title: 'HTML & CSS Masterclass — From Beginner to Professional Web Developer',
      category: 'Web Development',
      description:
        'Comprehensive 3-level web development curriculum covering semantic HTML5 landmarks, forms, accessibility, modern CSS Grid, Flexbox, Container Queries, Cascade Layers, and production design systems with 3 formal assessments.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 47,
      assessmentsCount: 3,
      projectsCount: 4,
      progress: htmlCssState.overallProgress,
      route: '/courses/html-css',
      isAvailable: true,
      icon: CodeBracketIcon,
      accentColor: 'from-orange-600 to-amber-600',
    },
    {
      id: 'python-masterclass',
      title: 'Python Masterclass (Beginner to Advanced)',
      category: 'Backend & AI Engineering',
      description:
        'Comprehensive 3-level curriculum covering syntax, data structures, OOP, async concurrency, APIs, databases, Docker, and full-stack backend capstones with 3 formal assessments.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 43,
      assessmentsCount: 3,
      projectsCount: 3,
      progress: pythonState.overallProgress,
      route: '/courses/python',
      isAvailable: true,
      icon: CodeBracketIcon,
      accentColor: 'from-blue-600 to-indigo-600',
    },
    {
      id: 'shopify-liquid',
      title: 'Shopify Liquid — Complete Professional Development Course',
      category: 'E-commerce & Theme Engineering',
      description:
        'From Liquid fundamentals, objects, tags, and filters to sections, JSON templates, metafields, responsive media, SEO, accessibility, and production theme capstones with 3 formal assessments.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 43,
      assessmentsCount: 3,
      projectsCount: 3,
      progress: shopifyState.overallProgress,
      route: '/courses/shopify',
      isAvailable: true,
      icon: CubeTransparentIcon,
      accentColor: 'from-emerald-600 to-teal-600',
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads — Complete Professional Development Course',
      category: 'Performance Marketing & Media Buying',
      description:
        'From Business Manager setup and campaign structures to CAPI server-side tracking, creative psychology, Advantage+ campaigns, dynamic catalog ads, and enterprise scaling frameworks with 3 formal assessments.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 44,
      assessmentsCount: 3,
      projectsCount: 4,
      progress: metaAdsState.overallProgress,
      route: '/courses/meta-ads',
      isAvailable: true,
      icon: MegaphoneIcon,
      accentColor: 'from-blue-600 to-indigo-600',
    },
    {
      id: 'seo-masterclass',
      title: 'SEO — Search Engine Optimization',
      category: 'Organic Growth & Technical Search',
      description:
        'Complete 3-level professional SEO curriculum covering crawling, keyword research, on-page mechanics, Core Web Vitals, JSON-LD schema, e-commerce facets, international hreflang, Python analytics, and enterprise recovery.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 47,
      assessmentsCount: 3,
      projectsCount: 4,
      progress: seoState.overallProgress,
      route: '/courses/seo',
      isAvailable: true,
      icon: MagnifyingGlassIcon,
      accentColor: 'from-emerald-600 to-teal-600',
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering — AI Prompt Engineering Masterclass',
      category: 'AI, Automation & Productivity',
      description:
        'A complete practical course teaching learners how to design, test, optimize, evaluate, and deploy reliable prompts for modern AI systems, including text generation, structured outputs, reasoning workflows, multimodal prompts, RAG systems, agents, automation, safety, evaluation, and production AI applications.',
      badge: 'Approved Masterclass',
      levelsCount: 3,
      modulesCount: 47,
      assessmentsCount: 3,
      projectsCount: 4,
      progress: promptEngineeringState.overallProgress,
      route: '/courses/prompt-engineering',
      isAvailable: true,
      icon: CommandLineIcon,
      accentColor: 'from-purple-600 to-indigo-600',
    },
    {
      id: 'typescript-react',
      title: 'Modern TypeScript & React Architecture',
      category: 'Frontend & Full-Stack',
      description:
        'Component composition, strict typing, state machines, custom hooks, Tailwind CSS design systems, Next.js App Router, and serverless edge functions.',
      badge: 'Catalog Track',
      levelsCount: 3,
      modulesCount: 36,
      assessmentsCount: 3,
      projectsCount: 3,
      progress: 0,
      route: '/onboarding',
      isAvailable: false,
      icon: CommandLineIcon,
      accentColor: 'from-cyan-600 to-blue-600',
    },
    {
      id: 'ai-agents-llm',
      title: 'Autonomous AI Agents & LLM Systems',
      category: 'Generative AI & LLMs',
      description:
        'LangChain, LlamaIndex, Vector DB embeddings, multi-agent orchestration, function calling, tool use, and real-time streaming interfaces.',
      badge: 'Trending Specialization',
      levelsCount: 3,
      modulesCount: 30,
      assessmentsCount: 3,
      projectsCount: 2,
      progress: 0,
      route: '/onboarding',
      isAvailable: false,
      icon: CpuChipIcon,
      accentColor: 'from-purple-600 to-pink-600',
    },
  ];

  const inProgressCourses = courses.filter((c) => c.progress > 0);

  return (
    <div className="min-h-screen bg-[color:var(--color-bg-base)] pb-24 lg:pb-8">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <AcademicCapIcon className="w-4 h-4" /> Skill Courses &amp; Masterclasses
            </div>
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-[color:var(--text-primary)]">
              Structured Skill Courses
            </h1>
            <p className="text-[color:var(--text-secondary)] mt-1 font-body text-sm sm:text-base max-w-2xl">
              Deep-dive skill masterclasses with step-by-step interactive lessons, code breakdowns, project deliverables, and verified certifications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              onClick={() => navigate('/roadmaps')}
              className="flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
            >
              <SparklesIcon className="w-4 h-4 text-brand" /> My Roadmaps
            </Button>
            <Button
              variant="primary"
              onClick={() => navigate('/roadmap')}
              className="flex items-center gap-2 text-xs sm:text-sm cursor-pointer shadow-ai-glow"
            >
              <span>Active Roadmap</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Button>
          </div>
        </header>

        {/* Multi-Course Reassurance Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-brand/10 via-[color:var(--color-bg-card)] to-brand/5 border border-brand/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center shrink-0">
              <SparklesIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-heading font-bold text-[color:var(--text-primary)]">
                Learn Multiple Skills in Parallel
              </h4>
              <p className="text-xs text-[color:var(--text-secondary)]">
                You can switch between any course at any time. Your progress, module checkpoints, and exam records are preserved independently for every course.
              </p>
            </div>
          </div>
        </div>

        {/* In-Progress Courses Section if user has active course progress */}
        {inProgressCourses.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)] flex items-center gap-2">
                <BookOpenIcon className="w-5 h-5 text-brand" />
                In-Progress Courses ({inProgressCourses.length})
              </h3>
              <span className="text-xs font-mono text-[color:var(--text-secondary)]">
                Switch or continue anytime
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {inProgressCourses.map((c) => {
                const CourseIcon = c.icon;
                return (
                  <Card
                    key={c.id}
                    onClick={() => navigate(c.route)}
                    className="p-5 rounded-2xl border border-brand/30 bg-gradient-to-br from-[color:var(--color-bg-card)] to-brand/5 hover:border-brand hover:shadow-ai-glow transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                          <CourseIcon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-brand">
                          {c.progress}% Complete
                        </span>
                      </div>

                      <div>
                        <h4 className="font-heading font-bold text-base text-[color:var(--text-primary)] group-hover:text-brand transition-colors">
                          {c.title}
                        </h4>
                        <p className="text-xs text-[color:var(--text-secondary)] mt-1 font-mono">
                          {c.modulesCount} Modules • {c.levelsCount} Levels
                        </p>
                      </div>

                      <ProgressBar progress={c.progress} />
                    </div>

                    <div className="pt-4 mt-2 flex items-center justify-between text-xs font-heading font-semibold text-brand group-hover:translate-x-1 transition-transform">
                      <span>Resume Course</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Featured Hero Card: Python Masterclass */}
        <Card className="relative overflow-hidden group border-brand/40 bg-gradient-to-br from-[color:var(--color-bg-card)] via-[color:var(--color-bg-card)] to-brand/10 shadow-xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand to-ai-glow opacity-15 group-hover:opacity-25 transition-opacity blur-xl rounded-xl z-0 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-2">
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand/20 text-brand border border-brand/30 text-xs font-mono font-bold uppercase tracking-wider">
                  <CheckBadgeIcon className="w-4 h-4" /> Core Approved Curriculum
                </span>
                <Badge type="skill" label="3 Levels: Beginner • Intermediate • Advanced" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[color:var(--text-primary)]">
                Python Masterclass (Beginner to Advanced)
              </h2>

              <p className="text-sm sm:text-base text-[color:var(--text-secondary)] leading-relaxed">
                From core fundamentals and object-oriented architecture to asynchronous concurrency, REST APIs, Docker, and full-stack backend microservices. Features 43 structured modules, 3 capstone projects, and 3 formal certification assessments.
              </p>

              {/* Course Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[color:var(--color-bg-base)] border border-border">
                  <span className="text-[10px] font-mono uppercase text-[color:var(--text-secondary)]">Beginner</span>
                  <p className="text-sm font-heading font-bold text-[color:var(--text-primary)]">14 Modules</p>
                  <span className="text-[10px] text-brand font-mono">Exam: 15/20 pass</span>
                </div>
                <div className="p-3 rounded-xl bg-[color:var(--color-bg-base)] border border-border">
                  <span className="text-[10px] font-mono uppercase text-[color:var(--text-secondary)]">Intermediate</span>
                  <p className="text-sm font-heading font-bold text-[color:var(--text-primary)]">14 Modules</p>
                  <span className="text-[10px] text-brand font-mono">Exam: 25/30 pass</span>
                </div>
                <div className="p-3 rounded-xl bg-[color:var(--color-bg-base)] border border-border">
                  <span className="text-[10px] font-mono uppercase text-[color:var(--text-secondary)]">Advanced</span>
                  <p className="text-sm font-heading font-bold text-[color:var(--text-primary)]">15 Modules</p>
                  <span className="text-[10px] text-brand font-mono">Exam: 35/40 pass</span>
                </div>
                <div className="p-3 rounded-xl bg-[color:var(--color-bg-base)] border border-border">
                  <span className="text-[10px] font-mono uppercase text-[color:var(--text-secondary)]">Credential</span>
                  <p className="text-sm font-heading font-bold text-brand">Master Certificate</p>
                  <span className="text-[10px] text-success font-mono">Verified 3D Badge</span>
                </div>
              </div>

              {pythonState.overallProgress > 0 && (
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[color:var(--text-secondary)]">Your Progress</span>
                    <span className="text-brand font-bold">{pythonState.overallProgress}%</span>
                  </div>
                  <ProgressBar progress={pythonState.overallProgress} />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 w-full lg:w-auto shrink-0">
              <Button
                variant="primary"
                onClick={() => navigate('/courses/python')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-6 text-base cursor-pointer shadow-ai-glow"
              >
                <BookOpenIcon className="w-5 h-5" />
                {pythonState.overallProgress > 0 ? 'Resume Python Course' : 'Start Python Masterclass'}
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Button>

              <Button
                variant="outline"
                onClick={() => navigate('/profile?tab=certificates')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs font-mono cursor-pointer"
              >
                <TrophyIcon className="w-4 h-4 text-amber-400" /> View Earned Credentials
              </Button>
            </div>
          </div>
        </Card>

        {/* All Available & Upcoming Tracks */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
              All Skill Masterclasses
            </h3>
            <span className="text-xs font-mono text-[color:var(--text-secondary)]">
              {courses.length} Curriculums
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <Card
                  key={course.id}
                  className={`flex flex-col justify-between p-6 transition-all duration-300 hover:border-brand/50 shadow-sm ${
                    course.isAvailable ? 'cursor-pointer' : 'opacity-85'
                  }`}
                  onClick={() => {
                    if (course.isAvailable) {
                      navigate(course.route);
                    }
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-brand/10 text-brand border border-brand/20 font-bold">
                        {course.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-[color:var(--text-secondary)]">
                        {course.category}
                      </span>
                      <h4 className="text-lg font-heading font-bold text-[color:var(--text-primary)] mt-0.5">
                        {course.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-[color:var(--text-secondary)] font-body leading-relaxed line-clamp-3">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-3 text-xs font-mono text-[color:var(--text-secondary)] pt-2 border-t border-border">
                      <span>{course.levelsCount} Levels</span>
                      <span>•</span>
                      <span>{course.modulesCount} Modules</span>
                      <span>•</span>
                      <span>{course.assessmentsCount} Exams</span>
                    </div>

                    {course.isAvailable && course.progress > 0 && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] font-mono">
                          <span className="text-[color:var(--text-secondary)]">Progress</span>
                          <span className="text-brand font-bold">{course.progress}%</span>
                        </div>
                        <ProgressBar progress={course.progress} />
                      </div>
                    )}
                  </div>

                  <div className="pt-6">
                    {course.isAvailable ? (
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full flex items-center justify-center gap-2 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(course.route);
                        }}
                      >
                        {course.progress > 0 ? 'Resume Course' : 'Open Course'}
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full flex items-center justify-center gap-2 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/onboarding');
                        }}
                      >
                        <span>Generate AI Track</span>
                        <SparklesIcon className="w-3.5 h-3.5 text-brand" />
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};
