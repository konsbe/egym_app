import React from "react";
import "./styles.css";
import Button from "./../../Forms/Button";

const AddButton = ({ props, onAdd }) => {
  return (
    <div className="addButton">
      <div>
        <Button onClick={onAdd}>ADD EXERCISE</Button>
      </div>
    </div>
  );
};

export default AddButton;
