import React from "react";
import { createClient } from "@/lib/supabase/server";
import ProfileClient from "./ProfileClient";
import { getUserByUsername } from "@/server-actions/user/actions";

interface ProfilePageProps {
  params: { username: string };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const username = (await params).username

  const user = await getUserByUsername(decodeURIComponent(username)) ;

  if (!user) return <div>user not found</div>
    return <ProfileClient user={user} />;
}
