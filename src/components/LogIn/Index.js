import React, { useState } from "react";
import { withRouter } from "react-router";

import "./styles.css";
import { Link } from "react-router-dom";
import { auth } from "./../../firebase/utils";

import AuthWrapper from "../AuthWrapper";
import Button from "./../Forms/Button";
import FormInput from "../Forms/FormInput";

const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
      props.history.push("/");
    } catch (err) {}
  };

  const configAuthWrapper = {
    headline: "Log In",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      {/* // <div className="login">
      //   <div>
      //     <h1>Log In</h1> */}
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            className="forminput"
            type="email"
            name="email"
            value={email}
            placeholder="example@email.com"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            className="forminput second"
            type="password"
            name="password"
            value={password}
            placeholder="Type your Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <p className="forgot">
            Forgot your password click
            <Link className="signuplink" to="/recovery">
              {" "}
              Here{" "}
            </Link>
          </p>

          {/* onClick={}   this is a param on Button*/}
          <Button type="submit" className="btnform">
            Log In
          </Button>
          <p className="signup">
            You are not a member
            <Link className="signuplink" to="/registration">
              {" "}
              Sign Up{" "}
            </Link>
            now
          </p>
        </form>
        {/* </div>
        </div> */}
      </div>
    </AuthWrapper>
  );
};

export default withRouter(LogIn);
