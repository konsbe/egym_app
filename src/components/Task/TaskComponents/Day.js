import { useEffect } from "react";
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
    console.log(task);
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
  };

  function refreshPage() {
    window.location.reload();
  }
  useEffect(() => {}, []);

  const handleOnClick = async (e) => {
    e.preventDefault();
    const dateObj = new Date().toISOString();

    const list = [];
    const calendarTracker = [];

    Object.keys(day).map(async function (key, index) {
      if (key > 0) {
        day[key].start = await dateObj;
        day[key].end = await dateObj;
        day[key].allDay = await true;
        //  day[key].reminder = ;

        const array = day[key].title.split(",");
        day[key].title = array[0];
        await calendarTracker.push(day[key]);
      }
    });

    console.log(calendarTracker);

    const actionDispatch = async () => {
      const calendarID = calendar[0].documentID;
      const calendarEmail = calendar[0].email;
      const calendarDay = calendar[0].day;

      dispatch(
        addCalendarDayStart({
          calendarTracker,
          calendarID,
          calendarEmail,
        })
      );
    };
    // setTimeout(actionDispatch, 300);
    console.log(calendarTracker);
  };

  let x = { height: "auto" };
  const handleShow = async () => {
    // let x = await { height: "auto", marginBottom: "0.3rem" };
    // console.log(x);
    setShowDay(!showDay);
  };

  const isAdmin = checkUserIsAdmin(currentUser);
  if (isAdmin) {
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
            <h2 className="titleDay" onClick={handleShow}>
              {day[0].title}{" "}
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

              {/* {tasks.length > 0 ? ( */}
              {Object.keys(day).map(function (key, index) {
                {
                  if (key > 0)
                    return (
                      <Tasks
                        key={key}
                        tasks={day[key]}
                        onDelete={deleteTask}
                        onToggle={toggleReminder}
                      />
                    );
                }
              })}

              {/* ) : (
                "No tasks"
              )} */}

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
};

export default Day;
