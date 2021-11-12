import { auth } from "../../firebase/utils";
import { takeLatest, put, all, call } from "redux-saga/effects";

import weekTrainingTypes from "./weekTraining.types";

import {
  handleAddTrainingSchedule,
  handleFetchTrainingSchedules,
} from "./weekTraining.helpers";

import { setTainingSchedules } from "./weekTraining.actions";

export function* addTrainingSchedule({ payload: { email } }) {
  try {
    const timestamp = new Date();
    yield handleAddTrainingSchedule({
      email,
      createdDate: timestamp,
    });
    // yield put(fetchTrainingScheduleStart());
  } catch (err) {
    //
  }
}

export function* onAddTrainingScheduleStart() {
  yield takeLatest(
    weekTrainingTypes.ADD_NEW_TRAINING_SCHEDULE,
    addTrainingSchedule
  );
}

export function* fetchTrainingSchedules() {
  try {
    const trainingSchedules = yield handleFetchTrainingSchedules();
    yield put(setTainingSchedules(trainingSchedules));
  } catch (err) {
    //
  }
}

export function* onFetchTrainingSchedulesStart() {
  yield takeLatest(
    weekTrainingTypes.FETCH_TRAINING_SCHEDULES_START,
    fetchTrainingSchedules
  );
}

export default function* weekTrainingSagas() {
  yield all([
    call(onAddTrainingScheduleStart),
    call(onFetchTrainingSchedulesStart),
  ]);
}
