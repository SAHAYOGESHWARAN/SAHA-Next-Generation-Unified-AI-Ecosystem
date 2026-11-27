'use client';

import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none space-y-6">
          <section className="text-slate-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Introduction</h2>
            <p>
              SAHA NEXUS AI (&quot;we&quot; or &quot;us&quot; or &quot;our&quot;) operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
            </p>
          </section>

          <section className="text-slate-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Personal Data: Name, email address, usage data</li>
              <li>Usage Data: Browser type, IP address, pages visited</li>
              <li>Cookies: For site functionality and analytics</li>
            </ul>
          </section>

          <section className="text-slate-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. Use of Data</h2>
            <p>
              SAHA NEXUS AI uses the collected data for various purposes including:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information</li>
            </ul>
          </section>

          <section className="text-slate-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="text-slate-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
