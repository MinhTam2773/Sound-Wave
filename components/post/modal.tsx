"use client"; // needed if using state/hooks
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
        <div className="relative bg-[#323232] rounded-[10px] border-[0.5px] border-[#776f6f] w-full max-w-lg p-[25px_16px_10px_16px] flex flex-col gap-[10px] min-h-[127px] overflow-hidden">
          
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-[10px] p-[1px] pointer-events-none">
            <div className="absolute inset-0 rounded-[10px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
            <div className="absolute inset-[1px] rounded-[10px] bg-[#323232]" />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col gap-[10px]">
            {children ? (
              children
            ) : (
              <>
                <div className="relative flex flex-row items-start gap-[25px] w-full">
                  <div className="w-[47px] h-[47px] rounded-full bg-white flex-shrink-0" />

                  <div className="flex flex-col gap-[10px] w-[calc(100%-47px-25px)]">
                    {/* Input area */}
                    <div className="relative flex flex-row items-center bg-none rounded-[5px] border-[0.5px] border-[#776f6f] p-0 h-[47px] min-h-[47px] w-full">
                      <div className="absolute inset-0 rounded-[5px] p-[1px]">
                        <div className="absolute inset-0 rounded-[5px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
                        <div className="absolute inset-[1px] rounded-[5px] bg-[#323232]" />
                      </div>
                      <span className="text-[#776f6f] text-[1.1rem] font-normal tracking-tight bg-none border-none outline-none w-full h-[24px] flex items-center p-0 z-10 pl-[25px]">
                        What's on your mind?
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row items-center justify-between w-full gap-[97px]">
                      <div className="flex flex-row items-center gap-[25px]">
                        <img
                          className="w-[25px] h-[35px] bg-[#333] rounded-[4px] object-cover"
                          src="https://s3-alpha-sig.figma.com/img/356e/0ccf/322966846a25c5362ed24e842af29722"
                          alt="Picture"
                        />
                        <img
                          className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                          src="https://s3-alpha-sig.figma.com/img/a270/e67b/8ff8e175062c35ebb1afe8fa17608ac6"
                          alt="Music"
                        />
                      </div>

                      <button className="bg-gradient-to-r from-[#9000ff] to-[#ffc300] rounded-[5px] border-none text-white text-[1.1rem] font-semibold w-[90px] h-[33px] flex items-center justify-center tracking-tight cursor-pointer relative z-10">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white font-bold text-xl z-50"
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
