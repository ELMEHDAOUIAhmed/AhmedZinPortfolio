import { createClient } from '@supabase/supabase-js';

// For Vite projects, use import.meta.env instead of process.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const isSupabaseConfigured = Boolean(
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
);

if (!isSupabaseConfigured) {
  console.warn('Supabase environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) are missing. Contact form will use email fallback.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type for the contact form data that matches the Supabase table
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

