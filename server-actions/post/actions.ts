"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

const getAuthenticatedSupabaseClient = async () => {
  const supabase = await createClient();

  // Verify the user matches
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) {
    throw new Error("Unauthorized");
  }

  return { supabase, user };
};

export const uploadPost = async (
  userId: string,
  text: string
): Promise<string> => {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error || !user || user.id !== userId) {
      throw new Error("Unauthorized");
    }

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
    // const { data: authData } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("posts")
      .select(
        `
    *,
    media:post_media(media_type, id, media_url, storage_path, order_index),
    author:users(username, display_name, pfp_url),

    actions!left(
      user_id,
      action_type
    ),

    original_post:original_post_id (
      *,
      author:users(username, display_name, pfp_url),
      actions!left(
        user_id,
        action_type
      )
    )
  `
      )
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  } catch (e) {
    console.error("Unexpected error happened", e);
  }
};

export const getReposts = async () => {
  try {
    const { supabase, user } = await getAuthenticatedSupabaseClient();

    const { data, error } = await supabase
      .from("posts")
      .select(
        `
      id,
      reposted_by: users(username, display_name),
      original_post:posts(
        *,
        media:post_media(media_type, id, media_url, storage_path, order_index),
        author:users(username, display_name, pfp_url),
        actions!left(user_id, action_type)
      )
      `
      )
      .eq("actions.user_id", `${user?.id}`)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return { success: true, message: "get reposts successfully", posts: data };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Unexpected server error",
    };
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
  } catch (error) {
    console.error(error);
    throw error;
  }
  revalidatePath("/");
};

export const deletePost = async (postId: string, mediaUrls: string[]) => {
  try {
    const supabase = await createClient();

    const { error: postError } = await supabase
      .from("posts")
      .delete()
      .eq("id", postId);
    if (postError) throw postError;

    const { error: storageError } = await supabase.storage
      .from("post-media")
      .remove(mediaUrls);
    if (storageError) throw storageError;

    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
};

export const likePost = async (postId: string, userId: string) => {
  try {
    const supabase = await createClient();

    const { error } = await supabase.from("actions").insert({
      user_id: userId,
      post_id: postId,
      action_type: "like",
    });

    if (error)
      return {
        success: false,
        message: error?.message || "error with supabase",
      };

    revalidatePath("/");
    return { success: true, message: "Liked post" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Unexpected server error" };
  }
};

export const unlikePost = async (postId: string, userId: string) => {
  try {
    const supabase = await createClient();

    const { error } = await supabase
      .from("actions")
      .delete()
      .eq("post_id", postId)
      .eq("user_id", userId)
      .eq("action_type", "like")
      .is("comment_id", null)
      .is("audio_id", null);

    if (error) throw error;

    return { success: true, message: "Unliked post successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Unexpected server error" };
  }
};

export const uploadCommentOnPost = async (
  postId: string,
  userId: string,
  text: string
) => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("comments")
      .insert({
        user_id: userId,
        post_id: postId,
        text,
      })
      .select(
        `id,
      text,
      parent_comment_id,
      likes_count,
      author:users(
        display_name,
        username, 
        pfp_url
      ),
      media:comment_media!comment_id(
        media_url,
        media_type, 
        order_index
      ),
      actions(
        user_id
      ),
      created_at,
      updated_at
      `
      )
      .single();

    if (error) return { success: false, message: error.message };
    return { success: true, message: "comment uploaded", comment: data };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Unexpected server error" };
  }
};

export const getCommentsByPost = async (postId: string) => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("comments")
      .select(
        `id,
      text,
      parent_comment_id,
      likes_count,
      author:users(
        display_name,
        username, 
        pfp_url
      ),
      media:comment_media!comment_id(
        media_url,
        media_type, 
        order_index
      ),
      actions(
        user_id
      ),
      created_at,
      updated_at
      `
      )
      .eq("post_id", postId);

    if (error) return { success: false, message: error.message };

    return { success: true, comments: data ?? [] };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Unexpected server error" };
  }
};

export const deleteComment = async (commentId: string) => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("comments")
      .delete()
      .eq("id", commentId)
      .select("id")
      .single();

    if (error) return { success: false, message: error.message };

    return {
      success: true,
      message: "Comment deleted successfully",
      commentId: data.id,
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Server error" };
  }
};

export const repost = async (postId: string) => {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      throw authError ?? new Error("Unauthorized");
    }

    const { error } = await supabase.from("actions").insert({
      user_id: user.id,
      post_id: postId,
      action_type: "repost",
    });

    if (error) return { success: false, message: error.message };

    return { success: true, message: "Repost successfully" };
  } catch (error) {
    console.error(error);

    return { success: false, message: "Unexpected server error" };
  }
};

export const unrepost = async (postId: string) => {
  try {
    const { supabase, user } = await getAuthenticatedSupabaseClient();

    const { error } = await supabase
      .from("actions")
      .delete()
      .eq("post_id", postId)
      .eq("user_id", user.id)
      .eq("action_type", "repost");

    if (error) throw error;

    return { success: true, message: "Unrepost successfully" };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Unexpected server error",
    };
  }
};
