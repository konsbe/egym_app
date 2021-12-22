import { auth } from "../../firebase/utils";
import { firestore } from "../../firebase/utils";
import firebase from "firebase/compat/app";

export const handleResetPasswordAPI = (email) => {
  const config = {
    url: "http://localhost:3000/login",
  };
  return new Promise((resolve, reject) => {
    auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        resolve();
      })
      .catch(() => {
        const err = ["Email not Found"];
        reject(err);
      });
  });
};

export const handleFetchUsers = ({ bla, startAfterDoc, persistUsers = [] }) => {
  return new Promise((resolve, reject) => {
    const pageSize = 4;

    let ref = firestore
      .collection("users")

      .orderBy("createdDate", "asc")
      .limit(pageSize);
    if (startAfterDoc) ref = ref.startAfter(startAfterDoc);

    ref
      .get()
      .then((snapshot) => {
        const totalCount = snapshot.size;
        const data = [
          ...persistUsers,
          ...snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            };
          }),
        ];

        resolve({
          data,
          queryDoc: snapshot.docs[totalCount - 1],
          isLastPage: totalCount < 1,
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// firebase.auth().currentUser.uid;
export const handleNewData = (testdata) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("users")
      .doc(firebase.auth().currentUser.uid)

      .set(testdata)
      .then((snapshot) => {
        const usersArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            documentID: doc.id,
          };
        });
        resolve(usersArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// UPDATE DATA
export const handleUpdateWeight = ({weight}) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      // .ref(`gear`)
      .update({ weight })
      // .update({ injuries: injuries })
      // .update({ gear: gear })

      .then((snapshot) => {
        const usersArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            documentID: doc.id,
          };
        });
        resolve(usersArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const handleUpdateGear = ({gear}) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      // .ref(`gear`)
      .update({ gear })
      // .update({ injuries: injuries })
      // .update({ gear: gear })

      .then((snapshot) => {
        const usersArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            documentID: doc.id,
          };
        });
        resolve(usersArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const handleUpdateInjuries = ({injuries}) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      // .ref(`gear`)
      .update({ injuries })
      // .update({ injuries: injuries })
      // .update({ gear: gear })

      .then((snapshot) => {
        const usersArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            documentID: doc.id,
          };
        });
        resolve(usersArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleUpdateMonth = ({ month, documentID }) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("users")
      .doc(documentID)
      // .get()
      // .ref(`gear`)
      .update({ month })
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

export const handleUpdateCalendar = ({ calendarTracker }) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("users")
      .doc(firebase.auth().currentUser.uid)

      // .collection("calendarTracker")

      // .get()
      // .ref(`calendarTracker`)
      .update({ calendarTracker })
      // .set({ calendarTracker: calendarTracker }, { merge: true })
      // .add(calendarTracker)

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

// export const handleUpdateCalendar = ({ calendarTracker }) => {
//   return new Promise((resolve, reject) => {
//     firestore
//       .collection(`users/${firebase.auth().currentUser.uid}/calendarTracker`)
//       .doc()
//       .set({ calendarTracker })

//       .then(() => {
//         resolve();
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };


export const handleUpdatePayment = ({ payment, documentID }) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("users")
      .doc(documentID)
      // .get()
      // .ref(`gear`)
      .update({ payment })
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

export const handleUpdateLastProgram = ({ lastProgram, documentID }) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("users")
      .doc(documentID)
      // .get()
      // .ref(`gear`)
      .update({ lastProgram })
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

export const handleUpdateCourseTaken = ({ course, documentID }) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("users")
      .doc(documentID)
      // .get()
      // .ref(`gear`)
      .update({ course })
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


export const handleFetchUser = (userID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("users")
      .doc(userID)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          resolve(snapshot.data());
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};