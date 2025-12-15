"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Image, Music, Video, Plus } from "lucide-react";
import { MediaFile } from "@/types/post/types";
import { uploadPost } from "@/server-actions/post/actions";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { UserProfile } from "@/types/auth/types";
import { toast } from "sonner";

export default function UploadModal({user} : {user: UserProfile | null}) {
  const supabase = createClient();
  const router = useRouter();

  const [text, setText] = useState("");
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePost = async () => {
    if (!text.trim() && mediaFiles.length === 0) return;

    setIsUploading(true);
    try {
      if (!user) throw new Error();
      const postId = await uploadPost(user?.id, text);
      await uploadMedia(postId);

      toast("Post uploaded!");
      router.refresh();

      setText("");
      setMediaFiles([]);
      // Clean up preview URLs
      mediaFiles.forEach((mf) => URL.revokeObjectURL(mf.previewUrl));
    } catch (error) {
      console.error("Failed to post:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const uploadMedia = async (postId: string) => {
    if (mediaFiles.length > 0) {
      const mediaPromises = mediaFiles.map(async (file, index) => {
        const fileType = file.type.startsWith("image")
          ? "image"
          : file.type.startsWith("video")
          ? "video"
          : "audio";

        const filePath = `post-media/${postId}/${fileType}/${Date.now()}-${
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
          post_id: postId,
          media_url: publicUrl,
          media_type: fileType,
          order_index: index,
          mime_type: file.type,
          file_size: file.size,
        };
      });

      const mediaRecords = await Promise.all(mediaPromises);

      await supabase.from("post_media").insert(mediaRecords);
    }
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

  const removeMedia = (id: string) => {
    setMediaFiles((prev) => {
      const fileToRemove = prev.find((mf) => mf.id === id);
      if (fileToRemove?.previewUrl) {
        URL.revokeObjectURL(fileToRemove.previewUrl);
      }
      return prev.filter((mf) => mf.id !== id);
    });
  };

  const handleMediaButtonClick = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  // Cleanup preview URLs on unmount
  useEffect(() => {
    return () => {
      mediaFiles.forEach((mf) => {
        if (mf.previewUrl) {
          URL.revokeObjectURL(mf.previewUrl);
        }
      });
    };
  }, []);

  return (
    <div className="relative bg-[#323232] rounded-[10px] border-[0.5px] border-[#776f6f] w-full p-[25px_16px_10px_16px] flex flex-col gap-[10px] min-h-[127px] overflow-hidden">
      {/* Gradient border background */}
      <div className="absolute inset-0 rounded-[10px] p-[1px]">
        <div className="absolute inset-0 rounded-[10px] bg-gradient-to-r from-[#9000ff] via-[#b23caf] to-[#ffc300]" />
        <div className="absolute inset-[1px] rounded-[10px] bg-[#323232]" />
      </div>

      <div className="relative z-10 flex flex-row items-start gap-[25px] w-full">
        {/* Avatar */}
        <img
          src={user?.pfp_url || "https://imgs.search.brave.com/Fe2n5GcOZORoEurfgcjGDnkZfcV5yyePLXFaBPXh55I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDkv/MjkyLzI0NC9zbWFs/bC9kZWZhdWx0LWF2/YXRhci1pY29uLW9m/LXNvY2lhbC1tZWRp/YS11c2VyLXZlY3Rv/ci5qcGc"}
          alt="user pfp"
          className="w-[47px] h-[47px] rounded-full flex-shrink-0"
        />

        <div className="flex flex-col gap-[10px] w-[calc(100%-47px-25px)]">
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
                      <img
                        src={media.previewUrl}
                        alt={media.name}
                        className="w-full h-full object-cover"
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
                      <div className="w-full h-full bg-gradient-to-br from-blue-900 to-cyan-700 flex items-center justify-center">
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
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-1">
                      <p className="text-xs text-white truncate">
                        {media.name}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Add more button */}
                <button
                  onClick={handleMediaButtonClick}
                  className="w-20 h-20 rounded-lg border-2 border-dashed border-[#9000ff] flex flex-col items-center justify-center text-[#9000ff] hover:bg-[#9000ff]/10 transition-colors"
                >
                  <Plus size={24} />
                  <span className="text-xs mt-1">Add</span>
                </button>
              </div>
            </div>
          )}

          {/* Input area */}
          <div className="relative flex flex-row items-center bg-none rounded-[5px] border-[0.5px] border-[#776f6f] p-0 w-full">
            <div className="absolute inset-0 rounded-[5px] p-[1px]">
              <div className="absolute inset-0 rounded-[5px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
              <div className="absolute inset-[1px] rounded-[5px] bg-[#323232]" />
            </div>

            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What's on your mind?"
              className="relative z-10 w-full bg-transparent resize-none overflow-hidden outline-none text-[#fff] placeholder:text-[#776f6f] px-[10px] py-[10px] text-[1.1rem] font-normal min-h-[80px]"
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row items-center gap-[15px]">
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                multiple
                accept="image/*,video/*,audio/*"
                className="hidden"
              />

              {/* Media upload buttons */}
              <button
                onClick={handleMediaButtonClick}
                className="flex items-center gap-2 p-[5px] rounded-full bg-gradient-to-r  border border-[#dcb2fc] text-white hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Plus size={18} />
              </button>

              {/* Media count badge */}
              {mediaFiles.length > 0 && (
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <div className="flex gap-1">
                    {mediaFiles.reduce((acc, media) => {
                      acc[media.type] = (acc[media.type] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>)["image"] > 0 && (
                      <div className="flex items-center gap-1">
                        <Image size={16} />
                        <span>
                          {mediaFiles.filter((m) => m.type === "image").length}
                        </span>
                      </div>
                    )}
                    {mediaFiles.reduce((acc, media) => {
                      acc[media.type] = (acc[media.type] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>)["video"] > 0 && (
                      <div className="flex items-center gap-1">
                        <Video size={16} />
                        <span>
                          {mediaFiles.filter((m) => m.type === "video").length}
                        </span>
                      </div>
                    )}
                    {mediaFiles.reduce((acc, media) => {
                      acc[media.type] = (acc[media.type] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>)["audio"] > 0 && (
                      <div className="flex items-center gap-1">
                        <Music size={16} />
                        <span>
                          {mediaFiles.filter((m) => m.type === "audio").length}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Post button */}
            <button
              onClick={handlePost}
              disabled={
                (!text.trim() && mediaFiles.length === 0) || isUploading
              }
              className={`
                relative z-10 bg-gradient-to-r from-[#9000ff] via-[#b23caf] to-[#ffc300] 
                rounded-[5px] border-none text-white text-[1.1rem] font-semibold 
                w-[90px] h-[33px] flex items-center justify-center tracking-tight 
                ${
                  (!text.trim() && mediaFiles.length === 0) || isUploading
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:opacity-90"
                }
                transition-all
              `}
            >
              {isUploading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Post"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
