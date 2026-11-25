'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-cyber overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-navy-950/50 border-b border-navy-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-cyber-blue" />
            <span className="text-xl font-bold bg-gradient-text bg-clip-text text-transparent">
              SAHA NEXUS AI
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            <Link href="#features" className="text-gray-300 hover:text-cyber-blue transition">
              Features
            </Link>
            <Link href="#categories" className="text-gray-300 hover:text-cyber-blue transition">
              Categories
            </Link>
            <Link href="#" className="text-gray-300 hover:text-cyber-blue transition">
              Docs
            </Link>
          </div>
          <div className="flex gap-4">
            <Link
              href="/auth/login"
              className="px-6 py-2 text-gray-300 border border-cyber-blue/30 rounded-lg hover:border-cyber-blue transition"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="px-6 py-2 bg-gradient-accent text-white rounded-lg hover:shadow-lg hover:shadow-cyber-blue/30 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              The Ultimate AI & Technology
            </span>
            <br />
            <span className="text-gray-100">Ecosystem</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Discover, integrate, and manage AI tools, open-source models, developer utilities, and cutting-edge technologies
            in one unified, intelligent platform. Build faster. Innovate smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-gradient-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyber-blue/50 transition flex items-center justify-center gap-2"
            >
              Enter Dashboard <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/explore"
              className="px-8 py-4 border border-cyber-blue text-cyber-blue rounded-lg font-semibold hover:bg-cyber-blue/10 transition"
            >
              Explore Tools
            </Link>
          </div>
        </motion.div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10 z-0">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-cyan-400" />
          </svg>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-text bg-clip-text text-transparent">
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
              className="p-6 rounded-lg border border-navy-700/50 bg-navy-800/30 backdrop-blur-sm hover:border-cyber-blue/50 transition"
            >
              <h3 className="text-xl font-bold mb-3 text-cyber-blue">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Preview */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-text bg-clip-text text-transparent">
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
              className="p-4 rounded-lg border border-navy-700/30 bg-navy-800/20 backdrop-blur-sm hover:border-cyber-blue transition cursor-pointer text-center"
            >
              <p className="font-semibold text-gray-100">{cat}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="p-12 rounded-lg bg-gradient-to-r from-cyber-blue/10 to-cyber-violet/10 border border-cyber-blue/30"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to explore?</h2>
          <p className="text-gray-400 mb-8">Join thousands of developers building with SAHA NEXUS AI</p>
          <Link
            href="/auth/signup"
            className="px-8 py-4 bg-gradient-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyber-blue/50 transition inline-flex items-center gap-2"
          >
            Create Free Account <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy-700/30 py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; 2024 SAHA NEXUS AI. Open-source ecosystem for AI and technology.</p>
      </footer>
    </main>
  );
}
