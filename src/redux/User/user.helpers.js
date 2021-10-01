import { auth } from "../../firebase/utils";
import { firestore } from "../../firebase/utils";

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
