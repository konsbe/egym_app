import weekTrainingTypes from "./weekTraining.types";

export const addTrainingScheduleStart = (trainingData) => ({
  type: weekTrainingTypes.ADD_NEW_TRAINING_SCHEDULE,
  payload: trainingData,
});

export const fetchTrainingScheduleStart = () => ({
  type: weekTrainingTypes.FETCH_TRAINING_SCHEDULE_START,
});

export const setTainingSchedules = (trainingSchedule) => ({
  type: weekTrainingTypes.SET_TRAINING_SCHEDULES,
  payload: weekTrainingTypes,
});
