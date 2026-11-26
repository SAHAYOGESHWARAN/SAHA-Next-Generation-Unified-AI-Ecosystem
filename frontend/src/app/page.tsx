'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Ultimate AI & Technology
            </span>
            <br />
            <span className="text-white">Ecosystem</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Discover, integrate, and manage AI tools, open-source models, developer utilities, and cutting-edge technologies
            in one unified, intelligent platform. Build faster. Innovate smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-bold rounded-lg transition duration-300 font-mono uppercase flex items-center justify-center gap-2"
            >
              Enter Dashboard <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/categories"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-bold hover:bg-cyan-500/10 transition duration-300 font-mono uppercase"
            >
              Explore Tools
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "18 AI & Tech Categories",
              description: "Image generation, video creation, LLMs, agents, DevOps, databases, and more.",
            },
            {
              title: "Unified AI Workspace",
              description: "Switch between models, compare responses, and manage projects in one place.",
            },
            {
              title: "Advanced Search",
              description: "Semantic search across tools, models, documentation, and research papers.",
            },
            {
              title: "Secure Integration",
              description: "Connect your favorite AI providers and manage credentials safely.",
            },
            {
              title: "Real-Time Collaboration",
              description: "Save projects, share insights, and collaborate with your team.",
            },
            {
              title: "Complete Analytics",
              description: "Track usage, monitor AI requests, and optimize your workflow.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition"></div>
              <div className="relative p-6 rounded-lg border border-slate-700/50 bg-slate-800/50 backdrop-blur hover:border-slate-600/70 transition">
                <h3 className="text-xl font-bold mb-3 text-cyan-400 font-mono">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Preview */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Explore 18 Categories
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            "AI Image & Design",
            "AI Video Generation",
            "AI Agents",
            "LLM Tools",
            "Developer Tools",
            "Web & Frontend",
            "Self-Hosted Systems",
            "Data Engineering",
            "Databases",
            "Cybersecurity",
            "DevOps & Infrastructure",
            "Web Scraping",
            "Productivity",
            "Learning & Interview",
            "Local & Private AI",
            "AI Research",
            "Computer Vision",
            "Open-Source Models",
          ].map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg blur opacity-10 group-hover:opacity-30 transition"></div>
              <div className="relative p-4 rounded-lg border border-slate-700/30 bg-slate-800/20 backdrop-blur hover:border-cyan-500/30 transition text-center">
                <p className="font-semibold text-slate-100 font-mono text-sm">{cat}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition"></div>
          <div className="relative p-12 rounded-lg bg-slate-900/80 backdrop-blur border border-slate-700/50">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to explore?</h2>
            <p className="text-slate-400 mb-8">Join thousands of developers building with SAHA NEXUS AI</p>
            <Link
              href="/auth/signup"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white rounded-lg font-bold transition duration-300 inline-flex items-center gap-2 font-mono uppercase"
            >
              Create Free Account <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/30 py-8 px-4 sm:px-6 lg:px-8 text-center text-slate-400 relative z-10">
        <p className="font-mono">&copy; 2024 SAHA NEXUS AI. Open-source ecosystem for AI and technology.</p>
      </footer>
    </main>
  );
}
