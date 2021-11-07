import { all, call } from "redux-saga/effects";

import userSagas from "./User/user.sagas";
import exercisesSagas from "./Exercises/exercises.sagas";
import coursesSagas from "./Courses/courses.sagas";
import calendarTrackerSagas from "./CalendarTracker/calendarTracker.sagas";

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(exercisesSagas),
    call(coursesSagas),
    call(calendarTrackerSagas),
  ]);
}
