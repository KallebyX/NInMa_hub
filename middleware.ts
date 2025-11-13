import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    // Permite acesso apenas a usuários autenticados com role "admin"
    const token = req.nextauth.token
    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin')
    const isLoginPage = req.nextUrl.pathname === '/admin/login'

    if (isAdminRoute && !isLoginPage) {
      if (!token || token.role !== 'admin') {
        return NextResponse.redirect(new URL('/admin/login', req.url))
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const isLoginPage = req.nextUrl.pathname === '/admin/login'
        // Permite acesso à página de login sem token
        if (isLoginPage) return true
        // Requer token para outras páginas admin
        return !!token
      },
    },
  }
)

export const config = {
  matcher: '/admin/:path*',
}
