import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth';

const ProfilePage = () => {
  const { user } = useAuth();

  // Sample courses data
  const [registeredCourses] = useState([
    { id: 1, title: "HTML & Semantic Web", progress: 65, icon: "📘" },
    { id: 2, title: "CSS Flexbox & Grid Mastery", progress: 42, icon: "🎨" },
    { id: 3, title: "JavaScript: Core Concepts", progress: 88, icon: "💛" },
    { id: 4, title: "UI/UX Principles", progress: 30, icon: "🎯" },
    { id: 5, title: "Database Design (SQL)", progress: 55, icon: "🗄️" },
    { id: 6, title: "Git & GitHub Workflow", progress: 22, icon: "🔀" }
  ]);

  const [completedCourses] = useState([
    { id: 1, title: "React Fundamentals", progress: 100, icon: "⚛️", completedDate: "Jan 15, 2026" },
    { id: 2, title: "Node.js Basics", progress: 100, icon: "🟢", completedDate: "Feb 3, 2026" },
    { id: 3, title: "Python for Beginners", progress: 100, icon: "🐍", completedDate: "Dec 20, 2025" },
    { id: 4, title: "TypeScript Essentials", progress: 100, icon: "📘", completedDate: "Mar 10, 2026" }
  ]);

  // Get initials for avatar
  const getInitials = () => {
    if (!user?.username) return "US"; // fallback
    return user.username.substring(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-6 border-b-2 border-gray-200">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-3xl">👤</span>
              My Profile
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Track your learning journey — registered & completed courses
            </p>
          </div>

          {/* User Info Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex items-center gap-3">
            <div className="w-15 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-700 font-semibold text-lg">
                {getInitials()}
              </span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">{user?.name || user?.username || "Student"}</div>
            </div>
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Courses Registered Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
              <span className="text-2xl">📚</span>
              <h2 className="text-xl font-semibold text-gray-900">Courses Registered</h2>
            </div>
            
            <div className="divide-y divide-gray-100">
              {registeredCourses.length === 0 ? (
                <div className="py-12 text-center text-gray-500">
                  <span className="text-4xl block mb-2">📭</span>
                  <p>No registered courses yet</p>
                  <p className="text-sm">Explore and enroll in new courses!</p>
                </div>
              ) : (
                registeredCourses.map((course) => (
                  <div key={course.id} className="p-5 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{course.icon}</span>
                        <h3 className="font-medium text-gray-900">{course.title}</h3>
                      </div>
                      <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {course.progress}% complete
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-2">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-600 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-600 min-w-[45px]">
                          {course.progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Courses Completed Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <h2 className="text-xl font-semibold text-gray-900">Courses Completed</h2>
            </div>
            
            <div className="divide-y divide-gray-100">
              {completedCourses.length === 0 ? (
                <div className="py-12 text-center text-gray-500">
                  <span className="text-4xl block mb-2">🎯</span>
                  <p>No completed courses yet</p>
                  <p className="text-sm">Keep up the great work!</p>
                </div>
              ) : (
                completedCourses.map((course) => (
                  <div key={course.id} className="p-5 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{course.icon}</span>
                        <h3 className="font-medium text-gray-900">{course.title}</h3>
                      </div>
                      <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        ✓ Completed
                      </span>
                    </div>
                    
                    {/* Completion Info */}
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <span>✅</span>
                        <span>Completed on {course.completedDate}</span>
                      </div>
                      <span className="text-green-600 font-medium">100%</span>
                    </div>
                    
                    {/* Progress Bar (Full) */}
                    <div className="mt-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-600 rounded-full w-full" />
                        </div>
                        <span className="text-xs font-medium text-green-600 min-w-[45px]">
                          100%
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            <span>🎓</span> Learning progress tracker — keep growing every day
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;