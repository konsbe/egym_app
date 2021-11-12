import weekTrainingTypes from "./weekTraining.types";

const INITIAL_STATE = {
  trainingSchedules: [],
};

const weekTrainingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case weekTrainingTypes.SET_TRAINING_SCHEDULES:
      return {
        ...state,
        trainingSchedules: action.payload,
      };
    default:
      return state;
  }
};

export default weekTrainingReducer;
