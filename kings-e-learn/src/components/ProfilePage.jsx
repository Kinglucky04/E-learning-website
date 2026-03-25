import React, { useState, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { getRegisteredCourses, getCompletedCourses} from '../components/utils/CourseStorage';

const ProfilePage = () => {
  const { user } = useAuth();
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);

  useEffect(() => {
    setRegisteredCourses(getRegisteredCourses());
    setCompletedCourses(getCompletedCourses());
  }, []);


  useEffect(() => {
  const updateCourses = () => {
    setRegisteredCourses(getRegisteredCourses());
    setCompletedCourses(getCompletedCourses());
  };

  window.addEventListener("coursesUpdated", updateCourses);

  return () => window.removeEventListener("coursesUpdated", updateCourses);
}, []);

useEffect(() => {
  const handleFocus = () => {
    setRegisteredCourses(getRegisteredCourses());
    setCompletedCourses(getCompletedCourses());
  };

  window.addEventListener("focus", handleFocus);

  return () => window.removeEventListener("focus", handleFocus);
}, []);

  const getInitials = () => {
    if (!user?.username) return "US";
    return user.username.substring(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-6 border-b-2 border-gray-200">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-3xl">👤</span> My Profile
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Track your learning journey — registered & completed courses
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex items-center gap-3">
            <div className="w-15 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-700 font-semibold text-lg">{getInitials()}</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">{user?.name || user?.username || "Student"}</div>
            </div>
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Registered Courses */}
          <CourseList title="Courses Registered" courses={registeredCourses} type="registered" />

          {/* Completed Courses */}
          <CourseList title="Courses Completed" courses={completedCourses} type="completed" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

// Reusable CourseList Component
const CourseList = ({ title, courses, type }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
      <span className="text-2xl">{type === "registered" ? "📚" : "🏆"}</span>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
    </div>

    <div className="divide-y divide-gray-100">
      {courses.length === 0 ? (
        <div className="py-12 text-center text-gray-500">
          <span className="text-4xl block mb-2">{type === "registered" ? "📭" : "🎯"}</span>
          <p>No {type} courses yet</p>
          <p className="text-sm">{type === "registered" ? "Explore and enroll in new courses!" : "Keep up the great work!"}</p>
        </div>
      ) : (
        courses.map(course => (
          <div key={course.id} className="p-5 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{course.icon || "📘"}</span>
                <h3 className="font-medium text-gray-900">{course.title}</h3>
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                type === "registered" ? "bg-gray-100 text-gray-700" : "bg-green-100 text-green-700"
              }`}>
                {type === "registered" ? `${course.progress || 0}% complete` : "✓ Completed"}
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-2 flex items-center gap-3">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${type === "registered" ? "bg-blue-600" : "bg-green-600"}`}
                  style={{ width: `${course.progress || 0}%` }}
                />
              </div>
              <span className="text-xs font-medium text-gray-600 min-w-[45px]">
                {course.progress || 0}%
              </span>
            </div>

            {type === "completed" && course.completedDate && (
              <p className="text-xs text-gray-500 mt-1">Completed on {course.completedDate}</p>
            )}
          </div>
        ))
      )}
    </div>
  </div>
);