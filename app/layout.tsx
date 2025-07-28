import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AchaDex - Encontre o que você procura',
  description: 'Plataforma moderna para busca e descoberta de conteúdo',
  keywords: 'busca, descoberta, plataforma, conteúdo',
  authors: [{ name: 'AchaDex Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 