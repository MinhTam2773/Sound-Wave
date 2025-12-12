// app/auth/callback/route.ts
import { createServerClient } from '@supabase/ssr';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (!code) {
    console.log('🔐 OAuth callback - No code found');
    return NextResponse.redirect(new URL('/login', requestUrl.origin));
  }

  try {
    // Create a redirect response
    const redirectUrl = new URL('/', requestUrl.origin);
    const response = NextResponse.redirect(redirectUrl);

    // Create Supabase client using request/response cookies pattern
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              response.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    // Exchange the code for a session
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (error) {
      console.error('❌ OAuth exchange error:', error.message);
      return NextResponse.redirect(
        new URL(`/login?error=${encodeURIComponent(error.message)}`, requestUrl.origin)
      );
    }

    console.log('✅ OAuth callback - Success, redirecting to dashboard');
    return response;
    
  } catch (error) {
    console.error('❌ OAuth callback error:', error);
    return NextResponse.redirect(
      new URL('/login?error=server_error', requestUrl.origin)
    );
  }
}