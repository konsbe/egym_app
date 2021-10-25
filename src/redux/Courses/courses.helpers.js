import { firestore } from "../../firebase/utils";

export const handleAddCourse = (course) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("courses")
      .doc()
      .set(course)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchCourses = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("courses")
      .orderBy("createdDate", "desc")
      .get()
      .then((snapshot) => {
        const coursesArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            documentID: doc.id,
          };
        });
        resolve(coursesArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleDeleteCourse = (documentID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("courses")
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
