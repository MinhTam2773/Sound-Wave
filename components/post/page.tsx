// /app/post/page.tsx
"use client";

import React, { useState } from "react";

// Example module images (randomly picked when posting)
const moduleImages = [
  "https://via.placeholder.com/300x150?text=Module+1",
  "https://via.placeholder.com/300x150?text=Module+2",
  "https://via.placeholder.com/300x150?text=Module+3",
  "https://via.placeholder.com/300x150?text=Module+4",
];

interface PostData {
  text: string;
  image: string;
}

const Page = () => {
  const [inputText, setInputText] = useState("");
  const [posts, setPosts] = useState<PostData[]>([]);

  const handlePost = () => {
    if (!inputText.trim()) return;

    // Pick a random module image
    const randomImage = moduleImages[Math.floor(Math.random() * moduleImages.length)];

    setPosts([{ text: inputText, image: randomImage }, ...posts]);
    setInputText("");
  };

  return (
    <div className="p-6 bg-[#1e1e1e] min-h-screen flex flex-col gap-6">
      {/* Upload Box */}
      <div className="bg-[#323232] rounded-[10px] border-[0.5px] border-[#776f6f] p-4 flex flex-col gap-3">
        <input
          type="text"
          placeholder="What's on your mind?"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full p-2 rounded-md border border-[#776f6f] bg-[#2c2c2c] text-white outline-none"
        />
        <button
          onClick={handlePost}
          className="bg-gradient-to-r from-[#9000ff] to-[#ffc300] text-white font-semibold rounded-md p-2 w-[90px] self-end"
        >
          Post
        </button>
      </div>

      {/* Posts */}
      <div className="flex flex-col gap-4">
        {posts.map((post, index) => (
          <div key={index} className="bg-[#2c2c2c] p-4 rounded-[8px] flex flex-col gap-2">
            <span className="text-white">{post.text}</span>
            <img
              src={post.image}
              alt="Module"
              className="w-full h-[150px] object-cover rounded-[6px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
