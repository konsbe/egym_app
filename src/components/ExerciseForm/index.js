import React from "react";
import "./styles.css";
import Button from "./../Forms/Button";

const ExerciseForm = ({ props, onAdd }) => {
  return (
    <div>
      <div>
        <Button onClick={onAdd}>ADD EXERCISE</Button>
      </div>
    </div>
  );
};

export default ExerciseForm;
