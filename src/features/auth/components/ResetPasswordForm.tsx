import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema, ResetPasswordValues } from '../schemas/auth.schemas';
import { AuthService } from '../services/auth.service';
import { AuthLayout } from './AuthLayout';
import { Input } from '@/components/forms/Input';
import { Button } from '@/components/elements/Button';
import { supabase } from '@/lib/supabase';
import { CheckCircleIcon, ExclamationTriangleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export const ResetPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSessionValid, setIsSessionValid] = useState<boolean | null>(null);
  const [sessionErrorMessage, setSessionErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
  });

  // Verify recovery session or hash token
  useEffect(() => {
    // Check URL hash for direct error parameters from Supabase (e.g., otp_expired)
    const hash = window.location.hash || location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.replace(/^#/, ''));
      const errorDescription = params.get('error_description');
      const errorCode = params.get('error_code');

      if (errorCode || errorDescription) {
        setIsSessionValid(false);
        setSessionErrorMessage(
          errorDescription || 'The password reset link is invalid or has expired. Please request a new link.'
        );
        return;
      }
    }

    // Check if Supabase session is available
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setIsSessionValid(true);
      } else {
        // Also listen for PASSWORD_RECOVERY event
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
          if (event === 'PASSWORD_RECOVERY' || (event === 'SIGNED_IN' && session)) {
            setIsSessionValid(true);
          }
        });

        // If no session is resolved within 2.5 seconds, mark as invalid/expired
        const timer = setTimeout(() => {
          setIsSessionValid((current) => {
            if (current === null) {
              setSessionErrorMessage(
                'No active password recovery session was found. The link may have expired or already been used.'
              );
              return false;
            }
            return current;
          });
        }, 2500);

        return () => {
          authListener.subscription.unsubscribe();
          clearTimeout(timer);
        };
      }
    });
  }, [location]);

  const onSubmit = async (data: ResetPasswordValues) => {
    try {
      setIsLoading(true);
      setServerError('');
      await AuthService.updatePassword(data.password);
      setIsSuccess(true);

      // Sign out recovery session and redirect to login after short delay
      setTimeout(async () => {
        await supabase.auth.signOut();
        navigate('/auth/login', {
          state: { message: 'Your password has been updated. Please sign in with your new password.' },
        });
      }, 2500);
    } catch (error: any) {
      console.error('[ResetPasswordForm] Error updating password:', error);
      setServerError(error.message || 'Failed to update password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Loading state while checking token
  if (isSessionValid === null) {
    return (
      <AuthLayout
        title="Verifying Recovery Link"
        subtitle="Please wait while we verify your password reset link..."
      >
        <div className="flex flex-col items-center justify-center py-10 space-y-4">
          <div className="w-10 h-10 border-3 border-brand border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-mono text-[color:var(--text-secondary)]">
            Validating security credentials...
          </p>
        </div>
      </AuthLayout>
    );
  }

  // Invalid or expired recovery token state
  if (isSessionValid === false) {
    return (
      <AuthLayout
        title="Invalid or Expired Link"
        subtitle="This password recovery link is no longer valid."
      >
        <div className="space-y-6 text-center animate-in fade-in duration-200">
          <div className="w-12 h-12 bg-red-500/10 border border-red-500/30 text-red-500 rounded-full mx-auto flex items-center justify-center">
            <ExclamationTriangleIcon className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed">
              {sessionErrorMessage || 'The password reset link is invalid or has expired. Please request a new one.'}
            </p>
          </div>
          <div className="space-y-3">
            <Button
              type="button"
              variant="primary"
              className="w-full"
              onClick={() => navigate('/auth/forgot-password')}
            >
              Request New Reset Link
            </Button>
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
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Set New Password"
      subtitle="Choose a secure password for your Skillora AI account."
    >
      {isSuccess ? (
        <div className="space-y-6 text-center animate-in fade-in duration-200">
          <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full mx-auto flex items-center justify-center">
            <CheckCircleIcon className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)]">
              Password Updated!
            </h3>
            <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed">
              Your password has been changed successfully. Redirecting you to sign in...
            </p>
          </div>
          <Button
            type="button"
            variant="primary"
            className="w-full"
            onClick={() => navigate('/auth/login')}
          >
            Sign In Now
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
            label="New Password"
            type="password"
            placeholder="••••••••"
            error={errors.password?.message}
            {...register('password')}
          />

          <Input
            label="Confirm New Password"
            type="password"
            placeholder="••••••••"
            error={errors.confirmPassword?.message}
            {...register('confirmPassword')}
          />

          <Button
            type="submit"
            variant="primary"
            className="w-full mt-6"
            isLoading={isLoading}
          >
            Update Password
          </Button>

          <p className="text-center text-sm text-[color:var(--text-secondary)] mt-6">
            <button
              type="button"
              onClick={() => navigate('/auth/login')}
              className="text-brand font-medium hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeftIcon className="w-3.5 h-3.5" /> Back to Sign In
            </button>
          </p>
        </form>
      )}
    </AuthLayout>
  );
};
