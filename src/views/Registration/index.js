import React, { useEffect } from "react";
import "./styles.css";
import SignUp from "../../components/SignUp";

const Registration = (props) => {
  useEffect(() => {
    document.title = "Registration";
  }, []);
  return <SignUp />;
};

export default Registration;
