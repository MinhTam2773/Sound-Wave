"use client";

import React from "react";
import { MusicPlayer } from "@/components/musicplayer/MusicPlayer";

const musicPosts = [
  {
    title: "Chill Vibes",
    artist: "LoFi Beats",
    audioSrc:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Upbeat Energy",
    artist: "Synth Pop",
    audioSrc:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
];

const MusicPage: React.FC = () => {
  return (
    <main className="w-full h-screen bg-[#232323] flex flex-col">
      <div className="w-full h-full overflow-y-auto snap-y snap-mandatory flex flex-col items-center">

        {/* Title */}
        <div className="snap-start flex justify-start w-full h-screen px-6 items-center">
          <h1 className="text-white text-4xl font-bold">
            Music
          </h1>
        </div>

        {musicPosts.map((post, index) => (
          <div
            key={index}
            className="snap-start flex justify-center items-center w-full h-screen py-10"
          >
            <MusicPlayer {...post} />
          </div>
        ))}

        {/* Bottom scroll buffer */}
        <div className="h-[200vh]" />
      </div>
    </main>
  );
};

export default MusicPage;
