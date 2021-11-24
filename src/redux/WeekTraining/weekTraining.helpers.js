import { firestore } from "../../firebase/utils";
import { doc, setDoc } from "firebase/firestore";
import { auth } from "../../firebase/utils";

import firebase from "firebase/compat/app";

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
        console.log(...weekProgram);
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
      .orderBy("0/createdDate", "desc")
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
//

export const handleUpdateReminder = ({
  reminder,
  scheduleID,
  documenID,
  dayNum,
  exerciseID,
  list,
  week,
  weekTitle,
}) => {
  // console.log(reminder, scheduleID, documenID, dayNum, id);

  return new Promise((resolve, reject) => {
    firestore
      // .collection("trainingSchedule/" + scheduleID + "/week")
      .collection("trainingSchedule")
      .doc(scheduleID)
      .collection("week")
      .doc(documenID)
      // .where("0.text", "==", "Week 2")
      // .doc()
      // .doc(documenID)
      // .collection(dayNum+'/'+id+'/')
      // .doc(id)
      // .update([week])
      // .get()
      .set({ ...week });
    // .then((snapshot) => {
    //   const usersArray = snapshot.docs.map((doc) => {
    //     return {
    //       ...doc.data(),
    //       documentID: doc.id,
    //     };
    //   });
    //   resolve(usersArray);
    // })
    // .catch((err) => {
    //   reject(err);
    // });
    // .then((snapshot) => {
    // const usersArray = snapshot.docs(doc.data());

    // const weekArray = snapshot.docs.map((doc) => {
    //   console.log(...doc.data());
    //   return {
    //     ...doc.data(),
    //     documenID: doc.id,
    //   };
    // });

    // const obj = usersArray.map((item) => {
    //   if (item.documenID === documenID) {
    //     console.log(item[dayNum][exerciseID]);
    //   }
    // });

    // resolve(weekArray);
    // console.log(weekArray, "ololloloololooololololol");
    // console.log([week], "ololloloololooololololol");

    // console.log(documentID, "ololloloololooololololol");
    // })
    // .catch((err) => {
    //   reject(err);
    // });
  });
};