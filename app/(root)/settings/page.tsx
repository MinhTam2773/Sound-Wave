"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { logout } from "@/server-actions/auth/actions";
import { toast } from "sonner";
import { redirect } from "next/navigation";

const SettingsPage: React.FC = () => {
  const handleLogout = async () => {
    await logout();
    toast("Logout successfully")
    redirect("/auth/login")
  }
  const sections = [
    {
      title: "Customization",
      items: [
        { label: "Theme", placeholder: "Light / Dark / System" },
        { label: "Colors", placeholder: "Primary, Accent, Background" },
        { label: "Font Size", placeholder: "Small / Medium / Large" },
      ],
    },
    {
      title: "Notifications",
      items: [
        { label: "Email", placeholder: "On / Off" },
        { label: "Push", placeholder: "On / Off" },
        { label: "Sounds", placeholder: "On / Off" },
      ],
    },
    {
      title: "Account Info",
      items: [
        { label: "Username", placeholder: "Your username" },
        { label: "Email", placeholder: "Your email" },
        { label: "Password", placeholder: "********" },
      ],
    },
    {
      title: "Privacy & Security",
      items: [
        { label: "Blocked Users", placeholder: "Manage blocked users" },
        { label: "Activity Status", placeholder: "Show / Hide" },
        { label: "Two-Factor Authentication", placeholder: "Enable / Disable" },
      ],
    },
    {
      title: "Language & Region",
      items: [
        { label: "Language", placeholder: "English, French, etc." },
        { label: "Region", placeholder: "USA, Europe, etc." },
      ],
    },
    {
      title: "Miscellaneous",
      items: [
        { label: "About", placeholder: "App version and info" },
        { label: "Feedback", placeholder: "Send feedback" },
        { label: "Terms of Service", placeholder: "Read terms" },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#232323] text-white p-8 flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold mb-4">Settings</h1>

      <div className="flex flex-col gap-8 w-full max-w-[700px]">
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold border-b border-[#555] pb-2">
              {section.title}
            </h2>

            <div className="flex flex-col gap-3">
              {section.items.map((item, i) => (
                <div key={i} className="flex flex-col gap-1 w-[650px]">
                  <label className="text-sm text-gray-300">{item.label}</label>
                  <input
                    type="text"
                    placeholder={item.placeholder}
                    className="p-3 rounded bg-[#3a3a3a] text-white border border-[#555] w-full"
                    disabled
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <div className="mt-6 w-[650px]">
          <Button
            className="bg-red-600 hover:bg-red-700 text-white w-full"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
