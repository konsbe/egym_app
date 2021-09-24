import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Button from "../Forms/Button";
import {} from "../../firebase/utils";

class LogIn extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="login">
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="email" placeholder="example@email.com"></input>
          <input type="password" placeholder="password"></input>
          {/* onClick={} */}
          <Button>Log In</Button>
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
