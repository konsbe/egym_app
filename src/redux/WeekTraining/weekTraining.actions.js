import weekTrainingTypes from "./weekTraining.types";

export const addTrainingScheduleStart = (trainingData) => ({
  type: weekTrainingTypes.ADD_NEW_TRAINING_SCHEDULE,
  payload: trainingData,
});

export const fetchTrainingSchedulesStart = () => ({
  type: weekTrainingTypes.FETCH_TRAINING_SCHEDULES_START,
});

export const setTainingSchedules = (trainingSchedules) => ({
  type: weekTrainingTypes.SET_TRAINING_SCHEDULES,
  payload: trainingSchedules,
});
