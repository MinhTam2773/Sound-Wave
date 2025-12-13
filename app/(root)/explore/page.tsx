"use client";

import React, { useState } from "react";

interface Post {
  type: "audio" | "image" | "post";
  title: string;
  artist?: string;
  thumbnail: string;
}

const explorePosts: Post[] = [
  { type: "audio", title: "Chill Vibes", artist: "LoFi Beats", thumbnail: "/images/chill-lofi.jpg" },
  { type: "audio", title: "Relaxing Piano", artist: "Calm Keys", thumbnail: "/images/piano.jpg" },
  { type: "image", title: "Sunset Vibes", thumbnail: "/images/sunset.jpg" },
  { type: "post", title: "Daily Inspiration", thumbnail: "/images/inspiration.jpg" },
  { type: "image", title: "Nature Photography", thumbnail: "/images/nature.jpg" },
  { type: "audio", title: "Upbeat Energy", artist: "Synth Pop", thumbnail: "/images/upbeat.jpg" },
];

const categories = ["All", "Audio", "Image", "Posts"] as const;

const ExplorePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? explorePosts
      : explorePosts.filter((post) => post.type.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <main className="w-full min-h-screen bg-[#232323] flex flex-col items-center p-6 gap-6">
      <h1 className="text-white text-3xl font-bold">Explore</h1>

      {/* Categories Filter */}
      <div className="w-full max-w-4xl flex gap-4 overflow-x-auto py-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-[#9100ff] via-[#b23caf] to-[#ffc300] text-white shadow-md"
                : "bg-[#1e1e1e] text-gray-400 hover:text-white hover:shadow-sm"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
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

export default ExplorePage;
