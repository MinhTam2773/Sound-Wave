import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

interface User {
  name: string;
  subtitle: string;
  isOnline: boolean;
}

interface Friend {
  name: string;
  message: string;
  isOnline: boolean;
  isBold: boolean;
}

const popularTags: string[] = [
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

const suggestedUser: User = {
  name: "Jane Dow",
  subtitle: "followed by Steve",
  isOnline: true,
};

const onlineFriends: Friend[] = [
  { name: "Do Cam Toan", message: "You: Hello...adssad...", isOnline: true, isBold: false },
  { name: "Cho Thy Gia", message: "Cho: sent an image", isOnline: false, isBold: false },
  { name: "Good Morning Man", message: "GMM: GOOD MORNING!", isOnline: true, isBold: true },
];

export const RightSidebar: React.FC = () => {
  return (
    <aside className="w-[300px] h-screen fixed right-0 top-0 flex flex-col items-start gap-7 p-[25px] bg-[#2C2C2C] overflow-y-auto">

      {/* Popular Section */}
      <section className="flex flex-col items-start gap-[20px] w-full">
        <h2 className="bg-gradient-to-r from-[#9100ff] via-[#b23caf] to-[#ffc300] bg-clip-text text-transparent font-bold text-xl">
          Popular
        </h2>

        <div className="flex flex-wrap items-start gap-[8px] w-full">
          {popularTags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="h-7 px-3 py-1.5 bg-[#323232] rounded-[20px] border-none hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#9100ff] hover:via-[#b23caf] hover:to-[#ffc300] transition-all duration-300 cursor-pointer"
            >
              <span className="font-semibold text-white text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#9100ff] hover:via-[#b23caf] hover:to-[#ffc300]">
                {tag}
              </span>
            </Badge>
          ))}
        </div>
      </section>

      {/* Suggested User Section with separators */}
      <section className="flex flex-col items-start gap-5 w-full relative border-t border-white/20 border-b border-white/20 py-4">
        <h3 className="font-semibold text-white text-base">Suggested for you</h3>

        <div className="flex items-center justify-between w-full">
          {/* Avatar with online status */}
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-yellow-300 flex-shrink-0">
            <div className={`${suggestedUser.isOnline ? "bg-[#38ff22]" : "bg-[#ff4444]"} absolute bottom-0 right-0 w-[11px] h-[11px] rounded-full border-2 border-[#2C2C2C]`} />
          </div>

          {/* Name and subtitle */}
          <div className="flex flex-col ml-3 flex-1">
            <span className="font-semibold text-white text-[13px]">{suggestedUser.name}</span>
            <span className="font-light text-white text-[10px]">{suggestedUser.subtitle}</span>
          </div>

          {/* Add Friend Button */}
          <Button variant="ghost" size="icon" className="w-10 h-10">
            <img className="w-6 h-6" alt="Add user" src="/rightsidebar/add-user-male.png" />
          </Button>
        </div>
      </section>

      {/* Online Friends Section */}
      <section className="flex flex-col items-start gap-1.5 w-full">
        <h3 className="font-semibold text-white text-base">Online Friends</h3>

        <div className="flex flex-col items-start gap-[18px] w-full mt-2">
          {onlineFriends.map((friend, index) => (
            <div key={index} className="relative w-full h-10 cursor-pointer hover:opacity-80">
              <div className="absolute top-0 left-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-yellow-300" />

              <div className="absolute top-1 left-[50px] font-semibold text-white text-[13px]">{friend.name}</div>

              <div className={`${friend.isBold ? "top-[25px] font-bold" : "top-[27px] font-light"} absolute left-[50px] text-white text-xs`}>
                {friend.message}
              </div>

              <div className={`${friend.isOnline ? "bg-[#38ff22]" : "bg-[#ff4444]"} absolute top-[29px] left-[29px] w-[11px] h-[11px] rounded-full`} />
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};
