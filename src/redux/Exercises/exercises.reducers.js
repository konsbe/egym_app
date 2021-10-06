import exerciseTypes from "./exercises.types";

const INITIAL_STATE = {
  exercises: [],
};

const exerciseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case exerciseTypes.SET_EXERCISES:
      return {
        ...state,
        exercises: action.payload,
      };
    default:
      return state;
  }
};

export default exerciseReducer;
