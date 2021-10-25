import React, { useEffect } from "react";

import "./styles.css";
import LogIn from "../../components/LogIn/Index";

const Login = (props) => {
  useEffect(() => {
    document.title = "Log In";
  }, []);

  return <LogIn />;
};

export default Login;
