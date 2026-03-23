import React, { useState } from 'react'
import BackendCourses from './Web2/Backend'
import FrontendCourses from './Web2/Frontend'
import BeginnerCourses from './Web2/BeginnerCourses'
import Web3Courses from './Web3/Web3Courses'
import WebRoadmap from './Roadmap'

const AllCourses = () => {
  const [activeTab, setActiveTab] = useState('beginner')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const tabs = [
    { id: 'beginner', label: '🎯 Beginner', icon: '🌟', color: 'from-green-500 to-emerald-500' },
    { id: 'frontend', label: '🎨 Frontend', icon: '⚛️', color: 'from-purple-500 to-pink-500' },
    { id: 'backend', label: '⚙️ Backend', icon: '🖥️', color: 'from-blue-500 to-cyan-500' },
    { id: 'web3', label: '⛓️ Web3', icon: '🔗', color: 'from-purple-600 to-pink-600' },
    { id: 'roadmap', label: '🗺️ Roadmap', icon: '📚', color: 'from-orange-500 to-red-500' }
  ]

  const renderActiveComponent = () => {
    switch(activeTab) {
      case 'beginner':
        return <BeginnerCourses />
      case 'roadmap':
        return <WebRoadmap searchQuery={searchQuery} />
      case 'frontend':
        return <FrontendCourses searchQuery={searchQuery} />
      case 'backend':
        return <BackendCourses searchQuery={searchQuery} />
      case 'web3':
        return <Web3Courses searchQuery={searchQuery} />
      default:
        return <BeginnerCourses />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header with Navigation */}
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">CodeMaster</h1>
                <p className="text-xs text-gray-400">Your Learning Platform</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-auto">
              {isSearchVisible ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 w-64"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setIsSearchVisible(false)
                      setSearchQuery('')
                    }}
                    className="px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchVisible(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition"
                >
                  🔍 <span>Search Courses</span>
                </button>
              )}
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setSearchQuery('')
                }}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-t-lg font-semibold transition-all duration-300
                  whitespace-nowrap relative
                  ${activeTab === tab.id 
                    ? `text-white bg-gradient-to-r ${tab.color} shadow-lg` 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                  }
                `}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8">
        {renderActiveComponent()}
      </div>

      {/* Floating Quick Stats */}
      <div className="fixed bottom-4 left-4 bg-gray-800/90 backdrop-blur-lg rounded-lg px-4 py-2 text-sm text-gray-300">
        <div className="flex items-center gap-3">
          <span>📊 Total Courses: 18+</span>
          <span>⏱️ 100+ Hours</span>
          <span>👥 50K+ Students</span>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
      >
        ↑
      </button>
    </div>
  )
}

export default AllCourses