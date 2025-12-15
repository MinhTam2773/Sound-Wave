"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Heart,
  MessageCircle,
  Repeat,
  Send,
  Bookmark,
  MoreVertical,
  Edit2,
  Trash2,
  Flag,
  Copy,
  Link as Linkicon
} from "lucide-react";
import { deletePost, editPost } from "@/server-actions/post/actions";
import { PostData } from "@/types/post/types";
import { toast } from "sonner";
import Link from "next/link";
import { UserProfile } from "@/types/auth/types";

interface UniversalPostProps {
  post: PostData;
  user: UserProfile | null;
}

export default function Post({ post, user }: UniversalPostProps) {
  // Show the reposted content if this is a repost
  const displayPost =
    post.is_repost && post.original_post ? post.original_post : post;
  const displayMedia = displayPost.media || [];

  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCaption, setEditedCaption] = useState(displayPost.caption || "");
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const editTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Close options when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setIsOptionsOpen(false);
      }
    };

    if (isOptionsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOptionsOpen]);

  // Auto-resize textarea when editing
  useEffect(() => {
    if (isEditing && editTextareaRef.current) {
      editTextareaRef.current.style.height = "auto";
      editTextareaRef.current.style.height = `${editTextareaRef.current.scrollHeight}px`;
    }
  }, [editedCaption, isEditing]);

  // Format time
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${Math.floor(diffHours / 24)}d ago`;
  };

  // Audio/Video controls
  const togglePlay = () => {
    if (displayMedia[0]?.media_type === "audio") {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    } else if (displayMedia[0]?.media_type === "video") {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  // Like handler
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  // Save handler
  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  // Copy post link
  const handleCopyLink = async () => {
    const postUrl = `${window.location.origin}/post/${post.id}`;
    try {
      await navigator.clipboard.writeText(postUrl);
      alert("Link copied to clipboard!");
      setIsOptionsOpen(false);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  // Start editing
  const handleEditClick = () => {
    setIsEditing(true);
    setEditedCaption(displayPost.caption || "");
    setIsOptionsOpen(false);
  };

  // Save edit
  const handleSaveEdit = async () => {
    if (!editedCaption.trim()) {
      alert("Caption cannot be empty");
      return;
    }

    try {
      await editPost(post.id, editedCaption);

      toast("Post is edited");
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to edit post:", error);
      alert("Failed to save changes");
    }
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedCaption(displayPost.caption || "");
  };

  // Delete post
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      await deletePost(post.id);

      toast("post deleted successfully");
      setIsOptionsOpen(false);
    } catch (error) {
      console.error("Failed to delete post:", error);
      alert("Failed to delete post");
    }
  };

  // Determine post type
  const getPostType = () => {
    if (!displayMedia.length) return "text";
    if (displayMedia.length > 1) return "gallery";
    return displayMedia[0].media_type;
  };

  const postType = getPostType();
  const isOwner = user?.id === displayPost.author_id;

  // Render media based on type
  const renderMedia = () => {
    if (postType === "text") return null;

    if (postType === "gallery") {
      return (
        <div className="grid grid-cols-2 gap-2 mt-3">
          {displayMedia.slice(0, 4).map((media, index) => (
            <div key={media.id} className="relative">
              {media.media_type === "image" ? (
                <img
                  src={media.media_url}
                  alt=""
                  className="w-full h-48 object-cover rounded-lg"
                />
              ) : media.media_type === "video" ? (
                <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Play className="w-12 h-12 text-white/70" />
                </div>
              ) : (
                <div className="w-full h-48 bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <div className="text-white/70 text-sm">Audio</div>
                </div>
              )}
              {index === 3 && displayMedia.length > 4 && (
                <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-bold">
                    +{displayMedia.length - 4}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    // Single media
    const media = displayMedia[0];

    if (media.media_type === "image") {
      return (
        <img
          src={media.media_url}
          alt=""
          className="w-full max-h-[500px] object-cover rounded-lg mt-3"
        />
      );
    }

    if (media.media_type === "video") {
      return (
        <div className="relative mt-3">
          <video
            ref={videoRef}
            src={media.media_url}
            className="w-full max-h-[500px] rounded-lg"
            onClick={togglePlay}
            controls
          />
        </div>
      );
    }

    if (media.media_type === "audio") {
      return (
        <div className="mt-3 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Play className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-white font-medium">Audio Track</div>
                  <div className="text-white/60 text-sm">Audio post</div>
                </div>
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9000ff] to-[#ffc300] flex items-center justify-center"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-1" />
                  )}
                </button>
              </div>
              <input
                type="range"
                className="w-full h-1 bg-white/30 rounded-full"
              />
              <div className="flex justify-between text-xs text-white/60 mt-1">
                <span>0:00</span>
                <span>3:45</span>
              </div>
            </div>
          </div>
          <audio
            ref={audioRef}
            src={media.media_url}
            onEnded={() => setIsPlaying(false)}
          />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-[#323232] rounded-[15px] border border-[#776f6f] p-4 mb-4 relative">
      {/* Repost header */}
      {post.is_repost && post.author && (
        <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
          <Repeat className="w-4 h-4" />
          <span>
            {post.author.display_name || post.author.username} reposted
          </span>
        </div>
      )}

      {/* User info */}
      <div className="flex items-center justify-between mb-3">
        <Link href={`/profile/${displayPost.author.username}`}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full flex-shrink-0">
                <img
                  src={displayPost.author.pfp_url || "https://imgs.search.brave.com/Fe2n5GcOZORoEurfgcjGDnkZfcV5yyePLXFaBPXh55I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDkv/MjkyLzI0NC9zbWFs/bC9kZWZhdWx0LWF2/YXRhci1pY29uLW9m/LXNvY2lhbC1tZWRp/YS11c2VyLXZlY3Rv/ci5qcGc"}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
            </div>
            <div>
              <p className="text-white font-semibold hover:underline">
                {displayPost.author?.display_name ||
                  displayPost.author?.username ||
                  "User"}
              </p>
              <p className="text-white/60 text-sm hover:underline">
                @{displayPost.author?.username} ·{" "}
                {formatTime(displayPost.created_at)}
              </p>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            className={`p-2 rounded-lg transition-colors ${
              isSaved
                ? "text-yellow-400 bg-yellow-400/10"
                : "text-white/60 hover:bg-white/10"
            }`}
          >
            <Bookmark
              className="w-5 h-5"
              fill={isSaved ? "currentColor" : "none"}
            />
          </button>

          {/* Options button */}
          <div className="relative" ref={optionsRef}>
            <button
              onClick={() => setIsOptionsOpen(!isOptionsOpen)}
              className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <MoreVertical className="w-5 h-5" />
            </button>

            {/* Options dropdown */}
            {isOptionsOpen && (
              <div className="absolute right-0 top-full mt-1 w-56 bg-[#424242] rounded-lg shadow-lg border border-white/10 z-50 py-2">
                {isOwner ? (
                  <>
                    <button
                      onClick={handleEditClick}
                      className="w-full flex items-center gap-3 px-4 py-2 text-white/80 hover:bg-white/10 transition-colors text-left"
                    >
                      <Edit2 className="w-4 h-4" />
                      <span>Edit post</span>
                    </button>
                    <button
                      onClick={handleDelete}
                      className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-400/10 transition-colors text-left"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete post</span>
                    </button>
                    <div className="h-px bg-white/10 my-2" />
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setIsOptionsOpen(false);
                      // Report functionality
                      alert("Report feature coming soon!");
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 text-white/80 hover:bg-white/10 transition-colors text-left"
                  >
                    <Flag className="w-4 h-4" />
                    <span>Report post</span>
                  </button>
                )}

                {/* Shared options */}
                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center gap-3 px-4 py-2 text-white/80 hover:bg-white/10 transition-colors text-left"
                >
                  <Linkicon className="w-4 h-4" />
                  <span>Copy link</span>
                </button>
                <button
                  onClick={() => {
                    setIsOptionsOpen(false);
                    // Copy post text
                    if (displayPost.caption) {
                      navigator.clipboard.writeText(displayPost.caption);
                      alert("Caption copied!");
                    }
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-white/80 hover:bg-white/10 transition-colors text-left"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy text</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Caption or Edit mode */}
      {isEditing ? (
        <div className="mb-3">
          <textarea
            ref={editTextareaRef}
            value={editedCaption}
            onChange={(e) => setEditedCaption(e.target.value)}
            className="w-full bg-transparent text-white border border-white/20 rounded-lg p-3 resize-none min-h-[100px] focus:outline-none focus:border-white/40"
            placeholder="What's on your mind?"
            autoFocus
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={handleCancelEdit}
              className="px-4 py-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveEdit}
              className="px-4 py-2 bg-gradient-to-r from-[#9000ff] to-[#ffc300] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        displayPost.caption && (
          <div className="text-white mb-3 whitespace-pre-line">
            {displayPost.caption}
          </div>
        )
      )}

      {/* Media */}
      {renderMedia()}

      {/* Action buttons */}
      <div className="flex justify-between mt-4 pt-4 border-t border-white/10">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 transition-colors ${
            isLiked
              ? "text-red-400 hover:text-red-300"
              : "text-white/70 hover:text-white"
          }`}
        >
          <Heart className="w-6 h-6" fill={isLiked ? "currentColor" : "none"} />
          <span className="text-sm">Like</span>
        </button>

        <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <MessageCircle className="w-6 h-6" />
          <span className="text-sm">Comment</span>
        </button>

        <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <Repeat className="w-6 h-6" />
          <span className="text-sm">Repost</span>
        </button>

        <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <Send className="w-6 h-6" />
          <span className="text-sm">Share</span>
        </button>
      </div>
    </div>
  );
}
