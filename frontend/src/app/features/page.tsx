'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

const features = [
  {
    id: 1,
    title: 'Powerful Features',
    description: 'Everything you need to harness the full power of AI',
    icon: '⚡',
    details: [
      'Advanced model switching and comparison',
      'Real-time response analysis',
      'Custom prompt engineering tools',
      'Batch processing capabilities',
      'API rate limit management',
    ],
  },
  {
    id: 2,
    title: '18 AI & Tech Categories',
    description: 'Comprehensive coverage across all major AI domains',
    icon: '🎯',
    details: [
      'Image generation and design',
      'Video creation and production',
      'LLM and language models',
      'AI agents and automation',
      'DevOps and infrastructure',
      'Data engineering and analytics',
      'Databases and storage',
      'Cybersecurity solutions',
      'Web development tools',
      'Computer vision applications',
    ],
  },
  {
    id: 3,
    title: 'Unified AI Workspace',
    description: 'Switch between models, compare responses, and manage projects',
    icon: '🌐',
    details: [
      'Multi-model integration',
      'Side-by-side response comparison',
      'Project management dashboard',
      'Workspace organization',
      'Team collaboration features',
      'Version control for prompts',
      'Activity tracking and history',
    ],
  },
  {
    id: 4,
    title: 'Advanced Search',
    description: 'Semantic search across tools, models, and documentation',
    icon: '🔍',
    details: [
      'Natural language search queries',
      'Semantic indexing of tools',
      'Full documentation search',
      'Research paper database',
      'Model comparison search',
      'Real-time results',
      'Smart filtering and sorting',
    ],
  },
  {
    id: 5,
    title: 'Secure Integration',
    description: 'Connect your favorite AI providers and manage credentials safely',
    icon: '🔐',
    details: [
      'OAuth 2.0 authentication',
      'End-to-end encryption',
      'API key management',
      'Secure credential storage',
      'Role-based access control',
      'Audit logs and compliance',
      'Multi-factor authentication',
    ],
  },
  {
    id: 6,
    title: 'Real-Time Collaboration',
    description: 'Save projects, share insights, and collaborate with your team',
    icon: '👥',
    details: [
      'Real-time co-editing',
      'Instant notifications',
      'Comment and feedback system',
      'Shared workspaces',
      'Team permissions',
      'Activity streams',
      'Integration with popular tools',
    ],
  },
  {
    id: 7,
    title: 'Complete Analytics',
    description: 'Track usage, monitor AI requests, and optimize your workflow',
    icon: '📊',
    details: [
      'Usage statistics dashboard',
      'Cost analysis and tracking',
      'Model performance metrics',
      'Request rate monitoring',
      'Custom reports generation',
      'Predictive analytics',
      'Export functionality',
    ],
  },
  {
    id: 8,
    title: 'Enterprise Ready',
    description: 'Built for scalability and reliability at any scale',
    icon: '🏢',
    details: [
      '99.99% uptime SLA',
      'Auto-scaling infrastructure',
      'Disaster recovery',
      'Load balancing',
      'CDN integration',
      'DDoS protection',
      'Enterprise support',
    ],
  },
];

export default function FeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState(1);

  const selectedFeatureData = features.find((f) => f.id === selectedFeature);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 relative overflow-hidden">
      <Navigation />
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 mt-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Everything you need to harness the full power of AI with 18+ categories, unified workspace, and enterprise-grade features
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Feature List */}
          <div className="space-y-3">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setSelectedFeature(feature.id)}
                className={`w-full text-left p-4 rounded-lg border transition duration-300 font-mono text-sm ${selectedFeature === feature.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400/50 shadow-lg shadow-cyan-400/10'
                  : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600/70 hover:bg-slate-800/70'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <div className="font-bold text-white">{feature.title}</div>
                    <div className="text-xs text-slate-400">{feature.description.substring(0, 40)}...</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Feature Details */}
          {selectedFeatureData && (
            <div className="relative group h-fit">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse"></div>

              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="mb-6">
                  <div className="text-6xl mb-4">{selectedFeatureData.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedFeatureData.title}</h2>
                  <p className="text-slate-400">{selectedFeatureData.description}</p>
                </div>

                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-mono">Key Benefits</p>
                  <div className="space-y-2">
                    {selectedFeatureData.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item">
                        <div className="mt-1.5 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex-shrink-0 group-hover/item:shadow-lg group-hover/item:shadow-cyan-400/50 transition"></div>
                        <span className="text-slate-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-6 w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold rounded-lg transition duration-300 font-mono uppercase text-sm">
                  Learn More →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Categories Grid */}
        <div className="mt-20">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-white mb-3">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                18 AI & Tech Categories
              </span>
            </h2>
            <p className="text-slate-400">Comprehensive coverage across all major AI domains</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'AI Image & Design', icon: '🖼️' },
              { title: 'AI Video Generation', icon: '🎬' },
              { title: 'AI Agents', icon: '🤖' },
              { title: 'LLM Tools', icon: '📚' },
              { title: 'Developer Tools', icon: '👨‍💻' },
              { title: 'Web & Frontend', icon: '🌐' },
              { title: 'Self-Hosted Systems', icon: '🖥️' },
              { title: 'Data Engineering', icon: '📊' },
              { title: 'Databases', icon: '🗄️' },
              { title: 'Cybersecurity', icon: '🔒' },
              { title: 'DevOps & Infrastructure', icon: '⚙️' },
              { title: 'Web Scraping', icon: '🕷️' },
              { title: 'Productivity', icon: '⚡' },
              { title: 'Learning & Interview', icon: '🎓' },
              { title: 'Local & Private AI', icon: '🔐' },
              { title: 'AI Research', icon: '🔬' },
              { title: 'Computer Vision', icon: '👁️' },
              { title: 'Open-Source Models', icon: '🌍' },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg blur opacity-20 group-hover:opacity-40 transition"></div>
                <div className="relative bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-4 hover:border-slate-600/70 transition h-24 flex flex-col justify-center items-center text-center">
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <div className="text-sm font-bold text-white">{cat.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

          <div className="relative bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur border border-slate-700/50 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your AI Workflow?</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and teams using SAHA NEXUS AI to streamline their AI development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-bold rounded-lg transition duration-300 font-mono uppercase">
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700/50 text-white font-bold rounded-lg transition duration-300 font-mono uppercase">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
