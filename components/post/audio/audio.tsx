"use client";

import React, { useState, useRef } from "react";

export default function AudioPost() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newTime = (parseFloat(e.target.value) / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  const handleReplay = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleEnd = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = audioRef.current.duration || 0;
    setIsPlaying(false);
  };

  return (
    <div className="relative bg-[#323131] rounded-[15px] border-[0.5px] border-[#776f6f] p-[14px_15px] flex flex-col gap-[15px] w-full overflow-hidden">

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        onTimeUpdate={handleTimeUpdate}
      />

        {/* Header */}
      <div className="relative z-10 flex flex-row items-center justify-between w-full gap-[112px]">
        <div className="flex flex-row items-center gap-[15px]">
          <div className="w-[40px] h-[40px] rounded-full bg-white flex-shrink-0" />
          <div className="flex flex-col gap-0 justify-center">
            <div className="text-[1.1rem] font-semibold text-white tracking-tight mb-0">
              Audio
            </div>
            <div className="text-[0.95rem] text-white opacity-70 tracking-tight">
              @audio-post · 2h ago
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-[10px]">
          <img
            className="w-[30px] h-[30px] bg-[#333] rounded-[4px] object-cover"
            src="https://s3-alpha-sig.figma.com/img/57dd/ec23/9735d954f6da513085769ac5faa32bf7?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mh1wPjE~6lackhngCa8CCDH~sP9lsbpAmhz3slPbG8ZZdRBgr7RmdP8rvuauYk9QnWrgJWzPesxRH35BoZIcp9KpoYwKVWh84hTu70PmfUFmK6I1aWaLtAAy~m1ThX6hr8jUfDBmPyBX-xycy8mwceVYjDHwZNGW-~3JcYUBatbk0zVxPU~mofmJFpq8msruNlT0E1oEu5n0z1kX97NaWibLmyqA4C3F9oLoRmYpp51nvMEdqcsEAP8YbwI1viq3-iMLqnRi1JsfhfsAIHpAKsSvOuRvKxzsNq0ejCFNv6H69YCUe6yxmkLhVL5oTrQHKVnnz3sYp3nk-pgSxRmyxA__"
            alt="Bookmark"
          />
          <img
            className="w-[20px] h-[20px] bg-[#333] rounded-[4px] object-cover"
            src="https://s3-alpha-sig.figma.com/img/6a6c/c36b/c469fa7ca0c281a271d6eed3a15190f7?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sOUT4sHlSLbFunuQ~imCKtdC0BAAEsX~8pcwVy~Kxu-H6aJ4UtZTmdbUo5rHNujakzDmhOLEt07QgL458Cu1YAVURCMPqBHkJ-7KjsvoB-WtH4QzMwbEtz32etGnx1ewg-k48Qb~5byzmgQNsVNEjxr2xWny2LVGQlCRfa5rgHCy0cg36eGzzKQUTpQ6XDaiYa7YbBkyQq3GwD66GWZBBijC44kZyB-B3VPBJbTgIegXmiFJTPR0Q9aJ6tgKZkyB1DhYAFxIakeaFziNOyjs8uwujxFPl6VJ-H8y8snvNFBbSkDttGXhGMPMmHglkS9GGn9C33LR~tHjZsA9W~Q4IQ__"
            alt="Ellipsis"
          />
        </div>
      </div>

      {/* Caption */}
      <div className="relative z-10 text-[1.05rem] text-white tracking-tight leading-relaxed">
        Guys this is lit listen to this song I made!
      </div>

      {/* Audio Waves */}
      <div className="flex flex-row gap-[5px] w-full h-[100px] items-end justify-center">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`w-[10px] rounded-[4px] animate-wave`}
            style={{
              height: `${Math.random() * 80 + 20}px`,
              background: "linear-gradient(90deg, #9000ff, #ffc300)",
              animationDelay: `${i * 0.1}s`,
              animationPlayState: isPlaying ? "running" : "paused",
            }}
          />
        ))}
      </div>

      {/* Playback Controls */}
      <div className="flex flex-row items-center justify-center gap-6 mt-2">
        {/* Replay */}
        <button onClick={handleReplay} className="w-[40px] h-[40px] flex items-center justify-center">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-white rotate-180" />
        </button>

        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="relative w-[60px] h-[60px] rounded-full overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
          {isPlaying ? (
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/pause--v1.png"
              alt="Pause"
              className="w-6 h-6 relative z-10"
            />
          ) : (
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/play--v1.png"
              alt="Play"
              className="w-6 h-6 relative z-10"
            />
          )}
        </button>

        {/* End */}
        <button onClick={handleEnd} className="w-[40px] h-[40px] flex items-center justify-center">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-white" />
        </button>
      </div>

      {/* Gradient Progress Bar */}
      <input
        type="range"
        min={0}
        max={100}
        value={progress}
        onChange={handleProgressChange}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer mt-2"
        style={{
          background: `linear-gradient(to right, #9000ff, #ffc300 ${progress}%, #555 ${progress}%)`,
        }}
      />

      {/* Social Actions */}
      <div className="flex flex-col gap-[6px] w-full p-0 z-10 mt-3">
        <div className="w-full h-[2px] bg-white rounded-[1px] opacity-20" />
        <div className="flex flex-row items-center gap-[50px] w-full justify-between">
          <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
            <img
              className="w-[25px] h-[25px] rounded-[4px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/abfc/c0ec/de860555a66ef4127523aa4de840878a?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCHZrhSdCI0~YQkDpobkmy4hIZYShur3sPxglHO5Z6TKMbYvwGXkII2VQWTrDqxY-88mwFngfiKCVYNNvAVH8I1cOQQxGa~o5qAPhdAGyDi8NIs708Ui1uiULPpoz0M4WvLEnL8ACa0Gz0HvtbAOU877UtEA~OG6Jyl-lFydOKgpYY913yb1fB-8n1hFP~3dg87gerFHaV0Mcb0bioWt9kQBZNhpkrPWMUrJ15tjB75TUm-2QEEiHSObjMh9K-dDniDC4gqUHtP6KCyuPXhHyncR28gLtZK~U88Qx9cS~sx8oB8dkEI0SGlUzLo55Qcy5ICHqCsywKcDFlw-BTR2PQ__"
              alt="Favorite"
            />
            <span className="text-[1rem] text-white tracking-tight font-medium">
              142
            </span>
          </div>

          <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
            <img
              className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/952e/f8e0/21e2beb614e0fb68cee46c3bf3d50329?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QkzV1h0OBS1gVcapJHXUVRdrm5ny8v3uQy5uHLv69ZuCjfiOcU4IbT3KnFGcHqs1CRrFOHijgp2K6qZcsER0DCDC7gD4YBFWu9isSu0Cz5Scd2FS4JFjiLWCTn95cppJPx6ysxaE-gDONZRzJ6MuJW~K5Q1DtbOYxiUkYP67EveaL5qp8XFF2ynkvq-AflUkYsgmJuma1NPMvhds-UuvmiGbEquXagdcPa91AUqH4l~o2bW4WH2ahRel7jx9o5shd01RGP5j8d8fWdBpGVCLlwiglkK7y5NMNzx31e-dPksr4XwOywN0DF2CkPMGdY73F0H6N0eYzVx8KIr6o7xMLw__"
              alt="Speech Bubble"
            />
            <span className="text-[1rem] text-white tracking-tight font-medium">
              23
            </span>
          </div>

          <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
            <img
              className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/9026/812c/bd2b3b3a5f324a89b7550b86c1c6d7f0?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nh9WKMapaEhpp3LCTpIfhg0BRG~tgBnN1YKfFxm9s4JMVYBq2k3SloCnogg-mfhzAEbCH5YsnKWddUUKEufse03SN3Dpg5cqzNdQHR86KDkGpXjWJYFs8jVAniuMAyimALe0yn2ktNpxYuv254ybISfiDFcQcJpQVhb8hPfDF4TY2TB-32VIjhqGWGS5xDROatpYEdn7JjylLTz1Cj-jxbjzWrG~EC7lrc86z38lftpdpymRw9E~J3mcrieYkdRz4YgrTGlQD4aoZ4Zp~3FHDkIdQ5Wm8-~SO6G6rU-AhSi0Vzhvc2subGCWfkL7UBVz9nuEQKCgxk2ME0zKNMoM3w__"
              alt="Share"
            />
            <span className="text-[1rem] text-white tracking-tight font-medium">
              8
            </span>
          </div>

          <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
            <img
              className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/cff4/3912/54e96f7bcc585b68673b85060e3bb283?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RZolRxix7nYxFNqxWusdp68HW~MidgQhq7QKKwwfQIPnx5uV6WItRDyXx4r2T5jxT1uSxGQJFphhoUlvSS8kH8crJQB357hqeWUYnfVUjakyUlOiYlNAyW-Pblz-aE2NYmiiAnf9WBcRTHaCSK5uCVEfmic82DXmtFVJFKCnxOl3fnO4COTMcyRRUMASr2n6Lz86eLmJytaAC73SlTaufZysyQIDyazZjzUDLrWXspf8rBX8yvMV6iytZ-Qacbr56HTzOlXXq-o67bFm99z53Le3TCuYggiN0xQiiOHSNzGEzuXWuMc2a91kwgv5V4qDmWy44lGBfEPF5yYR~vJLTQ__"
              alt="Retweet"
            />
            <span className="text-[1rem] text-white tracking-tight font-medium">
              34
            </span>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes wave {
            0%, 100% { transform: scaleY(0.3); }
            50% { transform: scaleY(1); }
          }
          .animate-wave {
            animation: wave 1s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
