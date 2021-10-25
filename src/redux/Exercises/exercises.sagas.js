import { auth } from "../../firebase/utils";
import { takeLatest, put, all, call } from "redux-saga/effects";
import exerciseTypes from "./exercises.types";
import {
  handleAddExercise,
  handleFetchExercises,
  handleDeleteExercise,
} from "./exercises.helpers";
import { setExercises, fetchExercisesStart } from "./exercises.actions";

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
    yield put(fetchExercisesStart());
  } catch (err) {
    //
  }
}

export function* onAddExerciseStart() {
  yield takeLatest(exerciseTypes.ADD_NEW_EXERCISE, addExercise);
}

export function* fetchExercises() {
  try {
    const exercises = yield handleFetchExercises();
    yield put(setExercises(exercises));
  } catch (err) {
    //
  }
}

export function* onFetchExercisesStart() {
  yield takeLatest(exerciseTypes.FETCH_EXERCISES_START, fetchExercises);
}

export function* deleteExercise({ payload }) {
  try {
    yield handleDeleteExercise(payload);
    yield put(fetchExercisesStart());
  } catch (err) {
    //
  }
}

export function* onDeleteExerciseStart() {
  yield takeLatest(exerciseTypes.DELETE_EXERCISE_START, deleteExercise);
}

export default function* exercisesSagas() {
  yield all([
    call(onAddExerciseStart),
    call(onFetchExercisesStart),
    call(onDeleteExerciseStart),
  ]);
}
