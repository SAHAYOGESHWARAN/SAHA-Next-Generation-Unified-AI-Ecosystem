'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Home,
  Zap,
  BookOpen,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  Bell,
} from 'lucide-react';
import toast from 'react-hot-toast';

interface User {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  role: string;
}

interface DashboardNavProps {
  user?: User;
}

export default function DashboardNav({ user }: DashboardNavProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    router.push('/');
  };

  const navLinks = [
    { label: 'Dashboard', href: '/dashboard', icon: Home },
    { label: 'Explore', href: '/explore', icon: Zap },
    { label: 'AI Workspace', href: '/workspace', icon: Sparkles },
    { label: 'Documentation', href: '/docs', icon: BookOpen },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-navy-950/80 border-b border-navy-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-cyber-blue" />
            <span className="font-bold text-lg bg-gradient-text bg-clip-text text-transparent hidden sm:inline">
              SAHA NEXUS
            </span>
          </Link>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 mx-8 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search tools, models..."
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-navy-700/50 bg-navy-800/30 focus:border-cyber-blue focus:outline-none transition placeholder-gray-500 text-sm"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-navy-800/50 transition text-sm font-medium"
                >
                  {link.label}
                </motion.button>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="relative p-2 text-gray-400 hover:text-white transition"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-cyber-blue rounded-full" />
            </motion.button>

            {/* User Menu */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-navy-700/50 hover:border-cyber-blue/50 hover:bg-navy-800/50 transition"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-accent" />
                <span className="text-sm font-medium hidden sm:inline">{user?.username}</span>
              </motion.button>

              {/* User Dropdown */}
              {userMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 rounded-lg border border-navy-700/50 bg-navy-900/95 backdrop-blur-sm shadow-lg"
                >
                  <div className="p-4 border-b border-navy-700/30">
                    <p className="text-sm font-semibold">{user?.username}</p>
                    <p className="text-xs text-gray-400">{user?.email}</p>
                  </div>
                  <div className="p-2">
                    <Link href="/settings">
                      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-navy-800/50 transition text-sm flex items-center gap-2 text-gray-300">
                        <Settings className="w-4 h-4" />
                        Settings
                      </button>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-900/20 transition text-sm flex items-center gap-2 text-red-400 mt-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-navy-700/30 py-4"
          >
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-navy-800/50 transition text-sm flex items-center gap-2 text-gray-300">
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </button>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
