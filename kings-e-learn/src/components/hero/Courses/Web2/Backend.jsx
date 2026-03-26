import React from 'react'
import {addCourseToStorage} from "../../../utils/CourseStorage"

const backendCourses = [
  {
    id: 101,
    title: "Node.js & Express",
    technology: "Node.js",
    description: "Build scalable backend services with Node.js",
    duration: "10 hours",
    lessons: 58,
    level: "Intermediate",
    icon: "🟢",
    color: "from-green-600 to-green-800",
    topics: ["REST APIs", "Middleware", "Authentication", "Database Integration"]
  },
  {
    id: 201,
    title: "Python Django",
    technology: "Django",
    description: "High-level Python web framework",
    duration: "12 hours",
    lessons: 65,
    level: "Intermediate",
    icon: "🐍",
    color: "from-green-500 to-emerald-600",
    topics: ["ORM", "Admin Panel", "Authentication", "REST Framework"]
  },
  {
    id: 301,
    title: "Database Mastery",
    technology: "SQL & NoSQL",
    description: "Master database design and management",
    duration: "8 hours",
    lessons: 45,
    level: "Intermediate",
    icon: "🗄️",
    color: "from-blue-600 to-indigo-700",
    topics: ["PostgreSQL", "MongoDB", "Indexing", "Query Optimization"]
  },
  {
    id: 401,
    title: "API Development",
    technology: "GraphQL & REST",
    description: "Design and build robust APIs",
    duration: "6 hours",
    lessons: 38,
    level: "Intermediate",
    icon: "🔌",
    color: "from-purple-600 to-pink-600",
    topics: ["GraphQL", "REST Architecture", "API Security", "Documentation"]
  }
]

const BackendCourses = ({ searchQuery = '' }) => {
  const filteredCourses = backendCourses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.technology.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
            ⚙️ Server Side Development
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Backend Engineering
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Build powerful, scalable, and secure backend systems that power modern applications
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course =>
            <div key={course.id} className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className={`h-1 bg-gradient-to-r ${course.color}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{course.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                    <p className="text-blue-400 font-semibold">{course.technology}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{course.description}</p>
                
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
                  <span className={`px-2 py-1 rounded ${
                    course.level === 'Beginner' ? 'bg-green-500' : 'bg-yellow-500'
                  } text-white text-xs`}>
                    {course.level}
                  </span>
                </div>
                
                <button onClick={() => addCourseToStorage(course)} className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer">
                  Start Learning →
                </button>
              </div>
            </div>
          )): (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-400 text-lg">No backend courses found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
        
        {/* Additional Resources */}
        <div className="mt-12 bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">🎯 Backend Learning Path</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">1️⃣</div>
              <p className="text-gray-300">Learn a Language</p>
              <p className="text-sm text-gray-500">Node.js, Python, Java</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">2️⃣</div>
              <p className="text-gray-300">Master Databases</p>
              <p className="text-sm text-gray-500">SQL, NoSQL, ORMs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">3️⃣</div>
              <p className="text-gray-300">Build APIs</p>
              <p className="text-sm text-gray-500">REST, GraphQL</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">4️⃣</div>
              <p className="text-gray-300">Deploy & Scale</p>
              <p className="text-sm text-gray-500">Docker, Cloud, CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackendCourses