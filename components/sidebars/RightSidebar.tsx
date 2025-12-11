import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";

const popularTags = [
  "#LoFi",
  "#Ambient",
  "#Punk",
  "#K-Pop",
  "#J-Pop",
  "#Hip-Hop",
  "#Rock",
  "#Funk",
  "#Piano",
  "#Rnb",
  "#Instrumentals",
  "#Background Music",
];

const suggestedUser = {
  name: "Jane Dow",
  subtitle: "followed by Steve",
  avatar: "/rightsidebar/add-user-male.png",
};

const onlineFriends = [
  {
    name: "Do Cam Toan",
    message: "You: Hello...adssad...",
    isOnline: true,
    isBold: false,
  },
  {
    name: "Cho Thy Gia",
    message: "Cho: sent an image",
    isOnline: false,
    isBold: false,
  },
  {
    name: "Good Morning Man",
    message: "GMM: GOOD MORNING!",
    isOnline: true,
    isBold: true,
  },
];

export const RightSidebar = (): JSX.Element => {
  return (
    <aside
      className="
        w-[300px] 
        h-screen 
        fixed 
        right-0 
        top-0
        flex flex-col 
        items-start 
        gap-7 
        p-[25px] 
        bg-[#323232]
        border-l border-[#776f6f]
        overflow-y-auto
      "
    >
      {/* Popular Section */}
      <section className="flex flex-col items-start justify-center gap-[25px] w-full">
        <h2 className="bg-[linear-gradient(90deg,rgba(144,0,255,1)_24%,rgba(255,195,0,1)_100%)] bg-clip-text text-transparent font-bold text-xl">
          Popular
        </h2>

        <div className="flex flex-wrap items-start gap-[10px] px-0.5 py-0 w-full">
          {popularTags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="h-10 px-[18px] py-2.5 bg-[#323131] rounded-[30px] border-[0.5px] border-[#776f6f]"
            >
              <span className="font-semibold text-white text-base">
                {tag}
              </span>
            </Badge>
          ))}
        </div>
      </section>

      {/* Suggested User */}
      <section className="flex flex-col items-start gap-5 w-full relative">
        <h3 className="font-semibold text-white text-base">Suggested for you</h3>

        <div className="flex items-center gap-3 w-full">
          {/* 40x40 ellipse instead of image */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-yellow-300" />

          <div className="flex flex-col">
            <span className="font-semibold text-white text-[13px]">
              {suggestedUser.name}
            </span>
            <span className="font-light text-white text-[10px]">
              {suggestedUser.subtitle}
            </span>
          </div>
        </div>

        {/* Bottom row with status + add button */}
        <div className="flex items-center justify-between w-full">
          {/* Status dot (online/offline style—always online for this user) */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#38ff22]" />
            <span className="text-xs text-white">Online</span>
          </div>

          {/* Add Friend Button */}
          <Button variant="ghost" size="icon" className="w-10 h-10">
            <img
              className="w-6 h-6"
              alt="Add user"
              src="/rightsidebar/add-user-male.png"
            />
          </Button>
        </div>

        <Separator className="absolute top-0 left-[-25px] w-[300px] bg-white/20" />
        <Separator className="absolute bottom-[-10px] left-[-25px] w-[300px] bg-white/20" />
      </section>

      {/* Online Friends */}
      <section className="flex flex-col items-start gap-1.5 w-full mb-[-25px]">
        <h3 className="font-semibold text-white text-base">Online Friends</h3>

        <div className="flex flex-col items-start gap-[23px] w-full">
          {onlineFriends.map((friend, index) => (
            <div
              key={index}
              className="relative w-full h-10 cursor-pointer hover:opacity-80"
            >
              {/* 40x40 ellipse avatar */}
              <div className="absolute top-0 left-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-yellow-300" />

              {/* Friend name */}
              <div className="absolute top-1 left-[50px] font-semibold text-white text-[13px]">
                {friend.name}
              </div>

              {/* Last message */}
              <div
                className={`absolute ${
                  friend.isBold ? "top-[25px] font-bold" : "top-[27px] font-light"
                } left-[50px] text-white text-xs`}
              >
                {friend.message}
              </div>

              {/* Status dot */}
              <div
                className={`${
                  friend.isOnline ? "bg-[#38ff22]" : "bg-[#ff4444]"
                } absolute top-[29px] left-[29px] w-[11px] h-[11px] rounded-full`}
              />
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};
