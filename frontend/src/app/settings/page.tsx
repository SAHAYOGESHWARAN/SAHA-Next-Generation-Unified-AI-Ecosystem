'use client';

import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Bell, Lock, Users, Palette, Save } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    twoFactor: false,
    publicProfile: false,
  });

  const settingsSections = [
    {
      icon: <SettingsIcon className="w-6 h-6" />,
      title: 'General',
      description: 'Manage your general account settings',
      items: [
        { label: 'Account Name', value: 'Your Account' },
        { label: 'Email', value: 'your@email.com' },
      ],
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'Notifications',
      description: 'Control how you receive notifications',
      toggle: 'notifications',
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Security',
      description: 'Manage security and privacy settings',
      toggle: 'twoFactor',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Appearance',
      description: 'Customize your interface',
      toggle: 'darkMode',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Privacy',
      description: 'Control your privacy settings',
      toggle: 'publicProfile',
    },
  ];

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <PageWrapper>
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 pt-10"
        >
          <h1 className="gradient-text mb-2 text-glow">
            Settings
          </h1>
          <p className="text-cyan-300">
            Customize your SAHA NEXUS AI experience
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {settingsSections.map((section, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="tech-card group"
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400 group-hover:bg-cyan-500/30 transition">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg group-hover:text-cyan-300 transition">
                      {section.title}
                    </h3>
                    <p className="text-cyan-300/70 text-sm">
                      {section.description}
                    </p>
                  </div>
                </div>

                {section.toggle && (
                  <button
                    onClick={() => toggleSetting(section.toggle as keyof typeof settings)}
                    className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors ${settings[section.toggle as keyof typeof settings]
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                        : 'bg-blue-900/40'
                      }`}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-white"
                      layout
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      style={{
                        marginLeft: settings[section.toggle as keyof typeof settings] ? '24px' : '4px',
                      }}
                    />
                  </button>
                )}
              </div>

              {section.items && (
                <div className="space-y-4 pt-6 border-t border-cyan-500/20">
                  {section.items.map((item, j) => (
                    <div key={j} className="flex items-center justify-between">
                      <span className="text-cyan-300 text-sm">{item.label}</span>
                      <span className="text-cyan-400 font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-end gap-4 pb-10"
        >
          <button className="px-6 py-3 bg-blue-900/40 border border-cyan-500/30 text-cyan-400 font-bold rounded-lg hover:border-cyan-500 transition">
            Cancel
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-lg transition transform hover:scale-105">
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
