import Link from 'next/link'
import { Zap } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="flex items-center justify-center mb-8">
          <Zap className="w-16 h-16 text-primary-600" />
          <span className="ml-3 text-3xl font-bold text-gray-900">AchaDex</span>
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página não encontrada</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        
        <Link 
          href="/"
          className="btn-primary text-lg px-8 py-3 inline-block"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  )
} 