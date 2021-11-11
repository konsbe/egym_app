import { firestore } from "../../firebase/utils";
import { doc, setDoc } from "firebase/firestore";

export const handleAddTrainingSchedule = (trainingData) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("trainingSchedule")
      .doc()

      .set(trainingData)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
//
