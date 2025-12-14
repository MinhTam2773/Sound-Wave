"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, X } from "lucide-react";
import { useMusicPlayerStore } from "@/store/useMusicPlayerStore";

export const BottomPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { activeTrack, isPlaying, play, pause } = useMusicPlayerStore();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!activeTrack || !audioRef.current) return;
    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [activeTrack, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current || !activeTrack) return;
    if (isPlaying) pause();
    else play(activeTrack, audioRef.current);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const total = audioRef.current.duration || 1;
    setProgress((audioRef.current.currentTime / total) * 100);
  };

  if (!activeTrack || !isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[550px] bg-[#1c1c1c] rounded-xl shadow-xl border border-gray-700 p-4 flex items-center gap-4">
      
      {/* Track Info */}
      <div className="flex items-center gap-4 flex-1">
        <div className="w-12 h-12 bg-gray-700 rounded flex items-center justify-center text-white text-xs">
          {activeTrack.title[0]}
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="text-white font-semibold truncate">{activeTrack.title}</span>
          <span className="text-gray-400 text-xs truncate">{activeTrack.artist}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => audioRef.current && (audioRef.current.currentTime = 0)}
          className="hover:text-purple-400 transition"
        >
          <SkipBack className="w-5 h-5 text-white" />
        </button>

        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9000ff] to-[#ffc300] flex items-center justify-center shadow-md"
        >
          {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
        </button>

        <button
          onClick={() => audioRef.current && (audioRef.current.currentTime = audioRef.current.duration)}
          className="hover:text-purple-400 transition"
        >
          <SkipForward className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Exit Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="ml-4 hover:text-red-400 transition"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gray-600 w-full rounded-b-xl overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#9000ff] to-[#ffc300]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <audio
        ref={audioRef}
        src={activeTrack.audioSrc}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
};
