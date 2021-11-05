import Header from "./Header";
import Tasks from "./Tasks";

import { useState, useRef } from "react";

import AddTask from "../AddTask";

import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import { CSSTransition } from "react-transition-group";

import { updateUserStart } from "../../../redux/User/user.actions";
import { checkUserIsAdmin } from "../../../Utils";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  users: user.currentUser,
});

const Day = ({ day, onDelete, func, ...days }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [calendarTracker, setCalendarTracker] = useState([]);
  const { currentUser } = useSelector(mapState);
  const [showDay, setShowDay] = useState(false);
  const list = [];
  const nodeRef = useRef(null);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Deadlift",
      day: "3*50 3*70 3*100 3*150",
      reminder: true,
      allDay: true,
      start: "",
      end: "",
    },
    {
      id: 2,
      title: "Shoulder Press",
      day: "3*10 3*20 3*40 3*60",
      reminder: false,
      allDay: true,
      start: "",
      end: "",
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

  // console.log(days);


  const handleClick = (e) => {
    const list = [];
    tasks.map((task) => {
      list.push(task);
    });
    list.unshift(day);
    func(list);
  };

  function refreshPage() {
    window.location.reload();
  }

  const handleOnClick = async (e) => {
    e.preventDefault();

    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    const newdate = year + "/" + month + "/" + day;

    const list = [];
    tasks.map(async (task) => {
      task.start = await newdate;
      task.end = await newdate;
      await calendarTracker.push(task);
    });
    await calendarTracker.unshift(day);
    currentUser.calendarTracker.map(async (day) => {
      await calendarTracker.push(day);
    });
    list.push(calendarTracker);
    // calendarTracker.push(currentUser.calendarTracker);
    console.log(currentUser.calendarTracker);
    console.log(calendarTracker);
    dispatch(
      await updateUserStart({
        calendarTracker,
      })
    );
    setTimeout(refreshPage, 300);
  };

  let x = { height: "auto" };
  const handleShow = async () => {
    // let x = await { height: "auto", marginBottom: "0.3rem" };
    console.log(x);
    setShowDay(!showDay);
  };

  // tasks.map((task) => list.push(task));

  // const ref = { showDay };
  const isAdmin = checkUserIsAdmin(currentUser);
  if (isAdmin) {
    return (
      <div>
        {/* <Day days={days} /> */}
        <div className="basiContainer">
          <div className="headerAddDay">
            <h2 style={{ fontSize: 30 }} onClick={handleShow}>
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
              {isAdmin && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No tasks"
              )}

              {isAdmin && (
                <button onClick={handleClick} className="btnAdd btn-block">
                  AddDay
                </button>
              )}

              {!isAdmin && (
                <button onClick={handleOnClick} className="btnAdd btn-block">
                  AddDay
                </button>
              )}
            </div>
          </CSSTransition>
          {/* )} */}
        </div>
      </div>
    );
  } else {
    return (
      <div className="dayContainer" style={x}>
        {/* <Day days={days} /> */}
        <div className="basiContainer">
          <div className="headerAddDay">
            <h2 style={{ fontSize: 30 }} onClick={handleShow}>
              {day.title}{" "}
            </h2>
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
              {isAdmin && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No tasks"
              )}

              {isAdmin && (
                <button onClick={handleClick} className="btnAdd btn-block">
                  AddDay
                </button>
              )}

              {!isAdmin && (
                <button onClick={handleOnClick} className="btnAdd btn-block">
                  AddDay
                </button>
              )}
            </div>
          </CSSTransition>
          {/* )} */}
        </div>
      </div>
    );
  }
};;

export default Day;
