"use client";

import React, { useEffect, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, X } from "lucide-react";
import { useMusicPlayerStore } from "@/store/useMusicPlayerStore";

export const BottomMusicBar: React.FC = () => {
  const { activeId, isPlaying, audioRef, pause, play, stop } = useMusicPlayerStore();
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Update progress and time
  useEffect(() => {
    if (!audioRef) return;

    const handleTimeUpdate = () => {
      if (!audioRef) return;
      const current = audioRef.currentTime;
      const total = audioRef.duration || 0;
      setProgress((current / (total || 1)) * 100);
      setCurrentTime(formatTime(current));
      setDuration(formatTime(total));
    };

    audioRef.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audioRef]);

  if (!activeId) return null;

  const togglePlay = () => {
    if (!audioRef) return;
    if (isPlaying) pause();
    else play(activeId, audioRef);
  };

  const resetAudio = () => {
    if (!audioRef) return;
    audioRef.currentTime = 0;
  };

  const endAudio = () => {
    if (!audioRef) return;
    audioRef.currentTime = audioRef.duration || 0;
    pause();
  };

  const removeBar = () => {
    stop(); // stops and hides bar
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[540px] bg-[#2c2c2c] rounded-2xl shadow-xl p-3 flex flex-col gap-2 z-50">
      
      {/* Remove button */}
      <div className="flex justify-end">
        <button onClick={removeBar} className="text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Controls + Track info */}
      <div className="flex items-center justify-between">
        {/* Track info */}
        <div className="flex flex-col overflow-hidden">
          <span className="text-white font-semibold truncate">Now Playing</span>
          <span className="text-gray-400 text-sm truncate">Artist</span>
        </div>

        {/* Playback controls */}
        <div className="flex items-center gap-4">
          <button onClick={resetAudio} className="p-2 hover:bg-gray-700 rounded-full">
            <SkipBack className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={togglePlay}
            className="p-3 bg-gradient-to-r from-[#9000ff] to-[#ffc300] rounded-full flex items-center justify-center"
          >
            {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
          </button>

          <button onClick={endAudio} className="p-2 hover:bg-gray-700 rounded-full">
            <SkipForward className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-600 rounded-full overflow-hidden mt-1">
        <div
          className="h-full bg-gradient-to-r from-[#9000ff] to-[#ffc300]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Time */}
      <div className="flex justify-between text-xs text-gray-400">
        <span>{currentTime}</span>
        <span>{duration}</span>
      </div>
    </div>
  );
};
