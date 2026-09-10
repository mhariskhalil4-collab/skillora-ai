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

  resetPassword: async (email: string): Promise<{ message: string }> => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw new Error(error.message);
    return { message: `Reset link sent to ${email}` };
  },

  logout: async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
  },
};
