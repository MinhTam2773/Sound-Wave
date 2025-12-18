// components/PostModal.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Send, Image as ImageIcon, Plus, Video, Music } from "lucide-react";
import Image from "next/image";
import { Comment, CommentMedia, MediaFile, PostData } from "@/types/post/types";
import { UserProfile } from "@/types/auth/types";
import { formatDistanceToNow } from "date-fns";
import PostActions from "./PostActions";
import {
  deleteComment,
  getCommentsByPost,
  uploadCommentOnPost,
} from "@/server-actions/post/actions";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";
import CommentComponent from "./Comment";
import { usePostStore } from "@/store/PostStore";

interface PostModalProps {
  post: PostData;
  user: UserProfile | null;
  isOpen: boolean;
  onClose: () => void;
  onCommentSubmit?: (postId: string, commentText: string) => Promise<void>;
}

export default function PostModal({
  post,
  user,
  isOpen,
  onClose,
}: PostModalProps) {
  const supabase = createClient();

  const [comments, setComments] = useState<Comment[]>([]);
  const incComments = usePostStore((s) => s.incComments);
  const decComments = usePostStore(s => s.decComments);

  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);

  const modalRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Close modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [newComment]);

  //GetComments on mount
  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;

    (async () => {
      const { comments, success, message } = await getCommentsByPost(post.id);

      if (!success || !comments) {
        toast(message);
        return;
      }

      if (!cancelled) {
        setComments(comments as Comment[]);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isOpen, post.id, setComments]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!newComment.trim() && mediaFiles.length === 0) || !user) return;

    setIsSubmitting(true);
    const { success, message, comment } = await uploadCommentOnPost(
      post.id,
      user.id,
      newComment
    );

    if (!success || !comment) {
      toast(message);
      setIsSubmitting(false);
      return;
    }

    const mediaRecords = await uploadMedia(post.id, comment.id);

    setComments([
      ...comments,
      {
        ...comment,
        media: mediaRecords as CommentMedia[],
      },
    ]);

    toast("Comment uploaded!");

    setNewComment("");
    setMediaFiles([]);
    // Clean up preview URLs
    mediaFiles.forEach((mf) => URL.revokeObjectURL(mf.previewUrl));
    setIsSubmitting(false);

    incComments(post.id);
  };

  // Delete comment
  const handleDeleteComment = async (comment: Comment) => {
    const { success, message } = await deleteComment(comment.id);

    if (!success) {
      toast(message);
      return;
    }

    setComments(comments.filter((c) => c.id != comment.id));
    decComments(post.id);

    toast(message);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    const newMediaFiles = files.map((file) => {
      const type = file.type.startsWith("image/")
        ? "image"
        : file.type.startsWith("video/")
        ? "video"
        : "audio";

      return {
        id: Math.random().toString(36).substring(7),
        file,
        previewUrl: type === "image" ? URL.createObjectURL(file) : "",
        type,
        name: file.name,
      };
    });

    setMediaFiles((prev) => [...prev, ...newMediaFiles] as MediaFile[]);

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const uploadMedia = async (postId: string, commentId: string) => {
    if (mediaFiles.length > 0) {
      const mediaPromises = mediaFiles.map(async (file, index) => {
        const fileType = file.type.startsWith("image")
          ? "image"
          : file.type.startsWith("video")
          ? "video"
          : "audio";

        const filePath = `post-media/${postId}/comments/${commentId}/${fileType}/${Date.now()}-${
          file.name
        }`;

        // Upload to storage
        const { error: uploadError } = await supabase.storage
          .from("post-media")
          .upload(filePath, file.file);

        if (uploadError) throw uploadError;

        // Get public URL
        const {
          data: { publicUrl },
        } = supabase.storage.from("post-media").getPublicUrl(filePath);

        // Create media record
        return {
          comment_id: commentId,
          media_url: publicUrl,
          media_type: fileType,
          order_index: index,
          mime_type: file.type,
          file_size: file.size,
        };
      });

      const mediaRecords = await Promise.all(mediaPromises);

      await supabase.from("comment_media").insert(mediaRecords);

      return mediaRecords;
    }
  };

  const removeMedia = (id: string) => {
    setMediaFiles((prev) => {
      const fileToRemove = prev.find((mf) => mf.id === id);
      if (fileToRemove?.previewUrl) {
        URL.revokeObjectURL(fileToRemove.previewUrl);
      }
      return prev.filter((mf) => mf.id !== id);
    });
  };

  // Cleanup preview URLs on unmount
  useEffect(() => {
    return () => {
      mediaFiles.forEach((mf) => {
        if (mf.previewUrl) {
          URL.revokeObjectURL(mf.previewUrl);
        }
      });
    };
  }, [mediaFiles]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative w-full max-w-7xl h-[90vh] bg-[#1a1a1a] rounded-2xl overflow-hidden flex flex-col z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={post.author.pfp_url || "/user/default_user.png"}
                alt={post.author.username}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold">
                {post.author.display_name || post.author.username}
              </h3>
              <div className="flex gap-5 items-center">
                <p className="text-white/60 text-sm">@{post.author.username}</p>
                <p className="text-white/40 text-sm">
                  {formatDistanceToNow(new Date(post.created_at), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Main Content - Split into two columns */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Column: Post Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Caption */}
            <p className="text-white text-lg whitespace-pre-line mb-6">
              {post.caption}
            </p>

            {/* Media Display */}
            {post.media && post.media.length > 0 && (
              <div className="mb-6">
                {post.media[0].media_type === "image" ? (
                  <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                    <Image
                      src={post.media[0].media_url}
                      alt="Post image"
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : post.media[0].media_type === "video" ? (
                  <video
                    src={post.media[0].media_url}
                    controls
                    className="w-full max-h-[400px] rounded-xl"
                  />
                ) : (
                  <div className="p-6 bg-linear-to-r from-purple-900/30 to-pink-900/30 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-linear-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                        <div className="text-white text-lg">🎵</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">Audio Track</h4>
                        <p className="text-white/60 text-sm">Listen to audio</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <PostActions user={user} post={post} />
          </div>

          {/* Right Column: Comments */}
          <div className="w-[500px] border-l border-white/10 flex flex-col">
            {/* Comments Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h3 className="text-white font-semibold">Comments</h3>
              <p className="text-white/60 text-sm">
                {comments.length} comments
              </p>
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto p-4">
              {comments.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-white/60">No comments yet</p>
                  <p className="text-white/40 text-sm mt-2">
                    Be the first to comment!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <CommentComponent
                      key={comment.id}
                      comment={comment}
                      user={user}
                      deleteComment={handleDeleteComment}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Comment Input */}
            <div className="border-t border-white/10 p-4">
              <form onSubmit={handleSubmitComment} className="space-y-3">
                <div className="flex flex-col gap-2.5 w-[calc(100%-47px-25px)]">
                  {/* Media Preview Grid */}
                  {mediaFiles.length > 0 && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-2">
                        {mediaFiles.map((media) => (
                          <div
                            key={media.id}
                            className="relative group w-20 h-20 rounded-lg overflow-hidden border border-[#776f6f]"
                          >
                            {media.type === "image" && (
                              <Image
                                src={media.previewUrl}
                                alt={media.name}
                                fill
                                className="object-cover"
                              />
                            )}

                            {media.type === "video" && (
                              <div className="w-full h-full  flex items-center justify-center">
                                <Video className="text-white" size={32} />
                                <div className="absolute bottom-1 left-1 text-xs text-white  px-1 rounded">
                                  Video
                                </div>
                              </div>
                            )}

                            {media.type === "audio" && (
                              <div className="w-full h-full bg-linear-to-br from-blue-900 to-cyan-700 flex items-center justify-center">
                                <Music className="text-white" size={32} />
                                <div className="absolute bottom-1 left-1 text-xs text-white bg-black/50 px-1 rounded">
                                  Audio
                                </div>
                              </div>
                            )}

                            {/* Remove button */}
                            <button
                              onClick={() => removeMedia(media.id)}
                              className="absolute top-1 right-1 w-6 h-6 bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={14} className="text-white" />
                            </button>

                            {/* File name overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-1">
                              <p className="text-xs text-white truncate">
                                {media.name}
                              </p>
                            </div>
                          </div>
                        ))}

                        {/* Add more button */}
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="w-20 h-20 rounded-lg border-2 border-dashed border-[#9000ff] flex flex-col items-center justify-center text-[#9000ff] hover:bg-[#9000ff]/10 transition-colors"
                        >
                          <Plus size={24} />
                          <span className="text-xs mt-1">Add</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                    {user ? (
                      <Image
                        src={user.pfp_url || "/user/default_user.png"}
                        alt={user.username}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/20 rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <textarea
                      ref={textareaRef}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder={
                        user ? "Add a comment..." : "Login to comment"
                      }
                      disabled={!user || isSubmitting}
                      className="w-full bg-white/5 text-white placeholder-white/40 rounded-lg px-4 py-3 min-h-[60px] resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      rows={1}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* <button
                      type="button"
                      className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                    >
                      <Smile className="w-5 h-5" />
                    </button> */}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                      multiple
                      accept="image/*,video/*,audio/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <ImageIcon className="w-5 h-5" />
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={
                      (!newComment.trim() && mediaFiles.length === 0) ||
                      !user ||
                      isSubmitting
                    }
                    className="px-4 py-2 bg-linear-to-r from-[#9000ff] to-[#ffc300] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Posting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Post
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
