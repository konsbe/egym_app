import { auth } from "../../firebase/utils";
import { takeLatest, put, all, call } from "redux-saga/effects";
import calendarTrackerTypes from "./calendarTracker.types";
import {
  handleAddCalendarTracker,
  handleFetchCalendarTracker,
  //   handleFetchExercises,
  //   handleDeleteExercise,
} from "./calendarTracker.helpers";
import { setCalendar, fetchCalendarStart } from "./calendarTracker.actions";

export function* addCalendar({ payload: { email } }) {
  try {
    const timestamp = new Date();
    yield handleAddCalendarTracker({
      email,
      // userIDUSER: auth.currentUser.uid,
      createdDate: timestamp,
    });
    yield put(fetchCalendarStart());
  } catch (err) {
    //
  }
}

export function* onAddCalendarStart() {
  yield takeLatest(calendarTrackerTypes.ADD_NEW_CALENDAR, addCalendar);
}

export function* fetchCalendars() {
  try {
    const calendars = yield handleFetchCalendarTracker();
    yield put(setCalendar(calendars));
  } catch (err) {
    //
  }
}

export default function* calendarTrackerSagas() {
  yield all([call(onAddCalendarStart)]);
}
