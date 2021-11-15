import React from "react";
import Task from "./Task";
import { checkUserIsAdmin } from "../../../Utils";
import { useSelector } from "react-redux";
const mapState = ({ user, trainingData }) => ({
  currentUser: user.currentUser,
});
const Tasks = ({ tasks, onDelete, onToggle, func }) => {
  const { currentUser } = useSelector(mapState);
  // Object.keys(tasks).map(function (key, index) {
  //   if (key > 0) {
  //     console.log(tasks[key], "ggrgrgrgrrggrgrgrrgrgrgrgr");
  //   }
  // });
  const isAdmin = checkUserIsAdmin(currentUser);
  if (isAdmin) {
    return (
      <div>
        {tasks.map((task) => (
          <Task
            // key={key}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>
    );
  } else {
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
  }
};

export default Tasks;
