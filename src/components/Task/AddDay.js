import React from "react";
import Button from "./TaskComponents/Button";

import { useState } from "react";
const AddDay = ({ onAdd, week }) => {
  const [title, setTitle] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("please add Day");
      return;
    }
    onAdd({ title });
    setTitle("");
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
            onChange={(e) => setTitle(e.target.value)}
          />
        </header>
        <div className="form-control">
          <label>Day</label>
          <input
            type="text"
            placeholder="Day"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <input type="submit" value="Save Day" className="btnTask btn-block" />
      </form>
    </>
  );
};

export default AddDay;
