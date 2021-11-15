import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  Object.keys(tasks).map(function (key, index) {
    if (key > 0) {
      console.log(tasks[key], "ggrgrgrgrrggrgrgrrgrgrgrgr");
    }
  });
  return (
    <div>
      {/* {tasks.map((task) => ( */}
      {/* {Object.keys(tasks).map(function (key, index) {
        {
          { */}
      {/* if (key > 0) */}
      {/* } */}
      {/* return ( */}
      <Task
        // key={key}
        task={tasks}
        onDelete={onDelete}
        onToggle={onToggle}
      />
      {/* );
        }
      })} */}
      {/* ))} */}
    </div>
  );
};

export default Tasks;
