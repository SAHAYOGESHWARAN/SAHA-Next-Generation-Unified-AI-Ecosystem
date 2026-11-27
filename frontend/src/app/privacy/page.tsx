'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <div className="space-y-8">
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="tech-card"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Introduction</h2>
              <p className="text-cyan-300/80">
                SAHA NEXUS AI (&quot;we&quot; or &quot;us&quot; or &quot;our&quot;) operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="tech-card"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. Information Collection and Use</h2>
              <p className="text-cyan-300/80 mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <ul className="list-disc list-inside space-y-2 text-cyan-300/80">
                <li>Personal Data: Name, email address, usage data</li>
                <li>Usage Data: Browser type, IP address, pages visited</li>
                <li>Cookies: For site functionality and analytics</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="tech-card"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. Use of Data</h2>
              <p className="text-cyan-300/80 mb-4">
                SAHA NEXUS AI uses the collected data for various purposes including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-cyan-300/80">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="tech-card"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Security of Data</h2>
              <p className="text-cyan-300/80">
                The security of your data is important to us but remember that no method of transmission over the Internet is 100% secure.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="tech-card"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Changes to This Privacy Policy</h2>
              <p className="text-cyan-300/80">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
