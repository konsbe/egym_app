import React from "react";
// import { useSelector } from "react-redux";

import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./User/user.reducer";
import exerciseReducer from "./Exercises/exercises.reducers";
import coursesReducer from "./User/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  exercisesData: exerciseReducer,
  coursesData: coursesReducer,
  // users: userReducer,
});

const configStorage = {
  key: "root",
  storage,
  whitelist: ["user"],
};

export default persistReducer(configStorage, rootReducer);
