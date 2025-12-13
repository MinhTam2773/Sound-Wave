"use client";

import React, { useState } from "react";

interface Post {
  type: "audio" | "image" | "post";
  title: string;
  artist?: string;
  thumbnail: string;
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

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState("");

  const filteredPosts = mockPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      (post.artist?.toLowerCase().includes(query.toLowerCase()) ?? false)
  );

  return (
    <main className="w-full min-h-screen bg-[#232323] flex flex-col items-center p-6 gap-6">
      <h1 className="text-white text-3xl font-bold">Search</h1>

      {/* Search input */}
      <div className="w-full max-w-3xl">
        <input
          type="text"
          placeholder="Search posts, audio, or images..."
          className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Search results */}
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredPosts.length === 0 ? (
          <p className="text-gray-400 col-span-full text-center">No results found.</p>
        ) : (
          filteredPosts.map((post, index) => (
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
          ))
        )}
      </div>
    </main>
  );
};

export default SearchPage;
