import { createClient } from '@supabase/supabase-js';

// For Vite projects, use import.meta.env instead of process.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type for the contact form data that matches the Supabase table
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
