import React, { Component } from "react";
import "./styles.css";
import Button from "./../Forms/Button";
import { Link } from "react-router-dom";
import FormInput from "../Forms/FormInput";
import { auth, handleUserProfile } from "./../../firebase/utils";

const initialState = {
  firstName: "",
  lastName: "",
  nickName: "",
  email: "",
  birthDay: "",
  password: "",
  confirmPassword: "",
  errors: [],
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }
  handleFormSubmit = async (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      nickName,
      email,
      birthDay,
      password,
      confirmPassword,
      errors,
    } = this.state;

    if (password !== confirmPassword) {
      const err = ["Password don't much"];
      this.setState({
        errors: err,
      });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await handleUserProfile(user, {
        firstName,
        lastName,
        nickName,
        birthDay,
      });

      this.setState({
        ...initialState,
      });
    } catch (err) {}
  };

  render() {
    const {
      firstName,
      lastName,
      nickName,
      email,
      birthDay,
      password,
      confirmPassword,
      errors,
    } = this.state;

    return (
      <div className="registration">
        <h1>Registration Form</h1>
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return <li key={index}>{err}</li>;
            })}
          </ul>
        )}
        <form onSubmit={this.handleFormSubmit}>
          <FormInput
            className="forminput"
            type="text"
            name="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <FormInput
            className="forminput"
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <FormInput
            className="forminput"
            type="text"
            name="nickName"
            value={nickName}
            placeholder="Nick Name"
            onChange={this.handleChange}
          />
          <FormInput
            className="forminput"
            type="email"
            name="email"
            value={email}
            placeholder="example@email.com"
            onChange={this.handleChange}
          />
          <FormInput
            className="forminput"
            type="date"
            name="birthDay"
            value={birthDay}
            onChange={this.handleChange}
          />
          <FormInput
            className="forminput"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange}
          />
          <FormInput
            className="forminput"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Your Password"
            onChange={this.handleChange}
          />
          {/* <button type="submit"> Sign Up </button> */}
          <Button type="submit" className="btnsignup">
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
    );
  }
}

export default SignUp;
