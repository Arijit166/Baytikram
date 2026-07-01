'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { LogOut, BarChart3, Film, Users, ImageIcon, Heart, MessageSquare } from 'lucide-react'

interface AdminDashboardProps {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview')

  const dashboardSections = [
    {
      id: 'overview',
      label: 'Dashboard',
      icon: BarChart3,
      stats: [
        { label: 'Total Productions', value: '50+', color: 'bg-[#8B1538]' },
        { label: 'Team Members', value: '12', color: 'bg-[#D4AF37]' },
        { label: 'Workshops', value: '50+', color: 'bg-[#2C1810]' },
        { label: 'Audience Reached', value: '10k+', color: 'bg-[#1A1A1A]' },
      ],
    },
    {
      id: 'productions',
      label: 'Productions',
      icon: Film,
      description: 'Manage productions and events',
    },
    {
      id: 'team',
      label: 'Team',
      icon: Users,
      description: 'Manage team members',
    },
    {
      id: 'gallery',
      label: 'Gallery',
      icon: ImageIcon,
      description: 'Manage gallery images',
    },
    {
      id: 'ngo',
      label: 'NGO Initiatives',
      icon: Heart,
      description: 'Manage NGO programs',
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: MessageSquare,
      description: 'View contact form messages',
    },
  ]

  const activeSection = dashboardSections.find(s => s.id === activeTab)

  return (
    <main className="pt-24 pb-12 bg-[#FEFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="text-4xl font-bold text-[#8B1538] mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">Manage all content and operations</p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {dashboardSections.map((section) => {
            const Icon = section.icon
            return (
              <motion.button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`p-4 rounded-lg font-semibold transition-all flex flex-col items-center gap-2 ${
                  activeTab === section.id
                    ? 'bg-[#8B1538] text-white shadow-lg'
                    : 'bg-white border-2 border-[#D4AF37] text-[#8B1538] hover:shadow-lg'
                }`}
                whileHover={{ y: -2 }}
              >
                <Icon size={24} />
                <span className="text-sm">{section.label}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-3xl font-bold text-[#8B1538] mb-8">
                Dashboard Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {activeSection?.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`${stat.color} rounded-lg p-6 text-white shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-sm font-semibold opacity-90 mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-[#D4AF37] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#8B1538] mb-4">
                    Recent Activities
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>✓ Production updated: &quot;Urban Chronicles&quot;</li>
                    <li>✓ Gallery images added (12 new)</li>
                    <li>✓ Team member profile updated</li>
                    <li>✓ Workshop scheduled for next month</li>
                  </ul>
                </div>

                <div className="border-2 border-[#D4AF37] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#8B1538] mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
                    <button className="w-full px-4 py-2 bg-[#8B1538] text-white rounded hover:bg-[#6B0F2A] transition-colors">
                      Add New Production
                    </button>
                    <button className="w-full px-4 py-2 bg-[#D4AF37] text-[#2C1810] rounded hover:bg-[#F4D03F] transition-colors font-semibold">
                      Upload Gallery Images
                    </button>
                    <button className="w-full px-4 py-2 border-2 border-[#8B1538] text-[#8B1538] rounded hover:bg-[#8B1538] hover:text-white transition-colors">
                      View Messages
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'productions' && (
            <div>
              <h2 className="text-3xl font-bold text-[#8B1538] mb-6">
                Manage Productions
              </h2>
              <div className="space-y-4">
                {['Shadows of Bengal', 'Urban Chronicles', 'Heritage Voices'].map((prod) => (
                  <div key={prod} className="flex justify-between items-center p-4 border-2 border-gray-200 rounded-lg hover:border-[#D4AF37] transition-colors">
                    <span className="font-semibold text-gray-700">{prod}</span>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full px-4 py-3 bg-[#8B1538] text-white font-bold rounded hover:bg-[#6B0F2A]">
                + Add New Production
              </button>
            </div>
          )}

          {activeTab === 'team' && (
            <div>
              <h2 className="text-3xl font-bold text-[#8B1538] mb-6">
                Manage Team
              </h2>
              <div className="space-y-4">
                {['Amit Roy', 'Priya Sharma', 'Rajesh Mukherjee', 'Sneha Das'].map((member) => (
                  <div key={member} className="flex justify-between items-center p-4 border-2 border-gray-200 rounded-lg hover:border-[#D4AF37] transition-colors">
                    <span className="font-semibold text-gray-700">{member}</span>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full px-4 py-3 bg-[#8B1538] text-white font-bold rounded hover:bg-[#6B0F2A]">
                + Add Team Member
              </button>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div>
              <h2 className="text-3xl font-bold text-[#8B1538] mb-6">
                Manage Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative group">
                    <div className="bg-gradient-to-br from-[#8B1538] to-[#D4AF37] h-40 rounded-lg" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end justify-center pb-3 rounded-lg">
                      <button className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-red-500 text-white rounded text-sm font-semibold">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full px-4 py-3 bg-[#8B1538] text-white font-bold rounded hover:bg-[#6B0F2A]">
                + Upload New Images
              </button>
            </div>
          )}

          {activeTab === 'ngo' && (
            <div>
              <h2 className="text-3xl font-bold text-[#8B1538] mb-6">
                NGO Initiatives
              </h2>
              <div className="space-y-4">
                {['Theatre for All', 'Youth Empowerment', 'Cultural Exchange', 'Archive & Documentation'].map((init) => (
                  <div key={init} className="flex justify-between items-center p-4 border-2 border-gray-200 rounded-lg hover:border-[#D4AF37] transition-colors">
                    <span className="font-semibold text-gray-700">{init}</span>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full px-4 py-3 bg-[#8B1538] text-white font-bold rounded hover:bg-[#6B0F2A]">
                + Add Initiative
              </button>
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              <h2 className="text-3xl font-bold text-[#8B1538] mb-6">
                Contact Messages
              </h2>
              <div className="space-y-4">
                {[
                  { name: 'John Doe', email: 'john@example.com', subject: 'Collaboration Inquiry' },
                  { name: 'Jane Smith', email: 'jane@example.com', subject: 'Workshop Interest' },
                ].map((msg, idx) => (
                  <div key={idx} className="p-4 border-2 border-gray-200 rounded-lg hover:border-[#D4AF37] transition-colors">
                    <p className="font-semibold text-gray-700">{msg.name}</p>
                    <p className="text-sm text-gray-500">{msg.email}</p>
                    <p className="text-sm font-semibold text-[#8B1538] mt-2">{msg.subject}</p>
                    <button className="mt-3 px-4 py-2 text-sm bg-[#8B1538] text-white rounded hover:bg-[#6B0F2A]">
                      View Full Message
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
