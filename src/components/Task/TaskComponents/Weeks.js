import React from "react";
import {
  useState,
  // , useRef
} from "react";
import Days from "./Days";
import AddWeek from "../AddWeek";


import { useSelector } from "react-redux";


const mapState = ({ user, trainingData }) => ({
  currentUser: user.currentUser,
  userWeeks: trainingData.trainingWeeks,
});

const Weeks = ({ onDelete }) => {
  const { currentUser } = useSelector(mapState);
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
    <div>
      <div
        className="weeksContainer"
        //   onClick={() => setShowWeek(!showWeek)}
      >
        {userWeeks.map((week) => (
          <Days
            onDelete={onDelete}
            key={week.id}
            week={week}
            onDelete={deleteWeek}
          />
        ))}
      </div>
    </div>
  );
};


export default Weeks;
