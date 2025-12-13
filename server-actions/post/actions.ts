"use server";

import { createClient } from "@/lib/supabase/server";

// const getAuthenticatedSupabaseClient = async (userId: string) => {
//     const supabase = await createClient();

//   // Verify the user matches
//   const { data: { user }, error } = await supabase.auth.getUser();
//   if (error || !user || user.id !== userId) {
//     throw new Error("Unauthorized");
//   }

//   return supabase;
// }

export const uploadPost = async (
  userId: string,
  text: string
): Promise<string> => {
  const supabase = await createClient();
  try {
    const { data: post, error: postError } = await supabase
      .from("posts")
      .insert({
        author_id: userId,
        caption: text,
        likes_count: 0,
        comments_count: 0,
        reposts_count: 0,
        shares_count: 0,
      })
      .select()
      .single();

    if (postError) throw postError;

    return post.id;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const getPosts = async () => {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("posts")
      .select(
        `
        *,
        media:post_media(*),
        author:users(username, display_name, pfp_url)
      `
      )
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  } catch (e) {
    console.error("Unexpected error happened", e);
  }
};
