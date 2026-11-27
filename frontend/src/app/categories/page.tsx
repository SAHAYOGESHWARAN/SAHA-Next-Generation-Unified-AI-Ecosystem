'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';
import PageWrapper from '@/components/PageWrapper';

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(CATEGORIES);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredCategories(CATEGORIES);
    } else {
      const filtered = CATEGORIES.filter(
        (cat) =>
          cat.name.toLowerCase().includes(term.toLowerCase()) ||
          cat.description.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <PageWrapper>
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 pt-10"
        >
          <h1 className="gradient-text mb-4 text-glow">
            Explore AI Categories
          </h1>
          <p className="text-cyan-300 max-w-2xl mb-8">
            Discover 18 carefully curated AI categories with 108+ tools, 108+ features, and 108+ use cases.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-blue-900/40 border border-cyan-500/30 rounded-lg text-white placeholder-cyan-400/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
            />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="tech-card text-center">
            <p className="text-2xl font-bold text-cyan-400">{filteredCategories.length}</p>
            <p className="text-cyan-300 text-sm">Categories</p>
          </div>
          <div className="tech-card text-center">
            <p className="text-2xl font-bold text-cyan-400">108</p>
            <p className="text-cyan-300 text-sm">Tools</p>
          </div>
          <div className="tech-card text-center">
            <p className="text-2xl font-bold text-cyan-400">108</p>
            <p className="text-cyan-300 text-sm">Features</p>
          </div>
          <div className="tech-card text-center">
            <p className="text-2xl font-bold text-cyan-400">108+</p>
            <p className="text-cyan-300 text-sm">Use Cases</p>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCategories.map((category) => (
            <Link key={category.id} href={`/explore/${category.id}`}>
              <motion.div
                variants={itemVariants}
                className="tech-card cursor-pointer group h-full"
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition transform">
                  {category.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition">
                  {category.name}
                </h3>
                <p className="text-cyan-300/70 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20">
                  <span className="text-cyan-400 text-xs font-semibold">
                    6 tools • 6 features • 6+ cases
                  </span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition transform">→</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {filteredCategories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-cyan-300 text-lg">No categories found matching your search.</p>
          </motion.div>
        )}
      </div>
    </PageWrapper>
  );
}
