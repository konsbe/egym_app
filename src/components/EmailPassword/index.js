import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import "./styles.css";
import { auth } from "./../../firebase/utils";

import AuthWrapper from "./../AuthWrapper";
import Button from "./../Forms/Button";
import FormInput from "./../Forms/FormInput";

const EmailPassword = (props) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const resetForm = () => {
    setEmail("");
    setErrors("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        url: "http://localhost:3000/login",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          props.history.push("/login");
          //   console.log("Password Reset");
        })
        .catch(() => {
          const err = ["Email not Found"];
          setErrors(err);
          //   console.log("Something went Wrong");
        });
    } catch (err) {}
  };

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
        <form onSubmit={handleSubmit}>
          <FormInput
            className="forminput"
            type="email"
            name="email"
            value={email}
            placeholder="example@email.com"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <Button className="btnform" type="submit">
            Make a new Password
          </Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(EmailPassword);
