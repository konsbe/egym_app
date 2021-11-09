import { auth } from "../../firebase/utils";
import { takeLatest, put, all, call } from "redux-saga/effects";
import calendarTrackerTypes from "./calendarTracker.types";
import {
  handleAddCalendarTracker,
  handleFetchCalendarTracker,
  handleFetchUserCalendar,
  handleAddCalendarDay,
  // handleFetchUserCalendarDays,
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

//
// export function* fetchUserCalendarDays({ payload }) {
//   try {
//     const calendarDays = yield handleFetchUserCalendarDays(payload);
//     yield put(setUserCalendar(calendarDays));
//   } catch (err) {}
// }
// export function* onFetchUserCalendarDaysStart() {
//   yield takeLatest(
//     calendarTrackerTypes.FETCH_USER_CALENDAR_DAYS,
//     fetchUserCalendarDays
//   );
// }
///

export function* addCalendarDay({
  payload: { calendarTracker, calendarID, calendarEmail },
}) {
  try {
    yield handleAddCalendarDay(calendarTracker, calendarID, calendarEmail);
    // yield put(setUserCalendar());
    yield put(fetchCalendarsStart());
  } catch (err) {}
}

export function* onAddCalendarDayStart() {
  yield takeLatest(
    calendarTrackerTypes.ADD_NEW_CALENDAR_DAY_START,
    addCalendarDay
  );
}

export default function* calendarTrackerSagas() {
  yield all([
    call(onAddCalendarStart),
    call(onFetchCalendarsStart),
    call(onFetchUserCalendarStart),
    call(onAddCalendarDayStart),
    // call(onFetchUserCalendarDaysStart),
  ]);
}
