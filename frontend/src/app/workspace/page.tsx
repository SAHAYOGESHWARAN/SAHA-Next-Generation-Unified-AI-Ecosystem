'use client';

import { motion } from 'framer-motion';
import { Plus, Settings, Share2, MoreHorizontal } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';

export default function WorkspacePage() {
  const projects = [
    {
      id: 1,
      name: 'AI Marketing Suite',
      description: 'Automated marketing content generation and optimization',
      progress: 75,
      members: 5,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Data Analytics Platform',
      description: 'Real-time data processing and visualization',
      progress: 90,
      members: 8,
      status: 'Active',
    },
    {
      id: 3,
      name: 'Chatbot Integration',
      description: 'Multi-language customer support automation',
      progress: 60,
      members: 3,
      status: 'In Progress',
    },
    {
      id: 4,
      name: 'Computer Vision System',
      description: 'Image recognition and object detection',
      progress: 45,
      members: 6,
      status: 'In Progress',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <PageWrapper>
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 pt-10"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="gradient-text mb-2 text-glow">
                Workspace
              </h1>
              <p className="text-cyan-300">
                Manage your AI projects and collaborations
              </p>
            </div>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-lg transition transform hover:scale-105">
              <Plus className="w-5 h-5" />
              New Project
            </button>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="tech-card group"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-grow">
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-cyan-300 transition">
                    {project.name}
                  </h3>
                  <p className="text-cyan-300/70 text-sm">
                    {project.description}
                  </p>
                </div>
                <button className="p-2 hover:bg-cyan-500/20 rounded-lg transition">
                  <MoreHorizontal className="w-5 h-5 text-cyan-400" />
                </button>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-cyan-400 text-xs font-semibold">Progress</span>
                  <span className="text-cyan-400 text-xs">{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-blue-900/40 rounded-full overflow-hidden border border-cyan-500/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 text-sm font-semibold">{project.members}</span>
                    <span className="text-cyan-300/70 text-sm">members</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Active'
                    ? 'bg-green-500/20 text-green-300'
                    : 'bg-blue-500/20 text-blue-300'
                    }`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-cyan-500/20 rounded-lg transition">
                    <Share2 className="w-4 h-4 text-cyan-400" />
                  </button>
                  <button className="p-2 hover:bg-cyan-500/20 rounded-lg transition">
                    <Settings className="w-4 h-4 text-cyan-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
