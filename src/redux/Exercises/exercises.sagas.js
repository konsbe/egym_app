import { auth } from "../../firebase/utils";
import { takeLatest, put, all, call } from "redux-saga/effects";
import exerciseTypes from "./exercises.types";
import { handleAddExercise } from "./exercises.helpers";

export function* addExercise({
  payload: { exerciseName, youtubeURL, imgURL },
}) {
  try {
    const timestamp = new Date();
    yield handleAddExercise({
      exerciseName,
      youtubeURL,
      imgURL,
      exerciseIDUSER: auth.currentUser.uid,
      createdDate: timestamp,
    });
  } catch (err) {
    //
  }
}

export function* onAddExerciseStart() {
  yield takeLatest(exerciseTypes.ADD_NEW_EXERCISE, addExercise);
}

export default function* exercisesSagas() {
  yield all([call(onAddExerciseStart)]);
}
