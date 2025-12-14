"use client";

import React, { useState } from "react";
import { useAuth } from "@/hooks/auth";

// -----------------------------
// Types
// -----------------------------
interface Post {
  type: "audio" | "image" | "post";
  title: string;
  thumbnail: string;
  artist?: string;
}

// -----------------------------
// Mock Posts (replace later)
// -----------------------------
const mockPosts: Post[] = [
  { type: "audio", title: "Chill Vibes", artist: "LoFi Beats", thumbnail: "/images/chill-lofi.jpg" },
  { type: "image", title: "Sunset Vibes", thumbnail: "/images/sunset.jpg" },
  { type: "post", title: "Daily Inspiration", thumbnail: "/images/inspiration.jpg" },
];

// -----------------------------
// Page
// -----------------------------
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
    <main className="flex w-full h-screen bg-[#232323] text-white">
      {/* LEFT PROFILE COLUMN */}
      <aside className="w-[320px] flex-shrink-0 px-8 py-10 border-r border-white/10">
        <div className="flex flex-col items-start gap-6">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full overflow-hidden bg-[#2a2a2a]">
            <img
              src={profile.pfp_url || "/images/default-avatar.jpg"}
              alt="user avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight">
              {profile.full_name || profile.username}
            </h1>
            <p className="text-gray-400 text-sm">@{profile.username}</p>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-300 max-w-xs">
            {profile.bio || "Music enthusiast sharing sounds and moments."}
          </p>

          {/* Tabs */}
          <div className="w-full flex flex-col gap-2 pt-4">
            {["Posts", "Reposts", "Saved", "Likes"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`w-full h-11 rounded-md text-sm font-semibold transition ${
  activeTab === tab
    ? "bg-gradient-to-r from-[#9000ff] to-[#ffc300] text-black"
    : "bg-[#1e1e1e] text-gray-400 hover:text-white"
}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* RIGHT CONTENT */}
      <section className="flex-1 px-10 py-10 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPosts.map((post, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-xl bg-[#1e1e1e] border border-white/5 hover:border-white/10 transition"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-semibold text-sm tracking-tight">{post.title}</h3>
                {post.artist && (
                  <p className="text-xs text-gray-400">{post.artist}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
