'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, ArrowRight, TrendingUp, Rocket, Shield, Zap as Lightning } from 'lucide-react';
import Link from 'next/link';

export default function ImprovedHome() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const stats = [
    { label: 'AI Categories', value: '18' },
    { label: 'Tools Available', value: '108' },
    { label: 'Use Cases', value: '108+' },
    { label: 'Global Users', value: '1M+' },
  ];

  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Advanced AI Integration',
      description: 'Seamless integration with cutting-edge AI models and APIs for maximum performance.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, authentication, and compliance standards.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Real-time Analytics',
      description: 'Monitor performance metrics and insights with advanced dashboards.',
    },
    {
      icon: <Lightning className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with 60fps animations and sub-100ms response times.',
    },
  ];

  const categories = [
    { icon: '🎨', name: 'AI Image & Design', tools: 6 },
    { icon: '🎬', name: 'AI Video Generation', tools: 6 },
    { icon: '🤖', name: 'AI Agents', tools: 6 },
    { icon: '📝', name: 'LLM Tools', tools: 6 },
    { icon: '⚙️', name: 'Developer Tools', tools: 6 },
    { icon: '🌐', name: 'Web & Frontend', tools: 6 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 212, 255, 0.05) 25%, rgba(0, 212, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.05) 75%, rgba(0, 212, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 212, 255, 0.05) 25%, rgba(0, 212, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.05) 75%, rgba(0, 212, 255, 0.05) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-6"
          >
            <Zap className="w-12 h-12 text-cyan-400" />
          </motion.div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              SAHA NEXUS AI
            </motion.span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            The Next-Generation Unified AI Ecosystem. Explore 18 categories, 108+ tools, and unlimited possibilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-bold rounded-lg transition transform hover:scale-105"
            >
              <span>Explore Categories</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold rounded-lg transition border border-cyan-500/30"
            >
              <span>View Dashboard</span>
            </Link>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/50 transition"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={itemVariants}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Advanced Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-cyan-500/20 hover:border-cyan-500/50 transition"
                whileHover={{ y: -5 }}
              >
                <div className="text-cyan-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Categories */}
        <motion.div
          variants={itemVariants}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Link key={i} href="/categories">
                <motion.div
                  className="p-8 rounded-xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-cyan-500/20 hover:border-cyan-500/50 transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-5xl mb-3">{cat.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{cat.name}</h3>
                  <p className="text-cyan-400 text-sm">{cat.tools} tools</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center py-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your AI Experience?</h2>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-lg transition transform hover:scale-105"
          >
            <span>Get Started Now</span>
            <Sparkles className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
