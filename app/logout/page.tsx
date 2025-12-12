"use client"

import { createClient } from '@/lib/supabase/client'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

const Page = () => {
    useEffect(() => {
        const supabase = createClient();
        const logout = async () => {
            await supabase.auth.signOut();
            redirect('/auth/login')
        }
        logout();
    }, [])
  return (
    <div>page</div>
  )
}

export default Page