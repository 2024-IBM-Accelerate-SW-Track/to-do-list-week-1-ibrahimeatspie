"use client";
import { createClient } from "@supabase/supabase-js";
import { createContext, useContext, useState, useEffect } from "react";

export const supabase = createClient(
  "https://kayckmjwhrjuoqawtrml.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtheWNrbWp3aHJqdW9xYXd0cm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5ODIxNDYsImV4cCI6MjAzMzU1ODE0Nn0.m1ZOcXCZoGzCZP0XeObbxKJRNe9RTqx2XIeV_YwhwTA"
);

const ProfileContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setSession(session);
      })

      .catch((error) => console.error(error));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, _session) => {
      console.log(_session)
      setSession(_session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error(error);
  };

  const handleOAuthLogin = async (provider, redirectURL) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo:
          // `${

          //   // process.env.NODE_ENV == "production"
          //   //   ? "https://pastport.vercel.app/@"
          //   //   : "http://localhost:3000/@"
          // }` session?.user.email
          redirectURL,
      },
    });
    if (error) console.log(error);
  };

  const value = {
    session,
    setSession,
    handleLogout,
    handleOAuthLogin,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(ProfileContext);
  if (!context) throw new Error("Provider is undefined.");
  return context;
}
