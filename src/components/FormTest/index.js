import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUserStart } from "../../redux/User/user.actions";

import "./styles.css";
import { Link, useHistory } from "react-router-dom";

import AuthWrapper from "../AuthWrapper";
import Button from "./../Forms/Button";
import FormInput from "../Forms/FormInput";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
});

const FormTest = (props) => {
  const { currentUser, userErr } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [rightShoulder, setRightShoulder] = useState("");
  const [leftShoulder, setLeftShoulder] = useState("");
  const [rightPlentar, setRightPlentar] = useState("");
  const [leftPlentar, setLeftPlentar] = useState("");
  const [pelvic, setPelvic] = useState("");
  const [rightChest, setRightChest] = useState("");
  const [leftChest, setLeftChest] = useState("");
  const [rightBack, setRightBack] = useState("");
  const [leftBack, setLeftBack] = useState("");
  const [rightAnkle, setRightAnkle] = useState("");
  const [leftAnkle, setLeftAnkle] = useState("");
  const [rightAdductor, setRightAdductor] = useState("");
  const [leftAdductor, setLeftAdductor] = useState("");
  const [rightSoleAnkle, setRightSoleAnkle] = useState("");
  const [leftSoleAnkle, setLeftSoleAnkle] = useState("");
  const [rightDisplacement, setRightDisplacement] = useState("");
  const [leftDisplacement, setLeftDisplacement] = useState("");
  const [rightGluteus, setRightGluteus] = useState("");
  const [leftGluteus, setLeftGluteus] = useState("");
  const [goodmorning, setGoodmorning] = useState("");
  const [anterior, setAnterior] = useState("");
  const [posterior, setPosterior] = useState("");
  const [errors, setErrors] = useState([]);

  //   useEffect(() => {
  //     if (currentUser) {
  //       resetForm();

  //       history.push("/");
  //     }
  //   }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  const resetForm = () => {
    setRightShoulder("");
    setLeftShoulder("");
    setRightPlentar("");
    setLeftPlentar("");
    setPelvic("");
    setRightChest("");
    setLeftChest("");
    setRightBack("");
    setLeftBack("");
    setRightAnkle("");
    setLeftAnkle("");
    setRightAdductor("");
    setLeftAdductor("");
    setRightSoleAnkle("");
    setLeftSoleAnkle("");
    setRightDisplacement("");
    setLeftDisplacement("");
    setRightGluteus("");
    setLeftGluteus("");
    setGoodmorning("");
    setAnterior("");
    setPosterior("");
    setErrors([]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(
      signUpUserStart({
        rightShoulder,
        leftShoulder,
        rightPlentar,
        leftPlentar,
        pelvic,
        rightChest,
        leftChest,
        rightAnkle,
        leftAnkle,
        rightAdductor,
        leftAdductor,
        rightSoleAnkle,
        leftSoleAnkle,
        rightGluteus,
        leftGluteus,
        goodmorning,
        anterior,
        posterior,
      })
    );
  };

  const configAuthWrapper = {
    headline: "Completed Our Evaluation Test",
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
          <div className="labelTitle">Shoulders</div>
          <div className="inputs">
            <FormInput
              className="forminput"
              type="text"
              name="shoulder"
              value={leftShoulder}
              placeholder="Left Shoulder"
              handleChange={(e) => setLeftShoulder(e.target.value)}
            />
            <FormInput
              className="forminput"
              type="text"
              name="shoulder"
              value={rightShoulder}
              placeholder="Right Shoulder"
              handleChange={(e) => setRightShoulder(e.target.value)}
            />
          </div>
          <div className="labelTitle" style={{ marginTop: 10 }}>
            Plentar Inclenation
          </div>
          <div className="inputs">
            <FormInput
              className="forminput"
              type="text"
              name="plentar"
              value={leftPlentar}
              placeholder="Left Plentar"
              handleChange={(e) => setLeftPlentar(e.target.value)}
            />
            <FormInput
              className="forminput"
              type="text"
              name="plentar"
              value={rightPlentar}
              placeholder="Right Plentar"
              handleChange={(e) => setRightPlentar(e.target.value)}
            />
          </div>
          <div className="labelTitle" style={{ marginTop: 10 }}>
            Pelvic Tilt
          </div>
          <div>
            <FormInput
              className="forminput allspace"
              type="text"
              name="pelvic"
              value={pelvic}
              placeholder="Pelvic"
              handleChange={(e) => setPelvic(e.target.value)}
            />
          </div>
          <div className="labelTitle" style={{ marginTop: 10 }}>
            Chest Mobility
          </div>
          <div className="inputs">
            <FormInput
              className="forminput"
              type="text"
              name="chest"
              value={leftChest}
              placeholder="Left Chest"
              handleChange={(e) => setLeftChest(e.target.value)}
            />
            <FormInput
              className="forminput"
              type="text"
              name="chest"
              value={rightChest}
              placeholder="Right Chest"
              handleChange={(e) => setRightChest(e.target.value)}
            />
          </div>
          <div className="labelTitle" style={{ marginTop: 10 }}>
            Wide Back
          </div>
          <div className="inputs">
            <FormInput
              className="forminput"
              type="text"
              name="back"
              value={leftBack}
              placeholder="Left Wide Back"
              handleChange={(e) => setLeftBack(e.target.value)}
            />
            <FormInput
              className="forminput"
              type="text"
              name="back"
              value={rightBack}
              placeholder="Right Wide Back"
              handleChange={(e) => setRightBack(e.target.value)}
            />
          </div>
          <div className="labelTitle" style={{ marginTop: 10 }}>
            Ankle Mobility
          </div>
          <div className="inputs">
            <FormInput
              className="forminput"
              type="text"
              name="ankle"
              value={leftAnkle}
              placeholder="Left Ankle"
              handleChange={(e) => setLeftAnkle(e.target.value)}
            />
            <FormInput
              className="forminput"
              type="text"
              name="ankle"
              value={rightAnkle}
              placeholder="Right Ankle"
              handleChange={(e) => setRightAnkle(e.target.value)}
            />
          </div>
          <div className="labelTitle" style={{ marginTop: 10 }}>
            Goodmorning
          </div>
          <div>
            <FormInput
              className="forminput allspace"
              type="text"
              name="goodmorning"
              value={goodmorning}
              placeholder="Goodmorning"
              handleChange={(e) => setGoodmorning(e.target.value)}
            />
          </div>
          <div className="labelTitle" style={{ marginTop: 10 }}>
            Squat
          </div>
          <div className="nestedInputs">
            {/* <div className="subLabelTitle">Adductor:</div> */}
            <div className="subinputs">
              <FormInput
                className="forminput"
                type="text"
                name="adductor"
                value={leftAdductor}
                placeholder="Left Aductor"
                handleChange={(e) => setLeftAdductor(e.target.value)}
              />
              <FormInput
                className="forminput"
                type="text"
                name="adductor"
                value={rightAdductor}
                placeholder="Right Adductor"
                handleChange={(e) => setRightAdductor(e.target.value)}
              />
            </div>
          </div>
          <div className="nestedInputs">
            {/* <div className="subLabelTitle">Adductor:</div> */}
            <div className="subinputs">
              <FormInput
                className="forminput"
                type="text"
                name="soleAnkle"
                value={leftSoleAnkle}
                placeholder="Left Sole/ Ankle"
                handleChange={(e) => setLeftSoleAnkle(e.target.value)}
              />
              <FormInput
                className="forminput"
                type="text"
                name="soleAnkle"
                value={rightSoleAnkle}
                placeholder="Right Sole/ Ankle"
                handleChange={(e) => setRightSoleAnkle(e.target.value)}
              />
            </div>
          </div>
          <div className="nestedInputs">
            {/* <div className="subLabelTitle">Adductor:</div> */}
            <div className="subinputs">
              <FormInput
                className="forminput"
                type="text"
                name="leftDisplacement"
                value={leftDisplacement}
                placeholder="Left Pelvic Displacement"
                handleChange={(e) => setLeftDisplacement(e.target.value)}
              />
              <FormInput
                className="forminput"
                type="text"
                name="rightDisplacement"
                value={rightDisplacement}
                placeholder="Right Pelvic Displacement"
                handleChange={(e) => setRightDisplacement(e.target.value)}
              />
            </div>
          </div>
          <div className="labelTitle" style={{ marginTop: 10 }}>
            Single Leg Squat
          </div>
          <div className="nestedInputs">
            {/* <div className="subLabelTitle">Adductor:</div> */}
            <div className="subinputs">
              <FormInput
                className="forminput"
                type="text"
                name="leftGluteus"
                value={leftGluteus}
                placeholder="Left Medius Gluteus"
                handleChange={(e) => setLeftGluteus(e.target.value)}
              />
              <FormInput
                className="forminput"
                type="text"
                name="rightGluteus"
                value={rightGluteus}
                placeholder="Right Medius Gluteus"
                handleChange={(e) => setRightGluteus(e.target.value)}
              />
            </div>
          </div>

          {/* <div className="subLabelTitle">Adductor:</div> */}
          <FormInput
            className="forminput allspace"
            type="text"
            name="anterior"
            value={anterior}
            placeholder="Anterior Kinetics"
            handleChange={(e) => setAnterior(e.target.value)}
          />
          {/* <div className="subLabelTitle">Adductor:</div> */}
          <FormInput
            className="forminput allspace"
            type="text"
            name="posterior"
            value={posterior}
            placeholder="Posterior Kinetics"
            handleChange={(e) => setPosterior(e.target.value)}
          />
          {/* <FormInput
            className="forminput"
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            handleChange={(e) => setLastName(e.target.value)}
          /> */}

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

export default FormTest;
