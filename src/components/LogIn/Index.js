import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { logInUser, resetAllAuthForms } from "../../redux/User/user.actions";

import "./styles.css";
import { Link, withRouter } from "react-router-dom";

import AuthWrapper from "../AuthWrapper";
import Button from "./../Forms/Button";
import FormInput from "../Forms/FormInput";

const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess,
});

const LogIn = (props) => {
  const { signInSuccess } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (signInSuccess) {
      resetForm();
      dispatch(resetAllAuthForms());
      props.history.push("/");
    }
  }, [signInSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
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
