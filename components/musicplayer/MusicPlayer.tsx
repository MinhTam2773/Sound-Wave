"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  MoreVertical,
  Heart,
  MessageCircle,
  Repeat,
  Send,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/musicplayerui/avatar";
import { Card, CardContent } from "../ui/musicplayerui/card";
import { useMusicPlayerStore } from "@/store/useMusicPlayerStore";

interface MusicPlayerProps {
  id: string;
  title: string;
  artist: string;
  username: string;
  audioSrc: string;
  tags?: string[];
  likes?: number;
  comments?: number;
  shares?: number;
  reposts?: number;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  id,
  title,
  artist,
  username,
  audioSrc,
  tags = [],
  likes = 0,
  comments = 0,
  shares = 0,
  reposts = 0,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { activeId, isPlaying, play, pause } = useMusicPlayerStore();

  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [isLiked, setIsLiked] = useState(false);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (activeId === id && isPlaying) {
      pause();
    } else {
      play(id, audioRef.current);
    }
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
  };

  const endAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = audioRef.current.duration || 0;
    setProgress(100);
    setCurrentTime(duration);
    pause();
  };

  useEffect(() => {
    if (!audioRef.current) return;
    if (activeId !== id) audioRef.current.pause();
  }, [activeId, id]);

  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <Card className="w-[90vw] max-w-[535px] bg-[#323131] rounded-[20px] border-[0.5px] border-[#766f6f] overflow-hidden">
      <CardContent className="flex flex-col gap-3 p-4">

        {/* Header: Avatar + username */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <Avatar className="w-[50px] h-[50px]">
              <AvatarFallback className="bg-white" />
            </Avatar>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-semibold">{artist}</span>
              <span className="text-gray-400 text-sm">@{username}</span>
            </div>
          </div>
          <MoreVertical className="w-5 h-5 text-white" />
        </div>

        {/* Thumbnail / gradient box */}
        <div className="w-full h-[250px] mt-3 rounded-[15px] bg-gradient-to-r from-[#9000ff] to-[#ffc300] flex items-center justify-center">
          <span className="text-white text-2xl font-bold">{title}</span>
        </div>

        <audio
          ref={audioRef}
          src={audioSrc}
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
        />

        {/* Progress bar */}
        <div className="w-full mt-3 flex flex-col gap-1">
          <div className="w-full h-2 bg-[#555] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#9000ff] to-[#ffc300]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-white/70">
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-3">
          <button
            onClick={resetAudio}
            className="p-3 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600"
          >
            <SkipBack className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={togglePlay}
            className="relative w-[60px] h-[60px] rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#9000ff] to-[#ffc300]"
          >
            {activeId === id && isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </button>

          <button
            onClick={endAudio}
            className="p-3 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600"
          >
            <SkipForward className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Tags / badges */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-purple-400 bg-purple-900/20 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Like / Comment / Share / Repost */}
        <div className="flex justify-between mt-3 border-t border-white/10 pt-2">
          <button
            onClick={toggleLike}
            className={`flex items-center gap-1 ${
              isLiked ? "text-red-400" : "text-white/70"
            }`}
          >
            <Heart className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} />
            <span className="text-sm">{likes + (isLiked ? 1 : 0)}</span>
          </button>

          <div className="flex items-center gap-4 text-white/70">
            <div className="flex items-center gap-1">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">{comments}</span>
            </div>
            <div className="flex items-center gap-1">
              <Repeat className="w-5 h-5" />
              <span className="text-sm">{reposts}</span>
            </div>
            <div className="flex items-center gap-1">
              <Send className="w-5 h-5" />
              <span className="text-sm">{shares}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
