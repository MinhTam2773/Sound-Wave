"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

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


export const editPost = async (postId: string, new_caption: string) => {
  try {
    const supabase = await createClient();

    const { error } = await supabase
      .from("posts")
      .update({ caption: new_caption })
      .eq("id", postId)
      .select();

    if (error) throw error;
  } catch(error) {
    console.error(error);
    throw error;
  }
  revalidatePath("/");
};

export const deletePost = async (postId: string) => {
  try {
    const supabase = await createClient();

    const { error: storageError } = await supabase.storage.from("post-media").remove([`post-media/${postId}`]);
    if (storageError) throw storageError;

    const {error: postMediaError} = await supabase.from("post_media").delete().eq('post_id', postId);

    if (postMediaError) throw postMediaError;

    const {error: postError} = await supabase.from("posts").delete().eq('id', postId);

    if (postError) throw postError;
  } catch(error) {
    console.error(error);
  }
  revalidatePath('/');
}