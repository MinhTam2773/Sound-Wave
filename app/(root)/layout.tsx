import LeftSidebar from "@/components/sidebars/LeftSidebar";
import { RightSidebar } from "@/components/sidebars/RightSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full h-screen">
      {/* Left Sidebar */}
      <div className="w-[250px] flex-shrink-0">
        <LeftSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

      {/* Right Sidebar */}
      <div className="w-[250px] flex-shrink-0">
        <RightSidebar />
      </div>
    </main>
  );
}
