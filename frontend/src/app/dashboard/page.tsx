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
  Cpu,
  Network,
  Layers,
  Shield,
  Rocket,
  Code,
  Database,
  Cloud,
  TrendingUp,
  Activity,
  AlertCircle,
} from 'lucide-react';
import DashboardNav from '@/components/DashboardNav';
import CyberCard from '@/components/CyberCard';
import HolographicNode from '@/components/HolographicNode';
import AnalyticsPanel from '@/components/AnalyticsPanel';
import NetworkViz from '@/components/NetworkViz';
import toast from 'react-hot-toast';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [networkNodes, setNetworkNodes] = useState<any[]>([]);

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

        // Generate network nodes
        setNetworkNodes([
          { id: '1', label: 'Core', x: 300, y: 200, size: 8, color: 'rgba(0, 212, 255, 1)' },
          { id: '2', label: 'API', x: 150, y: 100, size: 6, color: 'rgba(168, 85, 247, 1)' },
          { id: '3', label: 'DB', x: 450, y: 100, size: 6, color: 'rgba(0, 255, 204, 1)' },
          { id: '4', label: 'Cache', x: 100, y: 300, size: 5, color: 'rgba(255, 165, 0, 1)' },
          { id: '5', label: 'Queue', x: 500, y: 300, size: 5, color: 'rgba(236, 72, 153, 1)' },
        ]);
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
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full mx-auto mb-4" />
          <p className="text-cyan-400 font-mono">Initializing Neural Network...</p>
        </motion.div>
      </div>
    );
  }

  const categoryNodes = [
    { icon: <Code className="w-full h-full" />, title: 'Developer Tools', color: 'cyan' },
    { icon: <Cpu className="w-full h-full" />, title: 'AI Models', color: 'purple' },
    { icon: <Database className="w-full h-full" />, title: 'Databases', color: 'teal' },
    { icon: <Cloud className="w-full h-full" />, title: 'DevOps', color: 'orange' },
    { icon: <Shield className="w-full h-full" />, title: 'Security', color: 'cyan' },
    { icon: <Network className="w-full h-full" />, title: 'Networking', color: 'purple' },
  ];

  const analyticsData = [
    { label: 'CPU Usage', value: 68 },
    { label: 'Memory', value: 52 },
    { label: 'Disk I/O', value: 71 },
    { label: 'Network', value: 45 },
  ];

  return (
    <div className="min-h-screen bg-gradient-cyber relative">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <DashboardNav user={user} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Welcome Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-bold mb-2"
              >
                Welcome,{' '}
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  {user?.firstName || user?.username}
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-cyan-400 font-mono text-sm"
              >
                &gt; Neural Network Synchronized | System Status: OPTIMAL
              </motion.p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-tech text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              New Project
            </motion.button>
          </div>
        </motion.section>

        {/* System Status Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'Projects', value: '0', icon: Sparkles, color: 'cyan' },
            { label: 'AI Models', value: '0', icon: Zap, color: 'purple' },
            { label: 'Conversations', value: '0', icon: MessageSquare, color: 'teal' },
            { label: 'Integrations', value: '0', icon: Network, color: 'orange' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <CyberCard
                glow={true}
                glowColor={stat.color as any}
                delay={i * 0.05}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-mono">{stat.label}</p>
                    <p className="text-3xl font-bold text-cyan-300 mt-2">{stat.value}</p>
                  </div>
                  <stat.icon className="w-8 h-8 text-cyan-400 opacity-50" />
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left: Network Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <CyberCard glow={true} glowColor="cyan">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-cyan-300 flex items-center gap-2">
                  <Network className="w-5 h-5" />
                  System Architecture
                </h2>
              </div>
              <div className="h-80 w-full">
                <NetworkViz nodes={networkNodes} title="Network Topology" />
              </div>
            </CyberCard>
          </motion.div>

          {/* Right: Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Performance Overview */}
            <CyberCard glow={true} glowColor="purple">
              <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Performance
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Uptime', value: '99.9%', color: 'green' },
                  { label: 'Latency', value: '12ms', color: 'blue' },
                  { label: 'Requests', value: '2.4K/s', color: 'cyan' },
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{stat.label}</span>
                    <span className={`font-bold text-${stat.color}-400`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </CyberCard>

            {/* System Health */}
            <CyberCard glow={true} glowColor="teal">
              <h3 className="text-lg font-bold text-teal-400 mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5" />
                System Health
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'All Systems', status: 'OPERATIONAL' },
                  { label: 'Database', status: 'HEALTHY' },
                  { label: 'Cache', status: 'OPTIMAL' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    <span className="text-xs font-bold text-green-400">●{item.status}</span>
                  </div>
                ))}
              </div>
            </CyberCard>
          </motion.div>
        </div>

        {/* Category Nodes */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            Ecosystem Nodes
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {categoryNodes.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <HolographicNode
                  icon={node.icon}
                  title={node.title}
                  color={node.color as any}
                  size="md"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Analytics Panels */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            System Metrics
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <AnalyticsPanel
              title="Resource Allocation"
              data={analyticsData}
              color="cyan"
              icon={<Cpu className="w-5 h-5" />}
            />
            <AnalyticsPanel
              title="API Performance"
              data={[
                { label: 'Response Time', value: 85 },
                { label: 'Throughput', value: 72 },
                { label: 'Availability', value: 99 },
                { label: 'Cache Hit', value: 88 },
              ]}
              color="purple"
              icon={<Network className="w-5 h-5" />}
            />
            <AnalyticsPanel
              title="Infrastructure"
              data={[
                { label: 'Storage', value: 65 },
                { label: 'Bandwidth', value: 48 },
                { label: 'Connections', value: 92 },
                { label: 'Processes', value: 55 },
              ]}
              color="teal"
              icon={<Database className="w-5 h-5" />}
            />
          </div>
        </motion.section>

        {/* AI Workspace Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <CyberCard glow={true} glowColor="cyan">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-cyan-300 flex items-center gap-2 mb-2">
                <Sparkles className="w-6 h-6" />
                AI Workspace
              </h2>
              <p className="text-gray-400 text-sm font-mono">&gt; Neural Interface Ready</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Model Selection', icon: <Cpu className="w-5 h-5" />, desc: 'Choose AI Provider' },
                { title: 'Task Configuration', icon: <Settings className="w-5 h-5" />, desc: 'Configure Parameters' },
                { title: 'Execute Workflow', icon: <Rocket className="w-5 h-5" />, desc: 'Run Operations' },
              ].map((item, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 rounded-lg border border-cyan-500/30 bg-slate-900/30 hover:bg-slate-800/50 transition-all group"
                >
                  <div className="text-cyan-400 group-hover:text-cyan-300 mb-2 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </motion.button>
              ))}
            </div>
          </CyberCard>
        </motion.section>

        {/* Get Started Guide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <CyberCard glow={true} glowColor="purple">
            <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Getting Started
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <p className="text-cyan-300 font-mono">Step 1</p>
                <p className="text-gray-400">Set up your AI integrations and configure API credentials securely.</p>
              </div>
              <div className="space-y-2">
                <p className="text-cyan-300 font-mono">Step 2</p>
                <p className="text-gray-400">Create your first project and explore available AI models.</p>
              </div>
              <div className="space-y-2">
                <p className="text-cyan-300 font-mono">Step 3</p>
                <p className="text-gray-400">Execute workflows and analyze results in real-time.</p>
              </div>
            </div>
          </CyberCard>
        </motion.section>
      </main>
    </div>
  );
}
