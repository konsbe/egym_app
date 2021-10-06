import { firestore } from "../../firebase/utils";

export const handleAddExercise = (exercise) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("exercises")
      .doc()
      .set(exercise)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
