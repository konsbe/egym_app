import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { emailSignInStart } from "../../redux/User/user.actions";

import "./styles.css";
import { Link, useHistory } from "react-router-dom";

import AuthWrapper from "../AuthWrapper";
import Button from "./../Forms/Button";
import FormInput from "../Forms/FormInput";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const LogIn = (props) => {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push("/");
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const configAuthWrapper = {
    headline: "Log In",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
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
      </div>
    </AuthWrapper>
  );
};

export default LogIn;
