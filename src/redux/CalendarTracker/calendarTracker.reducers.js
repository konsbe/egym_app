import calendarTrackerTypes from "./calendarTracker.types";

const INITIAL_STATE = {
  calendars: [],
};

const calendarTrackerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case calendarTrackerTypes.SET_CALENDAR:
      return {
        ...state,
        calendars: action.payload,
      };
    default:
      return state;
  }
};

export default calendarTrackerReducer;
