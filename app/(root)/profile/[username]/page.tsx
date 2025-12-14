import React from "react";
import { getUserByUsername, getPostsByUserId } from "@/server-actions/user/actions";
import ProfileClient from "./ProfileClient";
import { UserProfile } from "@/types/auth/types";

interface ProfilePageProps {
  params: Promise<{ username: string }>; // <- params is a Promise now
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params; // <- await the params
  const user: UserProfile | null = await getUserByUsername(username);

  if (!user) {
    return (
      <main className="w-full min-h-screen flex items-center justify-center text-white">
        <p>User not found</p>
      </main>
    );
  }

  const posts = await getPostsByUserId(user.id);

  return <ProfileClient user={user} posts={posts} />;
}
