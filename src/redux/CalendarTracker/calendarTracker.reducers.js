import calendarTrackerTypes from "./calendarTracker.types";

const INITIAL_STATE = {
  calendarTracker: [],
};

const calendarTrackerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case calendarTrackerTypes.SET_CALENDAR:
    //   return {
    //     ...state,
    //     calendar: action.payload,
    //   };
    case calendarTrackerTypes.SET_CALENDARS:
      return {
        ...state,
        calendarTracker: action.payload,
      };
    default:
      return state;
  }
};

export default calendarTrackerReducer;
