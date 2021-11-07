import { firestore } from "../../firebase/utils";

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
