'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';
import PageWrapper from '@/components/PageWrapper';
import { ArrowRight } from 'lucide-react';

export default function ExplorePage() {
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
            Explore Our Ecosystem
          </h1>
          <p className="text-cyan-300 max-w-2xl mx-auto">
            Discover the full range of AI categories and tools available in our ecosystem.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {CATEGORIES.map((category) => (
            <Link key={category.id} href={`/explore/${category.id}`}>
              <motion.div
                variants={itemVariants}
                className="tech-card cursor-pointer group h-full flex flex-col"
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition transform">
                  {category.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition">
                  {category.name}
                </h3>
                <p className="text-cyan-300/70 text-sm mb-6 flex-grow">
                  {category.fullDescription}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20 mt-auto">
                  <span className="text-cyan-400 text-xs font-semibold">
                    View Details
                  </span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
