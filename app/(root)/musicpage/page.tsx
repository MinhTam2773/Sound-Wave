//app/(root)/musicpage/page.tsx

"use client";

import React from "react";
import { MusicPlayer } from "@/components/musicplayer/MusicPlayer";
import { useMusicPlayerStore } from "@/store/useMusicPlayerStore";

const musicPosts = [
  {
    id: "1",
    title: "Chill Vibes",
    artist: "LoFi Beats",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: "2",
    title: "Upbeat Energy",
    artist: "Synth Pop",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
];

const MusicPage: React.FC = () => {
  const { activeId } = useMusicPlayerStore();

  return (
    <main className="w-full h-screen bg-[#232323] flex flex-col">
      <div className="w-full h-full overflow-y-auto snap-y snap-mandatory flex flex-col items-center">

        {/* Page Title */}
        <div className="snap-start flex justify-start w-full h-screen px-6 items-center">
          <h1 className="text-white text-4xl font-bold">Music</h1>
        </div>

        {/* Music Player Cards */}
        {musicPosts.map((post) => {
          const isActive = activeId === post.id;
          return (
            <div
              key={post.id}
              className={`snap-start flex justify-center items-center w-full h-screen py-10 transition-all duration-300 ease-in-out
                ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-60"}
              `}
            >
              <MusicPlayer {...post} />
            </div>
          );
        })}

        {/* Bottom Scroll Buffer */}
        <div className="h-[200vh]" />
      </div>
    </main>
  );
};

export default MusicPage;
