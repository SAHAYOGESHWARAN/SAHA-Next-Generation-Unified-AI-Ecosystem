'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

const categories: { [key: string]: any } = {
  '1': {
    name: 'AI Image & Design',
    description: 'Generate, edit, and enhance images with AI-powered tools',
    tools: [
      { name: 'DALL-E 3', desc: 'Advanced image generation from text prompts', url: '#' },
      { name: 'Midjourney', desc: 'High-quality AI image creation', url: '#' },
      { name: 'Stable Diffusion', desc: 'Open-source image generation model', url: '#' },
      { name: 'Adobe Firefly', desc: 'Generative fill and expand tools', url: '#' },
    ]
  },
  '2': {
    name: 'AI Video Generation',
    description: 'Create stunning videos from text, images, or audio',
    tools: [
      { name: 'Runway', desc: 'AI video generation and editing', url: '#' },
      { name: 'Synthesia', desc: 'AI video generator with avatars', url: '#' },
      { name: 'D-ID', desc: 'Digital human creation', url: '#' },
      { name: 'HeyGen', desc: 'AI avatar video creator', url: '#' },
    ]
  },
  '3': {
    name: 'AI Agents',
    description: 'Autonomous agents that learn and adapt to tasks',
    tools: [
      { name: 'AutoGPT', desc: 'Autonomous AI agent', url: '#' },
      { name: 'BabyAGI', desc: 'Task-driven autonomous agent', url: '#' },
      { name: 'CrewAI', desc: 'Multi-agent orchestration framework', url: '#' },
      { name: 'Voiceflow', desc: 'Conversational AI agent builder', url: '#' },
    ]
  },
  '4': {
    name: 'LLM Tools',
    description: 'Large Language Models for text generation and analysis',
    tools: [
      { name: 'ChatGPT', desc: 'Advanced conversational AI', url: '#' },
      { name: 'Claude', desc: 'Anthropic\'s powerful language model', url: '#' },
      { name: 'Llama', desc: 'Meta\'s open-source model', url: '#' },
      { name: 'Mistral', desc: 'European open-source LLM', url: '#' },
    ]
  },
  '5': {
    name: 'Developer Tools',
    description: 'Coding assistants, debugging, and optimization tools',
    tools: [
      { name: 'GitHub Copilot', desc: 'AI-powered code completion', url: '#' },
      { name: 'Tabnine', desc: 'AI code assistant', url: '#' },
      { name: 'Codeium', desc: 'Free AI code accelerator', url: '#' },
      { name: 'Blackbox', desc: 'Code search and generation', url: '#' },
    ]
  },
  '6': {
    name: 'Web & Frontend',
    description: 'Build responsive web applications and interfaces',
    tools: [
      { name: 'Vercel', desc: 'Frontend cloud platform', url: '#' },
      { name: 'Netlify', desc: 'Modern web development platform', url: '#' },
      { name: 'AWS Amplify', desc: 'AWS\'s web and mobile development', url: '#' },
      { name: 'Firebase', desc: 'Google\'s app development platform', url: '#' },
    ]
  },
  '7': {
    name: 'Self-Hosted Systems',
    description: 'Deploy and manage AI models on your own infrastructure',
    tools: [
      { name: 'Ollama', desc: 'Run LLMs locally', url: '#' },
      { name: 'LocalAI', desc: 'Self-hosted OpenAI alternative', url: '#' },
      { name: 'GPT4All', desc: 'Free offline LLM', url: '#' },
      { name: 'LM Studio', desc: 'Desktop LLM client', url: '#' },
    ]
  },
  '8': {
    name: 'Data Engineering',
    description: 'Process, transform, and pipeline data at scale',
    tools: [
      { name: 'Apache Spark', desc: 'Distributed computing framework', url: '#' },
      { name: 'Kafka', desc: 'Event streaming platform', url: '#' },
      { name: 'Airflow', desc: 'Workflow orchestration platform', url: '#' },
      { name: 'Dbt', desc: 'Data transformation tool', url: '#' },
    ]
  },
  '9': {
    name: 'Databases',
    description: 'Store and query data efficiently with modern databases',
    tools: [
      { name: 'PostgreSQL', desc: 'Advanced open-source database', url: '#' },
      { name: 'MongoDB', desc: 'NoSQL document database', url: '#' },
      { name: 'Redis', desc: 'In-memory data store', url: '#' },
      { name: 'Pinecone', desc: 'Vector database for AI', url: '#' },
    ]
  },
  '10': {
    name: 'Cybersecurity',
    description: 'Protect systems with AI-powered security solutions',
    tools: [
      { name: 'Snyk', desc: 'Developer-first security platform', url: '#' },
      { name: 'CrowdStrike', desc: 'Cloud-native endpoint protection', url: '#' },
      { name: 'Darktrace', desc: 'AI-powered threat detection', url: '#' },
      { name: 'Vectra', desc: 'AI-powered threat detection', url: '#' },
    ]
  },
};

interface PageProps {
  params: {
    id: string;
  };
}

export default function CategoryDetailPage({ params }: PageProps) {
  const categoryId = params.id;
  const category = categories[categoryId];

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <Navigation />
        <div className="relative z-10 max-w-7xl mx-auto text-center mt-20">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <p className="text-slate-400 mb-8">The category you're looking for doesn't exist.</p>
          <Link
            href="/categories"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-mono hover:shadow-lg transition"
          >
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

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
        <div className="mb-16 mt-8">
          <Link
            href="/categories"
            className="text-cyan-400 hover:text-cyan-300 font-mono text-sm mb-6 inline-block"
          >
            ← Back to Categories
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {category.name}
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            {category.description}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {category.tools.map((tool: any, idx: number) => (
            <div key={idx} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition"></div>
              <div className="relative bg-slate-900/80 backdrop-blur border border-slate-700/50 rounded-lg p-6 hover:border-slate-600/70 transition">
                <h3 className="text-2xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-slate-400 mb-4">{tool.desc}</p>
                <a
                  href={tool.url}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg text-sm font-mono hover:shadow-lg hover:shadow-cyan-500/50 transition"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Back Links */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/categories"
            className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border border-slate-600/50 rounded-lg text-white font-mono transition"
          >
            ← Back to Categories
          </Link>
          <Link
            href="/explore"
            className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border border-slate-600/50 rounded-lg text-white font-mono transition"
          >
            Explore All Tools
          </Link>
        </div>
      </div>
    </div>
  );
}
