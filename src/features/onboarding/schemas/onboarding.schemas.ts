import { z } from 'zod';

export const onboardingSchema = z.object({
  userType: z.enum(['university_student', 'freelancer', 'career_changer'], {
    required_error: "Please select a path.",
  }),
  currentSkills: z.array(z.string()).min(1, "Select at least one current skill."),
  skillLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  targetGoal: z.string().min(3, "Please specify your target goal or role."),
});

export type OnboardingData = z.infer<typeof onboardingSchema>;
