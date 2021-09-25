// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import firebase from "firebase";

import { firebaseConfig } from "./config";

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = app.auth();
export const firestore = app.firestore();

// const GoogleProvier = new firebase.auth.GoogleAuthProvider();
// GoogleAuthProvider.seCustomParameters({ prompt: "select_account" });

export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { firstName, lastName, nickName, email, birthDay } = userAuth;
    const timestamp = new Date();
    //   const userRoles = ["user"];
    try {
      await userRef.set({
        firstName,
        lastName,
        nickName,
        email,
        birthDay,
        createdDate: timestamp,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};
