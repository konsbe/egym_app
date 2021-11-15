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




export const handleFetchUserTrainingWeeks = (scheduleID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("trainingSchedule")
      .doc(scheduleID)
      // .doc(calendarID)
      .collection("week")
      .get()
      .then((snapshot) => {
        const daysArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            documenID: doc.id,
          };
        });
        resolve(daysArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


export const handleUpdateReminder = ({
  reminder,
  scheduleID,
  documentID,
  num,
  id,
}) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("trainingSchedule")
      .doc(scheduleID)
      .collection("week")
      .doc(documentID)
      .collection(num)
      .where("id", "==", id)
      // .get()
      // .ref(`gear`)
      .update({ reminder })
      // .update({ injuries: injuries })
      // .update({ gear: gear })

      .then((snapshot) => {
        const usersArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            documentID: doc.num,
          };
        });
        resolve(usersArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
