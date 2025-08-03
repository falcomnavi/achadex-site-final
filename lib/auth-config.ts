import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Simular autenticação para build
        if (process.env.NODE_ENV === 'production') {
          try {
            const { prisma } = await import('./prisma')
            const bcrypt = await import('bcryptjs')
            
            const user = await prisma.user.findUnique({
              where: { email: credentials.email }
            })

            if (!user) return null

            const isValid = await bcrypt.compare(credentials.password, user.password)
            if (!isValid) return null

            return {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
            }
          } catch (error) {
            console.error('Auth error:', error)
            return null
          }
        }

        // Para desenvolvimento
        if (credentials.email === 'admin@achadex.com' && credentials.password === 'admin123') {
          return {
            id: '1',
            email: 'admin@achadex.com',
            name: 'Administrador',
            role: 'ADMIN',
          }
        }

        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role
      }
      return session
    }
  },
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
} 