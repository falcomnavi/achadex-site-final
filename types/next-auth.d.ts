import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      role: 'USER' | 'ADMIN'
    }
  }

  interface User {
    id: string
    name: string
    email: string
    role: 'USER' | 'ADMIN'
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: 'USER' | 'ADMIN'
  }
} 