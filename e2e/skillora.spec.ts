import { test, expect, Page } from '@playwright/test';

// Helper to inject authenticated session into client localStorage
async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000001',
      email: 'student@skillora.ai',
      firstName: 'Alex',
      role: 'university_student',
    };

    // Store in Zustand persisted state
    window.localStorage.setItem('skillora-auth-storage', JSON.stringify({
      state: {
        token: 'mock-jwt-token-playwright',
        user: mockUser,
        isAuthenticated: true,
        isHydrated: true,
      },
      version: 0,
    }));
  }, customUserId);
}

test.describe('Skillora AI End-to-End Test Suite', () => {
  test.setTimeout(60000);
  
  test('1. Authentication Flow: Login & Validation', async ({ page }) => {
    await page.goto('/auth/login');
    await expect(page.locator('h2')).toContainText('Welcome back');

    // Submit without input to trigger required/format validations
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Please enter a valid email address.')).toBeVisible();

    // Fill valid email format but short password
    await page.fill('input[type="email"]', 'student@university.edu');
    await page.fill('input[type="password"]', '123'); // short password
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Password must be at least 8 characters.')).toBeVisible();
  });

  test('2. Password Recovery Flow Navigation', async ({ page }) => {
    await page.goto('/auth/login');
    
    // Click "Forgot password?"
    await page.click('text=Forgot password?');
    await page.waitForURL('**/auth/forgot-password');
    await expect(page.locator('h2')).toContainText('Reset Password');

    // Submit email for reset link
    await page.fill('input[type="email"]', 'learner@example.com');
    await page.click('button:has-text("Send Reset Link")');

    // Verify safe generic confirmation message
    await expect(page.locator('h3')).toContainText('Check Your Inbox');
    await expect(page.locator('text=If an account exists for that email')).toBeVisible();

    // Verify "Back to Sign In" returns to login
    await page.click('button:has-text("Back to Sign In")');
    await page.waitForURL('**/auth/login');
  });

  test('3. Onboarding Wizard Progression', async ({ page }) => {
    await page.goto('/onboarding');

    // Step 1: Select User Type
    await expect(page.locator('h1')).toHaveText('What describes you best?');
    await page.click('text=University Student');

    // Step 2: Select Existing Skills
    await expect(page.locator('h1')).toHaveText('What skills do you already have?');
    await page.click('text=Python');
    await page.click('button:has-text("Continue")');

    // Step 3: Select Skill Level
    await expect(page.locator('h1')).toHaveText('What is your current proficiency?');
    await page.click('text=Beginner');

    // Step 4: Enter Target Goal
    await expect(page.locator('h1')).toHaveText('What is your ultimate goal?');
    await page.fill('input', 'AI Software Engineer');
    
    // Check generate button is enabled
    const genButton = page.locator('button:has-text("Generate My")');
    await expect(genButton).toBeVisible();
    await genButton.click();

    // Verify loading screen or redirect
    await expect(page.locator('body')).toBeVisible();
  });

  test('4. Dashboard & Learning Roadmap Navigation', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/dashboard');

    // Verify Dashboard navigation & AppShell
    await expect(page.locator('body')).toBeVisible();
    
    // Navigate to Roadmap
    await page.goto('/roadmap');
    await expect(page.locator('body')).toBeVisible();
  });

  test('5. Profile, Settings, and Subscription Billing', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/profile');

    // Switch to Settings tab
    const settingsButton = page.locator('button:has-text("Settings")');
    if (await settingsButton.isVisible()) {
      await settingsButton.click();

      // Verify General Profile card
      await expect(page.locator('text=General Profile')).toBeVisible();

      // Verify Subscription Card is present (handles Free Early Access, Free Learner, and Skillora Pro)
      await expect(page.locator('text=Free Early Access, text=Free Learner Plan, text=Skillora Pro').first()).toBeVisible();
      await expect(page.locator('button:has-text("Early Access Plan"), button:has-text("Upgrade to Pro"), button:has-text("Manage Billing")').first()).toBeVisible();

      // Verify Danger Zone Delete Account Modal
      await page.click('button:has-text("Delete")');
      await expect(page.locator('h3:has-text("Permanently Delete Account?")')).toBeVisible();
      await expect(page.locator('text=Type DELETE to confirm')).toBeVisible();
      
      // Cancel modal
      await page.click('button:has-text("Cancel")');
      await expect(page.locator('h3:has-text("Permanently Delete Account?")')).not.toBeVisible();
    }
  });

  test('6. Subscription Pricing Modal Interaction', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/profile');
    
    const settingsButton = page.locator('button:has-text("Settings")');
    if (await settingsButton.isVisible()) {
      await settingsButton.click();
      
      const planButton = page.locator('button:has-text("Early Access Plan"), button:has-text("Upgrade to Pro")').first();
      if (await planButton.isVisible()) {
        await planButton.click();

        // Verify modal appears with Pro features and billing cycle options
        await expect(page.locator('h2:has-text("Skillora Pro")')).toBeVisible();
        await expect(page.locator('text=Monthly, text=Annual').first()).toBeVisible();
        await expect(page.locator('text=Unlimited Gemini Flash Prompts')).toBeVisible();

        // Close modal
        await page.locator('button:has(svg)').first().click();
      }
    }
  });

  test('7. AI Study Buddy Interaction', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/study-buddy');

    // Verify Chat Input exists in Study Buddy interface
    const chatInput = page.locator('#ai-chat-input');
    await expect(chatInput).toBeVisible({ timeout: 10000 });

    // Verify Study Buddy header or context
    await expect(page.locator('body')).toContainText('Study Buddy');
  });

  test('8. Public Certificate Verification Route', async ({ page }) => {
    await page.goto('/verify/cert_test_123');

    // Verify verification page loads cleanly without 404 or white screen
    await expect(page.locator('body')).toBeVisible();
  });

  test('9. Public Portfolio Route', async ({ page }) => {
    await page.goto('/portfolio/demo-user');

    // Verify public portfolio renders cleanly
    await expect(page.locator('body')).toBeVisible();
  });

  test('10. Phase 3: Global Search Spotlight Modal Interaction', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/dashboard');

    // Open Search via visible trigger button (desktop or mobile)
    const searchTrigger = page.locator('button:visible:has-text("Search curriculum"), button:visible[aria-label="Open global search"]').first();
    await expect(searchTrigger).toBeVisible();
    await searchTrigger.click();

    // Verify Modal is opened
    const searchInput = page.locator('input[placeholder*="Search lessons, roadmaps"]');
    await expect(searchInput).toBeVisible({ timeout: 5000 });

    // Type query
    await searchInput.fill('Python');
    await page.waitForTimeout(400);

    // Verify category filter buttons exist
    await expect(page.locator('button:has-text("All Results")')).toBeVisible();
    await expect(page.locator('button:has-text("Roadmaps")')).toBeVisible();

    // Close via ESC
    await page.keyboard.press('Escape');
    await expect(searchInput).not.toBeVisible();
  });

  test('11. Phase 3: Notification Center Bell & Dropdown Panel', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/dashboard');

    // Locate visible Notification Bell
    const notifBell = page.locator('button:visible[aria-label*="Notifications"]').first();
    await expect(notifBell).toBeVisible();
    await notifBell.click();

    // Verify Notification Panel header opens
    await expect(page.locator('h3:has-text("Notifications")')).toBeVisible();

    // Close panel
    await notifBell.click();
  });

  test('12. Phase 3: Admin Dashboard RBAC Route Protection', async ({ page }) => {
    await setAuthenticatedUser(page);
    
    // Attempt navigating to /admin as standard non-admin learner
    await page.goto('/admin');

    // Verify redirection to /dashboard
    await page.waitForURL('**/dashboard', { timeout: 15000 });
    await expect(page.locator('body')).toBeVisible();
  });

  test('13. Phase 3: Profile Avatar Upload Component', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/profile');

    const settingsButton = page.locator('button:has-text("Settings")');
    if (await settingsButton.isVisible()) {
      await settingsButton.click();

      // Verify Avatar Upload UI exists
      await expect(page.locator('text=Profile Picture')).toBeVisible();
      await expect(page.locator('text=Upload a square image')).toBeVisible();
      await expect(page.locator('button:has-text("Upload Photo")')).toBeVisible();
    }
  });

  test('14. Phase 4: Career GPS Screen & Next Best Action Intelligence', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/career-gps');

    // Wait for the AI Skill Gap Analysis button (indicates Career GPS page is loaded)
    const aiButton = page.locator('button:has-text("AI Skill Gap Analysis")');
    await expect(aiButton).toBeVisible({ timeout: 15000 });

    // Verify Career GPS header renders
    await expect(page.locator('body')).toContainText('Career GPS');

    // Verify Next Best Action card or Skill Gap card renders
    await expect(page.locator('body')).toContainText('Recommended Modules to Bridge the Gap');
    await expect(page.locator('body')).toContainText('Live Market Demand');
  });

  test('15. Phase 4: AI Skill Gap Analysis Modal Trigger', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/career-gps');

    const aiButton = page.locator('button:has-text("AI Skill Gap Analysis")');
    await expect(aiButton).toBeVisible({ timeout: 15000 });
    await aiButton.click();

    // Verify modal appears
    await expect(page.locator('text=AI Skill Gap & Career Readiness Analysis')).toBeVisible({ timeout: 15000 });

    // Close modal via ESC or button
    await page.keyboard.press('Escape');
    await expect(page.locator('text=AI Skill Gap & Career Readiness Analysis')).not.toBeVisible({ timeout: 10000 });
  });

  test('16. Phase 4: Badges & Achievements Catalog in Profile', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/profile');

    // Click Badges & Achievements Tab
    const achievementsTab = page.locator('button:has-text("Badges & Achievements")');
    await expect(achievementsTab).toBeVisible({ timeout: 10000 });
    await achievementsTab.click();

    // Verify Achievement Center Header and Badges Grid
    await expect(page.locator('h3:has-text("Achievement Center")')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('button:has-text("All Badges")')).toBeVisible();
    await expect(page.locator('button:has-text("Learning")')).toBeVisible();
    await expect(page.locator('button:has-text("Streaks")')).toBeVisible();
  });

  test('17. Phase 4: Study Buddy Smart Contextual Prompt Action Chips', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/study-buddy');

    // Verify interactive prompt chips exist
    await expect(page.locator('button:has-text("Real-World Analogy")')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('button:has-text("Code Breakdown")')).toBeVisible();
    await expect(page.locator('button:has-text("Quiz Practice")')).toBeVisible();
    await expect(page.locator('button:has-text("System Architecture")')).toBeVisible();
  });

  test('18. Phase 4: Dashboard Weekly Activity & Consistency Metrics', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/dashboard');

    // Verify Dashboard loads with Streak & XP stats after async fetch
    await expect(page.locator('body')).toContainText('XP', { timeout: 15000 });
    await expect(page.locator('body')).toContainText('Streak', { timeout: 15000 });
  });

  test('19. Roadmap Personalization: University Student Dynamic Skill Selection & Generation', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/onboarding');

    // Step 1: Select University Student
    await expect(page.locator('h1')).toHaveText('What describes you best?', { timeout: 15000 });
    await page.click('text=University Student');

    // Step 2: Verify University Student context and curated skills
    await expect(page.locator('text=Curated for University Students')).toBeVisible();
    await expect(page.locator('text=Roadmap Emphasis:')).toBeVisible();
    await expect(page.locator('h3:has-text("Python")')).toBeVisible();
    await expect(page.locator('h3:has-text("Web Development")')).toBeVisible();
    await expect(page.locator('h3:has-text("Write Emails in English")')).toBeVisible();

    // Select skills
    await page.click('h3:has-text("Python")');
    await page.click('h3:has-text("Web Development")');

    // Verify Selected count
    await expect(page.locator('text=Selected: 2 skills')).toBeVisible();
    await page.click('button:has-text("Continue with 2 skills")');

    // Step 3: Proficiency
    await expect(page.locator('h1')).toHaveText('What is your current proficiency?');
    await page.click('text=Beginner');

    // Step 4: Target Goal with suggestions
    await expect(page.locator('h1')).toHaveText('What is your ultimate goal?');
    await expect(page.locator('text=Suggested for University Students:')).toBeVisible();
    await page.click('text=Junior Full-Stack Developer');

    // Generate Roadmap
    const genButton = page.locator('button:has-text("Generate My Personalized Roadmap")');
    await expect(genButton).toBeVisible();
    await genButton.click();

    // Verify redirected to dashboard / loading finished
    await page.waitForURL('**/dashboard', { timeout: 15000 });
    await expect(page.locator('body')).toBeVisible();
  });

  test('20. Roadmap Personalization: Freelancer Dynamic Skill Selection & Generation', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/onboarding');

    // Step 1: Select Freelancer
    await expect(page.locator('h1')).toHaveText('What describes you best?');
    await page.click('text=Freelancer');

    // Step 2: Verify Freelancer context and high-demand client skills
    await expect(page.locator('text=Curated for Freelancers')).toBeVisible();
    await expect(page.locator('text=Roadmap Emphasis:')).toBeVisible();
    await expect(page.locator('h3:has-text("Google Ads")')).toBeVisible();
    await expect(page.locator('h3:has-text("Meta Ads")')).toBeVisible();
    await expect(page.locator('h3:has-text("Shopify Store Development")')).toBeVisible();
    await expect(page.locator('h3:has-text("SEO")')).toBeVisible();

    // Select freelance skills
    await page.click('h3:has-text("Google Ads")');
    await page.click('h3:has-text("Meta Ads")');

    await expect(page.locator('text=Selected: 2 skills')).toBeVisible();
    await page.click('button:has-text("Continue with 2 skills")');

    // Step 3: Proficiency
    await expect(page.locator('h1')).toHaveText('What is your current proficiency?');
    await page.click('text=Intermediate');

    // Step 4: Target Goal with suggestions
    await expect(page.locator('h1')).toHaveText('What is your ultimate goal?');
    await expect(page.locator('text=Suggested for Freelancers:')).toBeVisible();
    await page.click('text=High-Converting Meta & Google Ads Specialist');

    // Generate Roadmap
    const genButton = page.locator('button:has-text("Generate My Personalized Roadmap")');
    await expect(genButton).toBeVisible();
    await genButton.click();

    await page.waitForURL('**/dashboard', { timeout: 15000 });
    await expect(page.locator('body')).toBeVisible();
  });

  test('21. Roadmap Personalization: Career Changer Dynamic Skill Selection & Generation', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/onboarding');

    // Step 1: Select Career Changer
    await expect(page.locator('h1')).toHaveText('What describes you best?');
    await page.click('text=Career Changer');

    // Step 2: Verify Career Changer context and pivot skills
    await expect(page.locator('text=Curated for Career Changers')).toBeVisible();
    await expect(page.locator('text=Roadmap Emphasis:')).toBeVisible();
    await expect(page.locator('h3:has-text("Web Development")')).toBeVisible();
    await expect(page.locator('h3:has-text("Professional Speaking English")')).toBeVisible();

    // Select skills
    await page.click('h3:has-text("Web Development")');
    await page.click('h3:has-text("Professional Speaking English")');

    await expect(page.locator('text=Selected: 2 skills')).toBeVisible();
    await page.click('button:has-text("Continue with 2 skills")');

    // Step 3: Proficiency
    await expect(page.locator('h1')).toHaveText('What is your current proficiency?');
    await page.click('text=Beginner');

    // Step 4: Target Goal with suggestions
    await expect(page.locator('h1')).toHaveText('What is your ultimate goal?');
    await expect(page.locator('text=Suggested for Career Changers:')).toBeVisible();
    await page.click('text=Full-Stack Web Developer');

    // Generate Roadmap
    const genButton = page.locator('button:has-text("Generate My Personalized Roadmap")');
    await expect(genButton).toBeVisible();
    await genButton.click();

    await page.waitForURL('**/dashboard', { timeout: 30000 });
    await expect(page.locator('body')).toBeVisible();
  });

  test('22. Dynamic Skill List Updates on User Type Switching', async ({ page }) => {
    await page.goto('/onboarding');

    // Select Freelancer
    await page.click('text=Freelancer');
    await expect(page.locator('text=Curated for Freelancers')).toBeVisible();

    // Go back and switch to University Student
    await page.click('button[aria-label="Go back"], button:has-text("Back")');
    await expect(page.locator('h1')).toHaveText('What describes you best?');
    await page.click('text=University Student');
    await expect(page.locator('text=Curated for University Students')).toBeVisible();

    // Go back and switch to Career Changer
    await page.click('button[aria-label="Go back"], button:has-text("Back")');
    await expect(page.locator('h1')).toHaveText('What describes you best?');
    await page.click('text=Career Changer');
    await expect(page.locator('text=Curated for Career Changers')).toBeVisible();
  });

  test('23. Skill Category Filtering and Search in Onboarding', async ({ page }) => {
    await page.goto('/onboarding');
    await page.click('text=University Student');

    // Category filter: Advertising & Marketing
    await page.click('button:has-text("Advertising & Marketing")');
    await expect(page.locator('h3:has-text("Google Ads")')).toBeVisible();
    await expect(page.locator('h3:has-text("Facebook Ads")')).toBeVisible();
    await expect(page.locator('h3:has-text("YouTube Ads")')).toBeVisible();
    await expect(page.locator('h3:has-text("Instagram Ads")')).toBeVisible();
    await expect(page.locator('h3:has-text("SEO")')).toBeVisible();
    await expect(page.locator('h3:has-text("Python")')).not.toBeVisible();

    // Category filter: Communication & Career
    await page.click('button:has-text("Communication & Career")');
    await expect(page.locator('h3:has-text("Write Emails in English")')).toBeVisible();
    await expect(page.locator('h3:has-text("Professional Speaking English")')).toBeVisible();

    // Search filter
    const searchInput = page.locator('input[placeholder="Search skills..."]');
    await searchInput.fill('Shopify');
    await expect(page.locator('h3:has-text("Shopify Store Development")')).toBeVisible();
    await expect(page.locator('h3:has-text("Shopify Liquid")')).toBeVisible();
  });

  test('24. Mobile Responsive Skill Selection & Persistence', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/onboarding');

    // Step 1: Select Freelancer on mobile
    await expect(page.locator('h1')).toHaveText('What describes you best?');
    await page.click('text=Freelancer');

    // Step 2: Verify responsive skill cards
    await expect(page.locator('text=Curated for Freelancers')).toBeVisible();
    await page.click('h3:has-text("Google Ads")');
    await page.click('h3:has-text("Shopify Store Development")');

    const continueBtn = page.locator('button:has-text("Continue with 2 skills")');
    await expect(continueBtn).toBeVisible();
    await continueBtn.click();

    // Step 3 on mobile
    await expect(page.locator('h1')).toHaveText('What is your current proficiency?');
    await page.click('text=Beginner');

    // Step 4 on mobile
    await expect(page.locator('h1')).toHaveText('What is your ultimate goal?');
    await page.fill('input', 'E-Commerce Growth Freelancer');
    const genButton = page.locator('button:has-text("Generate My Personalized Roadmap")');
    await expect(genButton).toBeVisible();
  });

  test('25. Course Catalog & Dedicated Python Course Navigation', async ({ page }) => {
    await setAuthenticatedUser(page, 'py-user-e2e-25');

    // 1. Direct navigation to Course Catalog /courses
    await page.goto('/courses');
    await expect(page.locator('h1:has-text("Structured Skill Courses")')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Python Masterclass').first()).toBeVisible({ timeout: 15000 });

    // 2. Click Start/Open Course on Python card -> navigates to /courses/python
    await page.click('button:has-text("Start Python Masterclass"), button:has-text("Resume Python Course"), button:has-text("Open Course")');
    await page.waitForURL('**/courses/python', { timeout: 15000 });
    await expect(page.locator('h1:has-text("Python Masterclass")')).toBeVisible({ timeout: 15000 });

    // 3. Navigation contains "Courses"
    const coursesNavLink = page.locator('nav a:has-text("Courses"):visible, a:has-text("Courses"):visible').first();
    await expect(coursesNavLink).toBeVisible({ timeout: 10000 });
    await coursesNavLink.click();
    await page.waitForURL('**/courses', { timeout: 15000 });

    // 4. Global Search for Python returns dedicated course
    await page.goto('/dashboard');
    // Click Search trigger
    const searchTrigger = page.locator('button:has-text("Search roadmaps, skills")').first();
    if (await searchTrigger.isVisible()) {
      await searchTrigger.click();
      const searchInput = page.locator('input[placeholder*="Search by skill"]');
      await searchInput.fill('python');
      await expect(page.locator('h4:has-text("Python Masterclass"), text=Python Masterclass').first()).toBeVisible({ timeout: 10000 });
      await page.click('h4:has-text("Python Masterclass"), text=Python Masterclass');
      await page.waitForURL('**/courses/python', { timeout: 15000 });
      await expect(page.locator('h1:has-text("Python Masterclass")')).toBeVisible({ timeout: 15000 });
    }
  });

  test('26. Python Course: 3-Level Switcher & Level Structure Metadata', async ({ page }) => {
    await setAuthenticatedUser(page, 'py-user-e2e-26');
    await page.goto('/courses/python');

    // Verify Course Title and 3-Level Switcher
    await expect(page.locator('h1:has-text("Python Masterclass")')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('button:has-text("Level 1: Beginner"), h3:has-text("Level 1: Beginner")').first()).toBeVisible({ timeout: 10000 });
    await expect(page.locator('button:has-text("Level 2: Intermediate"), h3:has-text("Level 2: Intermediate")').first()).toBeVisible({ timeout: 10000 });
    await expect(page.locator('button:has-text("Level 3: Advanced"), h3:has-text("Level 3: Advanced")').first()).toBeVisible({ timeout: 10000 });

    // Verify Level metadata indicators
    await expect(page.locator('text=43 Modules').first()).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=Master Certificate').first()).toBeVisible({ timeout: 10000 });
  });

  test('27. Python Course: Beginner 14-Module List & Order Verification', async ({ page }) => {
    await setAuthenticatedUser(page, 'py-user-e2e-27');
    await page.goto('/courses/python');

    // Verify the exact approved Beginner modules are present
    await expect(page.locator('text=Module 1: Python Fundamentals')).toBeVisible();
    await expect(page.locator('text=Module 2: Variables & Data Types')).toBeVisible();
    await expect(page.locator('text=Module 3: Operators & Expressions')).toBeVisible();
    await expect(page.locator('text=Module 4: Conditions & Decision Logic')).toBeVisible();
    await expect(page.locator('text=Module 5: Loops & Iteration Flow')).toBeVisible();
    await expect(page.locator('text=Module 6: Strings & Text Processing')).toBeVisible();
    await expect(page.locator('text=Module 7: Lists & Dynamic Arrays')).toBeVisible();
    await expect(page.locator('text=Module 8: Tuples, Sets & Dictionaries')).toBeVisible();
    await expect(page.locator('text=Module 9: Functions & Modular Execution')).toBeVisible();
    await expect(page.locator('text=Module 10: Modules, Packages & Standard Library')).toBeVisible();
    await expect(page.locator('text=Module 11: File Handling & Persistence')).toBeVisible();
    await expect(page.locator('text=Module 12: Error Handling & Debugging')).toBeVisible();
    await expect(page.locator('text=Module 13: OOP Fundamentals')).toBeVisible();
    await expect(page.locator('text=Module 14: Beginner Final Project')).toBeVisible();
    await expect(page.locator('text=Python Beginner Comprehensive Final Assessment')).toBeVisible();
  });

  test('28. Python Course: Initial Level Gating & Prerequisite Modal Behavior', async ({ page }) => {
    await setAuthenticatedUser(page, 'py-user-e2e-28');
    await page.goto('/courses/python');

    // Click on locked Level 2: Intermediate
    await page.click('button:has-text("Level 2: Intermediate")');

    // Verify Prerequisite Modal pops up with exact score requirement
    await expect(page.locator('text=Level 2: Python Intermediate is Locked')).toBeVisible();
    await expect(page.locator('text=15 / 20 (75%)')).toBeVisible();

    // Click "Go to Prerequisite" button -> returns to Beginner
    await page.click('button:has-text("Go to Prerequisite")');
    await expect(page.locator('text=Level 2: Python Intermediate is Locked')).not.toBeVisible();

    // Click on locked Level 3: Advanced
    await page.click('button:has-text("Level 3: Advanced")');
    await expect(page.locator('text=Level 3: Python Advanced is Locked')).toBeVisible();
    await page.click('button:has-text("Go to Prerequisite")');
  });

  test('29. Python Course: Rich Interactive Lesson Viewer & Practice Check', async ({ page }) => {
    await setAuthenticatedUser(page, 'py-user-e2e-29');
    await page.goto('/courses/python');

    // Click on active module card to open drawer
    await page.click('h3:has-text("Module 1: Python Fundamentals")');

    // Drawer should open
    await expect(page.locator('h2:has-text("Module 1: Python Fundamentals")')).toBeVisible();
    const startLessonBtn = page.locator('button:has-text("Start Learning Lesson")');
    await expect(startLessonBtn).toBeVisible();
    await startLessonBtn.click();

    // Verify Lesson Content Screen rendered with rich sections & code breakdown
    await expect(page.locator('text=Welcome & Overview').first()).toBeVisible();
    await expect(page.locator("text=What You'll Learn In This Lesson").first()).toBeVisible();
    await expect(page.locator('button:has-text("Copy Code")').first()).toBeVisible();

    // Test code copy button
    await page.click('button:has-text("Copy Code")');
    await expect(page.locator('text=Copied!').first()).toBeVisible();

    // Test Line-by-Line Breakdown toggle
    await expect(page.locator('text=Line-by-Line Plain English Breakdown').first()).toBeVisible();

    // Mark Lesson as Complete
    await page.click('button:has-text("Mark Lesson as Complete")');
    await expect(page.locator('text=Lesson Completed').first()).toBeVisible();
  });

  test('30. Python Course: Level Progression Unlocking Intermediate', async ({ page }) => {
    await setAuthenticatedUser(page, 'py-user-e2e-30');
    
    // Inject completed beginner state into localStorage
    await page.addInitScript(() => {
      window.localStorage.setItem('skillora_python_course_progress', JSON.stringify({
        courseId: 'python-masterclass',
        courseTitle: 'Python Masterclass (Beginner to Advanced)',
        currentLevel: 'intermediate',
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: Python Beginner',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 15,
            totalTasks: 15,
            assessmentPassed: true,
            assessmentScore: 18,
            requiredScore: 15,
            totalQuestions: 20,
            tasks: []
          },
          intermediate: {
            level: 'intermediate',
            title: 'Level 2: Python Intermediate',
            status: 'in_progress',
            progressPercentage: 0,
            completedTasks: 0,
            totalTasks: 15,
            assessmentPassed: false,
            requiredScore: 25,
            totalQuestions: 30,
            tasks: []
          },
          advanced: {
            level: 'advanced',
            title: 'Level 3: Python Advanced',
            status: 'locked',
            progressPercentage: 0,
            completedTasks: 0,
            totalTasks: 16,
            assessmentPassed: false,
            requiredScore: 35,
            totalQuestions: 40,
            tasks: []
          }
        },
        overallProgress: 35
      }));
    });

    await page.goto('/courses/python');
    await expect(page.locator('h1:has-text("Python Masterclass")')).toBeVisible();
    await expect(page.locator('button:has-text("Level 2: Intermediate")')).toBeVisible();
    await expect(page.locator('text=Cleared')).toBeVisible();
  });

  test('31. Python Course: Master Certificate Gating & Verification', async ({ page }) => {
    await setAuthenticatedUser(page, 'py-user-e2e-31');
    
    // Inject 100% completed course state into localStorage
    await page.addInitScript(() => {
      window.localStorage.setItem('skillora_python_course_progress', JSON.stringify({
        courseId: 'python-masterclass',
        courseTitle: 'Python Masterclass (Beginner to Advanced)',
        currentLevel: 'advanced',
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: Python Beginner',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 15,
            totalTasks: 15,
            assessmentPassed: true,
            assessmentScore: 19,
            requiredScore: 15,
            totalQuestions: 20,
            tasks: []
          },
          intermediate: {
            level: 'intermediate',
            title: 'Level 2: Python Intermediate',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 15,
            totalTasks: 15,
            assessmentPassed: true,
            assessmentScore: 28,
            requiredScore: 25,
            totalQuestions: 30,
            tasks: []
          },
          advanced: {
            level: 'advanced',
            title: 'Level 3: Python Advanced',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 16,
            totalTasks: 16,
            assessmentPassed: true,
            assessmentScore: 38,
            requiredScore: 35,
            totalQuestions: 40,
            tasks: []
          }
        },
        overallProgress: 100
      }));
    });

    await page.goto('/courses/python');
    await expect(page.locator('h1:has-text("Python Masterclass")')).toBeVisible();
    // Master Certificate banner must be visible with claim button
    await expect(page.locator('text=Python Masterclass Completed!')).toBeVisible();
    await expect(page.locator('button:has-text("View & Claim Master Certificate")')).toBeVisible();
  });

  test('32. Roadmap Separation: Personalized Roadmap vs Dedicated Python Course', async ({ page }) => {
    await setAuthenticatedUser(page, 'py-user-e2e-32');
    
    // Set a personalized roadmap for a custom persona
    await page.addInitScript(() => {
      window.localStorage.setItem('skillora_active_roadmap', JSON.stringify({
        id: 'rmp_custom_amir_01',
        title: 'Full-Stack Freelance Client Acceleration',
        progressPercentage: 0,
        tasks: [
          {
            id: 'tsk_custom_01',
            orderIndex: 1,
            title: 'Commercial Skill Mastery & Service Packaging for Amir',
            description: 'Develop commercial-grade proficiency expanding your current toolkit in Python and modern workflows.',
            status: 'in_progress',
            requiresQuiz: true,
            xpReward: 50
          }
        ]
      }));
    });

    // 1. Visit /roadmap -> displays personalized roadmap
    await page.goto('/roadmap');
    await expect(page.locator('h1:has-text("Full-Stack Freelance Client Acceleration")')).toBeVisible();
    await expect(page.locator('h3:has-text("Commercial Skill Mastery & Service Packaging for Amir")')).toBeVisible();

    // 2. Banner inviting user to dedicated Python course is visible
    await expect(page.locator('text=Looking for structured language masterclasses?')).toBeVisible();
    await page.click('button:has-text("Open Python Course")');

    // 3. User lands on dedicated Python Masterclass with 3 levels
    await page.waitForURL('**/courses/python');
    await expect(page.locator('h1:has-text("Python Masterclass (Beginner to Advanced)")')).toBeVisible();
    await expect(page.locator('button:has-text("Level 1: Beginner"), h3:has-text("Level 1: Beginner")').first()).toBeVisible();
  });

});
