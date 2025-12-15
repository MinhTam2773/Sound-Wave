"use server";

import { RegisterFormData } from "@/app/auth/_components/RegisterForm";
import { createClient } from "@/lib/supabase/server";
import { Provider } from "@supabase/supabase-js";

export const login = async (email: string, password: string) => {
  try {
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error(error);
  }
};

export const loginWithOAuth = async (provider: Provider, redirectTo: string) => {
  try {
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo,
      },
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error(error);
  }
};

export const signUp = async (data: RegisterFormData, emailRedirectTo: string) => {
  try {
    const supabase = await createClient();

    const { data: userData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          username: data.username,
          display_name: data.displayName,
        },
        emailRedirectTo,
      },
    });
    if (error) throw error;

    if (userData) return {success: true};
  } catch (error) {
    console.error(error);
  }
};

export const logout = async () => {
  try {
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};
