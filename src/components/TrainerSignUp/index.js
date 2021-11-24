import React, { useState } from "react";
import CountrySelector from "./CountrySelector";

import FormInput from "../Forms/FormInput";

import "./styles.css";

import Button from "./../Forms/Button";

const TrainerSignUp = () => {
  const [country, setCountry] = useState("");
  const [trainerType, setTrainerType] = useState("");
  const [username, setUsername] = useState("");
  const [generalInfo, setGeneralInfo] = useState("");

  return (
    <div>
      <form className="trainersRegistrationForm">
        <div className="countrySelector">
          <CountrySelector />
        </div>
        <select className="trainersFormInput gymTrainer">
          <option>--Gym or Trainer--</option>
          <option value="gym">Gym</option>
          <option value="trainer">Trainer</option>
        </select>
        <div className="trainerUsername">
          <label>Username</label>
          <FormInput className="trainersFormInput" type="text"></FormInput>
        </div>
        <label>Training Types</label>
        <div>
          <textarea className="trainerTextArea" type="textarea" rows="8" />
        </div>
        <label className="generalInfo">General info</label>
        <div>
          <textarea className="trainerTextArea" type="textarea" rows="8" />
        </div>
        <Button className="enroll"> Enrol as trainer </Button>
      </form>
    </div>
  );
};

export default TrainerSignUp;
