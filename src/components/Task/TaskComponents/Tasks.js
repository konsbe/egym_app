import React from "react";
import Task from "./Task";

const mapState = ({ user, trainingData }) => ({
  currentUser: user.currentUser,
});
const Tasks = ({
  tasks,
  onDelete,
  onToggle,
  func,
  num,
  documenID,
  scheduleID,
}) => {
  // Object.keys(tasks).map(function (key, index) {
  //   if (key > 0) {
  //     console.log(tasks[key], "ggrgrgrgrrggrgrgrrgrgrgrgr");
  //   }
  // });

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
        scheduleID={scheduleID}
        documenID={documenID}
        // reminder={!day[id].reminder}
        num={num}
      />
      {/* );
        }
      })} */}
      {/* ))} */}
    </div>
  );
};


export default Tasks;
