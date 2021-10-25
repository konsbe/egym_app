import coursesTypes from "./courses.types";

const INITIAL_STATE = {
  courses: [],
};

const courseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case coursesTypes.SET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
};

export default courseReducer;
