import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { SplashScreen } from '@/features/auth/components/SplashScreen';
import { LoginForm } from '@/features/auth/components/LoginForm';
import { RegisterForm } from '@/features/auth/components/RegisterForm';
import { ForgotPasswordForm } from '@/features/auth/components/ForgotPasswordForm';
import { ResetPasswordForm } from '@/features/auth/components/ResetPasswordForm';
import { OnboardingWizard } from '@/features/onboarding/components/OnboardingWizard';
import { DashboardScreen } from '@/features/dashboard/components/DashboardScreen';
import { RoadmapScreen } from '@/features/roadmap/components/RoadmapScreen';
import { PythonCourseScreen } from '@/features/roadmap/components/PythonCourseScreen';
import { ShopifyCourseScreen } from '@/features/roadmap/components/ShopifyCourseScreen';
import { MetaAdsCourseScreen } from '@/features/roadmap/components/MetaAdsCourseScreen';
import { SeoCourseScreen } from '@/features/roadmap/components/SeoCourseScreen';
import { PromptEngineeringCourseScreen } from '@/features/roadmap/components/PromptEngineeringCourseScreen';
import { HtmlCssCourseScreen } from '@/features/roadmap/components/HtmlCssCourseScreen';
import { ThreeDAnimationCourseScreen } from '@/features/roadmap/components/ThreeDAnimationCourseScreen';
import { JavaScriptCourseScreen } from '@/features/roadmap/components/JavaScriptCourseScreen';
import { GoogleAdsCourseScreen } from '@/features/roadmap/components/GoogleAdsCourseScreen';
import { FacebookAdsCourseScreen } from '@/features/roadmap/components/FacebookAdsCourseScreen';
import { YouTubeAdsCourseScreen } from '@/features/roadmap/components/YouTubeAdsCourseScreen';
import { InstagramAdsCourseScreen } from '@/features/roadmap/components/InstagramAdsCourseScreen';
import { WebDevelopmentCourseScreen } from '@/features/roadmap/components/WebDevelopmentCourseScreen';
import { ShopifyDeveloperCourseScreen } from '@/features/roadmap/components/ShopifyDeveloperCourseScreen';
import { EnglishEmailWritingCourseScreen } from '@/features/roadmap/components/EnglishEmailWritingCourseScreen';
import { ProfessionalEnglishSpeakingCourseScreen } from '@/features/roadmap/components/ProfessionalEnglishSpeakingCourseScreen';
import { CourseCatalogScreen } from '@/features/roadmap/components/CourseCatalogScreen';
import { StudyBuddyScreen } from '@/features/study-buddy/components/StudyBuddyScreen';
import { CareerGPSScreen } from '@/features/career-gps/components/CareerGPSScreen';
import { ProfileScreen } from '@/features/profile/components/ProfileScreen';
import { VerifyCertificateScreen } from '@/features/certificate/VerifyCertificateScreen';
import { PublicPortfolioScreen } from '@/features/portfolio/components/PublicPortfolioScreen';
import { AdminDashboardScreen, AdminRoute } from '@/features/admin';
import { useAuthStore, initAuthListener } from '@/features/auth/store/auth.store';
import { AppShell } from '@/layouts/AppShell';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isHydrated = useAuthStore((state) => state.isHydrated);

  // Wait for the Supabase session check to finish before deciding to redirect,
  // otherwise a logged-in user gets bounced to /auth/login on every refresh.
  if (!isHydrated) return null;
  if (!isAuthenticated) return <Navigate to="/auth/login" replace />;
  return <>{children}</>;
};

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window !== 'undefined') {
      const isTestEnv = Boolean((window.navigator as any).webdriver);
      const isDirectRoute = (
        window.location.pathname !== '/' ||
        window.location.search.includes('nosplash') ||
        Boolean(window.localStorage.getItem('skillora-auth-storage'))
      );
      if (isTestEnv || isDirectRoute) {
        return false;
      }
    }
    return true;
  });

  useEffect(() => {
    initAuthListener();
  }, []);

  if (showSplash) {
    return (
      <ThemeProvider>
        <SplashScreen onComplete={() => setShowSplash(false)} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="w-full min-h-screen bg-[color:var(--color-bg-base)] text-[color:var(--text-primary)] font-body selection:bg-brand selection:text-white">
          <Routes>
            {/* Default Route */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {/* Auth Routes */}
            <Route path="/auth/login" element={<LoginForm />} />
            <Route path="/login" element={<Navigate to="/auth/login" replace />} />
            <Route path="/auth/register" element={<RegisterForm />} />
            <Route path="/register" element={<Navigate to="/auth/register" replace />} />
            <Route path="/auth/forgot-password" element={<ForgotPasswordForm />} />
            <Route path="/forgot-password" element={<Navigate to="/auth/forgot-password" replace />} />
            <Route path="/auth/reset-password" element={<ResetPasswordForm />} />
            <Route path="/reset-password" element={<Navigate to="/auth/reset-password" replace />} />
            <Route path="/update-password" element={<Navigate to="/auth/reset-password" replace />} />


            {/* Public Certificate Verification Route */}
            <Route path="/verify/:id" element={<VerifyCertificateScreen />} />

            {/* Public Portfolio Route */}
            <Route path="/portfolio/:slug" element={<PublicPortfolioScreen />} />

            {/* Onboarding Route */}
            <Route path="/onboarding" element={<OnboardingWizard />} />

            {/* Core Protected App Routes — wrapped in AppShell for Sidebar/BottomNav/TopHeader */}
            <Route
              element={
                <ProtectedRoute>
                  <AppShell />
                </ProtectedRoute>
              }
            >
              <Route path="/dashboard" element={<DashboardScreen />} />
              <Route path="/courses" element={<CourseCatalogScreen />} />
              <Route path="/courses/python" element={<PythonCourseScreen />} />
              <Route path="/courses/shopify" element={<ShopifyCourseScreen />} />
              <Route path="/courses/shopify-liquid" element={<Navigate to="/courses/shopify" replace />} />
              <Route path="/courses/meta-ads" element={<MetaAdsCourseScreen />} />
              <Route path="/courses/meta" element={<Navigate to="/courses/meta-ads" replace />} />
              <Route path="/courses/seo" element={<SeoCourseScreen />} />
              <Route path="/courses/seo/beginner" element={<Navigate to="/courses/seo?level=beginner" replace />} />
              <Route path="/courses/seo/intermediate" element={<Navigate to="/courses/seo?level=intermediate" replace />} />
              <Route path="/courses/seo/advanced" element={<Navigate to="/courses/seo?level=advanced" replace />} />
              <Route path="/courses/search-engine-optimization" element={<Navigate to="/courses/seo" replace />} />
              <Route path="/courses/search-engine-optimization/beginner" element={<Navigate to="/courses/seo?level=beginner" replace />} />
              <Route path="/courses/search-engine-optimization/intermediate" element={<Navigate to="/courses/seo?level=intermediate" replace />} />
              <Route path="/courses/search-engine-optimization/advanced" element={<Navigate to="/courses/seo?level=advanced" replace />} />
              
              {/* Prompt Engineering Course Routes */}
              <Route path="/courses/prompt-engineering" element={<PromptEngineeringCourseScreen />} />
              <Route path="/courses/prompt-engineering/beginner" element={<Navigate to="/courses/prompt-engineering?level=beginner" replace />} />
              <Route path="/courses/prompt-engineering/intermediate" element={<Navigate to="/courses/prompt-engineering?level=intermediate" replace />} />
              <Route path="/courses/prompt-engineering/advanced" element={<Navigate to="/courses/prompt-engineering?level=advanced" replace />} />
              <Route path="/courses/prompt-engineering-masterclass" element={<Navigate to="/courses/prompt-engineering" replace />} />
              <Route path="/courses/prompt-engineering-masterclass/beginner" element={<Navigate to="/courses/prompt-engineering?level=beginner" replace />} />
              <Route path="/courses/prompt-engineering-masterclass/intermediate" element={<Navigate to="/courses/prompt-engineering?level=intermediate" replace />} />
              <Route path="/courses/prompt-engineering-masterclass/advanced" element={<Navigate to="/courses/prompt-engineering?level=advanced" replace />} />
              
              {/* HTML & CSS Masterclass Routes */}
              <Route path="/courses/html-css" element={<HtmlCssCourseScreen />} />
              <Route path="/courses/html-css/beginner" element={<Navigate to="/courses/html-css?level=beginner" replace />} />
              <Route path="/courses/html-css/intermediate" element={<Navigate to="/courses/html-css?level=intermediate" replace />} />
              <Route path="/courses/html-css/advanced" element={<Navigate to="/courses/html-css?level=advanced" replace />} />
              <Route path="/courses/html-css-masterclass" element={<Navigate to="/courses/html-css" replace />} />
              <Route path="/courses/html-css-masterclass/beginner" element={<Navigate to="/courses/html-css?level=beginner" replace />} />
              <Route path="/courses/html-css-masterclass/intermediate" element={<Navigate to="/courses/html-css?level=intermediate" replace />} />
              <Route path="/courses/html-css-masterclass/advanced" element={<Navigate to="/courses/html-css?level=advanced" replace />} />

              {/* 3D Animation Masterclass Routes */}
              <Route path="/courses/3d-animation" element={<ThreeDAnimationCourseScreen />} />
              <Route path="/courses/3d-animation/beginner" element={<Navigate to="/courses/3d-animation?level=beginner" replace />} />
              <Route path="/courses/3d-animation/intermediate" element={<Navigate to="/courses/3d-animation?level=intermediate" replace />} />
              <Route path="/courses/3d-animation/advanced" element={<Navigate to="/courses/3d-animation?level=advanced" replace />} />
              <Route path="/courses/3d-animation-masterclass" element={<Navigate to="/courses/3d-animation" replace />} />
              <Route path="/courses/3d-animation-masterclass/beginner" element={<Navigate to="/courses/3d-animation?level=beginner" replace />} />
              <Route path="/courses/3d-animation-masterclass/intermediate" element={<Navigate to="/courses/3d-animation?level=intermediate" replace />} />
              <Route path="/courses/3d-animation-masterclass/advanced" element={<Navigate to="/courses/3d-animation?level=advanced" replace />} />

              {/* JavaScript Masterclass Routes */}
              <Route path="/courses/javascript" element={<JavaScriptCourseScreen />} />
              <Route path="/courses/javascript/beginner" element={<Navigate to="/courses/javascript?level=beginner" replace />} />
              <Route path="/courses/javascript/intermediate" element={<Navigate to="/courses/javascript?level=intermediate" replace />} />
              <Route path="/courses/javascript/advanced" element={<Navigate to="/courses/javascript?level=advanced" replace />} />
              <Route path="/courses/javascript-masterclass" element={<Navigate to="/courses/javascript" replace />} />
              <Route path="/courses/javascript-masterclass/beginner" element={<Navigate to="/courses/javascript?level=beginner" replace />} />
              <Route path="/courses/javascript-masterclass/intermediate" element={<Navigate to="/courses/javascript?level=intermediate" replace />} />
              <Route path="/courses/javascript-masterclass/advanced" element={<Navigate to="/courses/javascript?level=advanced" replace />} />

              {/* Google Ads Masterclass Routes */}
              <Route path="/courses/google-ads" element={<GoogleAdsCourseScreen />} />
              <Route path="/courses/google-ads/beginner" element={<Navigate to="/courses/google-ads?level=beginner" replace />} />
              <Route path="/courses/google-ads/intermediate" element={<Navigate to="/courses/google-ads?level=intermediate" replace />} />
              <Route path="/courses/google-ads/advanced" element={<Navigate to="/courses/google-ads?level=advanced" replace />} />
              <Route path="/courses/google-ads-masterclass" element={<Navigate to="/courses/google-ads" replace />} />
              <Route path="/courses/google-ads-masterclass/beginner" element={<Navigate to="/courses/google-ads?level=beginner" replace />} />
              <Route path="/courses/google-ads-masterclass/intermediate" element={<Navigate to="/courses/google-ads?level=intermediate" replace />} />
              <Route path="/courses/google-ads-masterclass/advanced" element={<Navigate to="/courses/google-ads?level=advanced" replace />} />

              {/* Facebook Ads Masterclass Routes */}
              <Route path="/courses/facebook-ads" element={<FacebookAdsCourseScreen />} />
              <Route path="/courses/facebook-ads/beginner" element={<Navigate to="/courses/facebook-ads?level=beginner" replace />} />
              <Route path="/courses/facebook-ads/intermediate" element={<Navigate to="/courses/facebook-ads?level=intermediate" replace />} />
              <Route path="/courses/facebook-ads/advanced" element={<Navigate to="/courses/facebook-ads?level=advanced" replace />} />
              <Route path="/courses/facebook-ads-masterclass" element={<Navigate to="/courses/facebook-ads" replace />} />
              <Route path="/courses/facebook-ads-masterclass/beginner" element={<Navigate to="/courses/facebook-ads?level=beginner" replace />} />
              <Route path="/courses/facebook-ads-masterclass/intermediate" element={<Navigate to="/courses/facebook-ads?level=intermediate" replace />} />
              <Route path="/courses/facebook-ads-masterclass/advanced" element={<Navigate to="/courses/facebook-ads?level=advanced" replace />} />

              {/* YouTube Ads Masterclass Routes */}
              <Route path="/courses/youtube-ads" element={<YouTubeAdsCourseScreen />} />
              <Route path="/courses/youtube-ads/beginner" element={<Navigate to="/courses/youtube-ads?level=beginner" replace />} />
              <Route path="/courses/youtube-ads/intermediate" element={<Navigate to="/courses/youtube-ads?level=intermediate" replace />} />
              <Route path="/courses/youtube-ads/advanced" element={<Navigate to="/courses/youtube-ads?level=advanced" replace />} />
              <Route path="/courses/youtube-ads-masterclass" element={<Navigate to="/courses/youtube-ads" replace />} />
              <Route path="/courses/youtube-ads-masterclass/beginner" element={<Navigate to="/courses/youtube-ads?level=beginner" replace />} />
              <Route path="/courses/youtube-ads-masterclass/intermediate" element={<Navigate to="/courses/youtube-ads?level=intermediate" replace />} />
              <Route path="/courses/youtube-ads-masterclass/advanced" element={<Navigate to="/courses/youtube-ads?level=advanced" replace />} />

              {/* Instagram Ads Masterclass Routes */}
              <Route path="/courses/instagram-ads" element={<InstagramAdsCourseScreen />} />
              <Route path="/courses/instagram-ads/beginner" element={<Navigate to="/courses/instagram-ads?level=beginner" replace />} />
              <Route path="/courses/instagram-ads/intermediate" element={<Navigate to="/courses/instagram-ads?level=intermediate" replace />} />
              <Route path="/courses/instagram-ads/advanced" element={<Navigate to="/courses/instagram-ads?level=advanced" replace />} />
              <Route path="/courses/instagram-ads-masterclass" element={<Navigate to="/courses/instagram-ads" replace />} />
              <Route path="/courses/instagram-ads-masterclass/beginner" element={<Navigate to="/courses/instagram-ads?level=beginner" replace />} />
              <Route path="/courses/instagram-ads-masterclass/intermediate" element={<Navigate to="/courses/instagram-ads?level=intermediate" replace />} />
              <Route path="/courses/instagram-ads-masterclass/advanced" element={<Navigate to="/courses/instagram-ads?level=advanced" replace />} />

              {/* Web Development Masterclass Routes */}
              <Route path="/courses/web-development" element={<WebDevelopmentCourseScreen />} />
              <Route path="/courses/web-development/beginner" element={<Navigate to="/courses/web-development?level=beginner" replace />} />
              <Route path="/courses/web-development/intermediate" element={<Navigate to="/courses/web-development?level=intermediate" replace />} />
              <Route path="/courses/web-development/advanced" element={<Navigate to="/courses/web-development?level=advanced" replace />} />
              <Route path="/courses/web-development-masterclass" element={<Navigate to="/courses/web-development" replace />} />
              <Route path="/courses/web-development-masterclass/beginner" element={<Navigate to="/courses/web-development?level=beginner" replace />} />
              <Route path="/courses/web-development-masterclass/intermediate" element={<Navigate to="/courses/web-development?level=intermediate" replace />} />
              <Route path="/courses/web-development-masterclass/advanced" element={<Navigate to="/courses/web-development?level=advanced" replace />} />

              {/* Shopify Developer Masterclass Routes */}
              <Route path="/courses/shopify-developer" element={<ShopifyDeveloperCourseScreen />} />
              <Route path="/courses/shopify-developer/beginner" element={<Navigate to="/courses/shopify-developer?level=beginner" replace />} />
              <Route path="/courses/shopify-developer/intermediate" element={<Navigate to="/courses/shopify-developer?level=intermediate" replace />} />
              <Route path="/courses/shopify-developer/advanced" element={<Navigate to="/courses/shopify-developer?level=advanced" replace />} />
              <Route path="/courses/shopify-developer-masterclass" element={<Navigate to="/courses/shopify-developer" replace />} />
              <Route path="/courses/shopify-developer-masterclass/beginner" element={<Navigate to="/courses/shopify-developer?level=beginner" replace />} />
              <Route path="/courses/shopify-developer-masterclass/intermediate" element={<Navigate to="/courses/shopify-developer?level=intermediate" replace />} />
              <Route path="/courses/shopify-developer-masterclass/advanced" element={<Navigate to="/courses/shopify-developer?level=advanced" replace />} />

              {/* English Email Writing Masterclass Routes */}
              <Route path="/courses/english-email-writing" element={<EnglishEmailWritingCourseScreen />} />
              <Route path="/courses/english-email-writing/beginner" element={<Navigate to="/courses/english-email-writing?level=beginner" replace />} />
              <Route path="/courses/english-email-writing/intermediate" element={<Navigate to="/courses/english-email-writing?level=intermediate" replace />} />
              <Route path="/courses/english-email-writing/advanced" element={<Navigate to="/courses/english-email-writing?level=advanced" replace />} />
              <Route path="/courses/english-email-writing-masterclass" element={<Navigate to="/courses/english-email-writing" replace />} />
              <Route path="/courses/english-email-writing-masterclass/beginner" element={<Navigate to="/courses/english-email-writing?level=beginner" replace />} />
              <Route path="/courses/english-email-writing-masterclass/intermediate" element={<Navigate to="/courses/english-email-writing?level=intermediate" replace />} />
              <Route path="/courses/english-email-writing-masterclass/advanced" element={<Navigate to="/courses/english-email-writing?level=advanced" replace />} />

              {/* Professional English Speaking Masterclass Routes */}
              <Route path="/courses/professional-english-speaking" element={<ProfessionalEnglishSpeakingCourseScreen />} />
              <Route path="/courses/professional-english-speaking/beginner" element={<Navigate to="/courses/professional-english-speaking?level=beginner" replace />} />
              <Route path="/courses/professional-english-speaking/intermediate" element={<Navigate to="/courses/professional-english-speaking?level=intermediate" replace />} />
              <Route path="/courses/professional-english-speaking/advanced" element={<Navigate to="/courses/professional-english-speaking?level=advanced" replace />} />
              <Route path="/courses/professional-english-speaking-masterclass" element={<Navigate to="/courses/professional-english-speaking" replace />} />
              <Route path="/courses/professional-english-speaking-masterclass/beginner" element={<Navigate to="/courses/professional-english-speaking?level=beginner" replace />} />
              <Route path="/courses/professional-english-speaking-masterclass/intermediate" element={<Navigate to="/courses/professional-english-speaking?level=intermediate" replace />} />
              <Route path="/courses/professional-english-speaking-masterclass/advanced" element={<Navigate to="/courses/professional-english-speaking?level=advanced" replace />} />
              <Route path="/roadmap" element={<RoadmapScreen />} />
              <Route path="/study-buddy" element={<StudyBuddyScreen />} />
              <Route path="/career-gps" element={<CareerGPSScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              
              {/* Protected Admin Route */}
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <AdminDashboardScreen />
                  </AdminRoute>
                }
              />
            </Route>

            {/* Catch-all 404 */}
            <Route
              path="*"
              element={
                <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                  <h1 className="text-4xl font-heading font-bold mb-2">404</h1>
                  <p className="text-[color:var(--text-secondary)] mb-6">The page you are looking for does not exist.</p>
                  <a href="/dashboard" className="text-brand font-medium hover:underline">Return to Dashboard</a>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
