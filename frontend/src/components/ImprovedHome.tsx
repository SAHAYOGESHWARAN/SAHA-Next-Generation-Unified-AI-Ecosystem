'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, ArrowRight, TrendingUp, Rocket, Shield, Gauge, Database } from 'lucide-react';
import Link from 'next/link';

export default function ImprovedHome() {
  const stats = [
    { label: 'AI Categories', value: '18', icon: '🎯' },
    { label: 'Tools Available', value: '108', icon: '🛠️' },
    { label: 'Use Cases', value: '108+', icon: '📊' },
    { label: 'Global Users', value: '1M+', icon: '👥' },
  ];

  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Advanced AI Integration',
      description: 'Seamless integration with cutting-edge AI models and APIs.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance standards.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Real-time Analytics',
      description: 'Monitor performance with advanced dashboards.',
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with 60fps animations.',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Cloud Native',
      description: 'Scalable infrastructure for enterprise needs.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI Powered',
      description: 'Powered by state-of-the-art AI technology.',
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Fixed Background Effects */}
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
      <div className="grid-background" />

      {/* Main Content */}
      <div className="page-container relative z-10">
        <motion.div
          className="container-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-20 pt-10"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-12 h-12 text-cyan-400" />
            </motion.div>

            <h1 className="gradient-text mb-6 text-glow">
              SAHA NEXUS AI
            </h1>

            <p className="text-lg text-cyan-300 max-w-2xl mx-auto mb-8">
              The Next-Generation Unified AI Ecosystem. Explore 18 categories, 108+ tools, and unlimited possibilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/categories"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-lg transition transform hover:scale-105 relative group overflow-hidden"
              >
                <span className="relative z-10">Explore Categories</span>
                <ArrowRight className="w-5 h-5 relative z-10" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-900/40 hover:bg-blue-900/60 text-cyan-400 font-bold rounded-lg transition border border-cyan-500/30 hover:border-cyan-500/60 relative group"
              >
                <span>View Dashboard</span>
              </Link>
            </div>

            {/* Stats Section */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="tech-card"
                  whileHover={{ y: -4 }}
                >
                  <p className="text-2xl mb-2">{stat.icon}</p>
                  <p className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</p>
                  <p className="text-cyan-300/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-center mb-12 text-glow">Advanced Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="tech-card group"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <div className="text-cyan-400 mb-4 group-hover:text-blue-300 transition transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold mb-3">{feature.title}</h3>
                  <p className="text-cyan-300/70 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Featured Categories */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-center mb-12 text-glow">Featured Categories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {categories.map((cat, i) => (
                <Link key={i} href="/categories">
                  <motion.div
                    className="tech-card cursor-pointer"
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <div className="text-5xl mb-4">{cat.icon}</div>
                    <h3 className="text-white font-bold mb-2">{cat.name}</h3>
                    <p className="text-cyan-400 text-sm font-semibold">{cat.tools} tools</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center py-16"
          >
            <h2 className="mb-6 text-glow">Ready to Transform Your AI Experience?</h2>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg transition transform hover:scale-105 relative group"
            >
              <span>Get Started Now</span>
              <Sparkles className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
