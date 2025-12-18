export type UserProfile = {
  id: string;
  email: string;
  username: string;
  display_name: string | null;
  pfp_url: string | undefined;
  bio: string | null;
  provider: string;
  email_verified: boolean;
  created_at: string;
};
