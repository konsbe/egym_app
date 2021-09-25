import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { auth } from "./../../firebase/utils";

import AuthWrapper from "../AuthWrapper";
import Button from "./../Forms/Button";
import FormInput from "../Forms/FormInput";

const initialState = {
  email: "",
  password: "",
};

class LogIn extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {}
  };

  render() {
    const { email, password } = this.state;
    const configAuthWrapper = {
      headline: "Log In",
    };

    return (
      <AuthWrapper {...configAuthWrapper}>
        {/* // <div className="login">
      //   <div>
      //     <h1>Log In</h1> */}
        <div className="formWrap">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              className="forminput"
              type="email"
              name="email"
              value={email}
              placeholder="example@email.com"
              handleChange={this.handleChange}
            />
            <FormInput
              className="forminput second"
              type="password"
              name="password"
              value={password}
              placeholder="Type your Password"
              handleChange={this.handleChange}
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
  }
}

export default LogIn;
