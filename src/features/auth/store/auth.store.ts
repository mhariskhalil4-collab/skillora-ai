import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '@/lib/supabase';

export interface User {
  id: string;
  email: string;
  firstName?: string;
  role?: string;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isHydrated: boolean;
  setAuth: (token: string, user: User) => void;
  logout: () => Promise<void>;
  setHydrated: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      isHydrated: false,
      setAuth: (token, user) => set({ token, user, isAuthenticated: true }),
      logout: async () => {
        await supabase.auth.signOut();
        set({ token: null, user: null, isAuthenticated: false });
      },
      setHydrated: (value) => set({ isHydrated: value }),
    }),
    {
      name: 'skillora-auth-storage',
    }
  )
);

/**
 * Keeps the store in sync with the actual Supabase session — handles page
 * refreshes and token expiry. Call once near the app root.
 */
export const initAuthListener = () => {
  supabase.auth.getSession().then(({ data }) => {
    if (data.session?.user) {
      useAuthStore.getState().setAuth(data.session.access_token, {
        id: data.session.user.id,
        email: data.session.user.email ?? '',
        firstName: data.session.user.user_metadata?.full_name,
        role: data.session.user.user_metadata?.role,
      });
    }
    useAuthStore.getState().setHydrated(true);
  });

  supabase.auth.onAuthStateChange((_event, session) => {
    if (session?.user) {
      useAuthStore.getState().setAuth(session.access_token, {
        id: session.user.id,
        email: session.user.email ?? '',
        firstName: session.user.user_metadata?.full_name,
        role: session.user.user_metadata?.role,
      });
    } else {
      useAuthStore.setState({ token: null, user: null, isAuthenticated: false });
    }
  });
};
