import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAdmin = token?.role === 'ADMIN'
    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin')

    // Se está tentando acessar rota admin sem ser admin
    if (isAdminRoute && !isAdmin) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }

    // Se está logado como admin e tentando acessar login, redireciona para dashboard
    if (isAdmin && req.nextUrl.pathname === '/admin/login') {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Permitir acesso ao login sempre
        if (req.nextUrl.pathname === '/admin/login') {
          return true
        }

        // Para outras rotas admin, verificar se é admin
        if (req.nextUrl.pathname.startsWith('/admin')) {
          return token?.role === 'ADMIN'
        }

        return true
      },
    },
  }
)

export const config = {
  matcher: ['/admin/:path*']
} 