'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Plus,
  Settings,
  Copy,
  Download,
  Trash2,
  Sparkles,
  Cpu,
  Zap,
} from 'lucide-react';
import DashboardNav from '@/components/DashboardNav';
import CyberCard from '@/components/CyberCard';

const models = [
  { name: 'GPT-4', provider: 'OpenAI', active: true },
  { name: 'Claude 3', provider: 'Anthropic', active: false },
  { name: 'Llama 2', provider: 'Meta', active: false },
  { name: 'Mistral', provider: 'Mistral AI', active: false },
];

export default function WorkspacePage() {
  const [user, setUser] = useState<any>(null);
  const [selectedModel, setSelectedModel] = useState('GPT-4');
  const [messages, setMessages] = useState<any[]>([
    { role: 'assistant', content: 'Welcome to the AI Workspace. I\'m ready to assist you with any task.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        role: 'assistant',
        content: 'I understand your request. Processing with ' + selectedModel + ' model...',
      };
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1000);
  };

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
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-text bg-clip-text text-transparent">AI Workspace</span>
          </h1>
          <p className="text-cyan-400 font-mono text-sm">&gt; Multi-Model Neural Interface</p>
        </motion.section>

        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Sidebar - Model Selection & Settings */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 space-y-4 overflow-y-auto"
          >
            {/* Model Selector */}
            <CyberCard glow={true} glowColor="purple">
              <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                Models
              </h3>
              <div className="space-y-2">
                {models.map((model, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setSelectedModel(model.name)}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedModel === model.name
                        ? 'bg-purple-500/30 border border-purple-400'
                        : 'border border-purple-500/20 hover:border-purple-400/50'
                    }`}
                  >
                    <div className="font-semibold text-sm">{model.name}</div>
                    <div className="text-xs text-gray-400">{model.provider}</div>
                    {model.active && <div className="text-xs text-green-400 mt-1">● Active</div>}
                  </motion.button>
                ))}
              </div>
            </CyberCard>

            {/* Settings */}
            <CyberCard glow={true} glowColor="cyan">
              <h3 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Settings
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-semibold text-gray-300 block mb-1">Temperature</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    defaultValue="0.7"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-300 block mb-1">Max Tokens</label>
                  <input
                    type="number"
                    defaultValue="2000"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900/50 border border-cyan-500/20 focus:border-cyan-400 outline-none"
                  />
                </div>
              </div>
            </CyberCard>

            {/* Actions */}
            <CyberCard glow={true} glowColor="teal">
              <div className="space-y-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-4 py-2 rounded-lg bg-teal-500/20 border border-teal-500/50 text-teal-300 font-semibold hover:bg-teal-500/30 transition flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  New Chat
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 font-semibold hover:bg-red-500/20 transition flex items-center justify-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear History
                </motion.button>
              </div>
            </CyberCard>
          </motion.aside>

          {/* Main Chat Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 flex flex-col h-full"
          >
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-6 rounded-lg border border-cyan-500/20 bg-slate-900/30 backdrop-blur-xl">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-md px-4 py-3 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-gradient-tech text-white'
                        : 'bg-slate-800/50 border border-cyan-500/20 text-gray-200'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-500/20 text-gray-200">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 rounded-lg border border-cyan-500/30 bg-slate-900/50 backdrop-blur-xl focus:border-cyan-400 focus:outline-none transition text-white placeholder-gray-500"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={loading}
                  className="px-6 py-3 bg-gradient-tech rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 transition flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <div className="flex gap-2 text-xs text-gray-500">
                <span>Model: {selectedModel}</span>
                <span>•</span>
                <span>{messages.length} messages</span>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
