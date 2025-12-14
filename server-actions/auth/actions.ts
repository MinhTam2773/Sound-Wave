"use server";

import { createClient } from "@/lib/supabase/server";

export const logout = async () => {
    try {
        const supabase = await createClient();

        const {error} = await supabase.auth.signOut();

        if (error) throw error;
    } catch(error) {
        console.error(error);
    }
}