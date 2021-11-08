import { auth } from "../../firebase/utils";
import { takeLatest, put, all, call } from "redux-saga/effects";
import calendarTrackerTypes from "./calendarTracker.types";
import {
  handleAddCalendarTracker,
  handleFetchCalendarTracker,
  handleFetchUserCalendar,
  //   handleFetchExercises,
  //   handleDeleteExercise,
} from "./calendarTracker.helpers";
import {
  setCalendars,
  fetchCalendarsStart,
  setUserCalendar,
} from "./calendarTracker.actions";

export function* addCalendar({ payload: { email } }) {
  try {
    const timestamp = new Date();
    yield handleAddCalendarTracker({
      email,
      // userIDUSER: auth.currentUser.uid,
      createdDate: timestamp,
    });
    yield put(fetchCalendarsStart());
  } catch (err) {
    //
  }
}

export function* onAddCalendarStart() {
  yield takeLatest(calendarTrackerTypes.ADD_NEW_CALENDAR, addCalendar);
}

export function* fetchCalendars() {
  try {
    const calendarTracker = yield handleFetchCalendarTracker();
    yield put(setCalendars(calendarTracker));
  } catch (err) {
    //
  }
}

export function* onFetchCalendarsStart() {
  yield takeLatest(calendarTrackerTypes.FETCH_CALENDARS_START, fetchCalendars);
}

export function* fetchUserCalendar({ payload }) {
  try {
    const calendar = yield handleFetchUserCalendar(payload);
    yield put(setUserCalendar(calendar));
  } catch (err) {}
}

export function* onFetchUserCalendarStart() {
  yield takeLatest(calendarTrackerTypes.FETCH_USER_CALENDAR, fetchUserCalendar);
}

export default function* calendarTrackerSagas() {
  yield all([
    call(onAddCalendarStart),
    call(onFetchCalendarsStart),
    call(onFetchUserCalendarStart),
  ]);
}
