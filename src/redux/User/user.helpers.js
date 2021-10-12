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

export const handleFetchUsers = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("users")
      .orderBy("createdDate", "asc")
      .get()
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