import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUserStart } from "../../redux/User/user.actions";

import "./styles.css";
import { Link, useHistory } from "react-router-dom";

import AuthWrapper from "../AuthWrapper";
import Button from "./../Forms/Button";
import FormInput from "../Forms/FormInput";
import FormSelect from "../Forms/FormSelect";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
});

const SignUp = (props) => {
  const { currentUser, userErr } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [genre, setGenre] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [email, setEmail] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [gear, setGear] = useState("");
  const [injuries, setInjuries] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [payment, setPayment] = useState(false);
  const [month, setMonth] = useState(false);

  useEffect(() => {
    if (currentUser) {
      resetForm();

      history.push("/");
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
    setGenre("");
    setHeight("");
    setWeight("");
    // setNickName("");
    setEmail("");
    setBirthDay("");
    setPassword("");
    setConfirmPassword("");
    setInjuries("");
    setGear("");
    setErrors([]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(
      signUpUserStart({
        firstName,
        lastName,
        genre,
        height,
        weight,
        email,
        birthDay,
        password,
        confirmPassword,
        injuries,
        gear,
        payment,
        month,
      })
    );
  };

  const configAuthWrapper = {
    headline: "Registration",
  };

  return (
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
          <p className="textLabels">Birthday:</p>
          <FormInput
            className="forminput"
            type="date"
            name="birthDay"
            value={birthDay}
            handleChange={(e) => setBirthDay(e.target.value)}
          />
          <p className="textLabels">Genre:</p>
          <FormSelect
            // label="Genre"
            className="formSelect"
            // default="man"
            options={[
              {
                value: "-",
                // default: "man",
                name: "-",
              },
              {
                value: "man",
                // default: "man",
                name: "man",
              },
              {
                value: "woman",
                name: "woman",
              },
            ]}
            // defaultValue:man
            // placeholder="Genre"
            handleChange={(e) => setGenre(e.target.value)}
          />
          <FormInput
            className="forminput"
            type="text"
            name="height"
            value={height}
            placeholder="Height in cm"
            handleChange={(e) => setHeight(e.target.value)}
          />
          <FormInput
            className="forminput"
            type="text"
            name="weight"
            value={weight}
            placeholder="Weight in kilos"
            handleChange={(e) => setWeight(e.target.value)}
          />
          <p className="textLabels">Please write any injuries here:</p>
          <textarea
            className="formtext"
            type="textarea"
            name="injuries"
            rows="8"
            value={injuries}
            placeholder="ruptured right meniscus, tendonitis of the right wrist, etc"
            onChange={(e) => setInjuries(e.target.value)}
          />
          <p className="textLabels">Please write your training gear here:</p>
          <textarea
            className="formtext"
            type="textarea"
            name="gear"
            rows="8"
            value={gear}
            placeholder="gym membership, exercise treadmills, bodyweight, swimming pool, dumbbells 2x5kg-2x10kg, etc.."
            onChange={(e) => setGear(e.target.value)}
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
          {/* <textarea className="forminput" rows="5" /> */}
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

export default SignUp;
