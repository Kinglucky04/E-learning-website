import React, { useEffect, useState } from "react";

const Profile = () => {
  const [courses, setCourses] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  // Mock: Add a course (you'll later connect this to your course pages)
  const addCourse = () => {
    const newCourse = {
      id: Date.now(),
      title: "New Course",
      progress: 0,
      completed: false,
    };
    setCourses([...courses, newCourse]);
  };

  // Update progress
  const updateProgress = (id, value) => {
    const updated = courses.map((course) =>
      course.id === id
        ? {
            ...course,
            progress: value,
            completed: value === 100,
          }
        : course
    );
    setCourses(updated);
  };

  // Stats
  const completedCourses = courses.filter(c => c.completed).length;
  const inProgressCourses = courses.filter(c => !c.completed).length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl font-bold mb-6">My Learning Profile</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Courses Registered</h2>
            <p className="text-2xl font-bold">{courses.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">In Progress</h2>
            <p className="text-2xl font-bold">{inProgressCourses}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Completed</h2>
            <p className="text-2xl font-bold">{completedCourses}</p>
          </div>
        </div>

        {/* Add Course Button (for testing) */}
        <button
          onClick={addCourse}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          + Add Course
        </button>

        {/* Course List */}
        <div className="grid gap-6">
          {courses.length === 0 ? (
            <p className="text-gray-500">No courses yet.</p>
          ) : (
            courses.map((course) => (
              <div
                key={course.id}
                className="bg-white p-6 rounded-xl shadow"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">{course.title}</h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      course.completed
                        ? "bg-green-500 text-white"
                        : "bg-yellow-400 text-black"
                    }`}
                  >
                    {course.completed ? "Completed" : "In Progress"}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  Progress: {course.progress}%
                </p>

                {/* Controls */}
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      updateProgress(course.id, Math.min(course.progress + 10, 100))
                    }
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    +10%
                  </button>

                  <button
                    onClick={() =>
                      updateProgress(course.id, Math.max(course.progress - 10, 0))
                    }
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    -10%
                  </button>

                  <button
                    onClick={() => updateProgress(course.id, 100)}
                    className="px-3 py-1 bg-blue-600 text-white rounded"
                  >
                    Complete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;