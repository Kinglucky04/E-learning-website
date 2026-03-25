import React, { useState } from 'react'
import {addCourseToStorage} from "../../../utils/CourseStorage"

const beginnerCourses = [
  {
    id: 102,
    title: "HTML5 Mastery",
    description: "Learn the structure of the web with HTML5",
    duration: "4 hours",
    lessons: 25,
    level: "Beginner",
    category: "Frontend",
    icon: "🌐",
    color: "from-orange-500 to-red-500",
    videos: [
      { title: "Introduction to HTML", duration: "10:23", watched: false },
      { title: "HTML Elements & Tags", duration: "15:45", watched: false },
      { title: "Forms & Input Types", duration: "20:30", watched: false }
    ]
  },
  {
    id: 202,
    title: "CSS3 Styling",
    description: "Make beautiful websites with CSS3",
    duration: "6 hours",
    lessons: 35,
    level: "Beginner",
    category: "Frontend",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    videos: [
      { title: "CSS Selectors", duration: "12:15", watched: false },
      { title: "Flexbox & Grid", duration: "25:30", watched: false },
      { title: "Animations & Transitions", duration: "18:45", watched: false }
    ]
  },
  {
    id: 302,
    title: "JavaScript Fundamentals",
    description: "Learn the language of the web",
    duration: "8 hours",
    lessons: 50,
    level: "Beginner",
    category: "Frontend",
    icon: "📜",
    color: "from-yellow-500 to-orange-500",
    videos: [
      { title: "Variables & Data Types", duration: "15:20", watched: false },
      { title: "Functions & Scope", duration: "22:10", watched: false },
      { title: "DOM Manipulation", duration: "28:45", watched: false }
    ]
  }
]

const BeginnerCourses = ({id}) => {
  const [selectedCourse, setSelectedCourse] = useState(null)

  return (
    <div id={id} className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            🎯 Perfect for Beginners
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Start Your Coding Journey
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No prior experience needed! Learn the fundamentals of web development with these beginner-friendly courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {beginnerCourses.map(course => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedCourse(selectedCourse?.id === course.id ? null : course)}
            >
              <div className={`h-32 bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                <span className="text-6xl">{course.icon}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {course.category}
                  </span>
                  <span className="text-xs text-gray-500">⏱️ {course.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{course.lessons} lessons</span>
                  <button  onClick={() => addCourseToStorage(course)} className="text-green-600 font-semibold hover:text-green-700">
                    Start Learning →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Section */}
        {selectedCourse && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedCourse.title} - Course Videos</h2>
            <div className="grid gap-4">
              {selectedCourse.videos.map((video, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">🎬</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{video.title}</h3>
                      <p className="text-sm text-gray-500">Duration: {video.duration}</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all">
                    Watch Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BeginnerCourses