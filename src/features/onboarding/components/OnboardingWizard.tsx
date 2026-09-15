import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingLayout } from './OnboardingLayout';
import { LoadingScreen } from './LoadingScreen';
import { OnboardingData } from '../schemas/onboarding.schemas';
import { OnboardingService } from '../services/onboarding.service';
import { 
  UserType, 
  SKILL_CATEGORIES, 
  USER_TYPE_METADATA, 
  getSkillsForUserType 
} from '../config/skills.config';
import { Button } from '@/components/elements/Button';
import { Input } from '@/components/forms/Input';
import { Card } from '@/components/data-display/Card';
import { cn } from '@/utils/cn';

export const OnboardingWizard: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<OnboardingData>>({
    userType: 'university_student',
    currentSkills: [],
  });
  const [goalInput, setGoalInput] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const updateData = (data: Partial<OnboardingData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    nextStep();
  };

  const handleUserTypeSelect = (type: UserType) => {
    setFormData((prev) => ({
      ...prev,
      userType: type,
    }));
    nextStep();
  };

  const handleGenerateRoadmap = async (targetGoal: string) => {
    const completeData = { ...formData, targetGoal } as OnboardingData;
    setFormData(completeData);
    setIsGenerating(true);

    try {
      const result = await OnboardingService.generateRoadmap(completeData);
      if (result && result.id) {
        navigate(`/roadmap?id=${result.id}`);
      } else {
        navigate('/roadmap');
      }
    } catch (error) {
      console.error('Failed to generate roadmap', error);
      setIsGenerating(false);
    }
  };

  // Get curated skills for currently selected user type
  const curatedSkills = useMemo(() => {
    return getSkillsForUserType(formData.userType as UserType);
  }, [formData.userType]);

  // Filter skills by category and search query
  const filteredSkills = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return curatedSkills.filter((skill) => {
      const matchesCategory = query.length > 0 || activeCategory === 'All' || skill.category === activeCategory;
      const matchesSearch = query === '' || 
        skill.name.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [curatedSkills, activeCategory, searchQuery]);

  const selectedSkills = formData.currentSkills || [];

  const toggleSkill = (skillName: string) => {
    const updated = selectedSkills.includes(skillName)
      ? selectedSkills.filter((s) => s !== skillName)
      : [...selectedSkills, skillName];
    setFormData((prev) => ({ ...prev, currentSkills: updated }));
  };

  const handleSelectAllVisible = () => {
    const visibleNames = filteredSkills.map((s) => s.name);
    const combined = Array.from(new Set([...selectedSkills, ...visibleNames]));
    setFormData((prev) => ({ ...prev, currentSkills: combined }));
  };

  const handleClearSelection = () => {
    setFormData((prev) => ({ ...prev, currentSkills: [] }));
  };

  if (isGenerating) {
    return (
      <LoadingScreen
        targetGoal={formData.targetGoal || goalInput || 'Professional'}
        skillsCount={formData.currentSkills?.length || 0}
      />
    );
  }

  // --- Step 1: User Type ---
  if (step === 1) {
    const userTypes: UserType[] = ['university_student', 'freelancer', 'career_changer'];

    return (
      <OnboardingLayout currentStep={1} totalSteps={4}>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold mb-3">
            <span>✨</span> Personalized AI Curriculum
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-3 text-[color:var(--text-primary)]">
            What describes you best?
          </h1>
          <p className="text-[color:var(--text-secondary)] font-body text-base">
            Select your professional profile so our AI can curate skills, projects, and learning velocity specifically for your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl mx-auto mb-6">
          {userTypes.map((typeKey) => {
            const meta = USER_TYPE_METADATA[typeKey];
            const isSelected = formData.userType === typeKey;

            return (
              <Card
                key={typeKey}
                className={cn(
                  'cursor-pointer transition-all duration-300 text-left flex flex-col justify-between p-6 rounded-2xl border',
                  isSelected
                    ? 'border-brand bg-brand/5 shadow-ai-glow ring-1 ring-brand'
                    : 'border-border bg-[color:var(--color-bg-card)] hover:border-brand/60 hover:shadow-glass hover:-translate-y-1'
                )}
                onClick={() => handleUserTypeSelect(typeKey)}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">
                      {typeKey === 'university_student' ? '🎓' : typeKey === 'freelancer' ? '💼' : '🚀'}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-surface-raised border border-border text-[color:var(--text-secondary)] font-medium">
                      {typeKey === 'university_student' ? 'Academic' : typeKey === 'freelancer' ? 'Independent' : 'Transition'}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[color:var(--text-primary)] mb-1">
                    {meta.label}
                  </h3>
                  <p className="text-xs font-medium text-brand mb-2.5">
                    {meta.subtitle}
                  </p>
                  <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed mb-4">
                    {meta.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <div className="text-xs text-[color:var(--text-muted)] mb-2 font-mono">Strategy:</div>
                  <div className="text-xs text-[color:var(--text-secondary)] line-clamp-2 italic">
                    {meta.strategy}
                  </div>
                  <div className="mt-4 flex items-center text-brand font-semibold text-sm group">
                    <span>Select Profile</span>
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </OnboardingLayout>
    );
  }

  // --- Step 2: Dynamic Skills Selection by User Type ---
  if (step === 2) {
    const userTypeKey = (formData.userType as UserType) || 'university_student';
    const currentMeta = USER_TYPE_METADATA[userTypeKey];

    return (
      <OnboardingLayout currentStep={2} totalSteps={4} onBack={prevStep}>
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold mb-2">
            <span>{userTypeKey === 'university_student' ? '🎓' : userTypeKey === 'freelancer' ? '💼' : '🚀'}</span>
            <span>Curated for {currentMeta.label}s</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-heading font-bold mb-2 text-[color:var(--text-primary)]">
            What skills do you already have?
          </h1>
          <p className="text-[color:var(--text-secondary)] text-sm sm:text-base font-body max-w-xl mx-auto mb-3">
            Select the skills you already know so your personalized roadmap can bypass basic theory and focus on your growth gap.
          </p>

          {/* Strategy Path Banner */}
          <div className="inline-block bg-[color:var(--color-bg-card)] border border-border/80 px-4 py-2 rounded-xl text-xs text-[color:var(--text-secondary)] shadow-sm">
            <span className="font-semibold text-brand mr-1.5">Roadmap Emphasis:</span>
            <span>{currentMeta.strategy}</span>
          </div>
        </div>

        {/* Category Tabs & Quick Search */}
        <div className="w-full max-w-4xl mx-auto mb-5 space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Horizontal Scrollable Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 w-full sm:w-auto scrollbar-none">
              <button
                type="button"
                onClick={() => setActiveCategory('All')}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border',
                  activeCategory === 'All'
                    ? 'bg-brand text-white border-brand shadow-sm font-semibold'
                    : 'bg-[color:var(--color-bg-card)] border-border text-[color:var(--text-secondary)] hover:border-brand/40'
                )}
              >
                All ({curatedSkills.length})
              </button>
              {SKILL_CATEGORIES.map((cat) => {
                const count = curatedSkills.filter((s) => s.category === cat).length;
                if (count === 0) return null;
                const isCatActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border',
                      isCatActive
                        ? 'bg-brand text-white border-brand shadow-sm font-semibold'
                        : 'bg-[color:var(--color-bg-card)] border-border text-[color:var(--text-secondary)] hover:border-brand/40'
                    )}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>

            {/* Quick Search */}
            <div className="w-full sm:w-56">
              <Input
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-xs h-9"
              />
            </div>
          </div>

          {/* Selection Bar / Counters */}
          <div className="flex items-center justify-between text-xs px-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-[color:var(--text-primary)]">
                Selected: <span className="text-brand font-bold">{selectedSkills.length}</span> skills
              </span>
              {selectedSkills.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearSelection}
                  className="text-[color:var(--text-muted)] hover:text-red-400 transition-colors underline ml-2"
                >
                  Clear all
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={handleSelectAllVisible}
              className="text-brand hover:underline font-medium"
            >
              Select visible ({filteredSkills.length})
            </button>
          </div>
        </div>

        {/* Dynamic Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 w-full max-w-4xl mx-auto mb-8 max-h-[48vh] overflow-y-auto pr-1">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkills.includes(skill.name);

            return (
              <div
                key={skill.id}
                onClick={() => toggleSkill(skill.name)}
                className={cn(
                  'cursor-pointer p-4 rounded-xl border transition-all duration-200 text-left flex flex-col justify-between group select-none',
                  isSelected
                    ? 'bg-brand/10 border-brand shadow-ai-glow ring-1 ring-brand/60'
                    : 'bg-[color:var(--color-bg-card)] border-border hover:border-brand/50 hover:bg-surface-raised'
                )}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className={cn(
                      'font-heading font-semibold text-sm transition-colors',
                      isSelected ? 'text-brand' : 'text-[color:var(--text-primary)] group-hover:text-brand'
                    )}>
                      {skill.name}
                    </h3>
                    <div className={cn(
                      'w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold transition-all border shrink-0',
                      isSelected
                        ? 'bg-brand text-white border-brand'
                        : 'border-border bg-surface text-transparent group-hover:border-brand/40'
                    )}>
                      ✓
                    </div>
                  </div>

                  <p className="text-xs text-[color:var(--text-secondary)] leading-relaxed mb-3 line-clamp-2">
                    {skill.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-2 pt-2 border-t border-border/40 text-[11px]">
                  <span className="text-[color:var(--text-muted)] font-mono">
                    {skill.category}
                  </span>
                  {skill.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-brand/15 text-brand font-medium text-[10px]">
                      {skill.badge}
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          {filteredSkills.length === 0 && (
            <div className="col-span-full py-10 text-center text-[color:var(--text-secondary)] bg-[color:var(--color-bg-card)] rounded-xl border border-dashed border-border">
              <p className="text-sm mb-2">No matching skills found.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="text-xs text-brand hover:underline font-medium"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Continue Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto">
          <Button
            variant="primary"
            disabled={selectedSkills.length === 0}
            onClick={nextStep}
            className="w-full sm:w-auto px-12 py-3 shadow-ai-glow"
          >
            {selectedSkills.length === 0 ? 'Select at least 1 skill' : `Continue with ${selectedSkills.length} skill${selectedSkills.length > 1 ? 's' : ''} →`}
          </Button>
        </div>
      </OnboardingLayout>
    );
  }

  // --- Step 3: Skill Level ---
  if (step === 3) {
    const userTypeKey = (formData.userType as UserType) || 'university_student';

    return (
      <OnboardingLayout currentStep={3} totalSteps={4} onBack={prevStep}>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-3 text-[color:var(--text-primary)]">
            What is your current proficiency?
          </h1>
          <p className="text-[color:var(--text-secondary)] font-body text-base">
            This calibrates the depth and technical complexity of your initial roadmap milestones.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
          {[
            {
              id: 'beginner',
              title: 'Beginner',
              desc: userTypeKey === 'university_student'
                ? 'Building academic foundations and core syntax.'
                : userTypeKey === 'freelancer'
                ? 'Starting out, seeking first commercial skill set.'
                : 'Pivoting from scratch into a brand-new career domain.',
            },
            {
              id: 'intermediate',
              title: 'Intermediate',
              desc: userTypeKey === 'university_student'
                ? 'Comfortable with coursework, ready for industry projects.'
                : userTypeKey === 'freelancer'
                ? 'Completed basic gigs, looking for high-ticket client specializations.'
                : 'Possess transferable domain experience, building targeted technical skills.',
            },
            {
              id: 'advanced',
              title: 'Advanced',
              desc: userTypeKey === 'university_student'
                ? 'Seeking senior competitive advantages, capstones & job offers.'
                : userTypeKey === 'freelancer'
                ? 'Agency-level execution, scalable systems & premium contracts.'
                : 'Accelerated executive pivot with extensive leadership & domain mastery.',
            },
          ].map((level) => (
            <button
              key={level.id}
              onClick={() => updateData({ skillLevel: level.id as any })}
              className="flex flex-col text-left p-5 rounded-2xl border border-border bg-[color:var(--color-bg-card)] hover:border-brand hover:shadow-glass transition-all group"
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-heading font-bold text-lg text-[color:var(--text-primary)] group-hover:text-brand transition-colors capitalize">
                  {level.title}
                </span>
                <span className="text-brand text-xs font-semibold group-hover:translate-x-1 transition-transform">
                  Select →
                </span>
              </div>
              <span className="text-sm text-[color:var(--text-secondary)] mt-1.5 leading-relaxed">
                {level.desc}
              </span>
            </button>
          ))}
        </div>
      </OnboardingLayout>
    );
  }

  // --- Step 4: Target Goal ---
  if (step === 4) {
    const userTypeKey = (formData.userType as UserType) || 'university_student';

    const suggestions: Record<UserType, string[]> = {
      university_student: [
        'Junior Full-Stack Developer',
        'AI Prompt Engineer & Python Specialist',
        'Digital Marketing Analyst',
        'Shopify Store Developer',
      ],
      freelancer: [
        'High-Converting Meta & Google Ads Specialist',
        'Shopify Store Developer & Theme Architect',
        'SEO & Performance Marketing Consultant',
        'Full-Stack Freelance Web Developer',
      ],
      career_changer: [
        'Full-Stack Web Developer',
        'E-Commerce Growth Consultant',
        'Digital Marketing Manager',
        'AI Automation Specialist',
      ],
    };

    const currentSuggestions = suggestions[userTypeKey] || suggestions.university_student;

    return (
      <OnboardingLayout currentStep={4} totalSteps={4} onBack={prevStep}>
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold mb-2">
            <span>🎯</span> Final Calibration
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-3 text-[color:var(--text-primary)]">
            What is your ultimate goal?
          </h1>
          <p className="text-[color:var(--text-secondary)] font-body text-sm sm:text-base">
            Specify the exact target role or objective for your AI Career GPS and custom roadmap.
          </p>
        </div>

        <div className="w-full max-w-lg mx-auto mb-6 text-left">
          <Input
            autoFocus
            value={goalInput}
            onChange={(e) => setGoalInput(e.target.value)}
            placeholder="e.g., Shopify Store Developer or Full-Stack Web Developer"
            className="text-base py-3"
          />

          {/* Persona Suggestion Chips */}
          <div className="mt-4">
            <span className="text-xs font-medium text-[color:var(--text-muted)] block mb-2">
              Suggested for {USER_TYPE_METADATA[userTypeKey].label}s:
            </span>
            <div className="flex flex-wrap gap-2">
              {currentSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setGoalInput(suggestion)}
                  className="px-3 py-1.5 rounded-lg bg-[color:var(--color-bg-card)] border border-border text-xs text-[color:var(--text-secondary)] hover:border-brand hover:text-brand transition-all"
                >
                  + {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            variant="primary"
            disabled={goalInput.trim().length < 3}
            onClick={() => handleGenerateRoadmap(goalInput)}
            className="w-full sm:w-auto px-10 py-3 shadow-ai-glow text-base font-semibold"
          >
            Generate My Personalized Roadmap ✨
          </Button>
        </div>
      </OnboardingLayout>
    );
  }

  return null;
};
