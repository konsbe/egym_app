import { auth } from "../../firebase/utils";
import { takeLatest, put, all, call } from "redux-saga/effects";

import weekTrainingTypes from "./weekTraining.types";

import {
  handleAddTrainingSchedule,
  handleFetchTrainingSchedules,
  handleFetchUserTrainingSchedule,
} from "./weekTraining.helpers";

import {
  setTainingSchedules,
  setUserTrainingSchedule,
} from "./weekTraining.actions";

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
//////////////////////////////////////////////////////////////////////

export function* fetchUserTrainingSchedule({ payload }) {
  try {
    const userScheduleData = yield handleFetchUserTrainingSchedule(payload);
    yield put(setUserTrainingSchedule(userScheduleData));
  } catch (err) {}
}

export function* onFetchUserTrainingScheduleStart() {
  yield takeLatest(
    weekTrainingTypes.FETCH_USER_TRAINING_SCHEDULE,
    fetchUserTrainingSchedule
  );
}

export default function* weekTrainingSagas() {
  yield all([
    call(onAddTrainingScheduleStart),
    call(onFetchTrainingSchedulesStart),
    call(onFetchUserTrainingScheduleStart),
  ]);
}