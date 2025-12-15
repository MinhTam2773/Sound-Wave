"use server";

import { createClient } from "@/lib/supabase/server";
import { UserProfile } from "@/types/auth/types";
import { redirect } from "next/navigation";

export const getUserByUsername = async (
  username: string
): Promise<UserProfile | null> => {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single();

    if (error) {
      console.log("Error fetching user:", error.message);
      return null;
    }

    return data as UserProfile;
  } catch (e) {
    console.error("Unexpected error:", e);
    return null;
  }
};

export const getUser = async (): Promise<UserProfile | null> => {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect('/auth/login');
  };

  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error) {
      console.log("Error fetching user:", error.message);
      return null;
    }

    return data as UserProfile;
  } catch (e) {
    console.error("Unexpected error:", e);
    return null;
  }
};

