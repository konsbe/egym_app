import React from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const Task = ({ task, onDelete, onToggle }) => {

  const array = task.text.split(",");
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        <div>
          <a href={array[1]}>{array[0]}</a>
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
