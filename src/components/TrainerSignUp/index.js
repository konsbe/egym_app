import React, { Component } from "react";
import CountrySelector from "./CountrySelector";

import FormInput from "../Forms/FormInput";

import "./styles.css";
import { Form } from "react-bootstrap";

const TrainerSignUp = () => {
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
        <div>
          <label>Username</label>
          <FormInput className="trainersFormInput" type="text"></FormInput>
        </div>
        <div>
          <label>Training Types</label>
          <FormInput className="trainersFormInput" type="textarea"></FormInput>
        </div>
        <div>
          <label>General info</label>
          <FormInput className="trainersFormInput" type="textarea"></FormInput>
        </div>
      </form>
    </div>
  );
};

export default TrainerSignUp;
