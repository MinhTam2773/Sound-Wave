"use server";

import { createClient } from "@/lib/supabase/server";

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

export const logout = async () => {
  try {
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};
