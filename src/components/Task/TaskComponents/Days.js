import React from "react";
// import Tasks from "./Tasks";
import Day from "./Day";
import { useState } from "react";
import AddDay from "../AddDay";




const Days = ({ week, onDelete }) => {
  // const { ...list } = Day();
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
    // tasks.map((task) => console.log(task));
  };
  // const newlist = [];
  const pull_data = (day, data) => {
    console.log(day, data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  };
  const handleonClick = (e) => {
    console.log(week);
  };

  // const handleAddClick = (e) => {
  //   console.log(week);
  // };

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
        <Day
          key={day.id}
          day={day}
          onDelete={deleteDay}
          onClick={handleonClick}
          func={pull_data}
        />
      ))}
      <button onClick={handleonClick} className="btnAdd btn-block">
        Add
      </button>
      {/* <button onClick={handleAddClick} className="btnAdd btn-block">
        Add
      </button> */}
    </div>
  );
};

export default Days;
