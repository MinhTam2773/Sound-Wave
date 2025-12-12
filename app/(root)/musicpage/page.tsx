"use client";

import React, { useState, useRef } from "react";

interface MusicPost {
  title: string;
  artist: string;
  audioSrc: string;
  thumbnail: string;
}

const MusicPage: React.FC = () => {
  const musicPosts: MusicPost[] = [
    {
      title: "Chill Vibes",
      artist: "LoFi Beats",
      audioSrc: "/audio/chill-lofi.mp3",
      thumbnail: "/images/chill-lofi.jpg",
    },
    {
      title: "Upbeat Energy",
      artist: "Synth Pop",
      audioSrc: "/audio/upbeat.mp3",
      thumbnail: "/images/upbeat.jpg",
    },
  ];

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

  return (
    <main className="w-full min-h-screen bg-[#232323] flex flex-col items-center p-6 gap-6">
      <h1 className="text-white text-3xl font-bold">Music</h1>
      <div className="w-full max-w-3xl flex flex-col gap-6">
        {musicPosts.map((post, index) => (
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

export default MusicPage;
