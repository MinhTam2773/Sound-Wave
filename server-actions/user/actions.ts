"use server";

import { createClient } from "@/lib/supabase/server";
import { UserProfile } from "@/types/auth/types";

// Fetch a user by username
export const getUserByUsername = async (
  username: string
): Promise<UserProfile | null> => {
  const supabase = await createClient();
  try {
    const { data, error, status } = await supabase
      .from<UserProfile>("users")
      .select("*")
      .eq("username", username)
      .single();

    if (error && status !== 406) {
      console.error("Supabase error:", error);
      return null;
    }

    return data ?? null;
  } catch (error) {
    console.error("Unexpected error fetching user:", error);
    return null;
  }
};

// Fetch posts for a user
export const getPostsByUserId = async (userId: string) => {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase
      .from("posts")
      .select(`
        *,
        media:post_media(*),
        author:users(username, display_name, pfp_url)
      `)
      .eq("author_id", userId)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data ?? [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
