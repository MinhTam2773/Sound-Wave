// middleware.ts (rename from proxy.ts)
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const PROTECTED_PATHS = ["/", "/music", "/settings", "/search", "/library", "/explore", "/music", "/notification"];

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const { pathname, search } = request.nextUrl;
  
  // CRITICAL: Skip auth check for OAuth callback routes
  const isOAuthCallback = pathname === '/auth/callback';
  const hasAuthParams = search.includes('code=') || 
                        search.includes('error=') || 
                        search.includes('session=') || 
                        search.includes('access_token=') || 
                        search.includes('refresh_token=');

  // If this is an OAuth callback, SKIP auth check completely
  if (isOAuthCallback || hasAuthParams) {
    console.log('🔐 OAuth redirect detected, skipping auth check');
    return supabaseResponse;
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) => 
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Wait for Supabase to process any existing session cookies
  const { data } = await supabase.auth.getClaims();
  
  const isProtectedRoute = PROTECTED_PATHS.includes(pathname);
  
  console.log("🔐 Middleware - Path:", pathname);
  console.log("🔐 Middleware - Session:", data?.claims.email || "No session");

  // If no session AND trying to access protected routes
  if (!data?.claims.email && isProtectedRoute) {
    console.log("Redirecting to login (no session)");
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  // If session exists and tries to access login page
  if (data?.claims.email && (pathname.startsWith("/auth") )) {
    console.log("Session exists, redirecting to dashboard");
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt).*)',
  ],
};