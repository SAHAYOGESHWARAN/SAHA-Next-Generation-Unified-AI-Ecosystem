'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle, Minimize2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatbotSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatbotSidebar({ isOpen, onClose }: ChatbotSidebarProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Welcome to SAHA NEXUS AI! 👋 How can I assist you today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        'That\'s a great question! Let me help you with that.',
        'I\'m analyzing your request. Here are some suggestions...',
        'You can explore our 18 AI categories to find the right tool for your needs.',
        'Would you like me to guide you through the dashboard?',
        'I can help you with integration, authentication, or feature exploration.',
        'Let me show you some relevant resources for that.',
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 800);
  };

  if (!isOpen) {
    return (
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => {
          setIsMinimized(false);
          onClose();
        }}
        className="fixed bottom-8 left-8 z-30 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/50 flex items-center justify-center hover:shadow-lg hover:shadow-cyan-400/70 transition duration-300"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>
    );
  }

  if (isMinimized) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-8 left-8 z-30"
      >
        <button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/50 flex items-center justify-center hover:shadow-lg hover:shadow-cyan-400/70 transition duration-300"
        >
          <Maximize2 className="w-6 h-6 text-white" />
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed bottom-8 left-8 z-30 w-96 h-screen max-h-96 rounded-lg border border-cyan-500/30 bg-slate-900/95 backdrop-blur shadow-2xl shadow-cyan-500/20 flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div>
          <h3 className="font-bold text-cyan-300 font-mono">NEXUS AI Assistant</h3>
          <p className="text-xs text-slate-400">Always here to help</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-slate-800 rounded transition"
          >
            <Minimize2 className="w-4 h-4 text-cyan-400" />
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded transition"
          >
            <X className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-br-none'
                    : 'bg-slate-800 text-cyan-200 border border-cyan-500/20 rounded-bl-none'
                } font-mono text-sm`}
              >
                {message.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce delay-100"></div>
            <div className="w-2 h-2 rounded-full bg-pink-400 animate-bounce delay-200"></div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="border-t border-cyan-500/20 p-4 bg-slate-900/50">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 px-3 py-2 rounded bg-slate-800 border border-cyan-500/20 text-white placeholder-slate-500 font-mono text-sm focus:outline-none focus:border-cyan-500/50 transition"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="p-2 rounded bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 disabled:opacity-50 transition"
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}
