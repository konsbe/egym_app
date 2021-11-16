import Header from "./Header";
import AdminTasks from "./AdminTasks";

import { useState, useRef } from "react";

import AddTask from "../AddTask";

import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import { CSSTransition } from "react-transition-group";

import { updateUserStart } from "../../../redux/User/user.actions";
import { checkUserIsAdmin } from "../../../Utils";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCalendarDayStart } from "./../../../redux/CalendarTracker/calendarTracker.actions";

const mapState = ({ user, calendarData }) => ({
  currentUser: user.currentUser,
  user: user.user,
  users: user.currentUser,
  calendar: calendarData.calendar,
});

const Day = ({ day, onDelete, func, ...days }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [calendarTracker, setCalendarTracker] = useState([]);
  const { user } = useSelector(mapState);
  const { currentUser } = useSelector(mapState);
  const { calendar } = useSelector(mapState);

  const [reminder, setReminder] = useState(false);
  const [showDay, setShowDay] = useState(false);
  const list = [];
  const nodeRef = useRef(null);

  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   title: "Deadlift",
    //   day: "3*50 3*70 3*100 3*150",
    //   // reminder: true,
    //   allDay: true,
    //   start: new Date(2021, 23, 12),
    //   end: new Date(2021, 23, 12),
    // },
    // {
    //   id: 2,
    //   title: "Shoulder Press",
    //   day: "3*10 3*20 3*40 3*60",
    //   // reminder: false,
    //   allDay: true,
    //   start: "",
    //   end: "",
    // },
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
      tasks.map(
        (task) => {
          setReminder(!reminder);

          day[id].reminder = reminder;
        } // task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(day[id]);
  };

  // console.log(days);

  const handleClick = (e) => {
    const list = [];
    tasks.map((task) => {
      list.push(task);
    });
    list.unshift(day);
    func(list);
    // console.log(list);
  };

  function refreshPage() {
    window.location.reload();
  }

  let x = { height: "auto" };
  const handleShow = async () => {
    setShowDay(!showDay);
  };
  return (
    <div>
      {/* <Day days={days} /> */}
      <div className="basiContainer">
        <div className="headerAddDay">
          <h2 onClick={handleShow} className="titleDay">
            {day.title}{" "}
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
              <AdminTasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder}
              />
            ) : (
              "No tasks"
            )}

            <button onClick={handleClick} className="btnAdd btn-block">
              AddDay
            </button>
          </div>
        </CSSTransition>
        {/* )} */}
      </div>
    </div>
  );
};

export default Day;
