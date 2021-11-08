import React from "react";
// import { useSelector } from "react-redux";

import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./User/user.reducer";
import exerciseReducer from "./Exercises/exercises.reducers";
import courseReducer from "./Courses/courses.reducers";
import calendarTrackerReducer from "./CalendarTracker/calendarTracker.reducers";

export const rootReducer = combineReducers({
  user: userReducer,
  exercisesData: exerciseReducer,
  coursesData: courseReducer,
  calendarData: calendarTrackerReducer,
  // users: userReducer,
});

const configStorage = {
  key: "root",
  storage,
  whitelist: ["coursesData"],
};

export default persistReducer(configStorage, rootReducer);
