import exerciseTypes from "./exercises.types";

export const addExerciseStart = (exerciseData) => ({
  type: exerciseTypes.ADD_NEW_EXERCISE,
  payload: exerciseData,
});

export const fetchExercisesStart = () => ({
  type: exerciseTypes.FETCH_EXERCISES_START,
});

export const setExercises = (exercises) => ({
  type: exerciseTypes.SET_EXERCISES,
  payload: exercises,
});


export const deleteExerciseStart = (exerciseID) => ({
  type: exerciseTypes.DELETE_EXERCISE_START,
  payload: exerciseID,
});
