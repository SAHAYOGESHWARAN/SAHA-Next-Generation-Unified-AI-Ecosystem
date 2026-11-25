'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Star,
  Download,
  ExternalLink,
  Sparkles,
  Code,
  Database,
  Network,
  Zap,
  BookOpen,
  Shield,
} from 'lucide-react';
import DashboardNav from '@/components/DashboardNav';
import CyberCard from '@/components/CyberCard';

const tools = [
  {
    name: 'GPT-4 Vision',
    category: 'AI Models',
    description: 'Advanced multimodal AI model for text and image understanding',
    rating: 4.8,
    downloads: 2400,
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    name: 'TensorFlow',
    category: 'Developer Tools',
    description: 'Open-source machine learning framework by Google',
    rating: 4.6,
    downloads: 1200,
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: 'PostgreSQL',
    category: 'Databases',
    description: 'Advanced open-source relational database system',
    rating: 4.9,
    downloads: 3100,
    icon: <Database className="w-6 h-6" />,
  },
  {
    name: 'Kubernetes',
    category: 'DevOps',
    description: 'Container orchestration platform for scalable deployments',
    rating: 4.7,
    downloads: 2800,
    icon: <Network className="w-6 h-6" />,
  },
  {
    name: 'Ollama',
    category: 'AI Models',
    description: 'Run large language models locally with ease',
    rating: 4.5,
    downloads: 1500,
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: 'Supabase',
    category: 'Backend',
    description: 'Firebase alternative with PostgreSQL backend',
    rating: 4.6,
    downloads: 980,
    icon: <Database className="w-6 h-6" />,
  },
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [user, setUser] = useState<any>(null);

  const categories = ['All', 'AI Models', 'Developer Tools', 'Databases', 'DevOps', 'Backend'];

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-cyber relative">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <DashboardNav user={user} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-text bg-clip-text text-transparent">Explore Ecosystem</span>
          </h1>
          <p className="text-cyan-400 font-mono text-sm">Discover 1000+ AI tools and open-source technologies</p>
        </motion.section>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-cyan-500" />
            <input
              type="text"
              placeholder="Search tools, models, frameworks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-cyan-500/30 bg-slate-900/50 backdrop-blur-xl focus:border-cyan-400 focus:outline-none transition text-white placeholder-gray-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-tech text-white cyber-glow'
                    : 'border border-cyan-500/30 text-gray-300 hover:border-cyan-400'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <CyberCard glow={true} glowColor="cyan">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                    {tool.icon}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="p-2 hover:bg-cyan-500/10 rounded-lg transition"
                  >
                    <Star className="w-5 h-5 text-cyan-400" />
                  </motion.button>
                </div>

                <h3 className="text-lg font-bold mb-1">{tool.name}</h3>
                <p className="text-xs text-cyan-400 font-mono mb-3">{tool.category}</p>
                <p className="text-sm text-gray-400 mb-4">{tool.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="font-bold">{tool.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500">{tool.downloads} downloads</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-2 hover:bg-cyan-500/10 rounded-lg transition"
                  >
                    <ExternalLink className="w-5 h-5 text-cyan-400" />
                  </motion.button>
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </motion.div>

        {filteredTools.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Sparkles className="w-12 h-12 mx-auto text-gray-500 mb-4 opacity-50" />
            <p className="text-gray-400">No tools found matching your search</p>
          </motion.div>
        )}
      </main>
    </div>
  );
}
