import { firestore } from "../../firebase/utils";
import { doc, setDoc } from "firebase/firestore";

export const handleAddCalendarTracker = (calendar) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("calendarTracker")
      .doc()

      .set(calendar)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const handleAddCalendarDay = (
  calendarTracker,
  calendarID,
  calendarEmail
) => {
  // const cityRef = doc('calendarTracker', calendarID, );
  return new Promise((resolve, reject) => {
    firestore
      .collection("calendarTracker")
      .doc(calendarID)
      // .doc(calendarID)
      .collection("day")
      .doc()
      .set(
        {
          ...calendarTracker,
          // day: calendarTracker,
          // email: calendarEmail,
        }
        // merge: true,

        // { merge: true }
      )
      .then(() => {
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const handleFetchCalendarTracker = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("calendarTracker")
      .orderBy("createdDate", "desc")
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

export const handleFetchUserCalendar = (email) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("calendarTracker")
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



export const handleFetchUserCalendarDays = (documentID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("calendarTracker")
      .doc(documentID)
      // .doc(calendarID)
      .collection("day")
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