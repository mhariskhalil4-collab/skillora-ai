import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormValues } from '../schemas/auth.schemas';
import { AuthService } from '../services/auth.service';
import { useAuthStore } from '../store/auth.store';
import { AuthLayout } from './AuthLayout';
import { Input } from '@/components/forms/Input';
import { Button } from '@/components/elements/Button';

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const setAuth = useAuthStore((state) => state.setAuth);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true);
      setServerError('');
      const response = await AuthService.login(data);
      
      setAuth(response.token, response.user);
      
      navigate('/dashboard');
    } catch (error: any) {
      setServerError(error.message || 'Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Welcome back" subtitle="Enter your details to access your roadmap.">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
        {serverError && (
          <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-500 rounded-md text-sm font-medium">
            {serverError}
          </div>
        )}

        <Input 
          label="Email" 
          type="email" 
          placeholder="student@university.edu" 
          error={errors.email?.message}
          {...register('email')} 
        />

        <div>
          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••" 
            error={errors.password?.message}
            {...register('password')} 
          />
          <div className="flex justify-end mt-2">
            <a href="#forgot" className="text-sm text-brand hover:underline font-medium transition-colors">
              Forgot password?
            </a>
          </div>
        </div>

        <Button type="submit" variant="primary" className="w-full mt-6" isLoading={isLoading}>
          Sign In
        </Button>

        <p className="text-center text-sm text-[color:var(--text-secondary)] mt-6">
          Don't have an account?{' '}
          <button type="button" onClick={() => navigate('/auth/register')} className="text-brand font-medium hover:underline">
            Sign up
          </button>
        </p>
      </form>
    </AuthLayout>
  );
};
