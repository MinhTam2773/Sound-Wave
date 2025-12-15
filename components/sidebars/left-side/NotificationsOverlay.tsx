"use client";

import React from "react";
import { XIcon } from "lucide-react";

interface NotificationsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsOverlay: React.FC<NotificationsOverlayProps> = ({
  isOpen,
  onClose,
}) => {
  // Don't render anything if not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Dark backdrop with transition */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sliding panel with transition */}
      <div
        className={`relative bg-[#1F1F1F] w-[350px] h-full p-6 shadow-2xl rounded-r-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">Notifications</h2>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-white/10 transition-colors"
          >
            <XIcon className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Notification items */}
        <div className="flex flex-col gap-3 overflow-y-auto max-h-[calc(100%-64px)] pr-1">
          {[
            "New comment on your post",
            "Someone liked your photo",
            "Your friend joined the platform",
          ].map((notif, index) => (
            <div
              key={index}
              className="p-3 bg-[#2C2C2C] rounded-lg text-white shadow-sm hover:bg-[#3A3A3A] transition-colors"
            >
              {notif}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsOverlay;