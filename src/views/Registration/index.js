import React, { useEffect } from "react";
import "./styles.css";
import Button from "./../../components/Forms/Button";
import SignUp from "../../components/SignUp";

const Registration = (props) => {
  useEffect(() => {
    document.title = "Registration";
  }, []);
  return <SignUp />;
};

export default Registration;
