import React from 'react'
import Header from '../Header'
import WebRoadmap from './Courses/Roadmap'
import BeginnerCourses from './Courses/Web2/BeginnerCourses'
import FrontendCourses from './Courses/Web2/Frontend'
import BackendCourses from './Courses/Web2/Backend'
import Web3Courses from './Courses/Web3/Web3Courses'

function Homepage() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Brand Section */}
            <div className="flex flex-col items-center md:items-start justify-center gap-8">
              <div className="text-center md:text-left space-y-6">
                {/* Badge */}
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                   Start Your Journey Today
                </div>
                
                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-blue-600 bg-clip-text text-transparent">
                  Welcome to Kings E-Learn.
                </h1>
                
                {/* Description */}
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Passionate about tech? Curious about how it all works?
                  Start your journey here with a clear roadmap to help you grow into a skilled
                  tech professional.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 uppercase">
                    Web 2
                  </button>
                  <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 uppercase">
                    web 3
                  </button>
                </div>
                
                {/* Stats */}
                <div className="flex gap-8 pt-8">
                  <div>
                    <p className="text-2xl font-bold text-gray-800">1000+</p>
                    <p className="text-sm text-gray-500">Active Students</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">50+</p>
                    <p className="text-sm text-gray-500">Expert Courses</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">24/7</p>
                    <p className="text-sm text-gray-500">Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative flex justify-center items-center">
              <div className="relative group">
                {/* Background Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/roadmap-1.webp" 
                    alt="Tech roadmap illustration showing learning path" 
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-800">Learn at your pace</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <WebRoadmap />
     <BeginnerCourses />
     <FrontendCourses />
     <BackendCourses />
      <Web3Courses />

      {/* Features Section (Optional - Adds more value) */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Kings E-Learn?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of successful students who have transformed their careers with our comprehensive learning platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Structured Learning</h3>
              <p className="text-gray-600">Clear roadmaps and guided paths to ensure your success</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with real-world experience</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2">Hands-on Projects</h3>
              <p className="text-gray-600">Build real projects to strengthen your portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage