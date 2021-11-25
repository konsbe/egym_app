import React, { useState } from "react";
import CountrySelector from "./CountrySelector";

import FormInput from "../Forms/FormInput";

import "./styles.css";

import Button from "./../Forms/Button";

const TrainerSignUp = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [type, setType] = useState("");
  const [trainerType, setTrainerType] = useState("");
  const [username, setUsername] = useState("");
  const [generalInfo, setGeneralInfo] = useState("");

  const pull_country = (data) => {
    console.log(data);
    setCountry(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  };
  const pull_region = (data) => {
    console.log(data);
    setRegion(data);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(country, region, type, trainerType, username, generalInfo);
    setCountry("");
    setRegion("");
    setType("");
    setUsername("");
    setTrainerType("");
    setGeneralInfo("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="trainersRegistrationForm">
        <div className="countrySelector">
          <CountrySelector func={pull_country} func2={pull_region} />
        </div>
        <select
          className="trainersFormInput gymTrainer"
          onChange={(e) => setType(e.target.value)}
        >
          <option>--Gym or Trainer--</option>
          <option value="gym">Gym</option>
          <option value="trainer">Trainer</option>
        </select>
        <div className="trainerUsername">
          <label>Username</label>
          <FormInput
            className="trainersFormInput"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          ></FormInput>
        </div>
        <label>Training Types</label>
        <div>
          <textarea
            className="trainerTextArea"
            type="textarea"
            rows="8"
            onChange={(e) => setTrainerType(e.target.value)}
          />
        </div>
        <label className="generalInfo">General info</label>
        <div>
          <textarea
            className="trainerTextArea"
            type="textarea"
            rows="8"
            onChange={(e) => setGeneralInfo(e.target.value)}
          />
        </div>
        <Button type="submit" className="enroll">
          {" "}
          Enrol as trainer{" "}
        </Button>
      </form>
    </div>
  );
};

export default TrainerSignUp;
