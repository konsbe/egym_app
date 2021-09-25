import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./styles.css";
import { auth } from "./../../firebase/utils";

import AuthWrapper from "./../AuthWrapper";
import Button from "./../Forms/Button";
import FormInput from "./../Forms/FormInput";

const initialState = {
  email: "",
  errors: [],
};

class EmailPassword extends Component {
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

    try {
      const { email } = this.state;

      const config = {
        url: "http://localhost:3000/login",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push("/login");
          //   console.log("Password Reset");
        })
        .catch(() => {
          const err = ["Email not Found"];
          this.setState({
            errors: err,
          });
          //   console.log("Something went Wrong");
        });
    } catch (err) {}
  };

  render() {
    const { email, errors } = this.state;
    const configAuthWrapper = {
      headline: "Recover Your Password",
    };

    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          {errors.length > 0 && (
            <ul className="errorline">
              {errors.map((e, index) => {
                return <li key={index}>{e}</li>;
              })}
            </ul>
          )}
          <form onSubmit={this.handleSubmit}>
            <FormInput
              className="forminput"
              type="email"
              name="email"
              value={email}
              placeholder="example@email.com"
              handleChange={this.handleChange}
            />
            <Button className="btnform" type="submit">
              Make a new Password
            </Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}
export default withRouter(EmailPassword);
