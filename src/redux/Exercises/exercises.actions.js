import exerciseTypes from "./exercises.types";

export const addExerciseStart = (exerciseData) => ({
  type: exerciseTypes.ADD_NEW_EXERCISE,
  payload: exerciseData,
});
