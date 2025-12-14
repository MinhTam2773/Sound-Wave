"use client";

import React, { useState } from "react";

// -----------------------------
// Types
// -----------------------------
interface Post {
  type: "audio" | "image" | "post";
  title: string;
  thumbnail: string;
  artist?: string;
}

export type UserProfile = {
  id: string;
  email: string;
  username: string;
  display_name: string | null;
  pfp_url: string | null;
  bio: string | null;
  provider: string;
  email_verified: boolean;
  created_at: string;
};

interface ProfileClientProps {
  user: UserProfile;
}

// -----------------------------
// Mock Data
// -----------------------------
const mockPosts: Post[] = [
  { type: "audio", title: "Chill Vibes", artist: "LoFi Beats", thumbnail: "/images/chill-lofi.jpg" },
  { type: "image", title: "Sunset Vibes", thumbnail: "/images/sunset.jpg" },
  { type: "post", title: "Daily Inspiration", thumbnail: "/images/inspiration.jpg" },
];

// -----------------------------
// Component
// -----------------------------
export default function ProfileClient({ user }: ProfileClientProps) {
  const [activeTab, setActiveTab] = useState<"Posts" | "Music">("Posts");

  const posts = mockPosts.filter((p) => p.type !== "audio");
  const music = mockPosts.filter((p) => p.type === "audio");

  return (
    <main className="flex w-full h-screen bg-[#232323] text-white">
      {/* LEFT PROFILE COLUMN */}
      <aside className="w-[320px] flex-shrink-0 px-8 py-10 border-r border-white/10">
        <div className="flex flex-col items-start gap-6">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full overflow-hidden bg-[#2a2a2a] ring-2 ring-white/10">
            {user.pfp_url ? (
              <img
                src={user.pfp_url}
                alt={`${user.username} profile picture`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-3xl font-semibold">
                {user.username.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Name + Username */}
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight">
              {user.display_name || user.username}
            </h1>
            <p className="text-gray-400 text-sm">@{user.username}</p>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-300 max-w-xs">
            {user.bio || "Music enthusiast sharing sounds and moments."}
          </p>

          {/* Tabs */}
          <div className="w-full flex flex-col gap-2 pt-4">
            {["Posts", "Music"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "Posts" | "Music")}
                className={`w-full h-11 rounded-md text-sm font-semibold transition ${
  activeTab === tab
    ? "bg-gradient-to-r from-[#9000ff] to-[#ffc300] text-black"
    : "bg-[#1e1e1e] text-gray-400 hover:text-white"
}`}>
                {tab === "Music" ? "Music Made" : tab}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* RIGHT CONTENT */}
      <section className="flex-1 px-10 py-10 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === "Posts" ? posts : music).map((item, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-xl bg-[#1e1e1e] border border-white/5 hover:border-white/10 transition"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-semibold text-sm tracking-tight">
                  {item.title}
                </h3>
                {item.artist && (
                  <p className="text-xs text-gray-400">{item.artist}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
