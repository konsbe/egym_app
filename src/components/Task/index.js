import Days from "./TaskComponents/Days";
// import AddDay from "./AddDay";
// import { useState } from "react";

import "./styles.css";

const Task = ({ onDelete }) => {
  return (
    <div className="postTask">
      <Days onDelete={onDelete} />
    </div>
  );
};

export default Task;
