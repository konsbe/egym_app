import React from "react";
import "./styles.css";
import Button from "./../../Forms/Button";

const AddButton = ({ props, onAdd, children }) => {
  return (
    <div className="addButton">
      <div>
        <Button onClick={onAdd}>{children}</Button>
      </div>
    </div>
  );
};

export default AddButton;
