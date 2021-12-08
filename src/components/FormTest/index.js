import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDataStart } from "../../redux/User/user.actions";

import "./styles.css";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../customHooks";

import AuthWrapper from "../AuthWrapper";
import Button from "./../Forms/Button";
import FormInput from "../Forms/FormInput";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
});

const FormTest = (props) => {
  // const userDetails = useAuth();
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
  const item = [];
  for (let i = 0; i <= 3; i++) {
    item.push(i);
  }

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
      addDataStart({
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
        birthDay: currentUser.birthDay,
        lastProgram: currentUser.lastProgram,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        genre: currentUser.genre,
        height: currentUser.height,
        weight: currentUser.weight,
        injuries: currentUser.injuries,
        gear: currentUser.gear,
        email: currentUser.email,
        createdDate: currentUser.createdDate,
        userRoles: currentUser.userRoles,
        payment: currentUser.payment,
        month: currentUser.month,
      })
    );
  };

  const configAuthWrapper = {
    headline: "Completed Our Evaluation Test",
  };

  return (
    <div>
      <div id="formTestScroll"></div>
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
            <div className="nestedInputs">
              {/* <div className="subLabelTitle">Adductor:</div> */}
              <div className="subinputs">
                <select
                  className="onSelectTest"
                  onChange={(e) => setLeftShoulder(e.target.value)}
                >
                  <option key={-1}>--Left Shoulder--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="onSelectTest"
                  onChange={(e) => setRightShoulder(e.target.value)}
                >
                  <option key={-1}>--Right Shoulder--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                {/* <FormInput
                  className="forminput"
                  type="text"
                  name="shoulder"
                  value={leftShoulder}
                  placeholder="Left Shoulder"
                  handleChange={(e) => setLeftShoulder(e.target.value)}
                /> */}
                {/* <FormInput
                  className="forminput"
                  type="text"
                  name="shoulder"
                  value={rightShoulder}
                  placeholder="Right Shoulder"
                  handleChange={(e) => setRightShoulder(e.target.value)}
                /> */}
              </div>
            </div>
            <div className="labelTitle" style={{ marginTop: 10 }}>
              Plentar Inclenation
            </div>
            <div className="nestedInputs">
              {/* <div className="subLabelTitle">Adductor:</div> */}
              <div className="subinputs">
                <select
                  className="onSelectTest"
                  onChange={(e) => setLeftPlentar(e.target.value)}
                >
                  <option key={-1}>--Left Plentar--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="onSelectTest"
                  onChange={(e) => setRightPlentar(e.target.value)}
                >
                  <option key={-1}>--Right Plentar--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                {/* <FormInput
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
                /> */}
              </div>
            </div>
            <div className="labelTitle" style={{ marginTop: 10 }}>
              Pelvic Tilt
            </div>
            <div>
              <select
                className="onSelectTest"
                onChange={(e) => setPelvic(e.target.value)}
              >
                <option key={-1}>--Pelvic--</option>
                {item.map((i, index) => {
                  return (
                    <option key={i.toString()} value={i}>
                      {i}
                    </option>
                  );
                })}
              </select>
              {/* <FormInput
                className="forminput allspace"
                type="text"
                name="pelvic"
                value={pelvic}
                placeholder="Pelvic"
                handleChange={(e) => setPelvic(e.target.value)}
              /> */}
            </div>
            <div className="labelTitle" style={{ marginTop: 10 }}>
              Chest Mobility
            </div>
            <div className="nestedInputs">
              {/* <div className="subLabelTitle">Adductor:</div> */}
              <div className="subinputs">
                <select
                  className="onSelectTest"
                  onChange={(e) => setLeftChest(e.target.value)}
                >
                  <option key={-1}>--Left Chest--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="onSelectTest"
                  onChange={(e) => setRightChest(e.target.value)}
                >
                  <option key={-1}>--Right Chest--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                {/* <FormInput
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
                /> */}
              </div>
            </div>
            <div className="labelTitle" style={{ marginTop: 10 }}>
              Wide Back
            </div>
            <div className="nestedInputs">
              {/* <div className="subLabelTitle">Adductor:</div> */}
              <div className="subinputs">
                <select
                  className="onSelectTest"
                  onChange={(e) => setLeftBack(e.target.value)}
                >
                  <option key={-1}>--Left Back--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="onSelectTest"
                  onChange={(e) => setRightBack(e.target.value)}
                >
                  <option key={-1}>--Right Back--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                {/* <FormInput
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
                /> */}
              </div>
            </div>
            <div className="labelTitle" style={{ marginTop: 10 }}>
              Ankle Mobility
            </div>
            <div className="nestedInputs">
              {/* <div className="subLabelTitle">Adductor:</div> */}
              <div className="subinputs">
                <select
                  className="onSelectTest"
                  onChange={(e) => setLeftAnkle(e.target.value)}
                >
                  <option key={-1}>--Left Ankle--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="onSelectTest"
                  onChange={(e) => setRightAnkle(e.target.value)}
                >
                  <option key={-1}>--Right Ankle--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                {/* <FormInput
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
                /> */}
              </div>
            </div>

            <div className="labelTitle" style={{ marginTop: 10 }}>
              Goodmorning
            </div>
            <div>
              <select
                className="onSelectTest"
                onChange={(e) => setGoodmorning(e.target.value)}
              >
                <option key={-1}>--Goodmorning--</option>
                {item.map((i, index) => {
                  return (
                    <option key={i.toString()} value={i}>
                      {i}
                    </option>
                  );
                })}
              </select>
              {/* <FormInput
                className="forminput allspace"
                type="text"
                name="goodmorning"
                value={goodmorning}
                placeholder="Goodmorning"
                handleChange={(e) => setGoodmorning(e.target.value)}
              /> */}
            </div>
            <div className="labelTitle" style={{ marginTop: 10 }}>
              Squat
            </div>
            <div className="nestedInputs">
              {/* <div className="subLabelTitle">Adductor:</div> */}
              <div className="subinputs">
                <select
                  className="onSelectTest"
                  onChange={(e) => setLeftAdductor(e.target.value)}
                >
                  <option key={-1}>--Left Adductor--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="onSelectTest"
                  onChange={(e) => setRightAdductor(e.target.value)}
                >
                  <option key={-1}>--Right Adductor--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                {/* <FormInput
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
                /> */}
              </div>
            </div>
            <div className="nestedInputs">
              {/* <div className="subLabelTitle">Adductor:</div> */}
              <div className="subinputs">
                <select
                  className="onSelectTest"
                  onChange={(e) => setLeftSoleAnkle(e.target.value)}
                >
                  <option key={-1}>--Left Sole Ankle--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="onSelectTest"
                  onChange={(e) => setRightSoleAnkle(e.target.value)}
                >
                  <option key={-1}>--Right Sole Ankle--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                {/* <FormInput
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
                /> */}
              </div>
            </div>
            <div className="nestedInputs">
              {/* <div className="subLabelTitle">Adductor:</div> */}
              <div className="subinputs">
                <select
                  className="onSelectTest"
                  onChange={(e) => setLeftDisplacement(e.target.value)}
                >
                  <option key={-1}>--Left Displacement--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="onSelectTest"
                  onChange={(e) => setRightDisplacement(e.target.value)}
                >
                  <option key={-1}>--Right Displacement--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                {/* <FormInput
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
                /> */}
              </div>
            </div>
            <div className="labelTitle" style={{ marginTop: 10 }}>
              Single Leg Squat
            </div>
            <div className="nestedInputs">
              {/* <div className="subLabelTitle">Adductor:</div> */}
              <div className="subinputs">
                <select
                  className="onSelectTest"
                  onChange={(e) => setLeftGluteus(e.target.value)}
                >
                  <option key={-1}>--Left Gluteus--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="onSelectTest"
                  onChange={(e) => setRightGluteus(e.target.value)}
                >
                  <option key={-1}>--Right Gluteus--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
                {/* <FormInput
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
                /> */}
              </div>
            </div>

            {/* <div className="subLabelTitle">Adductor:</div> */}
            <div className="labelTitle" style={{ marginTop: 10 }}>
              Anterior Kinetics
            </div>
            <div className="nestedInputs">
              {/* <div className="subLabelTitle">Adductor:</div> */}
              <div className="subinputs">
                <select
                  className="onSelectTest"
                  onChange={(e) => setAnterior(e.target.value)}
                >
                  <option key={-1}>--Anterior Kinetics--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {/* <FormInput
              className="forminput allspace"
              type="text"
              name="anterior"
              value={anterior}
              placeholder="Anterior Kinetics"
              handleChange={(e) => setAnterior(e.target.value)}
            /> */}
            {/* <div className="subLabelTitle">Adductor:</div> */}
            {/* <FormInput
              className="forminput allspace"
              type="text"
              name="posterior"
              value={posterior}
              placeholder="Posterior Kinetics"
              handleChange={(e) => setPosterior(e.target.value)}
            /> */}
            <div className="labelTitle" style={{ marginTop: 10 }}>
              Posterior Kinetics
            </div>
            <div className="nestedInputs">
              {/* <div className="subLabelTitle">Adductor:</div> */}
              <div className="subinputs">
                <select
                  className="onSelectTest"
                  onChange={(e) => setPosterior(e.target.value)}
                >
                  <option key={-1}>--Posterior Kinetics--</option>
                  {item.map((i, index) => {
                    return (
                      <option key={i.toString()} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {/* <FormInput
            className="forminput"
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            handleChange={(e) => setLastName(e.target.value)}
          /> */}

            <Button type="submit" className="btnform">
              Submit Form
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
    </div>
  );
};

export default FormTest;
