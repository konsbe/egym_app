import calendarTrackerTypes from "./calendarTracker.types";

export const addCalendarStart = (calendarData) => ({
  type: calendarTrackerTypes.ADD_NEW_CALENDAR,
  payload: calendarData,
});

export const fetchCalendarStart = () => ({
  type: calendarTrackerTypes.FETCH_CALENDAR_START,
});

export const setCalendar = (calendars) => ({
  type: calendarTrackerTypes.SET_CALENDAR,
  payload: calendars,
});

// export const deleteExerciseStart = (exerciseID) => ({
//   type: exerciseTypes.DELETE_EXERCISE_START,
//   payload: exerciseID,
// });
