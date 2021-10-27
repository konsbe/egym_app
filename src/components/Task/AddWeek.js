import React from "react";
import Button from "./TaskComponents/Button";
// import App from "./App";
// import Header from "./components/Header";
// import AddTask from "./AddTask";
// import Tasks from "./components/Tasks";
import { useState } from "react";
const AddWeek = ({ onAdd }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please add Week");
      return;
    }
    onAdd({ text });
    setText("");
  };

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <header className="headerWeek">
          <h2>Add A Week</h2>
          <Button
            color="green"
            text="Add"
            className="btn btn-block"
            onChange={(e) => setText(e.target.value)}
          />
        </header>
        <div className="form-control">
          <label>Week</label>
          <input
            type="text"
            placeholder="Week"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <input type="submit" value="Save Week" className="btn btn-block" />
      </form>
    </>
  );
};

export default AddWeek;
