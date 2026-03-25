import React, { useState } from 'react'

export const WebRoadmap = ({ searchQuery = '' }) => {
  const [activeTab, setActiveTab] = useState('web2')

  const web2Roadmap = [
    {
      phase: "Phase 1: Foundations",
      icon: "🏗️",
      courses: [
        { name: "HTML5 & CSS3", duration: "4 weeks", level: "Beginner", videoUrl: "https://youtu.be/G3e-cpL7ofc?si=A1c7p95yPiDH1g1W", completed: false },
        { name: "JavaScript Essentials", duration: "6 weeks", level: "Beginner", videoUrl: "https://youtu.be/EerdGm-ehJQ?si=5d8qsGd7RbOwHAIj", completed: false },
        { name: "Git & GitHub", duration: "2 weeks", level: "Beginner", videoUrl: "https://youtu.be/hrTQipWp6co?si=JXNgrxf6TdDVcYHH", completed: false }
      ]
    },
    {
      phase: "Phase 2: Frontend Development",
      icon: "🎨",
      courses: [
        { name: "React.js Fundamentals", duration: "8 weeks", level: "Intermediate", videoUrl: "https://youtu.be/SqcY0GlETPk?si=a3Rp2MMJkLrSgrkx", completed: false },
        { name: "State Management (Redux)", duration: "4 weeks", level: "Intermediate", videoUrl: "https://youtu.be/poQXNp9ItL4?si=e4hGlcJIZgZAwpGv", completed: false },
        { name: "Tailwind CSS & Modern UI", duration: "3 weeks", level: "Intermediate", videoUrl: "https://youtu.be/DenUCuq4G04?si=o8prPSyts_yiIUpo", completed: false }
      ]
    },
    {
      phase: "Phase 3: Backend Development",
      icon: "⚙️",
      courses: [
        { name: "Node.js & Express", duration: "6 weeks", level: "Intermediate", videoUrl: "https://youtu.be/TlB_eWDSMt4?si=BAxn2w7utKteFzl_", completed: false },
        { name: "Database (MongoDB/PostgreSQL)", duration: "5 weeks", level: "Intermediate", videoUrl: "https://youtu.be/ExcRbA7fy_A?si=qwz8MgDy_w9ZdGvB", completed: false },
        { name: "REST APIs & GraphQL", duration: "4 weeks", level: "Advanced", videoUrl: "https://youtu.be/WXsD0ZgxjRw?si=oIRXBoVf9CZnZFQX", completed: false }
      ]
    },
    {
      phase: "Phase 4: Advanced Topics",
      icon: "🚀",
      courses: [
        { name: "DevOps & Deployment", duration: "4 weeks", level: "Advanced", videoUrl: "https://youtu.be/j5Zsa_eOXeY?si=3Z85KDNnMB8eRtW7", completed: false },
        { name: "System Design", duration: "6 weeks", level: "Advanced", videoUrl: "https://youtu.be/m8Icp_Cid5o?si=b4VuXAnNP6VNzlas", completed: false },
        { name: "Testing & Security", duration: "4 weeks", level: "Advanced", videoUrl: "https://youtu.be/3Kq1MIfTWCE?si=Gdj9Br25MQoWaWTL", completed: false }
      ]
    }
  ]

  const web3Roadmap = [
    {
      phase: "Phase 1: Blockchain Basics",
      icon: "🔗",
      courses: [
        { name: "Blockchain Fundamentals", duration: "4 weeks", level: "Beginner", videoUrl: "https://www.youtube.com/watch?v=sw4NAjY1bg8", completed: false },
        { name: "Cryptography Basics", duration: "3 weeks", level: "Beginner", videoUrl: "https://www.youtube.com/live/C7vmouDOJYM?si=8o8nkb0RWQfEyh3J", completed: false },
        { name: "Wallets & Transactions", duration: "2 weeks", level: "Beginner", videoUrl: "https://www.youtube.com/watch?v=BUSmA_3JgAU", completed: false }
      ]
    },
    {
      phase: "Phase 2: Smart Contract Development",
      icon: "📜",
      courses: [
        { name: "Solidity Programming", duration: "8 weeks", level: "Intermediate", videoUrl: "https://youtu.be/-1GB6m39-rM?si=lr6W6UDxkGXQmgpE", completed: false },
        { name: "Ethereum & EVM", duration: "5 weeks", level: "Intermediate", videoUrl: "https://youtu.be/XTbd5w0AXc4?si=-Mner47IpaFdycGY", completed: false },
        { name: "Hardhat & Truffle", duration: "4 weeks", level: "Intermediate", videoUrl: "https://youtu.be/9Qpi80dQsGU?si=DSea-a6ZTEdgizgN", completed: false }
      ]
    },
    {
      phase: "Phase 3: dApp Development",
      icon: "🌐",
      courses: [
        { name: "Web3.js & Ethers.js", duration: "5 weeks", level: "Intermediate", videoUrl: "https://youtu.be/t3wM5903ty0?si=ArBj_xnhMD553-gW", completed: false },
        { name: "React with Web3", duration: "6 weeks", level: "Advanced", videoUrl: "https://youtu.be/f6sKG7VpWzI?si=F-PdJQdH6U5BpDw0", completed: false },
        { name: "IPFS & Decentralized Storage", duration: "3 weeks", level: "Intermediate", videoUrl: "https://youtu.be/UX-D1xSfplE?si=x_6F2SEq21fnnsNC", completed: false }
      ]
    },
    {
      phase: "Phase 4: Advanced Web3",
      icon: "⚡",
      courses: [
        { name: "DeFi & Yield Farming", duration: "6 weeks", level: "Advanced", videoUrl: "https://youtu.be/HeJh_SFS2vg?si=7WPfQFhL9Sy5_ayu", completed: false },
        { name: "NFTs & Metaverse", duration: "5 weeks", level: "Advanced", videoUrl: "https://youtu.be/z0XSO9Hm9Q8?si=cNWYyqgviHf8fF1C", completed: false },
        { name: "Security Auditing", duration: "4 weeks", level: "Advanced", videoUrl: "https://youtu.be/pUWmJ86X_do?si=zHDxPis-SKym7P-2", completed: false }
      ]
    }
  ]

  const currentRoadmap = activeTab === 'web2' ? web2Roadmap : web3Roadmap;

  const filteredRoadmap = currentRoadmap.map(phase => {
    return {
      ...phase,
      courses: phase.courses.filter(course => 
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
  }).filter(phase => phase.courses.length > 0);

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
          
          {filteredRoadmap.length > 0 ? (
            filteredRoadmap.map((phase, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>

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
                          <a href={course.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer">
                            Watch Video →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))): (
            <div className="text-center py-10 w-full">
              <p className="text-gray-400 text-lg">No roadmap phases found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WebRoadmap