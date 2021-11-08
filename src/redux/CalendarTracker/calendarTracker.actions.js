import calendarTrackerTypes from "./calendarTracker.types";

export const addCalendarStart = (calendarData) => ({
  type: calendarTrackerTypes.ADD_NEW_CALENDAR,
  payload: calendarData,
});

export const fetchCalendarsStart = () => ({
  type: calendarTrackerTypes.FETCH_CALENDARS_START,
});

export const setCalendars = (calendarTracker) => ({
  type: calendarTrackerTypes.SET_CALENDARS,
  payload: calendarTracker,
});

///next
export const fetchUserCalendarStart = (email) => ({
  type: calendarTrackerTypes.FETCH_USER_CALENDAR,
  payload: email,
});

export const setUserCalendar = (user) => ({
  type: calendarTrackerTypes.SET_USER_CALENDAR,
  payload: user,
});
// export const deleteExerciseStart = (exerciseID) => ({
//   type: exerciseTypes.DELETE_EXERCISE_START,
//   payload: exerciseID,
// });
