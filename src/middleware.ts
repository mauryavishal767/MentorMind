import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    // Create middleware Supabase client
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req: request, res })

    // Get session and log details
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()
    
    if (sessionError) {
      console.error('Session error in middleware:', sessionError)
      throw sessionError
    }

    // Log session state for debugging
    console.log('Middleware session state:', {
      path: request.nextUrl.pathname,
      hasSession: !!session,
      userId: session?.user?.id,
      timestamp: new Date().toISOString()
    })

    // Protect dashboard routes
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
      if (!session) {
        console.log('Unauthorized dashboard access attempt:', {
          path: request.nextUrl.pathname,
          timestamp: new Date().toISOString()
        })

        const redirectUrl = new URL('/auth/login', request.url)
        redirectUrl.searchParams.set('redirect', request.nextUrl.pathname)
        return NextResponse.redirect(redirectUrl)
      }

      console.log('Authorized dashboard access:', {
        userId: session.user.id,
        path: request.nextUrl.pathname,
        timestamp: new Date().toISOString()
      })

      return res
    }

    // Redirect authenticated users away from auth pages
    if (request.nextUrl.pathname.startsWith('/auth')) {
      if (session) {
        console.log('Authenticated user accessing auth page - redirecting:', {
          userId: session.user.id,
          path: request.nextUrl.pathname,
          timestamp: new Date().toISOString()
        })

        const redirectTo = request.nextUrl.searchParams.get('redirect') || '/dashboard'
        return NextResponse.redirect(new URL(redirectTo, request.url))
      }
      return res
    }

    // Handle root path
    if (request.nextUrl.pathname === '/') {
      if (session) {
        console.log('Authenticated user at root - redirecting to dashboard:', {
          userId: session.user.id,
          timestamp: new Date().toISOString()
        })
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }

      console.log('Unauthenticated user at root - redirecting to login:', {
        timestamp: new Date().toISOString()
      })
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    return res
  } catch (error) {
    console.error('Middleware error:', error)
    
    // In case of error, redirect to login for safety
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/auth/:path*']
}