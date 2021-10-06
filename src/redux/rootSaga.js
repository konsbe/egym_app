import { all, call } from "redux-saga/effects";

import userSagas from "./User/user.sagas";
import exercisesSagas from "./Exercises/exercises.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(exercisesSagas)]);
}
