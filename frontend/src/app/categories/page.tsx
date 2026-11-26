'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { CATEGORIES } from '@/data/categories';

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = CATEGORIES.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const colorMap: { [key: string]: string } = {
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-300',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-300',
    emerald: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-300',
    pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/30 text-pink-300',
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-300',
    orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-300',
    red: 'from-red-500/20 to-red-600/20 border-red-500/30 text-red-300',
    indigo: 'from-indigo-500/20 to-indigo-600/20 border-indigo-500/30 text-indigo-300',
    violet: 'from-violet-500/20 to-violet-600/20 border-violet-500/30 text-violet-300',
    rose: 'from-rose-500/20 to-rose-600/20 border-rose-500/30 text-rose-300',
    amber: 'from-amber-500/20 to-amber-600/20 border-amber-500/30 text-amber-300',
    slate: 'from-slate-500/20 to-slate-600/20 border-slate-500/30 text-slate-300',
    lime: 'from-lime-500/20 to-lime-600/20 border-lime-500/30 text-lime-300',
    teal: 'from-teal-500/20 to-teal-600/20 border-teal-500/30 text-teal-300',
    fuchsia: 'from-fuchsia-500/20 to-fuchsia-600/20 border-fuchsia-500/30 text-fuchsia-300',
    sky: 'from-sky-500/20 to-sky-600/20 border-sky-500/30 text-sky-300',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30 text-green-300',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 relative overflow-hidden">
      <Navigation />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 mt-8"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Explore 18 AI Categories
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discover comprehensive tools, features, and solutions across all AI and technology categories
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search categories, tools, or features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition"
            />
          </div>
          <p className="text-sm text-slate-400 mt-3 text-center">
            {filteredCategories.length} of {CATEGORIES.length} categories
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link href={`/explore/${category.id}`}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`group relative bg-gradient-to-br ${colorMap[category.color]} border rounded-lg p-8 cursor-pointer transition-all h-full`}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg blur opacity-0 group-hover:opacity-30 transition"></div>
                  <div className="relative">
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-300 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-400">
                        {category.tools.length} tools
                      </span>
                      <span className="text-cyan-400 group-hover:text-cyan-200 transition font-mono text-sm">
                        Explore →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredCategories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-400 text-lg">No categories found matching your search.</p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative group mt-16"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition"></div>
          <div className="relative bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Complete AI Ecosystem</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">18</div>
                <p className="text-slate-400">AI Categories</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {CATEGORIES.reduce((acc, cat) => acc + cat.tools.length, 0)}+
                </div>
                <p className="text-slate-400">Tools & Services</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
                <p className="text-slate-400">Fully Explorable</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
