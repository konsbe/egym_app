import weekTrainingTypes from "./weekTraining.types";

const INITIAL_STATE = {
  trainingSchedules: [],
  userScheduleData: [],
  trainingWeeks: [],
};

const weekTrainingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case weekTrainingTypes.SET_TRAINING_SCHEDULES:
      return {
        ...state,
        trainingSchedules: action.payload,
      };
    case weekTrainingTypes.SET_USER_TRAINING_SCHEDULE:
      return {
        ...state,
        userScheduleData: action.payload,
      };
    case weekTrainingTypes.SET_USER_TRAINING_WEEKS:
      return {
        ...state,
        trainingWeeks: action.payload,
      };
    default:
      return state;
  }
};

export default weekTrainingReducer;
