import React from "react";
import UploadModal from "@/components/post/upload/UploadModal";
import { getPosts } from "@/server-actions/post/actions";
import { getUser } from "@/server-actions/user/actions";
import { PostData } from "@/types/post/types";
import Post from "@/components/post/Post";

export default async function LandingPage() {
  const posts = await getPosts();
  const user = await getUser();

  return (
    <main className="w-full bg-[#232323] flex flex-col items-center p-0">
      <div className="w-[709px] max-w-full flex flex-col gap-5 mx-auto p-0">
        {/* Header */}
        <div className="flex flex-row items-center h-[54px] w-full gap-2.5 bg-none border-none p-0">
          <div className="text-[2rem] font-bold text-white h-[54px] flex items-center tracking-tight ml-0">
            Home
          </div>
        </div>

        {/* Upload Modal */}
        <UploadModal user={user}/>

        {/* Posts */}
        <div className="flex flex-col gap-5 w-full">
          {posts?.map(post => 
            <Post key={post.id} post={post as PostData} user={user} />
          )}
        </div>
      </div>
    </main>
  );
}
