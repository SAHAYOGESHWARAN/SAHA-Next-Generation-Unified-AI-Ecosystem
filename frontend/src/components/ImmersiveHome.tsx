'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Radio } from 'lucide-react';
import Link from 'next/link';
import EyeTracker from './EyeTracker';
import VoiceControl from './VoiceControl';
import HologramEffect from './HologramEffect';
import ChatbotSidebar from './ChatbotSidebar';

export default function ImmersiveHome() {
  const [isHologramActive, setIsHologramActive] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [showEyes, setShowEyes] = useState(true);
  const [commandFeedback, setCommandFeedback] = useState('');

  useEffect(() => {
    // Auto-show welcome after 1 second
    const timer = setTimeout(() => {
      setCommandFeedback('');
    }, 3000);
    return () => clearTimeout(timer);
  }, [commandFeedback]);

  const handleVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    setCommandFeedback(command);

    if (lowerCommand.includes('open') || lowerCommand.includes('dashboard')) {
      window.location.href = '/dashboard';
    } else if (lowerCommand.includes('explore') || lowerCommand.includes('categories')) {
      window.location.href = '/categories';
    } else if (lowerCommand.includes('chat')) {
      setIsChatOpen(true);
    } else if (lowerCommand.includes('voice')) {
      setIsVoiceEnabled(!isVoiceEnabled);
    } else if (lowerCommand.includes('eyes')) {
      setShowEyes(!showEyes);
    }
  };

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

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
      {/* Hologram background effect */}
      <HologramEffect isActive={isHologramActive} />

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

      {/* Eye Tracker */}
      <EyeTracker isVisible={showEyes} />

      {/* Voice Control */}
      <VoiceControl isEnabled={isVoiceEnabled} onCommand={handleVoiceCommand} />

      {/* Chatbot Sidebar */}
      <ChatbotSidebar isOpen={isChatOpen} onClose={() => setIsChatOpen(!isChatOpen)} />

      {/* Command Feedback */}
      {commandFeedback && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 px-6 py-3 rounded-lg bg-slate-800/90 backdrop-blur border border-cyan-500/50 text-cyan-300 font-mono text-sm shadow-lg shadow-cyan-500/30"
        >
          🎤 Recognized: &quot;{commandFeedback}&quot;
        </motion.div>
      )}

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
              animate={{ backgroundPosition: '200% center' }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 100%' }}
            >
              SAHA NEXUS AI
            </motion.span>
            <br />
            <span className="text-white">Immersive Intelligence</span>
          </h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
          >
            Experience the future of AI interaction with voice commands, eye tracking, 3D holograms, and intelligent chat assistance
          </motion.p>

          {/* Control Panel */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.button
              onClick={() => setShowEyes(!showEyes)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-400/50 text-cyan-300 font-mono text-sm hover:border-cyan-300 hover:from-cyan-500/30 hover:to-cyan-600/30 transition"
            >
              {showEyes ? '👁️ Eyes On' : '👁️ Eyes Off'}
            </motion.button>

            <motion.button
              onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/50 text-purple-300 font-mono text-sm hover:border-purple-300 hover:from-purple-500/30 hover:to-purple-600/30 transition"
            >
              {isVoiceEnabled ? '🎤 Voice On' : '🎤 Voice Off'}
            </motion.button>

            <motion.button
              onClick={() => setIsChatOpen(!isChatOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500/20 to-pink-600/20 border border-pink-400/50 text-pink-300 font-mono text-sm hover:border-pink-300 hover:from-pink-500/30 hover:to-pink-600/30 transition"
            >
              💬 Chat AI
            </motion.button>

            <motion.button
              onClick={() => setIsHologramActive(!isHologramActive)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-400/50 text-emerald-300 font-mono text-sm hover:border-emerald-300 hover:from-emerald-500/30 hover:to-emerald-600/30 transition"
            >
              🌐 Hologram
            </motion.button>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-bold rounded-lg transition duration-300 font-mono uppercase flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/50 hover:shadow-lg hover:shadow-cyan-400/70"
            >
              <Radio className="w-5 h-5" />
              Enter Dashboard
            </Link>
            <Link
              href="/categories"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-bold hover:bg-cyan-500/10 transition duration-300 font-mono uppercase flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Explore Tools
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-4 gap-4 mt-16"
          >
            {[
              {
                icon: '👁️',
                title: 'Eye Tracking',
                desc: 'Cursor follows your eyes',
              },
              {
                icon: '🎤',
                title: 'Voice Commands',
                desc: 'Control with your voice',
              },
              {
                icon: '🌐',
                title: '3D Holograms',
                desc: 'Immersive visuals',
              },
              {
                icon: '💬',
                title: 'AI Chat',
                desc: 'Always here to help',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition"></div>
                <div className="relative p-6 rounded-lg border border-slate-700/50 bg-slate-800/50 backdrop-blur">
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h3 className="text-cyan-300 font-bold font-mono mb-1">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hologram workspace preview */}
        <motion.div
          variants={itemVariants}
          className="relative mt-20 rounded-lg border-2 border-cyan-500/30 bg-slate-800/20 backdrop-blur p-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-10"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Immersive Workspace Preview
              </h2>
              <p className="text-slate-400 mb-8">
                Your workspace comes alive with real-time 3D holograms, voice-controlled interfaces, and intelligent AI assistance
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Real-time Analytics',
                  'Voice Synthesis',
                  'AI Integration',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="p-4 rounded-lg bg-slate-700/30 border border-purple-500/30 text-purple-200 font-mono text-sm"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Instructions panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 max-w-xs p-4 rounded-lg bg-slate-900/90 backdrop-blur border border-cyan-500/20 text-slate-300 font-mono text-xs"
      >
        <p className="font-bold text-cyan-400 mb-2">💡 Try These:</p>
        <ul className="space-y-1 text-slate-400">
          <li>• Say &quot;open dashboard&quot;</li>
          <li>• Say &quot;explore categories&quot;</li>
          <li>• Click the eyes to track cursor</li>
          <li>• Click mic to use voice</li>
        </ul>
      </motion.div>
    </main>
  );
}
