import React, { useState } from 'react'

export const WebRoadmap = () => {
  const [activeTab, setActiveTab] = useState('web2')

  const web2Roadmap = [
    {
      phase: "Phase 1: Foundations",
      icon: "🏗️",
      courses: [
        { name: "HTML5 & CSS3", duration: "4 weeks", level: "Beginner", videoUrl: "#", completed: false },
        { name: "JavaScript Essentials", duration: "6 weeks", level: "Beginner", videoUrl: "#", completed: false },
        { name: "Git & GitHub", duration: "2 weeks", level: "Beginner", videoUrl: "#", completed: false }
      ]
    },
    {
      phase: "Phase 2: Frontend Development",
      icon: "🎨",
      courses: [
        { name: "React.js Fundamentals", duration: "8 weeks", level: "Intermediate", videoUrl: "#", completed: false },
        { name: "State Management (Redux)", duration: "4 weeks", level: "Intermediate", videoUrl: "#", completed: false },
        { name: "Tailwind CSS & Modern UI", duration: "3 weeks", level: "Intermediate", videoUrl: "#", completed: false }
      ]
    },
    {
      phase: "Phase 3: Backend Development",
      icon: "⚙️",
      courses: [
        { name: "Node.js & Express", duration: "6 weeks", level: "Intermediate", videoUrl: "#", completed: false },
        { name: "Database (MongoDB/PostgreSQL)", duration: "5 weeks", level: "Intermediate", videoUrl: "#", completed: false },
        { name: "REST APIs & GraphQL", duration: "4 weeks", level: "Advanced", videoUrl: "#", completed: false }
      ]
    },
    {
      phase: "Phase 4: Advanced Topics",
      icon: "🚀",
      courses: [
        { name: "DevOps & Deployment", duration: "4 weeks", level: "Advanced", videoUrl: "#", completed: false },
        { name: "System Design", duration: "6 weeks", level: "Advanced", videoUrl: "#", completed: false },
        { name: "Testing & Security", duration: "4 weeks", level: "Advanced", videoUrl: "#", completed: false }
      ]
    }
  ]

  const web3Roadmap = [
    {
      phase: "Phase 1: Blockchain Basics",
      icon: "🔗",
      courses: [
        { name: "Blockchain Fundamentals", duration: "4 weeks", level: "Beginner", videoUrl: "#", completed: false },
        { name: "Cryptography Basics", duration: "3 weeks", level: "Beginner", videoUrl: "#", completed: false },
        { name: "Wallets & Transactions", duration: "2 weeks", level: "Beginner", videoUrl: "#", completed: false }
      ]
    },
    {
      phase: "Phase 2: Smart Contract Development",
      icon: "📜",
      courses: [
        { name: "Solidity Programming", duration: "8 weeks", level: "Intermediate", videoUrl: "#", completed: false },
        { name: "Ethereum & EVM", duration: "5 weeks", level: "Intermediate", videoUrl: "#", completed: false },
        { name: "Hardhat & Truffle", duration: "4 weeks", level: "Intermediate", videoUrl: "#", completed: false }
      ]
    },
    {
      phase: "Phase 3: dApp Development",
      icon: "🌐",
      courses: [
        { name: "Web3.js & Ethers.js", duration: "5 weeks", level: "Intermediate", videoUrl: "#", completed: false },
        { name: "React with Web3", duration: "6 weeks", level: "Advanced", videoUrl: "#", completed: false },
        { name: "IPFS & Decentralized Storage", duration: "3 weeks", level: "Intermediate", videoUrl: "#", completed: false }
      ]
    },
    {
      phase: "Phase 4: Advanced Web3",
      icon: "⚡",
      courses: [
        { name: "DeFi & Yield Farming", duration: "6 weeks", level: "Advanced", videoUrl: "#", completed: false },
        { name: "NFTs & Metaverse", duration: "5 weeks", level: "Advanced", videoUrl: "#", completed: false },
        { name: "Security Auditing", duration: "4 weeks", level: "Advanced", videoUrl: "#", completed: false }
      ]
    }
  ]

  const currentRoadmap = activeTab === 'web2' ? web2Roadmap : web3Roadmap

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold mb-4">
            🗺️ Your Learning Journey
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Web Development Roadmap
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose your path and follow our structured roadmap to become a professional developer
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('web2')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'web2'
                ? 'bg-blue-500 text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            🌐 Web2 Roadmap
          </button>
          <button
            onClick={() => setActiveTab('web3')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'web3'
                ? 'bg-blue-500  text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            ⛓️ Web3 Roadmap
          </button>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-500 "></div>
          
          {currentRoadmap.map((phase, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>
              
              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                <div className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{phase.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {phase.courses.map((course, idx) => (
                      <div key={idx} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-semibold">{course.name}</h4>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            course.level === 'Beginner' ? 'bg-green-500' :
                            course.level === 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500'
                          } text-white`}>
                            {course.level}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">⏱️ {course.duration}</span>
                          <button className="text-blue-400 hover:text-blue-300 font-semibold">
                            Watch Video →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WebRoadmap