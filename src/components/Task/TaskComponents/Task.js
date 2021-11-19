import React, { useEffect } from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import { useDispatch, useSelector } from "react-redux";
import { checkUserIsAdmin } from "../../../Utils";
import { updateUserReminder } from "./../../../redux/WeekTraining/weekTraining.actions";

const mapState = ({ user }) => ({
  users: user.currentUser,
});

const Task = ({
  task,
  onDelete,
  onToggle,
  tasks,
  num,
  documenID,
  scheduleID,
}) => {
  const dispatch = useDispatch();
  const array = task.title.split(",");
  const handleChange = (e) => {
    onToggle(task.id);
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
          </span>
        </div>
      </h3>
      <p onClick={() => onToggle(task.id)}>{task.day}</p>
    </div>
  );
};

export default Task;
