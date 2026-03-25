export const addCourseToStorage = (course) => {
  const courses = getRegisteredCourses();

  // Prevent duplicates
  const exists = courses.find(c => c.id === course.id);
  if (!exists) {
    courses.push({ ...course, progress: 0 }); // optional: track progress
    localStorage.setItem("registeredCourses", JSON.stringify(courses));
    alert(`${course.title} has been added to your registered courses!`);
    window.dispatchEvent(new Event("coursesUpdated"));
  } else {
    alert(`${course.title} is already in your registered courses.`);
  }
};

export const completeCourse = (courseId) => {
  const registeredCourses = getRegisteredCourses();
  const courseIndex = registeredCourses.findIndex(c => c.id === courseId);
  if (courseIndex !== -1) {
    const course = registeredCourses[courseIndex];
    const completedCourses = getCompletedCourses();
    completedCourses.push({ ...course, progress: 100, completedDate: new Date().toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"}) });
    localStorage.setItem("completedCourses", JSON.stringify(completedCourses));

    // Remove from registered
    registeredCourses.splice(courseIndex, 1);
    localStorage.setItem("registeredCourses", JSON.stringify(registeredCourses));
  }
};

export const getRegisteredCourses = () => {
  const courses = localStorage.getItem("registeredCourses");
  return courses ? JSON.parse(courses) : [];
};

export const getCoursesFromStorage = () => {
  const courses = localStorage.getItem("courses");
  return courses ? JSON.parse(courses) : [];
};

export const getCompletedCourses = () => JSON.parse(localStorage.getItem("completedCourses")) || [];