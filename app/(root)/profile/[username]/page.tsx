import React from "react";
import { createClient } from "@/lib/supabase/server";
import ProfileClient, { UserProfile } from "./ProfileClient";

interface ProfilePageProps {
  params: { username: string };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const username = (await params).username

  const supabase = await createClient();

  try {
    console.log("USERNAME:" +username.replace("%20"," "));
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", decodeURIComponent(username)) // 🔹 filter by username
      .single();

    if (error || !data) {
      console.error("Error fetching user:", error);
      return <div className="text-white">User not found</div>;
    }

    const user: UserProfile = data;

    return <ProfileClient user={user} />;
  } catch (err) {
    console.error("Unexpected error:", err);
    return <div className="text-white">Something went wrong</div>;
  }
}
