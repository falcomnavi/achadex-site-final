import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    // Middleware logic here if needed
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