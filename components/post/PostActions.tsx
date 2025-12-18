"use client";

import { likePost, unlikePost } from "@/server-actions/post/actions";
import { usePostStore } from "@/store/PostStore";
import { UserProfile } from "@/types/auth/types";
import { PostData } from "@/types/post/types";
import { Heart, MessageCircle, Repeat, Send } from "lucide-react";
import { toast } from "sonner";

interface PostActionsProps {
  post: PostData;
  user: UserProfile | null;
}

const PostActions = ({ user, post }: PostActionsProps) => {
  // const supabase = createClient();

  const postMetrics = usePostStore((s) => s.posts[post.id]);
  const commentsCount = postMetrics?.commentsCount ?? 0;
  const likesCount = postMetrics?.likesCount ?? 0;
  // const repostsCount = postMetrics?.repostsCount ?? 0;
  // const sharesCount = postMetrics?.sharesCount ?? 0;
  const hasLiked = postMetrics?.hasLiked ?? false; 

  const incLikes = usePostStore(s => s.incLikes);
  const decLikes = usePostStore(s => s.decLikes);
  const setHasLiked = usePostStore(s => s.setHasLiked);

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

  // useEffect(() => {
  //   const channel = supabase.channel(`comments-${post.id}`);
  //   channel
  //     .on(
  //       "postgres_changes",
  //       {
  //         event: "INSERT",
  //         schema: "public",
  //         table: "comments",
  //         filter: `post_id=eq.${post.id}`, //filter in server side
  //       },
  //       () => {
  //         setCommentsCount(prev => prev + 1);
  //       }
  //     )
  //     .on(
  //       "postgres_changes",
  //       {
  //         event: "DELETE",
  //         schema: "public",
  //         table: "comments",
  //         filter: `post_id=eq.${post.id}`,
  //       },
  //       () => {
  //         setCommentsCount((prev) => Math.max(prev - 1, 0));
  //       }
  //     )
  //     .subscribe();

  //   return () => {
  //     supabase.removeChannel(channel);
  //   };
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [post.id]);

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

      <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
        <Repeat className="w-6 h-6" />
        <span className="text-sm">{post.reposts_count} Repost</span>
      </button>

      <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
        <Send className="w-6 h-6" />
        <span className="text-sm">{post.shares_count} Share</span>
      </button>
    </div>
  );
};

export default PostActions;
