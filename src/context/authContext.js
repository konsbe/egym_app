import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/utils";
import { onAuthStateChanged } from "@firebase/auth";

const AuthContext = React.createContext();

const useAuther = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
// export default AuthProvider;
export default useAuther;
