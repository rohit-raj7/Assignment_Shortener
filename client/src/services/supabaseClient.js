import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://ivegogdojalfrksaeqsz.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2ZWdvZ2RvamFsZnJrc2FlcXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzMjkzNDMsImV4cCI6MjA3OTkwNTM0M30.CS_J_tnEYW-X1TNBR0-nDkYuk10ivDVCl1ZxUdOtBK0";


if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("Missing Supabase environment variables!");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
