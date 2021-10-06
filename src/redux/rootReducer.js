import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";
import exerciseReducer from "./Exercises/exercises.reducers";

export default combineReducers({
  user: userReducer,
  exercisesData: exerciseReducer,
});



