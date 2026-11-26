'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 relative overflow-hidden">
      <Navigation />

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Explore AI Tools
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discover and explore 50+ AI tools and services across all categories
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'ChatGPT', category: 'LLM Tools', icon: '💬' },
            { name: 'DALL-E 3', category: 'Image Generation', icon: '🖼️' },
            { name: 'Claude', category: 'LLM Tools', icon: '🤖' },
            { name: 'Midjourney', category: 'Image Generation', icon: '🎨' },
            { name: 'GitHub Copilot', category: 'Developer Tools', icon: '👨‍💻' },
            { name: 'Vercel', category: 'Web & Frontend', icon: '🚀' },
            { name: 'Docker', category: 'DevOps', icon: '🐳' },
            { name: 'Kubernetes', category: 'DevOps', icon: '☸️' },
            { name: 'PostgreSQL', category: 'Databases', icon: '🗄️' },
          ].map((tool, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition"></div>
              <div className="relative bg-slate-900/80 backdrop-blur border border-slate-700/50 rounded-lg p-6 hover:border-slate-600/70 transition">
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{tool.category}</p>
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg text-sm font-mono hover:shadow-lg hover:shadow-cyan-500/50 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-block px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border border-slate-600/50 rounded-lg text-white font-mono transition"
          >
            ← Back to Categories
          </Link>
        </div>
      </div>
    </div>
  );
}
