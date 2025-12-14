import LeftSidebar from "@/components/sidebars/LeftSidebar";
import { RightSidebar } from "@/components/sidebars/RightSidebar";
import { BottomMusicBar } from "@/components/musicplayer/BottomMusicBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full h-screen bg-[#232323]">
      {/* Left Sidebar */}
      <div className="w-[250px] flex-shrink-0">
        <LeftSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto pb-20"> {/* add padding bottom for bar */}
        {children}
      </div>

      {/* Right Sidebar */}
      <div className="w-[250px] flex-shrink-0">
        <RightSidebar />
      </div>

      {/* Bottom Music Bar */}
      <BottomMusicBar />
    </main>
  );
}
