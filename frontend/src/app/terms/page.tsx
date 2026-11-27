'use client';

import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="prose prose-invert max-w-none space-y-6">
          <section className="text-slate-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using SAHA NEXUS AI, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="text-slate-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on SAHA NEXUS AI for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="text-slate-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. Disclaimer</h2>
            <p>
              The materials on SAHA NEXUS AI are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
            </p>
          </section>

          <section className="text-slate-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Limitations</h2>
            <p>
              In no event shall SAHA NEXUS AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption).
            </p>
          </section>

          <section className="text-slate-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on SAHA NEXUS AI could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
