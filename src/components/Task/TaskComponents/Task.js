import React from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import { useSelector } from "react-redux";

import { checkUserIsAdmin } from "../../../Utils";

const mapState = ({ user }) => ({
  users: user.currentUser,
});

const Task = ({ task, onDelete, onToggle, tasks }) => {
  const array = task.title.split(",");

  const handleChange = (e) => {
    onToggle(task.id);

    // const scheduleID = userScheduleData[0].documentID;
    // const documenID = week.documenID;
    // const num = day[0].id;

    // dispatch(updateUserReminder({ reminder, scheduleID, documenID, num, id }));
  };

  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        <div>
          <a href={array[1]}>
            <img className="imageExercise" src={array[2]} />
            <span className="exercsiseName">{array[0]}</span>
          </a>
        </div>

        <div>
          <span>
            <input
              type="checkbox"
              defaultChecked={task.reminder}
              onChange={handleChange}
            ></input>
            {/* <label>Pay</label> */}
          </span>
        </div>
      </h3>
      <p onClick={() => onToggle(task.id)}>{task.day}</p>
    </div>
  );
};

export default Task;
