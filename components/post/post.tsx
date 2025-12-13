"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Heart, MessageCircle, Repeat, Send, Bookmark } from "lucide-react";

interface MediaItem {
  id: string;
  media_url: string;
  media_type: "image" | "video" | "audio";
  order_index: number;
}

interface PostData {
  id: string | null;
  author_id: string | null;
  caption: string | null;
  likes_count: number | null;
  comments_count: number| null;
  reposts_count: number| null;
  shares_count: number| null;
  created_at: string | null;
  media: MediaItem[] | null;
  author: {
    username: string| null;
    display_name?: string| null;
    pfp_url?: string| null;
  };
  original_post?: PostData| null; // For reposts
  is_repost: boolean | null;
}

interface UniversalPostProps {
  post: PostData;
}

export default function Post({ post }: UniversalPostProps) {
  // Show the reposted content if this is a repost
  const displayPost = post.is_repost && post.original_post ? post.original_post : post;
  const displayMedia = displayPost.media || [];

  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Format time
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
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

  // Determine post type
  const getPostType = () => {
    if (!displayMedia.length) return "text";
    if (displayMedia.length > 1) return "gallery";
    return displayMedia[0].media_type;
  };

  const postType = getPostType();

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
          />
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </button>
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
    <div className="bg-[#323232] rounded-[15px] border border-[#776f6f] p-4 mb-4">
      {/* Repost header */}
      {post.is_repost && post.author && (
        <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
          <Repeat className="w-4 h-4" />
          <span>{post.author.display_name || post.author.username} reposted</span>
        </div>
      )}

      {/* User info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white flex-shrink-0">
            {displayPost.author?.pfp_url && (
              <img
                src={displayPost.author.pfp_url}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            )}
          </div>
          <div>
            <div className="text-white font-semibold">
              {displayPost.author?.display_name || displayPost.author?.username || "User"}
            </div>
            <div className="text-white/60 text-sm">
              @{displayPost.author?.username} · {formatTime(displayPost.created_at as string)}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            className={`p-2 rounded-lg ${isSaved ? "text-yellow-400" : "text-white/60"}`}
          >
            <Bookmark className="w-5 h-5" fill={isSaved ? "currentColor" : "none"} />
          </button>
          <button className="p-2 text-white/60 rounded-lg">
            <span className="text-lg">⋯</span>
          </button>
        </div>
      </div>

      {/* Caption */}
      {displayPost.caption && (
        <div className="text-white mb-3">{displayPost.caption}</div>
      )}

      {/* Media */}
      {renderMedia()}

      {/* Action buttons */}
      <div className="flex justify-between mt-4 pt-4 border-t border-white/10">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 ${isLiked ? "text-red-400" : "text-white/70"}`}
        >
          <Heart className="w-6 h-6" fill={isLiked ? "currentColor" : "none"} />
          <span className="text-sm">Like</span>
        </button>

        <button className="flex items-center gap-2 text-white/70">
          <MessageCircle className="w-6 h-6" />
          <span className="text-sm">Comment</span>
        </button>

        <button className="flex items-center gap-2 text-white/70">
          <Repeat className="w-6 h-6" />
          <span className="text-sm">Repost</span>
        </button>

        <button className="flex items-center gap-2 text-white/70">
          <Send className="w-6 h-6" />
          <span className="text-sm">Share</span>
        </button>
      </div>
    </div>
  );
}