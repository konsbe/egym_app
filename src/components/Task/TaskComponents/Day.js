import Header from "./Header";
import Tasks from "./Tasks";

import { useState } from "react";

import AddTask from "../AddTask";

import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const Day = ({ day, onDelete }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);
  //Add Task

  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      {/* <Day days={days} /> */}
      <div className="basiContainer">
        <div className="headerAddDay">
          <h2 style={{ fontSize: 30 }}>{day.text} </h2>
          <FaTimes
            style={{ color: "black", cursor: "pointer", height: 20 }}
            onClick={() => onDelete(day.id)}
          />
        </div>
        <Header />
        <AddTask onAdd={addTask} />
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} />
        ) : (
          "No tasks"
        )}
      </div>
    </div>
  );
};

export default Day;
