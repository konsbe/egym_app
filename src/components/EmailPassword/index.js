import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordStart } from "../../redux/User/user.actions";
import { useHistory } from "react-router-dom";

import "./styles.css";

import AuthWrapper from "./../AuthWrapper";
import Button from "./../Forms/Button";
import FormInput from "./../Forms/FormInput";

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userErr: user.userErr,
});

const EmailPassword = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { resetPasswordSuccess, userErr } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (resetPasswordSuccess) {
      history.push("/login");
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPasswordStart({ email }));
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

export default EmailPassword;
