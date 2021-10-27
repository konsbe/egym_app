import React from "react";
import {
  useState,
  // , useRef
} from "react";
import Days from "./Days";
import AddWeek from "../AddWeek";

const Weeks = ({ onDelete }) => {
  //   const nodeRef = useRef(null);
  //   const [showWeek, setShowWeek] = useState(false);
  const [weeks, setWeeks] = useState([
    {
      id: 1,
      text: "Week 1",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
  ]);
  const addWeek = (week) => {
    const id = weeks.length + 1;
    const newWeek = { id, ...week };
    setWeeks([...weeks, newWeek]);
  };

  const deleteWeek = (id) => {
    // console.log("delete", id);

    setWeeks(weeks.filter((week) => week.id !== id));
  };

  return (
    <>
      <div className="containerWeek">
        <AddWeek onAdd={addWeek} onDelete={deleteWeek} />
      </div>

      <div
        className="weeksContainer"
        //   onClick={() => setShowWeek(!showWeek)}
      >
        {weeks.map((week) => (
          <Days
            onDelete={onDelete}
            key={week.id}
            week={week}
            onDelete={deleteWeek}
          />
        ))}
      </div>
      {/* </div> */}
    </>
  );
};

export default Weeks;
