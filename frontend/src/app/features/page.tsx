'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Rocket,
  TrendingUp,
  Gauge,
  Database,
  Cloud,
  Lock,
  Cpu,
  Code,
  Layers,
  BarChart3,
} from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';

export default function FeaturesPage() {
  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Advanced AI Integration',
      description: 'Seamless integration with cutting-edge AI models and APIs for maximum performance and flexibility.',
      color: 'cyan',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, compliance standards, and comprehensive security measures.',
      color: 'blue',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Real-time Analytics',
      description: 'Monitor performance metrics and insights with advanced dashboards and reporting.',
      color: 'purple',
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with 60fps animations and sub-100ms response times.',
      color: 'cyan',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Cloud Native',
      description: 'Scalable infrastructure built for enterprise needs and global deployment.',
      color: 'teal',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Multi-Cloud Support',
      description: 'Deploy anywhere with support for AWS, Azure, Google Cloud, and more.',
      color: 'blue',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Zero Trust Security',
      description: 'Implement zero-trust architecture with advanced authentication and authorization.',
      color: 'purple',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI-Powered',
      description: 'Powered by state-of-the-art AI technology and machine learning models.',
      color: 'cyan',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Developer Friendly',
      description: 'Comprehensive APIs, SDKs, and documentation for seamless integration.',
      color: 'orange',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Modular Architecture',
      description: 'Flexible, modular design allows customization and scalability.',
      color: 'purple',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Advanced Reporting',
      description: 'Detailed insights and analytics with customizable reports and dashboards.',
      color: 'cyan',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'High Availability',
      description: 'Redundancy and failover mechanisms ensure 99.99% uptime.',
      color: 'blue',
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
          className="mb-16 pt-10 text-center"
        >
          <h1 className="gradient-text mb-4 text-glow">
            Advanced Features
          </h1>
          <p className="text-cyan-300 max-w-2xl mx-auto">
            Discover the powerful capabilities that make SAHA NEXUS AI the leading AI ecosystem platform.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="tech-card group h-full"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="text-cyan-400 mb-4 group-hover:text-blue-300 transition transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-300 transition">
                {feature.title}
              </h3>
              <p className="text-cyan-300/70 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
