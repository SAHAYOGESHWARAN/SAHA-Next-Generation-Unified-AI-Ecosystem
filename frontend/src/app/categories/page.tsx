'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  tools: string[];
  color: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'AI Image & Design',
    description: 'Generate, edit, and enhance images with AI-powered tools',
    icon: '🖼️',
    tools: ['DALL-E 3', 'Midjourney', 'Stable Diffusion', 'Adobe Firefly'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 2,
    name: 'AI Video Generation',
    description: 'Create stunning videos from text, images, or audio',
    icon: '🎬',
    tools: ['Runway', 'Synthesia', 'D-ID', 'HeyGen'],
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 3,
    name: 'AI Agents',
    description: 'Autonomous agents that learn and adapt to tasks',
    icon: '🤖',
    tools: ['AutoGPT', 'BabyAGI', 'CrewAI', 'Voiceflow'],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 4,
    name: 'LLM Tools',
    description: 'Large Language Models for text generation and analysis',
    icon: '📚',
    tools: ['ChatGPT', 'Claude', 'Llama', 'Mistral'],
    color: 'from-yellow-500 to-green-500',
  },
  {
    id: 5,
    name: 'Developer Tools',
    description: 'Coding assistants, debugging, and optimization tools',
    icon: '👨‍💻',
    tools: ['GitHub Copilot', 'Tabnine', 'Codeium', 'Blackbox'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 6,
    name: 'Web & Frontend',
    description: 'Build responsive web applications and interfaces',
    icon: '🌐',
    tools: ['Vercel', 'Netlify', 'AWS Amplify', 'Firebase'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 7,
    name: 'Self-Hosted Systems',
    description: 'Deploy and manage AI models on your own infrastructure',
    icon: '🖥️',
    tools: ['Ollama', 'LocalAI', 'GPT4All', 'LM Studio'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 8,
    name: 'Data Engineering',
    description: 'Process, transform, and pipeline data at scale',
    icon: '📊',
    tools: ['Apache Spark', 'Kafka', 'Airflow', 'Dbt'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 9,
    name: 'Databases',
    description: 'Store and query data efficiently with modern databases',
    icon: '🗄️',
    tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 10,
    name: 'Cybersecurity',
    description: 'Protect systems with AI-powered security solutions',
    icon: '🔒',
    tools: ['Snyk', 'CrowdStrike', 'Darktrace', 'Vectra'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 11,
    name: 'DevOps & Infrastructure',
    description: 'Automate deployment, scaling, and infrastructure management',
    icon: '⚙️',
    tools: ['Docker', 'Kubernetes', 'Terraform', 'Ansible'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 12,
    name: 'Web Scraping',
    description: 'Extract and analyze web data intelligently',
    icon: '🕷️',
    tools: ['Apify', 'ScrapingBee', 'Nightmare', 'Cheerio'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 13,
    name: 'Productivity',
    description: 'Enhance workflows with AI-powered productivity tools',
    icon: '⚡',
    tools: ['Notion AI', 'Copilot Pro', 'Zapier', 'Make'],
    color: 'from-rose-500 to-orange-500',
  },
  {
    id: 14,
    name: 'Learning & Interview',
    description: 'Prepare for interviews and learning with AI tutoring',
    icon: '🎓',
    tools: ['Interviewing.io', 'LeetCode AI', 'Coursera', 'Edpuzzle'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 15,
    name: 'Local & Private AI',
    description: 'Run AI models privately without cloud dependencies',
    icon: '🔐',
    tools: ['Ollama', 'Hugging Face', 'PrivateGPT', 'LocalStack'],
    color: 'from-amber-500 to-yellow-500',
  },
  {
    id: 16,
    name: 'AI Research',
    description: 'Access cutting-edge AI research papers and models',
    icon: '🔬',
    tools: ['Arxiv', 'Papers With Code', 'Hugging Face', 'OpenReview'],
    color: 'from-yellow-500 to-lime-500',
  },
  {
    id: 17,
    name: 'Computer Vision',
    description: 'Image recognition, object detection, and analysis',
    icon: '👁️',
    tools: ['OpenCV', 'TensorFlow', 'Yolo', 'MediaPipe'],
    color: 'from-lime-500 to-green-500',
  },
  {
    id: 18,
    name: 'Open-Source Models',
    description: 'Access and deploy open-source AI models',
    icon: '🌍',
    tools: ['Llama 2', 'Mistral', 'Falcon', 'MPT'],
    color: 'from-green-500 to-emerald-500',
  },
];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 relative overflow-hidden">
      <Navigation />
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Explore 18 AI Categories
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discover comprehensive tools across image generation, video creation, LLMs, agents, and more
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 relative group max-w-2xl mx-auto">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition"></div>
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="relative w-full px-6 py-4 bg-slate-800/80 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-slate-500 transition font-mono"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
              className="relative group cursor-pointer"
            >
              {/* Gradient border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>

              {/* Card */}
              <div className="relative bg-slate-900/80 backdrop-blur border border-slate-700/50 rounded-xl p-6 h-full hover:border-slate-600/70 transition overflow-hidden">
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{category.description}</p>

                  {/* Tools */}
                  {selectedCategory === category.id && (
                    <div className="animate-in fade-in duration-300">
                      <div className="pt-4 border-t border-slate-700/50">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-3 font-mono">Featured Tools</p>
                        <div className="flex flex-wrap gap-2">
                          {category.tools.map((tool, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600/50 rounded text-xs text-cyan-300 font-mono"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    href={`/explore/${category.id}`}
                    className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border border-slate-600/50 rounded-lg text-sm text-white font-mono transition"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition"></div>
            <div className="relative bg-slate-900/80 backdrop-blur border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-3 font-mono">Unified Workspace</h3>
              <p className="text-slate-400">Switch between models, compare responses, and manage all your AI projects in one integrated platform.</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition"></div>
            <div className="relative bg-slate-900/80 backdrop-blur border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-3 font-mono">Secure Integration</h3>
              <p className="text-slate-400">Connect your favorite AI providers and manage credentials safely with enterprise-grade encryption.</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition"></div>
            <div className="relative bg-slate-900/80 backdrop-blur border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-pink-400 mb-3 font-mono">Complete Analytics</h3>
              <p className="text-slate-400">Track usage, monitor AI requests, and optimize your workflow with detailed insights and reports.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
