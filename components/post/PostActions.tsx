"use client";

import {
  likePost,
  repost,
  unlikePost,
  unrepost,
} from "@/server-actions/post/actions";
import { usePostStore } from "@/store/PostStore";
import { UserProfile } from "@/types/auth/types";
import { PostData } from "@/types/post/types";
import { Heart, MessageCircle, Repeat, Send, Check } from "lucide-react";
import { toast } from "sonner";

interface PostActionsProps {
  post: PostData;
  user: UserProfile | null;
}

const PostActions = ({ user, post }: PostActionsProps) => {
  const postMetrics = usePostStore((s) => s.posts[post.id]);
  const commentsCount = postMetrics?.commentsCount ?? 0;
  const likesCount = postMetrics?.likesCount ?? 0;
  const repostsCount = postMetrics?.repostsCount ?? 0;
  const hasLiked = postMetrics?.hasLiked ?? false;
  const hasReposted = postMetrics?.hasReposted ?? false;

  const incLikes = usePostStore((s) => s.incLikes);
  const decLikes = usePostStore((s) => s.decLikes);
  const setHasLiked = usePostStore((s) => s.setHasLiked);
  const setHasReposted = usePostStore((s) => s.setHasReposted);
  const incReposts = usePostStore((s) => s.incReposts);
  const decReposts = usePostStore((s) => s.decReposts);

  // Like handler
  const handleLike = async () => {
    if (!user) {
      toast("You must logged in to like posts");
      return;
    }

    if (!hasLiked) {
      setHasLiked(post.id, true);
      incLikes(post.id);

      const { success, message } = await likePost(post.id, user.id);

      if (!success) {
        setHasLiked(post.id, false);
        decLikes(post.id);
        toast(message);
      } else setHasLiked(post.id, !hasLiked);
    } else {
      setHasLiked(post.id, false);
      decLikes(post.id);
      const { success, message } = await unlikePost(post.id, user.id);

      if (!success) {
        setHasLiked(post.id, true);
        incLikes(post.id);
        toast(message);
      } else setHasLiked(post.id, !hasLiked);
    }
  };

  const handleRepost = async () => {
    if (!hasReposted) {
      const { success, message } = await repost(post.id);

      if (!success) {
        toast(message);
        return;
      }

      toast(message);
      setHasReposted(post.id, true);
      incReposts(post.id);
    } else if (hasReposted) {
      const { success, message } = await unrepost(post.id);

      if (!success) {
        toast(message);
        return;
      }

      toast(message);
      setHasReposted(post.id, false);
      decReposts(post.id);
    }
  };

  return (
    <div className="flex justify-between mt-4 pt-4 border-t border-white/10">
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleLike();
        }}
        className={`flex items-center gap-2 transition-colors ${
          hasLiked
            ? "text-red-400 hover:text-red-300"
            : "text-white/70 hover:text-white"
        }`}
      >
        <Heart className="w-6 h-6" fill={hasLiked ? "currentColor" : "none"} />
        <span className="text-sm">{likesCount} Like</span>
      </button>

      <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
        <MessageCircle className="w-6 h-6" />
        <span className="text-sm">{commentsCount} Comment</span>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleRepost();
        }}
        className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
      >
        {hasReposted ? (
          <Check className="w-6 h-6 text-white" />
        ) : (
          <Repeat className="w-6 h-6" />
        )}
        <span className="text-sm">{repostsCount} Repost</span>
      </button>

      <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
        <Send className="w-6 h-6" />
        <span className="text-sm">{post.shares_count} Share</span>
      </button>
    </div>
  );
};

export default PostActions;
