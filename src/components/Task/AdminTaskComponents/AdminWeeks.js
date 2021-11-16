import React from "react";
import {
  useState,
  // , useRef
} from "react";
import AdminDays from "./AdminDays";
import AddWeek from "../AddWeek";

import { useSelector } from "react-redux";

const mapState = ({ trainingData }) => ({
  userWeeks: trainingData.trainingWeeks,
});

const Weeks = ({ onDelete }) => {
  const { userWeeks } = useSelector(mapState);

  //   const [showWeek, setShowWeek] = useState(false);
  const [weeks, setWeeks] = useState([
    // {
    //   id: 1,
    //   text: "Week 1",
    //   day: "Feb 5th at 2:30pm",
    //   reminder: true,
    // },
    //
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

  // userWeeks.map((week) =>
  //   console.log(week, "frfrrffrfrfrfrfrfrrfrffrfrrffrfrrffrfrfrfrfr")
  // );

  //   const nodeRef = useRef(null);

  return (
    <div className="containerMain">
      <div className="containerWeek">
        <AddWeek onAdd={addWeek} onDelete={deleteWeek} />
      </div>

      <div
        className="weeksContainer"
        //   onClick={() => setShowWeek(!showWeek)}
      >
        {weeks.map((week) => (
          <AdminDays
            onDelete={onDelete}
            key={week.id}
            week={week}
            onDelete={deleteWeek}
          />
        ))}
        {/* {userWeeks.map((week) => (
            <Days
              onDelete={onDelete}
              key={week.id}
              week={week}
              onDelete={deleteWeek}
            />
          ))} */}
      </div>
    </div>
  );
};

export default Weeks;
