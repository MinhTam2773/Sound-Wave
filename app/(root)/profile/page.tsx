"use client";

import React, { useState } from "react";

interface Post {
  type: "audio" | "image" | "post";
  title: string;
  thumbnail: string;
  artist?: string;
}

const mockPosts: Post[] = [
  {
    type: "audio",
    title: "Chill Vibes",
    artist: "LoFi Beats",
    thumbnail: "/images/chill-lofi.jpg",
  },
  {
    type: "image",
    title: "Sunset Vibes",
    thumbnail: "/images/sunset.jpg",
  },
  {
    type: "post",
    title: "Daily Inspiration",
    thumbnail: "/images/inspiration.jpg",
  },
];

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Posts" | "Saved" | "Likes">("Posts");

  return (
    <main className="w-full min-h-screen bg-[#232323] flex flex-col items-center p-6 gap-6">
      {/* Profile Header */}
      <div className="w-full max-w-4xl flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-white flex-shrink-0" />
        <h1 className="text-white text-2xl font-bold">Username</h1>
        <p className="text-gray-400">@username</p>
        <p className="text-gray-400 text-sm">Music Enthusiast</p>
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
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3 flex flex-col gap-1">
              <h3 className="text-white text-md font-semibold">{post.title}</h3>
              {post.artist && <p className="text-gray-400 text-xs">{post.artist}</p>}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProfilePage;
