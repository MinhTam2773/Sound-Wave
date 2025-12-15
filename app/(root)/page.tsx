import React from "react";
import UploadModal from "@/components/post/upload/UploadModal";
import { getPosts } from "@/server-actions/post/actions";
import Post from "@/components/post/post";
import { getUser } from "@/server-actions/user/actions";


export default async function LandingPage() {
  const posts = await getPosts();
  const user = await getUser();
  
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
        <UploadModal user={user}/>

        {/* Posts */}
        <div className="flex flex-col gap-[20px] w-full">
          {posts?.map(post => 
            <Post key={post.id} post={post} user={user} />
          )}
        </div>
      </div>
    </main>
  );
}
