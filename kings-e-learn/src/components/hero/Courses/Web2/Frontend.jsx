import React, { useState } from 'react'
import {addCourseToStorage} from "../../../utils/CourseStorage"

const frontendCourses = [
  {
    id: 1,
    title: "React.js Complete Guide",
    framework: "React",
    description: "Build modern web applications with React",
    duration: "12 hours",
    lessons: 65,
    level: "Intermediate",
    icon: "⚛️",
    color: "from-cyan-500 to-blue-500",
    projects: 8,
    videos: [
      { title: "React Components & Props", duration: "18:30", watched: false },
      { title: "State & Lifecycle", duration: "22:15", watched: false },
      { title: "Hooks Deep Dive", duration: "35:20", watched: false }
    ]
  },
  {
    id: 2,
    title: "Vue.js Mastery",
    framework: "Vue",
    description: "Progressive JavaScript framework",
    duration: "10 hours",
    lessons: 52,
    level: "Intermediate",
    icon: "🟢",
    color: "from-green-500 to-emerald-500",
    projects: 6,
    videos: [
      { title: "Vue Instance & Template Syntax", duration: "15:45", watched: false },
      { title: "Components & Props", duration: "20:30", watched: false },
      { title: "Vuex State Management", duration: "28:15", watched: false }
    ]
  },
  {
    id: 3,
    title: "Angular Framework",
    framework: "Angular",
    description: "Enterprise-grade applications",
    duration: "14 hours",
    lessons: 78,
    level: "Advanced",
    icon: "🔴",
    color: "from-red-500 to-pink-500",
    projects: 7,
    videos: [
      { title: "Angular Architecture", duration: "25:30", watched: false },
      { title: "Components & Modules", duration: "32:15", watched: false },
      { title: "Services & Dependency Injection", duration: "28:45", watched: false }
    ]
  },
  {
    id: 4,
    title: "Next.js Framework",
    framework: "Next.js",
    description: "React framework for production",
    duration: "8 hours",
    lessons: 45,
    level: "Intermediate",
    icon: "▲",
    color: "from-gray-700 to-gray-900",
    projects: 5,
    videos: [
      { title: "Pages & Routing", duration: "20:15", watched: false },
      { title: "SSR & SSG", duration: "28:30", watched: false },
      { title: "API Routes", duration: "22:45", watched: false }
    ]
  }
]

const FrontendCourses = ({ searchQuery = '' }) => {
  const [selectedFramework, setSelectedFramework] = useState(null)
  const frameworks = ['All', ...new Set(frontendCourses.map(c => c.framework))]
  const filteredCourses = frontendCourses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.framework.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            🎨 Frontend Development
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Master Modern Frontend
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn the most popular frontend frameworks and libraries used by top companies
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{course.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                      <p className="text-sm text-purple-600 font-semibold">{course.framework}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    {course.level}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-gray-500">⏱️ {course.duration}</span>
                  <span className="text-gray-500">📚 {course.lessons} lessons</span>
                  <span className="text-gray-500">💼 {course.projects} projects</span>
                </div>
                
                <div className="flex gap-3">
                  <button onClick={() => addCourseToStorage(course)} className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Start Learning
                  </button>
                  <button className="px-4 py-2 border-2 border-purple-300 text-purple-600 rounded-lg hover:bg-purple-50 transition-all">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))): (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-400 text-lg">No frontend courses found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FrontendCourses