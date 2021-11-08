import calendarTrackerTypes from "./calendarTracker.types";

const INITIAL_STATE = {
  calendarTracker: [],
  calendar: [],
};

const calendarTrackerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case calendarTrackerTypes.SET_CALENDARS:
      return {
        ...state,
        calendarTracker: action.payload,
      };
    case calendarTrackerTypes.SET_USER_CALENDAR:
      return {
        ...state,
        calendar: action.payload,
      };
    default:
      return state;
  }
};

export default calendarTrackerReducer;
