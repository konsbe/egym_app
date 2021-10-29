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


export const handleFetchExercises = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("exercises")
      .orderBy("exerciseName")
      .get()
      .then((snapshot) => {
        const exercisesArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            documentID: doc.id,
          };
        });
        resolve(exercisesArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleDeleteExercise = (documentID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("exercises")
      .doc(documentID)
      .delete()
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
