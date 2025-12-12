"use client";

import React, { useState, useRef } from "react";

interface MusicPost {
  title: string;
  artist: string;
  audioSrc: string;
  thumbnail: string;
  isSaved: boolean; // only show if saved
}

const savedMusicPosts: MusicPost[] = [
  {
    title: "Chill Vibes",
    artist: "LoFi Beats",
    audioSrc: "/audio/chill-lofi.mp3",
    thumbnail: "/images/chill-lofi.jpg",
    isSaved: true,
  },
  {
    title: "Upbeat Energy",
    artist: "Synth Pop",
    audioSrc: "/audio/upbeat.mp3",
    thumbnail: "/images/upbeat.jpg",
    isSaved: false,
  },
  {
    title: "Relaxing Piano",
    artist: "Calm Keys",
    audioSrc: "/audio/piano.mp3",
    thumbnail: "/images/piano.jpg",
    isSaved: true,
  },
];

const LibraryPage: React.FC = () => {
  const savedPosts = savedMusicPosts.filter((post) => post.isSaved);

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const togglePlay = (index: number) => {
    const currentAudio = audioRefs.current[index];
    if (!currentAudio) return;

    if (playingIndex === index) {
      currentAudio.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        audioRefs.current[playingIndex]?.pause();
      }
      currentAudio.play();
      setPlayingIndex(index);
    }
  };

  if (savedPosts.length === 0) {
    return (
      <main className="w-full min-h-screen bg-[#232323] flex flex-col items-center p-6 gap-6">
        <h1 className="text-white text-3xl font-bold">Library</h1>
        <p className="text-gray-400">You haven’t saved any posts yet.</p>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-[#232323] flex flex-col items-center p-6 gap-6">
      <h1 className="text-white text-3xl font-bold">Library</h1>
      <div className="w-full max-w-3xl flex flex-col gap-6">
        {savedPosts.map((post, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] rounded-xl p-4 flex flex-col gap-3 shadow-md"
          >
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="flex flex-col">
              <h2 className="text-white text-lg font-semibold">{post.title}</h2>
              <p className="text-gray-400 text-sm">{post.artist}</p>
            </div>
            <audio ref={(el) => (audioRefs.current[index] = el)} src={post.audioSrc} />
            <button
              onClick={() => togglePlay(index)}
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors"
            >
              {playingIndex === index ? "Pause" : "Play"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default LibraryPage;
