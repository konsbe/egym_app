import React from "react";
import AdminTask from "./AdminTask";

const Tasks = ({ tasks, onDelete, onToggle, func }) => {
  // Object.keys(tasks).map(function (key, index) {
  //   if (key > 0) {
  //     console.log(tasks[key], "ggrgrgrgrrggrgrgrrgrgrgrgr");
  //   }
  // });

  return (
    <div>
      {tasks.map((task, index) => (
        <AdminTask
          key={index}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
