import { useEffect } from "react";

import Header from "./Header";
import Tasks from "./Tasks";

import { useState, useRef } from "react";

import AddTask from "../AddTask";

import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import { CSSTransition } from "react-transition-group";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCalendarDayStart } from "./../../../redux/CalendarTracker/calendarTracker.actions";
import { updateUserReminder } from "./../../../redux/WeekTraining/weekTraining.actions";

const mapState = ({ user, calendarData, trainingData }) => ({
  currentUser: user.currentUser,
  user: user.user,
  users: user.currentUser,
  calendar: calendarData.calendar,
  userScheduleData: trainingData.userScheduleData,
});

const Day = ({ day, onDelete, func, weekTitle, week }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [calendarTracker, setCalendarTracker] = useState([]);
  const { user } = useSelector(mapState);
  const { currentUser } = useSelector(mapState);
  const { calendar } = useSelector(mapState);
  const { userScheduleData } = useSelector(mapState);

  // const [reminder, setReminder] = useState(false);
  // const [reminder, setReminder] = useState();
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
    day[id].reminder = !day[id].reminder;

    console.log(id, ":exercise number in firebase");
    console.log(weekTitle, "asdadsasdadsasddas");

    console.log(day[0].id, ":day number in firebase");
    console.log(week.documenID, ":document id in firebase");
    console.log(week, ":week in firebase");
    console.log(
      userScheduleData[0].documentID,
      ":document id of USERSCHEDULE DATA in firebase"
    );
    console.log(day, "whole Day");
    console.log(day[id].title);
    console.log(day[id].reminder, day[id].title, "my day");

    const exerciseID = id;
    console.log(exerciseID, "exerciseID");
    const scheduleID = userScheduleData[0].documentID;
    const documenID = week.documenID;
    const dayNum = day[0].id;

    dispatch(
      updateUserReminder({
        reminder: !day[id].reminder,
        scheduleID,
        documenID,
        dayNum,
        exerciseID,
        list,
        week,
      })
    );
    // console.log(reminder);
  };

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
        //  console.log(day[key], "ggrgrgrgrrggrgrgrrgrgrgrgr");
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
    setTimeout(actionDispatch, 300);
    console.log(calendarTracker);
  };

  let x = { height: "auto" };
  const handleShow = async () => {
    setShowDay(!showDay);
  };

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
                      scheduleID={userScheduleData[0].documentID}
                      documenID={week.documenID}
                      // taskID={taskID}
                      // reminder={!day[id].reminder}
                      num={day[0].id}
                    />
                  );
              }
            })}

            {/* ) : (
                "No tasks"
              )} */}

            <button onClick={handleOnClick} className="btnAdd btn-block">
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
