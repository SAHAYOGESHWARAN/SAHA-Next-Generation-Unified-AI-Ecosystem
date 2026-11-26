'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Search, Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { CATEGORIES } from '@/data/categories';

interface CategoryDetailProps {
  categoryId: number;
}

export default function CategoryDetail({ categoryId }: CategoryDetailProps) {
  const category = CATEGORIES.find((c) => c.id === categoryId);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTools, setFilteredTools] = useState(category?.tools || []);

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <Link href="/categories" className="text-cyan-400 hover:text-cyan-300">
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredTools(category.tools);
    } else {
      const filtered = category.tools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(term.toLowerCase()) ||
          tool.desc.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredTools(filtered);
    }
  };

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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 212, 255, 0.05) 25%, rgba(0, 212, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.05) 75%, rgba(0, 212, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 212, 255, 0.05) 25%, rgba(0, 212, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.05) 75%, rgba(0, 212, 255, 0.05) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {/* Header Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Link
            href="/categories"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>
        </motion.div>

        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`bg-gradient-to-r ${colorMap[category.color]} border rounded-lg p-8 mb-8`}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="text-6xl mb-4">{category.icon}</div>
              <h1 className="text-5xl font-bold mb-4 text-white">{category.name}</h1>
              <p className="text-lg text-slate-300 mb-4">{category.description}</p>
              <p className="text-slate-400 max-w-2xl">{category.fullDescription}</p>
            </div>
          </div>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search tools in this category..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition"
            />
          </div>
          <p className="text-sm text-slate-400 mt-2">
            Showing {filteredTools.length} of {category.tools.length} tools
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Popular Tools & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg blur opacity-20 group-hover:opacity-40 transition"></div>
                  <div className="relative p-6 rounded-lg border border-slate-700/50 bg-slate-800/50 backdrop-blur hover:border-slate-600/70 transition">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-white text-lg">{tool.name}</h3>
                        <p className="text-sm text-slate-400">{tool.desc}</p>
                      </div>
                      <Star className="w-5 h-5 text-yellow-400" />
                    </div>
                    <motion.a
                      href={tool.link}
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-mono transition"
                    >
                      Explore <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">No tools found matching your search.</p>
            </div>
          )}
        </motion.div>

        {/* Two Column Layout for Features & Use Cases */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition"></div>
            <div className="relative p-8 rounded-lg border border-slate-700/50 bg-slate-800/50 backdrop-blur">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">Key Features</h3>
              <ul className="space-y-3">
                {category.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-cyan-400 font-bold text-lg">✓</span>
                    <span className="text-slate-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition"></div>
            <div className="relative p-8 rounded-lg border border-slate-700/50 bg-slate-800/50 backdrop-blur">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Use Cases</h3>
              <ul className="space-y-3">
                {category.useCases.map((useCase, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-purple-400 font-bold text-lg">→</span>
                    <span className="text-slate-300">{useCase}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Related Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition"></div>
          <div className="relative p-8 rounded-lg border border-slate-700/50 bg-slate-800/50 backdrop-blur">
            <h3 className="text-2xl font-bold text-emerald-300 mb-6">Related Categories</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {CATEGORIES.filter((c) => c.id !== category.id)
                .slice(0, 3)
                .map((relatedCategory) => (
                  <Link
                    key={relatedCategory.id}
                    href={`/explore/${relatedCategory.id}`}
                    className="group/item p-4 rounded-lg border border-slate-600/50 bg-slate-900/50 hover:border-emerald-500/50 transition"
                  >
                    <div className="text-3xl mb-2">{relatedCategory.icon}</div>
                    <h4 className="font-bold text-white group-hover/item:text-emerald-300 transition">
                      {relatedCategory.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">{relatedCategory.tools.length} tools</p>
                  </Link>
                ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/categories"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-lg font-bold transition shadow-lg shadow-cyan-500/50"
          >
            Explore All Categories
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
