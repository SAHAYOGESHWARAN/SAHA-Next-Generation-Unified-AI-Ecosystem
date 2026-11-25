'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Save,
  Lock,
  Bell,
  User,
  Key,
  Shield,
  LogOut,
  Copy,
  Eye,
  EyeOff,
} from 'lucide-react';
import DashboardNav from '@/components/DashboardNav';
import CyberCard from '@/components/CyberCard';
import toast from 'react-hot-toast';

export default function SettingsPage() {
  const [user, setUser] = useState<any>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    openrouter: '',
    huggingface: '',
    ollama: 'http://localhost:11434',
  });

  const handleSaveProfile = () => {
    toast.success('Profile updated successfully');
  };

  const handleAddCredential = (provider: string) => {
    if (credentials[provider as keyof typeof credentials]) {
      toast.success(`${provider} credentials saved securely`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-cyber relative">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <DashboardNav user={user} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-text bg-clip-text text-transparent">Settings</span>
          </h1>
          <p className="text-cyan-400 font-mono text-sm">Manage your account and integrations</p>
        </motion.section>

        <div className="space-y-8">
          {/* Profile Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <CyberCard glow={true} glowColor="cyan">
              <h2 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-2">
                <User className="w-6 h-6" />
                Profile Settings
              </h2>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-300 block mb-2">Username</label>
                    <input
                      type="text"
                      defaultValue="john_doe"
                      className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-cyan-500/20 focus:border-cyan-400 outline-none transition text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-300 block mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-cyan-500/20 focus:border-cyan-400 outline-none transition text-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-300 block mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-cyan-500/20 focus:border-cyan-400 outline-none transition text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-300 block mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-cyan-500/20 focus:border-cyan-400 outline-none transition text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-300 block mb-2">Bio</label>
                  <textarea
                    defaultValue="AI enthusiast and software engineer"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-cyan-500/20 focus:border-cyan-400 outline-none transition text-white"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={handleSaveProfile}
                  className="px-6 py-3 bg-gradient-tech text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Save Changes
                </motion.button>
              </div>
            </CyberCard>
          </motion.div>

          {/* AI Provider Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CyberCard glow={true} glowColor="purple">
              <h2 className="text-2xl font-bold text-purple-300 mb-6 flex items-center gap-2">
                <Key className="w-6 h-6" />
                API Integrations
              </h2>

              <div className="space-y-6">
                {/* OpenRouter */}
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">OpenRouter</h3>
                  <div className="space-y-2">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your OpenRouter API key"
                      value={credentials.openrouter}
                      onChange={(e) => setCredentials({ ...credentials, openrouter: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-purple-500/20 focus:border-purple-400 outline-none transition text-white"
                    />
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleAddCredential('openrouter')}
                        className="flex-1 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/50 text-purple-300 font-semibold hover:bg-purple-500/30 transition"
                      >
                        Save
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-600 text-gray-300 hover:bg-slate-700/50 transition"
                      >
                        <Copy className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Hugging Face */}
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">Hugging Face</h3>
                  <div className="space-y-2">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your Hugging Face API key"
                      value={credentials.huggingface}
                      onChange={(e) => setCredentials({ ...credentials, huggingface: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-purple-500/20 focus:border-purple-400 outline-none transition text-white"
                    />
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleAddCredential('huggingface')}
                        className="flex-1 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/50 text-purple-300 font-semibold hover:bg-purple-500/30 transition"
                      >
                        Save
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Ollama (Local) */}
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">Ollama (Local)</h3>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Ollama endpoint"
                      value={credentials.ollama}
                      onChange={(e) => setCredentials({ ...credentials, ollama: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-purple-500/20 focus:border-purple-400 outline-none transition text-white"
                    />
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleAddCredential('ollama')}
                        className="flex-1 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/50 text-purple-300 font-semibold hover:bg-purple-500/30 transition"
                      >
                        Test Connection
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </CyberCard>
          </motion.div>

          {/* Security Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <CyberCard glow={true} glowColor="teal">
              <h2 className="text-2xl font-bold text-teal-300 mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Security
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-teal-400 mb-3">Change Password</h3>
                  <div className="space-y-3">
                    <input
                      type="password"
                      placeholder="Current password"
                      className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-teal-500/20 focus:border-teal-400 outline-none transition text-white"
                    />
                    <input
                      type="password"
                      placeholder="New password"
                      className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-teal-500/20 focus:border-teal-400 outline-none transition text-white"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-full px-4 py-2 rounded-lg bg-teal-500/20 border border-teal-500/50 text-teal-300 font-semibold hover:bg-teal-500/30 transition"
                    >
                      Update Password
                    </motion.button>
                  </div>
                </div>

                <div className="border-t border-teal-500/20 pt-6">
                  <h3 className="text-lg font-semibold text-teal-400 mb-3">Two-Factor Authentication</h3>
                  <p className="text-gray-400 text-sm mb-3">Enhance your account security</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="px-6 py-2 rounded-lg bg-teal-500/20 border border-teal-500/50 text-teal-300 font-semibold hover:bg-teal-500/30 transition"
                  >
                    Enable 2FA
                  </motion.button>
                </div>
              </div>
            </CyberCard>
          </motion.div>

          {/* Danger Zone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <CyberCard glow={false}>
              <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" />
                Danger Zone
              </h2>

              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={handleLogout}
                  className="w-full px-6 py-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-300 font-semibold hover:bg-red-500/20 transition flex items-center justify-center gap-2"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-6 py-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-300 font-semibold hover:bg-red-500/20 transition"
                >
                  Delete Account
                </motion.button>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

function AlertCircle(props: any) {
  return <Shield {...props} />;
}
