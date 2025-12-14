// app/(root)/profile/page.tsx
"use client";

import React, { useState } from "react";
import { useAuth } from "@/hooks/auth"; // adjust relative path if needed

interface Post {
  type: "audio" | "image" | "post";
  title: string;
  thumbnail: string;
  artist?: string;
}

// Hardcoded posts
const mockPosts: Post[] = [
  { type: "audio", title: "Chill Vibes", artist: "LoFi Beats", thumbnail: "/images/chill-lofi.jpg" },
  { type: "image", title: "Sunset Vibes", thumbnail: "/images/sunset.jpg" },
  { type: "post", title: "Daily Inspiration", thumbnail: "/images/inspiration.jpg" },
];

export default function ProfilePage() {
  const { profile, loading } = useAuth();
  const [activeTab, setActiveTab] = useState<"Posts" | "Saved" | "Likes">("Posts");

  if (loading) {
    return <p className="text-white text-center mt-20">Loading profile...</p>;
  }

  if (!profile) {
    return <p className="text-white text-center mt-20">User not found. Please log in.</p>;
  }

  return (
  <main className="w-full min-h-screen bg-[#232323] flex flex-col items-center p-6 gap-6">
    {/* Profile Header */}
    <div className="w-full max-w-4xl flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        {/* Avatar */}
        <img
          src={profile.pfp_url || "/images/default-avatar.jpg"} // fallback if no pfp
          alt="user pfp"
          className="w-24 h-24 rounded-full flex-shrink-0"
        />

        {/* Username */}
        <p className="text-white font-bold">@{profile.username}</p>

        {/* Full Name */}
        <h1 className="text-white text-2xl font-bold">{profile.full_name}</h1>

        {/* Bio */}
        <p className="text-gray-400 text-sm">{profile.bio || "Music Enthusiast"}</p>
      </div>
    </div>

    {/* Tabs */}
    <div className="w-full max-w-4xl flex justify-center gap-4">
      {["Posts", "Saved", "Likes"].map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
            activeTab === tab
              ? "bg-gradient-to-r from-[#9100ff] via-[#b23caf] to-[#ffc300] text-white"
              : "bg-[#1e1e1e] text-gray-400 hover:text-white hover:bg-[#2a2a2a]"
          }`}
          onClick={() => setActiveTab(tab as any)}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Content */}
    <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4">
      {mockPosts.map((post, index) => (
        <div
          key={index}
          className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <img src={post.thumbnail} alt={post.title} className="w-full h-40 object-cover" />
          <div className="p-3 flex flex-col gap-1">
            <h3 className="text-white text-md font-semibold">{post.title}</h3>
            {post.artist && <p className="text-gray-400 text-xs">{post.artist}</p>}
          </div>
        </div>
      ))}
    </div>
  </main>
);

}
