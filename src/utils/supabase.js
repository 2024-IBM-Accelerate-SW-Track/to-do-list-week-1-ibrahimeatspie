import { createClient } from "@supabase/supabase-js";

let supabaseInstance = null;

export default function getSupabaseClient() {
  if (!supabaseInstance) {
    // Create a new Supabase client if it doesn't already exist

    const supabaseInstance = createClient(
      "https://kayckmjwhrjuoqawtrml.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtheWNrbWp3aHJqdW9xYXd0cm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5ODIxNDYsImV4cCI6MjAzMzU1ODE0Nn0.m1ZOcXCZoGzCZP0XeObbxKJRNe9RTqx2XIeV_YwhwTA"
    );
  }

  return supabaseInstance;
}
