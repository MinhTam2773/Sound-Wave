"use client";

import React, { useState, useRef, useEffect } from "react";

interface Post {
  type: "audio" | "image" | "post";
  title: string;
  artist?: string;
  audioSrc?: string;
  thumbnail: string;
  isSaved: boolean;
}

const savedPosts: Post[] = [
  {
    type: "audio",
    title: "Chill Vibes",
    artist: "LoFi Beats",
    audioSrc: "/audio/chill-lofi.mp3",
    thumbnail: "/images/chill-lofi.jpg",
    isSaved: true,
  },
  {
    type: "audio",
    title: "Relaxing Piano",
    artist: "Calm Keys",
    audioSrc: "/audio/piano.mp3",
    thumbnail: "/images/piano.jpg",
    isSaved: true,
  },
  {
    type: "image",
    title: "Sunset Vibes",
    thumbnail: "/images/sunset.jpg",
    isSaved: true,
  },
  {
    type: "post",
    title: "Daily Inspiration",
    thumbnail: "/images/inspiration.jpg",
    isSaved: true,
  },
];

const filterOptions = ["all", "audio", "image", "post"] as const;

const LibraryPage: React.FC = () => {
  const [filter, setFilter] = useState<typeof filterOptions[number]>("all");
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const optionWidth = containerWidth / filterOptions.length;
    setIndicatorPosition(optionWidth * filterOptions.indexOf(filter));
  }, [filter]);

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

  const categories = ["audio", "image", "post"] as const;
  const getPostsByType = (type: typeof categories[number]) =>
    savedPosts.filter((post) => post.isSaved && post.type === type);

  return (
    <main className="w-full min-h-screen bg-[#232323] flex flex-col items-center p-4 gap-6">
      <h1 className="text-white text-3xl font-bold">Saved Posts</h1>

      {/* Filter Slider */}
      <div
        ref={containerRef}
        className="relative w-full max-w-3xl h-9 bg-[#1e1e1e] rounded-full flex items-center justify-between px-1 select-none"
      >
        <div
          className="absolute top-0 left-0 h-[34px] rounded-full transition-all duration-300"
          style={{
            width: `${100 / filterOptions.length}%`,
            transform: `translateX(${indicatorPosition}px)`,
            background: "linear-gradient(90deg, #9100ff, #b23caf, #ffc300)",
          }}
        />
        {filterOptions.map((option) => (
          <button
            key={option}
            className={`flex-1 z-10 h-full flex items-center justify-center font-medium cursor-pointer text-sm transition-colors ${
              filter === option ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setFilter(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      {/* Posts */}
      {filter === "all"
        ? categories.map((cat) => {
            const posts = getPostsByType(cat);
            if (posts.length === 0) return null;

            return (
              <section key={cat} className="w-full max-w-3xl">
                <h2 className="text-white text-xl font-semibold mb-3 capitalize border-b border-gray-700 pb-1">
                  {cat}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {posts.map((post, index) => (
                    <div
                      key={index}
                      className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-3 flex flex-col gap-1">
                        <h3 className="text-white text-md font-semibold">{post.title}</h3>
                        {post.artist && <p className="text-gray-400 text-xs">{post.artist}</p>}
                        {post.type === "audio" && post.audioSrc && (
                          <>
                            <audio
                              ref={(el) => (audioRefs.current[index] = el)}
                              src={post.audioSrc}
                            />
                            <button
                              onClick={() => togglePlay(index)}
                              className="mt-1 bg-purple-600 hover:bg-purple-700 text-white py-1 rounded-lg text-sm transition-colors"
                            >
                              {playingIndex === index ? "Pause" : "Play"}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })
        : (
          <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            {savedPosts
              .filter((post) => post.isSaved && post.type === filter)
              .map((post, index) => (
                <div
                  key={index}
                  className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3 flex flex-col gap-1">
                    <h3 className="text-white text-md font-semibold">{post.title}</h3>
                    {post.artist && <p className="text-gray-400 text-xs">{post.artist}</p>}
                    {post.type === "audio" && post.audioSrc && (
                      <>
                        <audio
                          ref={(el) => (audioRefs.current[index] = el)}
                          src={post.audioSrc}
                        />
                        <button
                          onClick={() => togglePlay(index)}
                          className="mt-1 bg-purple-600 hover:bg-purple-700 text-white py-1 rounded-lg text-sm transition-colors"
                        >
                          {playingIndex === index ? "Pause" : "Play"}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
          </div>
        )}
    </main>
  );
};

export default LibraryPage;
