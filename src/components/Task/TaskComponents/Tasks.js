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


  return (
    <div>
      <Task
        task={tasks}
        onDelete={onDelete}
        onToggle={onToggle}
        scheduleID={scheduleID}
        documenID={documenID}
        // reminder={!day[id].reminder}
        num={num}
      />
    </div>
  );
};


export default Tasks;
