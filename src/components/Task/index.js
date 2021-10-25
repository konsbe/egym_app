import Days from "./TaskComponents/Days";


import "./styles.css";

const Task = ({ onDelete }) => {
  return (
    <div className="postTask">
      <Days onDelete={onDelete} />
    </div>
  );
};

export default Task;
