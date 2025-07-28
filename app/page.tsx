'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Sparkles, TrendingUp, Users, Zap } from 'lucide-react'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import FeatureCard from '@/components/FeatureCard'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Busca Inteligente',
      description: 'Encontre exatamente o que você procura com nossa tecnologia avançada de busca.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Descobertas',
      description: 'Descubra conteúdo novo e relevante baseado em seus interesses.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Tendências',
      description: 'Fique por dentro das últimas tendências e novidades.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Comunidade',
      description: 'Conecte-se com pessoas que compartilham seus interesses.'
    }
  ]

  const handleSearch = (query: string) => {
    console.log('Buscando:', query)
    // Aqui você pode implementar a lógica de busca
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Encontre o que você{' '}
              <span className="text-primary-600">procura</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              AchaDex é a plataforma mais moderna para busca e descoberta de conteúdo. 
              Encontre, descubra e conecte-se com o que realmente importa.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar onSearch={handleSearch} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o AchaDex?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa plataforma oferece recursos únicos que tornam a busca e descoberta 
              de conteúdo uma experiência incrível.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Junte-se a milhares de usuários que já descobriram o poder do AchaDex.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-3">
                Começar Agora
              </button>
              <button className="btn-secondary text-lg px-8 py-3">
                Saiba Mais
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-primary-400" />
                <span className="ml-2 text-xl font-bold">AchaDex</span>
              </div>
              <p className="text-gray-400">
                A plataforma mais moderna para busca e descoberta de conteúdo.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AchaDex. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 