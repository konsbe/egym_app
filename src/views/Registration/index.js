import React from "react";
import "./styles.css";
import Button from "./../../components/Forms/Button";

const Registration = (props) => {
  return (
    <div className="registration">
      <h1>Registration Form</h1>
      <form>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="text" placeholder="Nick Name"></input>
        <input type="email" placeholder="example@email.com"></input>
        <input type="date" placeholder="Your Birth Date"></input>
        <input type="password" placeholder="Password"></input>
        <input type="password" placeholder="Confirm Your Password"></input>
        {/* <button type="submit"> Sign Up </button> */}
        <Button className="btnsignup">Sign Up</Button>
      </form>
    </div>
  );
};

export default Registration;
