interface UploadPostValues {
    userId: string,
    text: string,
    files: MediaFile[],
}

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
}