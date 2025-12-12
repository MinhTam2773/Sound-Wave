"use client"
import { createClient } from '@/lib/supabase/client'
import React, { useEffect } from 'react'

const Page = () => {
    useEffect(() => {
        const supabase = createClient();
    }, [])
  return (
    <div>page</div>
  )
}

export default Page