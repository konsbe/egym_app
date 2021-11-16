import React from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import { useSelector } from "react-redux";

const Task = ({ task, onDelete, onToggle, tasks }) => {
  const array = task.title.split(",");
  const reminder = false;
  const handleChange = (e) => {
    onToggle(task.id);
    console.log(task.id);
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
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        </div>
      </h3>
      <p onClick={() => onToggle(task.id)}>{task.day}</p>
    </div>
  );
};

export default Task;
