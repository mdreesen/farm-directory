import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define paths that are considered public (accessible without a token)
  // const isPublicPath = path === '/' || path === '/signup' || path === '/verifyemail'
  const paths = path === '/admin' || '/admin/dashboard' || '/admin/dashboard/create-farmer' || '/admin/dashboard/create-farmer/created-farmer' || '/admin/dashboard/contact'

  // Get the token from the cookies
  const token = request.cookies.get(`${process.env.COOKIE_KEY}`)?.value || ''
    
}

// It specifies the paths for which this middleware should be executed. 
// In this case, it's applied to '/', '/profile', '/login', and '/signup'.
export const config = {
  matcher: [
    // '/',
    '/profile-farmer',
    // '/login',
    // '/signup',
    // '/verifyemail'
  ]
}