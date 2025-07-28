'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Sparkles } from 'lucide-react'

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
}

export default function SearchBar({ 
  placeholder = "O que você está procurando?", 
  onSearch,
  className = ""
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSearch = () => {
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim())
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const suggestions = [
    'Tecnologia',
    'Design',
    'Marketing',
    'Desenvolvimento',
    'Inovação'
  ]

  return (
    <div className={`relative ${className}`}>
      {/* Search Input */}
      <motion.div
        className={`relative bg-white rounded-xl shadow-lg border-2 transition-all duration-200 ${
          isFocused ? 'border-primary-500 shadow-xl' : 'border-gray-200'
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center p-4">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="flex-1 text-lg outline-none bg-transparent placeholder-gray-400"
          />
          <motion.button
            onClick={handleSearch}
            className="btn-primary ml-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buscar
          </motion.button>
        </div>
      </motion.div>

      {/* Search Suggestions */}
      {isFocused && searchQuery.length > 0 && (
        <motion.div
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-4">
            <div className="flex items-center mb-3">
              <Sparkles className="w-4 h-4 text-primary-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Sugestões</span>
            </div>
            <div className="space-y-2">
              {suggestions
                .filter(suggestion => 
                  suggestion.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((suggestion, index) => (
                  <motion.button
                    key={index}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 transition-colors text-gray-700"
                    onClick={() => {
                      setSearchQuery(suggestion)
                      handleSearch()
                    }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {suggestion}
                  </motion.button>
                ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
} 