import React from "react";
import Button from "./TaskComponents/Button";

import { useState } from "react";
const AddDay = ({ onAdd, week }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please add Day");
      return;
    }
    onAdd({ text });
    setText("");
  };

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <header className="headerAddDay">
          <h2>Add A Day</h2>
          <Button
            color="green"
            text="Add"
            className="btnTask btn-block"
            onChange={(e) => setText(e.target.value)}
          />

        </header>
        <div className="form-control">
          <label>Day</label>
          <input
            type="text"
            placeholder="Day"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <input type="submit" value="Save Day" className="btnTask btn-block" />
      </form>
    </>
  );
};

export default AddDay;
