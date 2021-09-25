import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Button from "../Forms/Button";
import {} from "../../firebase/utils";

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
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="login">
        <h1>Log In</h1>
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
            className="forminput"
            type="password"
            name="password"
            value={password}
            placeholder="Type your Password"
            handleChange={this.handleChange}
          />

          {/* onClick={}   this is a param on Button*/}
          <Button type="submit" className="btnlogin">
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
    );
  }
}

export default LogIn;
