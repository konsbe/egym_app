import coursesTypes from "./courses.types";

export const addCourseStart = (courseData) => ({
  type: coursesTypes.ADD_NEW_COURSE,
  payload: courseData,
});

export const fetchCoursesStart = () => ({
  type: coursesTypes.FETCH_COURSES_START,
});

export const setCourses = (courses) => ({
  type: coursesTypes.SET_COURSE,
  payload: courses,
});

export const deleteCourseStart = (courseID) => ({
  type: coursesTypes.DELETE_COURSE_START,
  payload: courseID,
});
