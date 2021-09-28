import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUserStart, signUpUser } from "../../redux/User/user.actions";

import { withRouter } from "react-router";

import "./styles.css";
import { Link } from "react-router-dom";
// import { auth, handleUserProfile } from "./../../firebase/utils";

import AuthWrapper from "../AuthWrapper";
import Button from "./../Forms/Button";
import FormInput from "../Forms/FormInput";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
});

const SignUp = (props) => {
  const { currentUser, userErr } = useSelector(mapState);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      resetForm();

      props.history.push("/");
    }
  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setNickName("");
    setEmail("");
    setBirthDay("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(
      signUpUserStart({
        firstName,
        lastName,
        nickName,
        email,
        birthDay,
        password,
        confirmPassword,
      })
    );
  };

  const configAuthWrapper = {
    headline: "Registration",
  };

  return (
    // <div className="registration">
    //   <h1>Registration Form</h1>

    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul className="errorline">
            {errors.map((err, index) => {
              return <li key={index}>{err}</li>;
            })}
          </ul>
        )}

        <form onSubmit={handleFormSubmit}>
          <FormInput
            className="forminput"
            type="text"
            name="firstName"
            value={firstName}
            placeholder="First Name"
            handleChange={(e) => setFirstName(e.target.value)}
          />
          <FormInput
            className="forminput"
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormInput
            className="forminput"
            type="text"
            name="nickName"
            value={nickName}
            placeholder="Nick Name"
            handleChange={(e) => setNickName(e.target.value)}
          />
          <FormInput
            className="forminput"
            type="email"
            name="email"
            value={email}
            placeholder="example@email.com"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            className="forminput"
            type="date"
            name="birthDay"
            value={birthDay}
            handleChange={(e) => setBirthDay(e.target.value)}
          />
          <FormInput
            className="forminput"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            className="forminput"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Your Password"
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />
          {/* <button type="submit"> Sign Up </button> */}
          <Button type="submit" className="btnform">
            Register
          </Button>
          <p className="logintext">
            Are you already have an acount
            <Link className="loginlink" to="/login">
              {" "}
              Log In{" "}
            </Link>
            now
          </p>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(SignUp);
