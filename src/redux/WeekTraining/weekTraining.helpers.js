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


export const handleFetchTrainingSchedules = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("trainingSchedule")

      .get()
      .then((snapshot) => {
        const calendarArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            documentID: doc.id,
          };
        });
        resolve(calendarArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchUserTrainingSchedule = (email) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("trainingSchedule")
      .where("email", "==", email)
      .get()
      .then((snapshot) => {
        const calendarArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            documentID: doc.id,
          };
        });
        resolve(calendarArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
/////////////////////////////////////////////////////////////////////

export const handleAddWeekTraining = (weekProgram, scheduleID) => {
  // const cityRef = doc('calendarTracker', calendarID, );
  return new Promise((resolve, reject) => {
    firestore
      .collection("trainingSchedule")
      .doc(scheduleID)

      .collection("week")
      .doc()
      .set({ ...weekProgram })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};



