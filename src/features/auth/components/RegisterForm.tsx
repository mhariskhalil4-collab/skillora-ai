import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterFormValues } from '../schemas/auth.schemas';
import { AuthService } from '../services/auth.service';
import { useAuthStore } from '../store/auth.store';
import { AuthLayout } from './AuthLayout';
import { Input } from '@/components/forms/Input';
import { Button } from '@/components/elements/Button';

export const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
  const setAuth = useAuthStore((state) => state.setAuth);

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      setIsLoading(true);
      setServerError('');
      setInfoMessage('');
      const response = await AuthService.register(data);
      
      setAuth(response.token, response.user);
      
      navigate('/onboarding');
    } catch (error: any) {
      const message = error.message || 'Registration failed.';
      // Supabase project has email confirmation on — no session yet, not a real error
      if (message.toLowerCase().includes('check your email')) {
        setInfoMessage(message);
      } else {
        setServerError(message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Create an account" subtitle="Start building your AI skill roadmap today.">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        {serverError && (
          <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-500 rounded-md text-sm font-medium">
            {serverError}
          </div>
        )}

        {infoMessage && (
          <div className="p-3 bg-brand/10 border border-brand/50 text-brand rounded-md text-sm font-medium">
            {infoMessage}
          </div>
        )}
        
        <Input 
          label="First Name" 
          placeholder="Alex" 
          error={errors.firstName?.message}
          {...register('firstName')} 
        />

        <Input 
          label="Email" 
          type="email" 
          placeholder="student@university.edu" 
          error={errors.email?.message}
          {...register('email')} 
        />

        <Input 
          label="Password" 
          type="password" 
          placeholder="••••••••" 
          error={errors.password?.message}
          {...register('password')} 
        />

        <div className="flex flex-col gap-2">
          <label className="text-sm font-heading font-medium text-[color:var(--text-secondary)]">
            I am a...
          </label>
          <select 
            {...register('role')} 
            className="w-full bg-[color:var(--color-bg-base)] border border-border rounded-lg py-2 px-3 text-[color:var(--text-primary)] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors appearance-none"
          >
            <option value="university_student">University Student</option>
            <option value="freelancer">Freelancer</option>
            <option value="career_changer">Career Changer</option>
          </select>
          {errors.role && <span className="text-xs text-red-500">{errors.role.message}</span>}
        </div>

        <Button type="submit" variant="primary" className="w-full mt-6" isLoading={isLoading}>
          Create Account
        </Button>

        <p className="text-center text-sm text-[color:var(--text-secondary)] mt-4">
          Already have an account?{' '}
          <button type="button" onClick={() => navigate('/auth/login')} className="text-brand font-medium hover:underline">
            Sign in
          </button>
        </p>
      </form>
    </AuthLayout>
  );
};
