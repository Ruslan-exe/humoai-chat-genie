// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gfpvjugmzmhglkkgbelk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmcHZqdWdtem1oZ2xra2diZWxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4Mjc5MzYsImV4cCI6MjA2ODQwMzkzNn0.wGNa66swZiCz2R92wk3CA36qsFaMQjcZ1zpyj7tkTd4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});