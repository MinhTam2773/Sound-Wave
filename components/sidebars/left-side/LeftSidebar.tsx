import React from "react";
import Link from "next/link";
import NavigationLink from "./NavigationLink";
import { getUser } from "@/server-actions/user/actions";

const LeftSidebar = async () => {
  const profile = await getUser();
  return (
    <>
      <aside className="relative w-[300px] min-w-[220px] max-w-full h-screen bg-[#323131] flex flex-col p-[25px] box-border">
        <div className="flex flex-col justify-between h-full">
          {/* Header */}
          <div className="flex flex-col gap-[25px]">
            <div className="flex items-center gap-[8px] w-[198px] h-[40px]">
              <div className="relative w-[40px] h-[40px] rounded-[5px] overflow-visible bg-gradient-to-r from-[#9000ff] via-[#b23caf] to-[#ffc300]">
                <img
                  className="w-full h-full rounded-[5px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/5d7e/5589/d8d80bda398b944f3b24c2a013e61c36?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lY1KKlaqXdyVNIozOyMbVDIKcq74g~UIo1OC4os3o3tkcOjWQnvKS3HyB7q~N7nlkpT4wHn0Q78L0k1E3Kmg-45iW3vuAoluhdskIvVHSJLkV4YYQnh477ED0ywvmQHRFr5iSgxCYerpXfE0GfLCwA75bv7o50ve0lmN5Gi6QWQaOinqWquS2m3tR4Bev~9YAlUXGYwWDkCU1Ur3RqS8i6EjghQjOoZYXbzwOTGUtNq2z5pWx0rNADhtxocHkNKC~PkEJzichZqi~QvtNA3jvKpclfGAYdIZJLqGbz5eegQv8FzkK61mxZ7gUOOqp5ObRZO0VVcnIfnJYjWarGwwSQ__"
                  alt="Logo"
                />
              </div>
              <span className="text-[24px] font-bold bg-gradient-to-r from-[#9100ff] via-[#b23caf] to-[#ffc300] bg-clip-text text-transparent ml-[10px] whitespace-nowrap">
                Sound Wave
              </span>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-[25px] w-full">
              <span className="text-white text-[22px] font-semibold">Navigation</span>
              <NavigationLink />
            </div>
          </div>

          {/* User Profile */}
          <Link
            href={`/profile/${profile?.username}`}
            className="flex items-center gap-[16px] w-full min-h-[45px] rounded-[10px] pt-[10px] pl-[10px] pb-[10px] hover:bg-white/10 transition-colors"
          >
            <img 
              className="w-[40px] h-[40px] rounded-full "
              src={profile?.pfp_url || "https://imgs.search.brave.com/Fe2n5GcOZORoEurfgcjGDnkZfcV5yyePLXFaBPXh55I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDkv/MjkyLzI0NC9zbWFs/bC9kZWZhdWx0LWF2/YXRhci1pY29uLW9m/LXNvY2lhbC1tZWRp/YS11c2VyLXZlY3Rv/ci5qcGc"}
              alt='user pfp' 
            />
            <div className="flex flex-col justify-center h-[41px] gap-0">
              <span className="text-white text-[18px] font-semibold mb-[2px]">{profile?.display_name}</span>
              <span className="text-white text-[15px] font-normal opacity-70">@{profile?.username}</span>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default LeftSidebar;
