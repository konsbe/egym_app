import Header from "./Header";
import Tasks from "./Tasks";

import { useState, useRef, useEffect } from "react";

import AddTask from "../AddTask";

import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import { CSSTransition } from "react-transition-group";

const Day = ({ day, onDelete }) => {
  const [showDay, setShowDay] = useState(false);
  const ref = useRef(showDay);
  const nodeRef = useRef(null);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Deadlift",
      day: "3*50 3*70 3*100 3*150",
      reminder: true,
    },
    {
      id: 2,
      text: "Shoulder Press",
      day: "3*10 3*20 3*40 3*60",
      reminder: false,
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

  //Reminder
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  // const ref = { showDay };
  return (
    <div>
      {/* <Day days={days} /> */}
      <div className="basiContainer">
        <div className="headerAddDay">
          <h2 style={{ fontSize: 30 }} onClick={() => setShowDay(!showDay)}>
            {day.text}{" "}
          </h2>
          <FaTimes
            style={{ color: "black", cursor: "pointer", height: 20 }}
            onClick={() => onDelete(day.id)}
          />
        </div>
        {/* {showDay && ( */}

        <CSSTransition
          // in={true}
          nodeRef={nodeRef}
          in={showDay}
          appear={true}
          timeout={500}
          classNames="transition"
          unmountOnExit
          // unmountOnEnter
        >
          <div className="toggleWrapper" ref={nodeRef}>
            <Header />
            <AddTask onAdd={addTask} />
            {tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder}
              />
            ) : (
              "No tasks"
            )}
          </div>
        </CSSTransition>
        {/* )} */}
      </div>
    </div>
  );
};

export default Day;
