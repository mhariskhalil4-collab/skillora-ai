import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export const SupabaseConnectionCheck: React.FC = () => {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Query auth status from Supabase to verify endpoint reachability and valid anon key
        const { error } = await supabase.auth.getSession();

        if (error) {
          throw error;
        }

        setStatus('connected');
      } catch (err: any) {
        setStatus('error');
        setErrorMessage(err.message || 'Failed to connect to Supabase.');
      }
    };

    testConnection();
  }, []);

  if (status === 'checking') {
    return (
      <div className="p-4 bg-[color:var(--color-bg-card)] border border-border rounded-xl text-xs font-mono text-[color:var(--text-secondary)]">
        Testing connection to Supabase...
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="p-4 bg-red-500/10 border border-red-500/40 rounded-xl text-red-500 text-xs font-mono flex items-center gap-2">
        <XCircleIcon className="w-5 h-5 flex-shrink-0" />
        <span>Supabase Connection Failed: {errorMessage}</span>
      </div>
    );
  }

  return (
    <div className="p-4 bg-success/10 border border-success/30 rounded-xl text-success text-xs font-mono flex items-center gap-2">
      <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
      <span>Supabase Connected Successfully: Ready for schema migration.</span>
    </div>
  );
};
