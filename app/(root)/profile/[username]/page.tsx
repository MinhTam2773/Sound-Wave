// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { createClient } from "@/lib/supabase/client";
// import { UserProfile } from "@/types/auth/types";

// interface ProfilePageProps {
//   params: { username: string };
// }

// export default function ProfilePage({ params }: ProfilePageProps) {
//   const { username } = params;
//   const supabase = createClient();
//   const [profile, setProfile] = useState<UserProfile | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const { data, error } = await supabase
//         .from("users")
//         .select("*")
//         .eq("username", username)
//         .single();

//       if (error) {
//         console.error(error.message);
//         setProfile(null);
//       } else {
//         setProfile(data as UserProfile);
//       }

//       setLoading(false);
//     };

//     fetchProfile();
//   }, [username]);

//   if (loading) return <div>Loading...</div>;
//   if (!profile) return <div>User not found</div>;

//   return (
//     <div className="text-white p-4">
//       <h1 className="text-2xl font-bold">{profile.display_name || profile.username}</h1>
//       <p className="text-white/70">@{profile.username}</p>
//       <p className="mt-2">{profile.bio}</p>
//       {/* Render posts, followers, etc. */}
//     </div>
//   );
// }
