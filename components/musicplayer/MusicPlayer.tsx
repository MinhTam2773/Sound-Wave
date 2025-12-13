"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  SkipBackIcon,
  SkipForwardIcon,
  MoreVerticalIcon,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/musicplayerui/avatar";
import { Button } from "../ui/musicplayerui/button";
import { Card, CardContent } from "../ui/musicplayerui/card";

interface MusicPlayerProps {
  title: string;
  artist: string;
  audioSrc: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  title,
  artist,
  audioSrc,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  // Format seconds to mm:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) audioRef.current.pause();
    else await audioRef.current.play();

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;

    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration || 0;

    setProgress((current / (total || 1)) * 100);
    setCurrentTime(formatTime(current));
    setDuration(formatTime(total));
  };

  const resetAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setProgress(0);
    setCurrentTime("0:00");
    setIsPlaying(false);
  };

  const endAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = audioRef.current.duration || 0;
    setProgress(100);
    setCurrentTime(duration);
    setIsPlaying(false);
  };

  return (
    <Card className="w-[90vw] max-w-[535px] h-[650px] bg-[#323131] rounded-[20px] border-[0.5px] border-[#766f6f] overflow-hidden">
      <CardContent className="flex flex-col items-center gap-3 p-4 h-full">
        {/* Header */}
        <header className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <Avatar className="w-[50px] h-[50px]">
              <AvatarFallback className="bg-white" />
            </Avatar>
            <div>
              <h2 className="text-white text-xl font-medium">{artist}</h2>
              <p className="text-white text-base">{title}</p>
            </div>
          </div>
          <MoreVerticalIcon className="w-5 h-5 text-white" />
        </header>

        {/* Gradient Thumbnail */}
        <div className="w-full h-[250px] mt-3 rounded-[15px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />

        {/* Audio */}
        <audio
          ref={audioRef}
          src={audioSrc}
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
        />

        {/* Progress with timestamps */}
        <div className="w-full mt-4 flex flex-col gap-1">
          <div className="w-full h-2 bg-[#555] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#9000ff] to-[#ffc300]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-white opacity-70">
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <Button variant="ghost" size="icon" onClick={resetAudio}>
            <SkipBackIcon className="w-6 h-6 text-white" />
          </Button>

          <button
            onClick={togglePlay}
            className="relative w-[60px] h-[60px] rounded-full overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
            <img
              src={
                isPlaying
                  ? "https://img.icons8.com/ios-filled/50/ffffff/pause--v1.png"
                  : "https://img.icons8.com/ios-filled/50/ffffff/play--v1.png"
              }
              className="w-6 h-6 relative z-10"
              alt="play"
            />
          </button>

          <Button variant="ghost" size="icon" onClick={endAudio}>
            <SkipForwardIcon className="w-6 h-6 text-white" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
