"use client";

import { UserProfile } from "@/types/auth/types";
import { Comment as CommentType } from "@/types/post/types";
import { formatDistanceToNow } from "date-fns";
import { Edit2, Flag, Heart, MoreVertical, Play, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface CommentProps {
    comment: CommentType;
    user: UserProfile | null,
    deleteComment: (comment: CommentType) => Promise<void>;
  }
  
  const Comment = ({
    comment,
    user,
    deleteComment
  }: CommentProps) => {
  const isOwner = user?.username === comment.author?.username;

  // const {setComments, comments} = usePostStore();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCaption, setEditedCaption] = useState(comment.text || "");
  const videoRef = useRef<HTMLVideoElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const editTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea when editing
  useEffect(() => {
    if (isEditing && editTextareaRef.current) {
      editTextareaRef.current.style.height = "auto";
      editTextareaRef.current.style.height = `${editTextareaRef.current.scrollHeight}px`;
    }
  }, [editedCaption, isEditing]);

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

  const handleLikeComment = async () => {
    // TODO: Implement comment like functionality
    // setComments(
    //   comments.map((comment) =>
    //     comment.id === commentId
    //       ? { ...comment, likes_count: comment.likes_count + 1 }
    //       : comment
    //   )
    // );
  };

  // Audio/Video controls
  const togglePlay = (comment: CommentType) => {
    if (comment.media[0]?.media_type === "video") {
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

  const getCommentType = (comment: CommentType) => {
    if (!comment.media?.length) return "text";
    if (comment.media?.length > 1) return "gallery";
    return comment.media[0].media_type;
  };

  // Render media based on type
  const renderMedia = (comment: CommentType) => {
    const commentType = getCommentType(comment);
    if (commentType === "text") return null;

    if (commentType === "gallery") {
      return (
        <div className="grid grid-cols-2 gap-2 mt-3">
          {comment.media.slice(0, 4).map((media, index) => (
            <div key={media.media_url} className="relative">
              {media.media_type === "image" ? (
                <div className="w-full h-48 object-cover rounded-lg">
                  <Image src={media.media_url} alt="" fill />
                </div>
              ) : media.media_type === "video" ? (
                <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Play className="w-12 h-12 text-white/70" />
                </div>
              ) : (
                <div className="w-full h-48 bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <div className="text-white/70 text-sm">Audio</div>
                </div>
              )}
              {index === 3 && comment.media.length > 4 && (
                <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-bold">
                    +{comment.media.length - 4}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    // Single media
    const media = comment.media[0];

    if (media.media_type === "image") {
      return (
        <div className="relative w-full max-h-100 h-50 rounded-lg mt-3 overflow-hidden">
          <Image
            src={media.media_url}
            alt=""
            fill
            className="object-contain rounded-lg"
          />
        </div>
      );
    }

    if (media.media_type === "video") {
      return (
        <div className="relative mt-3">
          <video
            ref={videoRef}
            src={media.media_url}
            className="w-full max-h-[500px] rounded-lg"
            onClick={() => togglePlay(comment)}
            controls
          />
        </div>
      );
    }
    return null;
  };

  // Start editing
  const handleEditClick = () => {
    setIsEditing(true);
    setEditedCaption(comment.text || "");
    setIsOptionsOpen(false);
  };

  // Save edit
  const handleSaveEdit = async () => {
    if (!editedCaption.trim()) {
      alert("Caption cannot be empty");
      return;
    }

    try {
      //   await editPost(post.id, editedCaption);

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
    setEditedCaption(comment.text || "");
  };

  const handleDelete = async () => {
    deleteComment(comment);
    setIsOptionsOpen(false);
  }

  return (
    <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
      <div className="flex items-start gap-3">
        {/* User Avatar  */}
        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
          <Image
            src={comment.author?.pfp_url || "/user/default_user.png"}
            alt={comment.author?.username || "user pfp"}
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          {/* Header  */}
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">
              {comment.author?.display_name}
            </span>
            <span className="text-white/40 text-sm">
              @{comment.author?.username}
            </span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/40 text-xs">
              {formatDistanceToNow(new Date(comment.created_at as string), {
                addSuffix: true,
              })}
            </span>
            {/* Options button */}
            <div
              className="relative flex-1 flex justify-end"
              ref={optionsRef}
              onClick={(e) => e.stopPropagation()}
            >
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
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={handleDelete}
                        className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-400/10 transition-colors text-left"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Delete</span>
                      </button>
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
                      <span>Report</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Text or edit text*/}
          {isEditing ? (
            <div>
              <textarea
                ref={editTextareaRef}
                value={editedCaption}
                onChange={(e) => setEditedCaption(e.target.value)}
                className="w-full bg-transparent text-white border border-white/20 rounded-lg p-3 resize-none min-h-[100px] focus:outline-none focus:border-white/40"
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
                  className="px-4 py-2 bg-linear-to-r from-[#9000ff] to-[#ffc300] text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <p className="text-white mt-1">{comment.text}</p>
          )}

          {renderMedia(comment)}

          {/* Comment Actions  */}
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={() => handleLikeComment()}
              className="flex items-center gap-1 text-white/40 hover:text-red-400 text-xs"
            >
              <Heart className="w-3 h-3" />
              <span>{comment.likes_count}</span>
            </button>
            <button className="text-white/40 hover:text-white text-xs">
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
