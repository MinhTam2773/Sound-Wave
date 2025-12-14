"use server";

import { createClient } from "@/lib/supabase/server";
import { UserProfile } from "@/types/auth/types";

export const getUserByUsername = async (username: string): Promise<UserProfile | null> => {
  const supabase = await createClient();
console.log(username);
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single();

    if (error) {
      console.error("Error fetching user:", error);
      return null;
    }

    return data as UserProfile;
  } catch (e) {
    console.error("Unexpected error:", e);
    return null;
  }
};
