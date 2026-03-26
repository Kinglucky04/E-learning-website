import React from 'react'
import {addCourseToStorage} from "../../../utils/CourseStorage"

const web3Courses = [
  {
    id: 104,
    title: "Blockchain Fundamentals",
    category: "Basics",
    description: "Understand blockchain technology and its applications",
    duration: "6 hours",
    lessons: 32,
    level: "Beginner",
    icon: "🔗",
    color: "from-blue-600 to-cyan-600",
    topics: ["Cryptography", "Consensus Mechanisms", "Wallets", "Transactions"]
  },
  {
    id: 204,
    title: "Smart Contract Development",
    category: "Development",
    description: "Write and deploy smart contracts on Ethereum",
    duration: "10 hours",
    lessons: 48,
    level: "Intermediate",
    icon: "📜",
    color: "from-purple-600 to-pink-600",
    topics: ["Solidity", "Hardhat", "Truffle", "Testing"]
  },
  {
    id: 304,
    title: "dApp Development",
    category: "Development",
    description: "Build decentralized applications",
    duration: "12 hours",
    lessons: 55,
    level: "Advanced",
    icon: "🌐",
    color: "from-green-600 to-emerald-600",
    topics: ["Web3.js", "React Integration", "MetaMask", "IPFS"]
  },
  {
    id: 404,
    title: "DeFi & Yield Farming",
    category: "Finance",
    description: "Decentralized Finance protocols and strategies",
    duration: "8 hours",
    lessons: 40,
    level: "Advanced",
    icon: "💰",
    color: "from-yellow-600 to-orange-600",
    topics: ["Lending", "Staking", "AMMs", "Yield Optimization"]
  },
  {
    id: 504,
    title: "NFT Development",
    category: "NFTs",
    description: "Create and manage NFT collections",
    duration: "7 hours",
    lessons: 36,
    level: "Intermediate",
    icon: "🖼️",
    color: "from-red-600 to-pink-600",
    topics: ["ERC-721", "ERC-1155", "Marketplaces", "Minting"]
  },
  {
    id: 604,
    title: "Web3 Security",
    category: "Security",
    description: "Secure your smart contracts and dApps",
    duration: "5 hours",
    lessons: 28,
    level: "Advanced",
    icon: "🔒",
    color: "from-gray-700 to-gray-900",
    topics: ["Auditing", "Common Vulnerabilities", "Best Practices", "Tools"]
  }
]

const Web3Courses = ({ searchQuery = '', id }) => {
  const filteredCourses = web3Courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div id={id} className="min-h-screen bg-gray-900  py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4 animate-pulse">
             The Future of Internet
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Web3 & Blockchain Courses
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join the decentralized revolution. Learn blockchain, smart contracts, and build the next generation of applications
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold text-white">$50B+</div>
            <div className="text-sm text-gray-400">TVL in DeFi</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🌐</div>
            <div className="text-2xl font-bold text-white">1000+</div>
            <div className="text-sm text-gray-400">dApps Live</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-bold text-white">50M+</div>
            <div className="text-sm text-gray-400">Users</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📈</div>
            <div className="text-2xl font-bold text-white">300%</div>
            <div className="text-sm text-gray-400">Market Growth</div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
            <div key={course.id} className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl">{course.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    course.level === 'Beginner' ? 'bg-green-500' :
                    course.level === 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500'
                  } text-white`}>
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.topics.map((topic, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>⏱️ {course.duration}</span>
                  <span>📚 {course.lessons} lessons</span>
                </div>
                
                <button onClick={() => addCourseToStorage(course)} className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all transform group-hover:scale-105">
                  Start Learning
                </button>
              </div>
            </div>
          ))) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-400 text-lg">No Web3 courses found matching "{searchQuery}"</p>
            </div>
          )}
        </div>

        {/* Web3 Badge */}
        <div className="fixed bottom-4 right-4 bg-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
           Web3 is the Future
        </div>
      </div>
    </div>
  )
}

export default Web3Courses