import React from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import { useSelector } from "react-redux";

import { checkUserIsAdmin } from "../../../Utils";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  users: user.currentUser,
});

const Task = ({ task, onDelete, onToggle, tasks }) => {
  const { currentUser } = useSelector(mapState);
  const array = task.title.split(",");

  const handleChange = (e) => {
    onToggle(task.id);
  };

  const isAdmin = checkUserIsAdmin(currentUser);

  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        <div>
          <a href={array[1]}>
            <img className="imageExercise" src={array[2]} />
            {array[0]}
          </a>
        </div>
        {!isAdmin && (
          <div>
            <span>
              <input
                type="checkbox"
                checked={task.reminder}
                onChange={handleChange}
              ></input>
              {/* <label>Pay</label> */}
            </span>
          </div>
        )}

        {isAdmin && (
          <div>
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(task.id)}
            />
          </div>
        )}
      </h3>
      <p onClick={() => onToggle(task.id)}>{task.day}</p>
    </div>
  );
};

export default Task;
