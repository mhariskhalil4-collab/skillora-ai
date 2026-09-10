import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingLayout } from './OnboardingLayout';
import { LoadingScreen } from './LoadingScreen';
import { OnboardingData } from '../schemas/onboarding.schemas';
import { OnboardingService } from '../services/onboarding.service';
import { Button } from '@/components/elements/Button';
import { Input } from '@/components/forms/Input';
import { Card } from '@/components/data-display/Card';
import { cn } from '@/utils/cn';

export const OnboardingWizard: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<OnboardingData>>({
    currentSkills: []
  });
  const [goalInput, setGoalInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const updateData = (data: Partial<OnboardingData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    nextStep();
  };

  const handleGenerateRoadmap = async (targetGoal: string) => {
    const completeData = { ...formData, targetGoal } as OnboardingData;
    setFormData(completeData);
    setIsGenerating(true);

    try {
      await OnboardingService.generateRoadmap(completeData);
      navigate('/dashboard');
    } catch (error) {
      console.error("Failed to generate roadmap", error);
      setIsGenerating(false);
    }
  };

  if (isGenerating) {
    return <LoadingScreen targetGoal={formData.targetGoal || goalInput || "Professional"} skillsCount={formData.currentSkills?.length || 0} />;
  }

  // --- Step 1: User Type ---
  if (step === 1) return (
    <OnboardingLayout currentStep={1} totalSteps={4}>
      <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-3 text-[color:var(--text-primary)]">
        What describes you best?
      </h1>
      <p className="text-[color:var(--text-secondary)] mb-8 font-body">
        This helps us tailor the pacing of your curriculum.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {[
          { id: 'university_student', label: 'University Student', desc: 'Bridging academia & modern job tech.' },
          { id: 'freelancer', label: 'Freelancer', desc: 'Upskilling for high-ticket client demands.' },
          { id: 'career_changer', label: 'Career Changer', desc: 'Pivoting efficiently into a new industry.' }
        ].map((type) => (
          <Card 
            key={type.id} 
            className="cursor-pointer hover:border-brand hover:shadow-ai-glow transition-all text-left flex flex-col justify-between" 
            onClick={() => updateData({ userType: type.id as any })}
          >
            <div>
              <h3 className="font-heading font-semibold text-lg text-[color:var(--text-primary)] mb-2">{type.label}</h3>
              <p className="text-sm text-[color:var(--text-secondary)]">{type.desc}</p>
            </div>
            <div className="mt-6 text-brand font-medium text-sm">Select →</div>
          </Card>
        ))}
      </div>
    </OnboardingLayout>
  );

  // --- Step 2: Current Skills ---
  if (step === 2) {
    const popularSkills = ["Python", "Shopify Liquid", "Meta Ads", "SEO", "Prompt Engineering", "HTML/CSS", "3D Animation", "JavaScript"];
    const selected = formData.currentSkills || [];

    const toggleSkill = (skill: string) => {
      const updated = selected.includes(skill) 
        ? selected.filter(s => s !== skill) 
        : [...selected, skill];
      setFormData(prev => ({ ...prev, currentSkills: updated }));
    };

    return (
      <OnboardingLayout currentStep={2} totalSteps={4} onBack={prevStep}>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-3 text-[color:var(--text-primary)]">
          What skills do you already have?
        </h1>
        <p className="text-[color:var(--text-secondary)] mb-8 font-body">
          Select all that apply so the AI can skip the foundational fluff.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10 w-full max-w-lg mx-auto">
          {popularSkills.map(skill => {
            const isSelected = selected.includes(skill);
            return (
              <button 
                key={skill} 
                onClick={() => toggleSkill(skill)}
                className={cn(
                  "px-4 py-2.5 rounded-full font-mono text-sm transition-all border",
                  isSelected 
                    ? 'bg-brand/20 border-brand text-brand shadow-ai-glow font-semibold' 
                    : 'bg-[color:var(--color-bg-card)] border-border text-[color:var(--text-primary)] hover:border-brand/50'
                )}
              >
                {skill}
              </button>
            );
          })}
        </div>

        <Button 
          variant="primary" 
          disabled={selected.length === 0} 
          onClick={nextStep}
          className="w-full sm:w-auto px-10"
        >
          Continue
        </Button>
      </OnboardingLayout>
    );
  }

  // --- Step 3: Skill Level ---
  if (step === 3) return (
    <OnboardingLayout currentStep={3} totalSteps={4} onBack={prevStep}>
      <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-3 text-[color:var(--text-primary)]">
        What is your overall proficiency?
      </h1>
      <p className="text-[color:var(--text-secondary)] mb-8 font-body">
        This calibrates the depth of your first study nodes.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
        {[
          { id: 'beginner', title: 'Beginner', desc: 'Starting fresh or exploring core concepts.' },
          { id: 'intermediate', title: 'Intermediate', desc: 'Comfortable building independently, looking to specialize.' },
          { id: 'advanced', title: 'Advanced', desc: 'Experienced practitioner seeking high-end architecture and mastery.' }
        ].map((level) => (
          <button
            key={level.id}
            onClick={() => updateData({ skillLevel: level.id as any })}
            className="flex flex-col text-left p-5 rounded-xl border border-border bg-[color:var(--color-bg-card)] hover:border-brand hover:shadow-glass transition-all group"
          >
            <span className="font-heading font-bold text-lg text-[color:var(--text-primary)] group-hover:text-brand transition-colors capitalize">
              {level.title}
            </span>
            <span className="text-sm text-[color:var(--text-secondary)] mt-1">
              {level.desc}
            </span>
          </button>
        ))}
      </div>
    </OnboardingLayout>
  );

  // --- Step 4: Target Goal ---
  if (step === 4) {
    return (
      <OnboardingLayout currentStep={4} totalSteps={4} onBack={prevStep}>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-3 text-[color:var(--text-primary)]">
          What is your ultimate goal?
        </h1>
        <p className="text-[color:var(--text-secondary)] mb-8 font-body">
          Be specific. This serves as the permanent destination for your AI Career GPS.
        </p>
        
        <div className="w-full max-w-md mx-auto mb-8 text-left">
          <Input 
            autoFocus
            value={goalInput}
            onChange={(e) => setGoalInput(e.target.value)}
            placeholder="e.g., AI E-commerce Developer or Senior Data Analyst" 
          />
        </div>

        <Button 
          variant="primary" 
          disabled={goalInput.trim().length < 3} 
          onClick={() => handleGenerateRoadmap(goalInput)}
          className="w-full sm:w-auto px-10"
        >
          Generate My Roadmap ✨
        </Button>
      </OnboardingLayout>
    );
  }

  return null;
};
