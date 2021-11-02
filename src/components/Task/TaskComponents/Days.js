import React from "react";
// import Tasks from "./Tasks";
import Day from "./Day";
import { useState, useRef } from "react";
import AddDay from "../AddDay";

import { CSSTransition } from "react-transition-group";

import { useSelector } from "react-redux";

import { checkUserIsAdmin } from "../../../Utils";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Days = ({ week, onDelete }) => {
  // const { ...list } = Day();
  const { currentUser } = useSelector(mapState);
  const [showWeek, setShowWeek] = useState(false);
  const nodeRef = useRef(null);
  const [days, setDays] = useState([
    {
      id: 1,
      title: "Day 1 strong",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      title: "Day 2 lightweight",
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
  const weekProgram = [];
  const pull_data = (data) => {
    weekProgram.push(data);
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  };
  const handleonClick = (e) => {
    weekProgram.unshift(week);
    console.log(week);
  };

  const handleAddClick = (e) => {
    console.log(weekProgram);
  };

  const isAdmin = checkUserIsAdmin(currentUser);

  if (isAdmin) {
    return (
      <div className="containerone">
        <h2 className="weekHeader" onClick={() => setShowWeek(!showWeek)}>
          {week.text}
        </h2>
        <CSSTransition
          // in={true}
          nodeRef={nodeRef}
          in={showWeek}
          appear={true}
          timeout={500}
          classNames="transition"
          unmountOnExit
          // unmountOnEnter
        >
          <div ref={nodeRef}>
            <div className="containerone">
              {currentUser.userRoles[1] && (
                <div>
                  <AddDay onAdd={addDay} />
                  <button
                    className="weekDelete btn-block"
                    onClick={() => onDelete(week.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
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
            <button onClick={handleAddClick} className="btnAddWeek btn-block">
              Add
            </button>
          </div>
        </CSSTransition>
      </div>
    );
  } else {
    return (
      <div className="containerone">
        <h2 className="weekHeader" onClick={() => setShowWeek(!showWeek)}>
          {week.text}
        </h2>
        <CSSTransition
          // in={true}
          nodeRef={nodeRef}
          in={showWeek}
          appear={true}
          timeout={500}
          classNames="transition"
          unmountOnExit
          // unmountOnEnter
        >
          <div ref={nodeRef}>
            {days.map((day) => (
              <Day
                key={day.id}
                day={day}
                onDelete={deleteDay}
                onClick={handleonClick}
                func={pull_data}
              />
            ))}

          </div>
        </CSSTransition>
      </div>
    );
  }
};
export default Days;
