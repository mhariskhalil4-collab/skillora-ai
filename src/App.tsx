import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { SplashScreen } from '@/features/auth/components/SplashScreen';
import { LoginForm } from '@/features/auth/components/LoginForm';
import { RegisterForm } from '@/features/auth/components/RegisterForm';
import { OnboardingWizard } from '@/features/onboarding/components/OnboardingWizard';
import { DashboardScreen } from '@/features/dashboard/components/DashboardScreen';
import { RoadmapScreen } from '@/features/roadmap/components/RoadmapScreen';
import { StudyBuddyScreen } from '@/features/study-buddy/components/StudyBuddyScreen';
import { CareerGPSScreen } from '@/features/career-gps/components/CareerGPSScreen';
import { ProfileScreen } from '@/features/profile/components/ProfileScreen';
import { VerifyCertificateScreen } from '@/features/certificate/VerifyCertificateScreen';
import { PublicPortfolioScreen } from '@/features/portfolio/components/PublicPortfolioScreen';
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
  const [showSplash, setShowSplash] = useState(true);

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
            <Route path="/auth/register" element={<RegisterForm />} />

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
              <Route path="/roadmap" element={<RoadmapScreen />} />
              <Route path="/study-buddy" element={<StudyBuddyScreen />} />
              <Route path="/career-gps" element={<CareerGPSScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
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
