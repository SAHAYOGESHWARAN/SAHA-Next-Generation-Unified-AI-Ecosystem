'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Sparkles,
  BarChart3,
  Zap,
  Users,
  ArrowRight,
  Search,
  Plus,
  Heart,
  MessageSquare,
  Settings,
} from 'lucide-react';
import DashboardNav from '@/components/DashboardNav';
import toast from 'react-hot-toast';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('accessToken');
      const userData = localStorage.getItem('user');

      if (!token || !userData) {
        router.push('/auth/login');
        return;
      }

      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (e) {
        router.push('/auth/login');
      }
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-cyber flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin mb-4">
            <Sparkles className="w-12 h-12 text-cyber-blue mx-auto" />
          </div>
          <p className="text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-cyber">
      <DashboardNav user={user} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, <span className="bg-gradient-text bg-clip-text text-transparent">{user?.firstName || user?.username}</span>
              </h1>
              <p className="text-gray-400">Here's what's happening in your AI ecosystem today</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-gradient-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyber-blue/50 flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              New Project
            </motion.button>
          </div>
        </motion.section>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Projects', value: '0', icon: Sparkles, color: 'cyber-blue' },
            { label: 'AI Models', value: '0', icon: Zap, color: 'cyber-violet' },
            { label: 'Conversations', value: '0', icon: MessageSquare, color: 'cyber-pink' },
            { label: 'Favorites', value: '0', icon: Heart, color: 'cyan-400' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-lg border border-navy-700/50 bg-navy-800/30 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <stat.icon className="w-8 h-8 text-cyan-400 opacity-50" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Workspace */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">AI Workspace</h2>
              <div className="p-6 rounded-lg border border-navy-700/50 bg-navy-800/30 backdrop-blur-sm">
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Start a conversation</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Ask anything or describe your task..."
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-navy-700/50 bg-navy-800/50 focus:border-cyber-blue focus:outline-none transition placeholder-gray-500"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    'Generate an image for my project',
                    'Explain how to use Docker',
                    'Create a code snippet',
                    'Research latest AI trends',
                  ].map((prompt, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ x: 5 }}
                      className="w-full text-left p-4 rounded-lg border border-navy-700/30 hover:border-cyber-blue/50 hover:bg-navy-800/50 transition text-sm text-gray-300"
                    >
                      <ArrowRight className="w-4 h-4 inline mr-2 text-cyber-blue" />
                      {prompt}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Projects */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
              <div className="p-6 rounded-lg border border-navy-700/50 bg-navy-800/30 backdrop-blur-sm text-center py-12">
                <Sparkles className="w-12 h-12 mx-auto text-gray-500 mb-4 opacity-50" />
                <p className="text-gray-400">No projects yet. Create your first project to get started!</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 px-4 py-2 bg-gradient-accent text-white rounded-lg font-semibold"
                >
                  Create Project
                </motion.button>
              </div>
            </div>
          </motion.section>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Quick Access */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Access</h3>
              <div className="space-y-2">
                {[
                  { label: 'Explore Tools', icon: Zap },
                  { label: 'Discover Models', icon: BarChart3 },
                  { label: 'View Integrations', icon: Settings },
                  { label: 'Documentation', icon: MessageSquare },
                ].map((item, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ x: 5 }}
                    className="w-full flex items-center gap-3 p-3 rounded-lg border border-navy-700/30 hover:border-cyber-blue/50 hover:bg-navy-800/50 transition text-left"
                  >
                    <item.icon className="w-5 h-5 text-cyber-blue" />
                    <span className="text-sm">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Profile Card */}
            <div className="p-4 rounded-lg border border-navy-700/50 bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-accent" />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{user?.username}</p>
                  <p className="text-xs text-gray-400">{user?.email}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full px-3 py-2 rounded-lg border border-navy-700/50 hover:border-cyber-blue/50 hover:bg-navy-800/50 transition text-sm font-medium"
              >
                Edit Profile
              </motion.button>
            </div>

            {/* Get Started */}
            <div className="p-4 rounded-lg border border-cyber-blue/30 bg-cyber-blue/5 backdrop-blur-sm">
              <h4 className="font-bold mb-2">Getting Started</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ Set up your first integration</li>
                <li>✓ Create your first project</li>
                <li>✓ Explore AI models</li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </main>
    </div>
  );
}
