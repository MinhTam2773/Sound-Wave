"use client";

import { useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { UserProfile } from "@/types/auth/types";

type AuthState = {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  loading: boolean;
};

export function useAuth() {
  const supabase = createClient();

  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    profile: null,
    loading: true,
  });

  /** Fetch profile from public.users */
  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Failed to load user profile:", error.message);
      return null;
    }

    return data as UserProfile;
  };

  useEffect(() => {
    let mounted = true;

    // 1️⃣ Initial session
    supabase.auth.getSession().then(async ({ data }) => {
      if (!mounted) return;

      if (data.session?.user) {
        const profile = await fetchProfile(data.session.user.id);

        setState({
          user: data.session.user,
          session: data.session,
          profile,
          loading: false,
        });
      } else {
        setState({
          user: null,
          session: null,
          profile: null,
          loading: false,
        });
      }
    });

    // 2️⃣ Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (!mounted) return;

        if (session?.user) {
          const profile = await fetchProfile(session.user.id);

          setState({
            user: session.user,
            session,
            profile,
            loading: false,
          });
        } else {
          setState({
            user: null,
            session: null,
            profile: null,
            loading: false,
          });
        }
      }
    );

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  return state;
}
