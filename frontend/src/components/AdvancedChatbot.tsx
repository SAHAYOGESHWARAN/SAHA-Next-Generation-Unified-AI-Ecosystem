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

interface AdvancedChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
}

const AI_RESPONSES: { [key: string]: string[] } = {
  hello: [
    'Hello! Welcome to SAHA NEXUS AI. How can I assist you today?',
    'Hi there! I\'m your AI assistant. What can I help you with?',
    'Greetings! I\'m ready to help. What do you need?',
  ],
  dashboard: [
    'Opening the dashboard for you. You\'ll see real-time analytics and system metrics.',
    'Let me take you to the dashboard where you can monitor your AI ecosystem.',
    'Dashboard is loading. You can track all your AI tools and integrations there.',
  ],
  categories: [
    'Showing you all 18 AI categories including image generation, video creation, LLMs, and more.',
    'Let me show you our comprehensive collection of AI tools across different categories.',
    'Here are all the categories available in our ecosystem.',
  ],
  tools: [
    'We offer tools for image generation, video creation, LLM models, AI agents, DevOps, databases, and more.',
    'Our ecosystem includes tools for every AI and development need.',
    'We have tools covering AI image, video, language models, development, and infrastructure.',
  ],
  price: [
    'Pricing details are available on our pricing page. We offer flexible plans for all users.',
    'We have different pricing tiers to suit your needs. Would you like more details?',
    'Check our pricing page for the latest rates and plans.',
  ],
  help: [
    'I can help you with navigation, finding tools, or learning about our features. What would you like help with?',
    'I\'m here to assist! You can ask me about categories, tools, dashboard, or anything else.',
    'Feel free to ask me anything about SAHA NEXUS AI. I\'m always happy to help!',
  ],
  workspace: [
    'The workspace is where you can manage your projects and AI integrations in one place.',
    'Your workspace lets you organize and work with multiple AI tools simultaneously.',
    'In the workspace, you can create projects, test AI models, and collaborate with others.',
  ],
  settings: [
    'Settings allow you to configure your preferences, manage API keys, and customize your experience.',
    'You can update your profile, change language preferences, and manage security settings here.',
    'Visit settings to manage your account and integrations.',
  ],
  features: [
    'Our key features include AI tool integration, real-time collaboration, advanced analytics, and voice control.',
    'We offer a unified interface for managing all your AI needs with real-time features.',
    'Key features: multi-model support, workspace management, real-time collaboration, and analytics.',
  ],
  default: [
    'That\'s interesting! I can help you navigate SAHA NEXUS AI, find tools, or answer questions about our features.',
    'I understood that. Feel free to ask me about anything related to our AI ecosystem.',
    'Got it! Is there anything specific about SAHA NEXUS AI I can help you with?',
  ],
};

export default function AdvancedChatbot({ isOpen, onToggle }: AdvancedChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your AI assistant. Ask me about tools, categories, features, or how to use SAHA NEXUS AI. I can respond in multiple languages!',
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

  const getAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    // Check for keywords
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return AI_RESPONSES.hello[Math.floor(Math.random() * AI_RESPONSES.hello.length)];
    } else if (lowerInput.includes('dashboard')) {
      return AI_RESPONSES.dashboard[Math.floor(Math.random() * AI_RESPONSES.dashboard.length)];
    } else if (lowerInput.includes('categor')) {
      return AI_RESPONSES.categories[Math.floor(Math.random() * AI_RESPONSES.categories.length)];
    } else if (lowerInput.includes('tool')) {
      return AI_RESPONSES.tools[Math.floor(Math.random() * AI_RESPONSES.tools.length)];
    } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
      return AI_RESPONSES.price[Math.floor(Math.random() * AI_RESPONSES.price.length)];
    } else if (lowerInput.includes('help')) {
      return AI_RESPONSES.help[Math.floor(Math.random() * AI_RESPONSES.help.length)];
    } else if (lowerInput.includes('workspace')) {
      return AI_RESPONSES.workspace[Math.floor(Math.random() * AI_RESPONSES.workspace.length)];
    } else if (lowerInput.includes('setting')) {
      return AI_RESPONSES.settings[Math.floor(Math.random() * AI_RESPONSES.settings.length)];
    } else if (lowerInput.includes('feature')) {
      return AI_RESPONSES.features[Math.floor(Math.random() * AI_RESPONSES.features.length)];
    } else {
      return AI_RESPONSES.default[Math.floor(Math.random() * AI_RESPONSES.default.length)];
    }
  };

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

    // Simulate AI thinking
    setTimeout(() => {
      const aiResponse = getAIResponse(input);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);

      // Speak the response
      speakMessage(aiResponse);
    }, 800);
  };

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!isOpen) {
    return (
      <motion.button
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onToggle}
        className="fixed bottom-8 left-8 z-30 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/50 flex items-center justify-center hover:shadow-lg hover:shadow-cyan-400/70 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
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
        <motion.button
          onClick={() => setIsMinimized(false)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/50 flex items-center justify-center hover:shadow-lg hover:shadow-cyan-400/70 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Maximize2 className="w-7 h-7 text-white" />
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="fixed bottom-8 left-8 z-30 w-96 h-screen max-h-[600px] rounded-xl border border-cyan-500/40 bg-gradient-to-br from-slate-900/98 via-slate-800/98 to-slate-900/98 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div>
          <h3 className="font-bold text-cyan-300 font-mono text-lg">NEXUS AI</h3>
          <p className="text-xs text-slate-400">Advanced AI Assistant</p>
        </div>
        <div className="flex gap-2">
          <motion.button
            onClick={() => setIsMinimized(true)}
            whileHover={{ scale: 1.1 }}
            className="p-2 hover:bg-slate-800 rounded transition"
          >
            <Minimize2 className="w-4 h-4 text-cyan-400" />
          </motion.button>
          <motion.button
            onClick={onToggle}
            whileHover={{ scale: 1.1 }}
            className="p-2 hover:bg-slate-800 rounded transition"
          >
            <X className="w-4 h-4 text-cyan-400" />
          </motion.button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-cyan-500/20 scrollbar-track-transparent">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-br-none shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-800/80 text-cyan-200 border border-cyan-500/30 rounded-bl-none shadow-lg shadow-cyan-500/10'
                } font-medium text-sm leading-relaxed`}
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
            <motion.div
              className="w-2 h-2 rounded-full bg-cyan-400"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-purple-400"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, delay: 0.1, repeat: Infinity }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-pink-400"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, delay: 0.2, repeat: Infinity }}
            />
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
            className="flex-1 px-4 py-2 rounded-lg bg-slate-800/70 border border-cyan-500/30 text-white placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-cyan-500/60 transition"
          />
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 disabled:opacity-50 transition"
          >
            <Send className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
