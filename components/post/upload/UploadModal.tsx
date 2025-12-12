"use client";

import React, { useState, useRef, useEffect } from "react";

export default function UploadModal() {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handlePost = () => {
    console.log("Posted:", text);
    setText("");
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px"; // reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // expand
    }
  }, [text]);

  return (
    <div className="relative bg-[#323232] rounded-[10px] border-[0.5px] border-[#776f6f] w-full p-[25px_16px_10px_16px] flex flex-col gap-[10px] min-h-[127px] overflow-hidden">
      {/* Gradient border background */}
      <div className="absolute inset-0 rounded-[10px] p-[1px]">
        <div className="absolute inset-0 rounded-[10px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
        <div className="absolute inset-[1px] rounded-[10px] bg-[#323232]" />
      </div>

      <div className="relative z-10 flex flex-row items-start gap-[25px] w-full">
        {/* Avatar */}
        <div className="w-[47px] h-[47px] rounded-full bg-white flex-shrink-0" />

        <div className="flex flex-col gap-[10px] w-[calc(100%-47px-25px)]">
          {/* Input area */}
          <div className="relative flex flex-row items-center bg-none rounded-[5px] border-[0.5px] border-[#776f6f] p-0 w-full">
            <div className="absolute inset-0 rounded-[5px] p-[1px]">
              <div className="absolute inset-0 rounded-[5px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
              <div className="absolute inset-[1px] rounded-[5px] bg-[#323232]" />
            </div>

            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What's on your mind?"
              className="relative z-10 w-full bg-transparent resize-none overflow-hidden outline-none text-[#fff] placeholder:text-[#776f6f] px-[10px] py-[10px] text-[1.1rem] font-normal"
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-row items-center justify-between w-full gap-[97px]">
            {/* Icons */}
            <div className="flex flex-row items-center gap-[25px]">
              <img
                className="w-[25px] h-[35px] bg-[#333] rounded-[4px] object-cover"
                src="https://s3-alpha-sig.figma.com/img/356e/0ccf/322966846a25c5362ed24e842af29722?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KixWVqTsieLm95kzAd2CDsDEm6ks4WcB~Wq3zuwk98vei4~Pfy~1~7TNu6xowf~ilzSVLenYxPrCJJvqNnjJ02CRVIHfryYXGhv~FH8F0upuwMm3nqgsMMxVdwDVyBlvoHxHmV1fF40jLNin37jgto9cdh61muG~N6HZMUKquN7I5LHrIt2pR8Wfc-fC8qaLO3LSUVCdIzcudlxjgPRYyql519FxWjdEGfljCqtOKVF2Yl9Jo7JSwgjhpeTEOV2Zh5~uv77USb9QaNBYXN-TYsgNV5JgQ1gwU8IMufMvKaC7VnH8hkIow6wPIAM15NRzEtXUQZWUmtdHBM2RE67m0Q__"
                alt="Picture"
              />
              <img
                className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                src="https://s3-alpha-sig.figma.com/img/a270/e67b/8ff8e175062c35ebb1afe8fa17608ac6?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kD6A8bhuI~x7eG~AcT3qgJxRJTAFNf4WTaeUVQxnL-MDEAw6FAsD9Vao1pmdxJ~Orb20LMXq1q6G4qV5ehozIJ4IjN8Lh-rDZw2eBYqwsggkTuQpxMeMsPDYnJlbrh6ZTgtVWs9F9Y4ibvdqBkFWmK8F6DjC1rzSyiMravWbG7OZWSjSZHhK34hISv9O378-53oiSCRfJFOOr0qDF8y97oUEhdQ9ePVehFJjRsc3xazIT6QyD5n3ZEOD1klXSsqyMR25DMEqhxDjqOUhpAFRak0HIg2tnW4-8N0OFy1tjdZMaRWW~Hj4GiLa0cTEiQyrUEqB4F6B3xWK0OwZ0E1~GQ__"
                alt="Music"
              />
            </div>

            {/* Post button */}
            <button
              onClick={handlePost}
              className="bg-gradient-to-r from-[#9000ff] to-[#ffc300] rounded-[5px] border-none text-white text-[1.1rem] font-semibold w-[90px] h-[33px] flex items-center justify-center tracking-tight cursor-pointer relative z-10"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
