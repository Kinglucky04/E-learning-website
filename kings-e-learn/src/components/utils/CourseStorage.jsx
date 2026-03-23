export const addCourseToStorage = (course) => {
  const existing = JSON.parse(localStorage.getItem("courses")) || [];

  const alreadyExists = existing.find(c => c.id === course.id);

  if (alreadyExists) return false;

  const newCourse = {
    id: course.id,
    title: course.title,
    progress: 0,
    completed: false,
  };

  localStorage.setItem("courses", JSON.stringify([...existing, newCourse]));
  return true;
};