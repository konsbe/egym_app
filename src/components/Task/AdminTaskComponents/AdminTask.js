import React, { useEffect, useState } from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import { useSelector } from "react-redux";

const Task = ({ task, onDelete, onToggle, tasks }) => {
  const array = task.title.split(",");
  // const [myArray, setMyArray] = useState(task.myReps);
  const reminder = false;
  const handleChange = (e) => {
    onToggle(task.id);
    console.log(task.id);
  };
  // console.log(task);
  useEffect(() => {
    // setMyArray(task.myReps);
    // myArray.map((i) => console.log(i));
    // console.log(myArray, "looolololololololololol");
  }, []);

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
      {/* {Object.keys(tasks.myReps).map(function (key, index) { */}
      {task.myReps.map((sets) => (
        <p>
          <span>
            {sets[0]} x {sets[1]} x {sets[2]}
            {/* {task.myReps} */}
          </span>
        </p>
      ))}
      {/* })} */}
    </div>
  );
};

export default Task;
