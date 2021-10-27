import React from "react";
// import Tasks from "./Tasks";
import Day from "./Day";
import { useState } from "react";
import AddDay from "../AddDay";




const Days = ({ day, week, onDelete }) => {
  const [days, setDays] = useState([
    {
      id: 1,
      text: "Day 1 strong",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Day 2 lightweight",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);
  const addDay = (day) => {
    const id = days.length + 1;
    const newDay = { id, ...day };
    setDays([...days, newDay]);
  };

  // Delete Day
  const deleteDay = (id) => {
    // console.log("delete", id);
    setDays(days.filter((day) => day.id !== id));
  };

  return (
    <div className="containerone">
      <div className="containerone">
        <h2 className="weekHeader">{week.text}</h2>

        <AddDay onAdd={addDay} />
        <button
          className="weekDelete btn-block"
          onClick={() => onDelete(week.id)}
        >
          Delete
        </button>
      </div>
      {days.map((day) => (
        <Day key={day.id} day={day} onDelete={deleteDay} />
      ))}
      <button className="btnAdd btn-block">Add</button>
    </div>
  );
};

export default Days;
