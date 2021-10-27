import Days from "./TaskComponents/Days";
import Weeks from "./TaskComponents/Weeks";

import "./styles.css";

const Task = ({ onDelete }) => {
  return (
    <div className="postTask">
      <Weeks onDelete={onDelete} />
    </div>
  );
};

export default Task;
