import weekTrainingTypes from "./weekTraining.types";

const INITIAL_STATE = {
  weekSchedule: [],
};

const weekTrainingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case weekTrainingTypes.SET_TRAINING_SCHEDULES:
      return {
        ...state,
        weekSchedule: action.payload,
      };
    default:
      return state;
  }
};

export default weekTrainingReducer;
