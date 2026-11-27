'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';

export default function TermsPage() {
  return (
    <PageWrapper>
      <div className="container-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-10 pb-20"
        >
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block transition">
            ← Back to Home
          </Link>

          <h1 className="gradient-text text-4xl font-bold mb-8 text-glow">
            Terms of Service
          </h1>

          <div className="space-y-8">
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="tech-card"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Acceptance of Terms</h2>
              <p className="text-cyan-300/80">
                By accessing and using SAHA NEXUS AI, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="tech-card"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. Use License</h2>
              <p className="text-cyan-300/80">
                Permission is granted to temporarily download one copy of the materials (information or software) on SAHA NEXUS AI for personal, non-commercial transitory viewing only.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="tech-card"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. Disclaimer</h2>
              <p className="text-cyan-300/80">
                The materials on SAHA NEXUS AI are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="tech-card"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Limitations</h2>
              <p className="text-cyan-300/80">
                In no event shall SAHA NEXUS AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption).
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="tech-card"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Accuracy of Materials</h2>
              <p className="text-cyan-300/80">
                The materials appearing on SAHA NEXUS AI could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current.
              </p>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
