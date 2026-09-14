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

export const AuthService = {
  login: async (data: LoginFormValues): Promise<AuthResponse> => {
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) throw new Error(error.message);
    if (!authData.session || !authData.user) throw new Error('Login failed. Please try again.');

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
        email: authData.user.email ?? data.email,
        firstName: profile?.full_name || authData.user.user_metadata?.full_name,
        role: authData.user.user_metadata?.role,
      },
    };
  },

  register: async (data: RegisterFormValues): Promise<AuthResponse> => {
    const { data: authData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.firstName,
          role: data.role,
        },
      },
    });

    if (error) throw new Error(error.message);
    if (!authData.user) throw new Error('Registration failed. Please try again.');

    // No session yet if Supabase requires email confirmation
    if (!authData.session) {
      throw new Error('Account created — please check your email to confirm before logging in.');
    }

    return {
      token: authData.session.access_token,
      user: {
        id: authData.user.id,
        email: authData.user.email ?? data.email,
        firstName: data.firstName,
        role: data.role,
      },
    };
  },

  resetPassword: async (email: string, redirectTo?: string): Promise<{ message: string }> => {
    const redirectUrl = redirectTo || `${window.location.origin}/auth/reset-password`;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: redirectUrl,
    });
    if (error) throw new Error(error.message);
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

