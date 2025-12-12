import UploadModal from "@/components/post/upload/UploadModal";
export default function LandingPage() {
  return (
    <main className="w-full h-screen overflow-y-scroll bg-[#232323] flex flex-col items-center p-0">
      <div className="w-[709px] max-w-full flex flex-col gap-[20px] mx-auto p-0">
        {/* Header */}
        <div className="flex flex-row items-center h-[54px] w-full gap-[10px] bg-none border-none p-0">
          <div className="text-[2rem] font-bold text-white h-[54px] flex items-center tracking-tight ml-0">
            Home
          </div>
        </div>

         {/* Upload Modal */}
        <UploadModal />
        {/* Posts will go here */}
      </div>
    </main>
  );
}
