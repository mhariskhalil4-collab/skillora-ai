import { LoginFormValues, RegisterFormValues } from '../schemas/auth.schemas';
import { supabase } from '@/lib/supabase';

export interface AuthUser {
  id: string;
  email: string;
  firstName?: string;
  role?: string;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

/**
 * Translates low-level Supabase Auth errors into user-friendly guidance.
 */
export function formatAuthError(error: any, context: 'login' | 'register' | 'reset'): string {
  if (!error) return 'An unexpected error occurred. Please try again.';
  const msg = typeof error === 'string' ? error : error.message || '';
  const lower = msg.toLowerCase();

  // Supabase SMTP / confirmation rate limiting (HTTP 429)
  if (lower.includes('rate limit') || lower.includes('over_email_send_rate_limit') || error.status === 429) {
    return 'Too many email requests sent. Please wait a few minutes before trying again or use your existing account.';
  }

  // Duplicate user registration
  if (lower.includes('user already registered') || lower.includes('already registered') || lower.includes('already exists')) {
    return 'An account with this email address already exists. Please sign in instead.';
  }

  // Invalid password or email on sign in
  if (lower.includes('invalid login credentials') || lower.includes('invalid_credentials')) {
    return 'Invalid email or password. Please verify your credentials and try again.';
  }

  // Unconfirmed email
  if (lower.includes('email not confirmed')) {
    return 'Please check your inbox to confirm your email before signing in.';
  }

  // Password length
  if (lower.includes('password should be at least') || lower.includes('password is too short')) {
    return 'Password must be at least 8 characters long.';
  }

  return msg || (context === 'register' ? 'Registration failed. Please try again.' : 'Sign in failed. Please try again.');
}

export const AuthService = {
  login: async (data: LoginFormValues): Promise<AuthResponse> => {
    const cleanEmail = data.email.trim().toLowerCase();
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email: cleanEmail,
      password: data.password,
    });

    if (error) throw new Error(formatAuthError(error, 'login'));
    if (!authData.session || !authData.user) throw new Error('Sign in failed. Please try again.');

    // Pull profile fields (full_name) created by the DB trigger on signup
    const { data: profile } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', authData.user.id)
      .single();

    return {
      token: authData.session.access_token,
      user: {
        id: authData.user.id,
        email: authData.user.email ?? cleanEmail,
        firstName: profile?.full_name || authData.user.user_metadata?.full_name,
        role: authData.user.user_metadata?.role,
      },
    };
  },

  register: async (data: RegisterFormValues): Promise<AuthResponse> => {
    const cleanEmail = data.email.trim().toLowerCase();
    const cleanName = data.firstName.trim();

    const { data: authData, error } = await supabase.auth.signUp({
      email: cleanEmail,
      password: data.password,
      options: {
        data: {
          full_name: cleanName,
          role: data.role,
        },
      },
    });

    if (error) throw new Error(formatAuthError(error, 'register'));
    if (!authData.user) throw new Error('Registration failed. Please try again.');

    // No session yet if Supabase requires email confirmation
    if (!authData.session) {
      throw new Error('Account created — please check your email to confirm before logging in.');
    }

    return {
      token: authData.session.access_token,
      user: {
        id: authData.user.id,
        email: authData.user.email ?? cleanEmail,
        firstName: cleanName,
        role: data.role,
      },
    };
  },

  resetPassword: async (email: string, redirectTo?: string): Promise<{ message: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    const redirectUrl = redirectTo || `${window.location.origin}/auth/reset-password`;
    const { error } = await supabase.auth.resetPasswordForEmail(cleanEmail, {
      redirectTo: redirectUrl,
    });
    if (error) throw new Error(formatAuthError(error, 'reset'));
    return { message: `If an account exists for this email, you will receive password reset instructions.` };
  },

  updatePassword: async (password: string): Promise<{ message: string }> => {
    const { error } = await supabase.auth.updateUser({ password });
    if (error) throw new Error(error.message);
    return { message: 'Password has been updated successfully.' };
  },

  deleteAccount: async (): Promise<void> => {
    const { data: authData } = await supabase.auth.getUser();
    if (!authData.user) {
      throw new Error('No authenticated user session found.');
    }

    // Call secure PostgreSQL RPC function
    const { error } = await supabase.rpc('delete_user_account');
    if (error) {
      console.error('[AuthService] Error executing delete_user_account RPC:', error);
      throw new Error(error.message || 'Failed to delete account. Please try again.');
    }

    // Clear local storage data caches
    try {
      localStorage.removeItem('skillora_user_profile');
      localStorage.removeItem('skillora_user_projects');
      localStorage.removeItem('skillora_active_roadmap');
      localStorage.removeItem('skillora_portfolio_settings');
    } catch (_) {}

    // Sign out from Supabase Auth session
    await supabase.auth.signOut();
  },

  logout: async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
  },
};
