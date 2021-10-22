import { auth } from "../../firebase/utils";
import { takeLatest, put, all, call } from "redux-saga/effects";
import coursesTypes from "./courses.types";
import {
  handleAddCourse,
  handleFetchCourses,
  handleDeleteCourse,
} from "./courses.helpers";
import { setCourses, fetchCoursesStart } from "./courses.actions";

export function* addCourse({
  payload: { courseName, courseMonths, courseDescription, price, imgURL },
}) {
  try {
    const timestamp = new Date();
    yield handleAddCourse({
      courseName,
      courseMonths,
      courseDescription,
      price,
      imgURL,
      exerciseIDUSER: auth.currentUser.uid,
      createdDate: timestamp,
    });
    yield put(fetchCoursesStart());
  } catch (err) {
    //
  }
}

export function* onAddCoursesStart() {
  yield takeLatest(coursesTypes.ADD_NEW_COURSE, addCourse);
}

export function* fetchCourses() {
  try {
    const courses = yield handleFetchCourses();
    yield put(setCourses(courses));
  } catch (err) {
    //
  }
}

export function* onFetchCoursesStart() {
  yield takeLatest(coursesTypes.FETCH_COURSES_START, fetchCourses);
}


export function* deleteCourse({ payload }) {
  try {
    yield handleDeleteCourse(payload);
    yield put(fetchCoursesStart());
  } catch (err) {
    //
  }
}

export function* onDeleteCourseStart() {
  yield takeLatest(coursesTypes.DELETE_COURSE_START, deleteCourse);
}

export default function* coursesSagas() {
  yield all([
    call(onAddCoursesStart),
    call(onFetchCoursesStart),
    call(onDeleteCourseStart),
  ]);
}
