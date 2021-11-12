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
////////////////////////////////////////////////////////
export const fetchUserTrainingScheduleStart = (email) => ({
  type: weekTrainingTypes.FETCH_USER_TRAINING_SCHEDULE,
  payload: email,
});

export const setUserTrainingSchedule = (userScheduleData) => ({
  type: weekTrainingTypes.SET_USER_TRAINING_SCHEDULE,
  payload: userScheduleData,
});