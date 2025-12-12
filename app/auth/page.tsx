import Link from "next/link";
import React from "react";

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-1 items-center justify-center p-4 font-['Inter',Arial,sans-serif]">
      <div className="relative w-[532px] max-w-[95vw] bg-white rounded-[20px] box-border pt-[43px] px-8 pb-8 flex flex-col gap-[35px] shadow-[0_2px_16px_0_rgba(0,0,0,0.04)] overflow-hidden">
        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-[20px] p-[0.5px]">
          <div className="absolute inset-[0.5px] rounded-[20px] bg-white shadow-xl" />
        </div>

        {/* Header */}
        <div className="relative z-10 flex flex-col gap-2.5 w-full">
          <h1 className="text-[2rem] font-bold text-black tracking-[-0.4px] m-0 leading-[1.1]">
            Try{" "}
            <span className="font-bold bg-linear-to-r from-[#9100ff] via-[#b23caf] to-[#FF2C92] bg-clip-text text-transparent whitespace-nowrap">
              Sound Wave
            </span>{" "}
            Now!
          </h1>
          <div className="text-[1rem] text-black font-normal m-0 leading-[1.2]">
            Login or Sign up and join our Community!
          </div>
          <hr className="w-full h-px bg-[rgba(0,0,0,0.35)] opacity-[0.35] border-none m-[10px_0_0_0]" />
        </div>

        {/* Actions */}
        <div className="relative z-10 flex flex-col gap-[30px] w-full">
          {/* Login Button */}
          <Link href={"/auth/login"}>
            <button className="relative w-full h-[41px] bg-white text-black text-[1.1rem] font-semibold tracking-[-0.4px] rounded-[15px] border-[0.5px] border-[rgba(0,0,0,0.35)] flex items-center justify-center cursor-pointer transition-shadow duration-150">
              <span className="relative z-10">LOGIN</span>
            </button>
          </Link>

          {/* Signup Button */}
          <Link href={"/auth/register"}>
            <button className="relative w-full h-[41px] bg-linear-to-r from-[#9100ff] via-[#b23caf] to-[#ffc400] text-white text-[1.1rem] font-semibold tracking-[-0.4px] rounded-[15px] flex items-center justify-center cursor-pointer transition-shadow duration-150 overflow-hidden">
              <span className="relative z-20">SIGN UP</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
