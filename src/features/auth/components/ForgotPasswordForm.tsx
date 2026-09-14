import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, ForgotPasswordValues } from '../schemas/auth.schemas';
import { AuthService } from '../services/auth.service';
import { AuthLayout } from './AuthLayout';
import { Input } from '@/components/forms/Input';
import { Button } from '@/components/elements/Button';
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export const ForgotPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordValues) => {
    try {
      setIsLoading(true);
      setServerError('');
      await AuthService.resetPassword(data.email);
      setIsSuccess(true);
    } catch (error: any) {
      console.error('[ForgotPasswordForm] Error requesting reset link:', error);
      // Safe generic message to prevent email enumeration or technical leakage
      setIsSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email and we'll send you recovery instructions."
    >
      {isSuccess ? (
        <div className="space-y-6 text-center animate-in fade-in duration-200">
          <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full mx-auto flex items-center justify-center">
            <CheckCircleIcon className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)]">
              Check Your Inbox
            </h3>
            <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed">
              If an account exists for that email, we've sent password reset instructions with a secure link.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => navigate('/auth/login')}
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Sign In
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {serverError && (
            <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-500 rounded-md text-sm font-medium">
              {serverError}
            </div>
          )}

          <Input
            label="Email Address"
            type="email"
            placeholder="student@university.edu"
            error={errors.email?.message}
            {...register('email')}
          />

          <Button
            type="submit"
            variant="primary"
            className="w-full mt-6"
            isLoading={isLoading}
          >
            Send Reset Link
          </Button>

          <p className="text-center text-sm text-[color:var(--text-secondary)] mt-6">
            Remember your password?{' '}
            <button
              type="button"
              onClick={() => navigate('/auth/login')}
              className="text-brand font-medium hover:underline cursor-pointer"
            >
              Sign in
            </button>
          </p>
        </form>
      )}
    </AuthLayout>
  );
};
