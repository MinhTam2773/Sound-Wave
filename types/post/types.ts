export interface MediaFile {
  id: string;
  file: File;
  previewUrl: string;
  type: 'image' | 'video' | 'audio';
  name: string;
  size: number;
  duration: number | undefined;
}

export interface MediaItem {
  id: string;
  media_url: string;
  storage_path: string;
  media_type: "image" | "video" | "audio";
  order_index: number;
}

export interface PostData {
  id: string;
  author_id: string;
  caption: string;
  likes_count: number;
  comments_count: number;
  reposts_count: number;
  shares_count: number;
  created_at: string;
  media: MediaItem[];
  author: {
    username: string;
    display_name?: string;
    pfp_url?: string;
  };
  original_post?: PostData; // For reposts
  is_repost: boolean;
  likes: {
    user_id: string;
    post_id: string;
  }[]
}

export interface Comment {
  id: string;
  text: string;
  parent_comment_id: string | null;
  created_at: string | null;
  updated_at: string | null;
  likes_count: number | null;

  author: {
    username: string;
    display_name: string | null;
    pfp_url: string | null;
  } | null;

  media: CommentMedia[];

  likes: {
    user_id: string | null;
  }[];
}

export interface CommentMedia {
     media_url: string;
    media_type: string;
    order_index: number | null; 
}