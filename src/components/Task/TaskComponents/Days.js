import React, { useEffect } from "react";
// import Tasks from "./Tasks";
import Day from "./Day";
import { useState, useRef } from "react";
import AddDay from "../AddDay";

import { CSSTransition } from "react-transition-group";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { useSelector, useDispatch } from "react-redux";
import { checkUserIsAdmin } from "../../../Utils";

import {
  fetchUserTrainingScheduleStart,
  fetchTrainingSchedulesStart,
  addWeekTrainingStart,
  fetchUserTrainingWeeksStart,
  updateUserShowHide,
  deleteWeekStart,
} from "./../../../redux/WeekTraining/weekTraining.actions";

const mapState = ({ user, trainingData }) => ({
  currentUser: user.currentUser,
  user: user.user,
  userScheduleData: trainingData.userScheduleData,
  userWeeks: trainingData.trainingWeeks,
});

const Days = ({ week, onDelete }) => {
  // const { ...list } = Day();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  const { userScheduleData } = useSelector(mapState);
  const { userWeeks } = useSelector(mapState);
  const { user } = useSelector(mapState);
  const [showWeek, setShowWeek] = useState(false);
  const nodeRef = useRef(null);
  const [days, setDays] = useState([
    {
      id: 1,
      title: "Day 1 strong",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      title: "Day 2 lightweight",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);
  const { email } = user;
  // useEffect(() => {
  //   // dispatch(fetchTrainingSchedulesStart());
  //   // dispatch(fetchUserTrainingScheduleStart(email));

  //   // dispatch(fetchUserTrainingWeeksStart(scheduleID));
  //   const fetchData = async () => {
  //     try {
  //       await fetchDataDispatch().then(fetchProgramDispatch());
  //     } catch (err) {}
  //   };

  //   const fetchDataDispatch = async () => {
  //     await setTimeout(() => {
  //       dispatch(fetchUserTrainingScheduleStart(email));
  //     }, 5000);
  //   };

  //   const fetchProgramDispatch = async () => {
  //     await setTimeout(async () => {
  //       const scheduleID = await userScheduleData[0].documentID;
  //       dispatch(fetchUserTrainingWeeksStart(scheduleID));
  //     }, 10000);
  //   };

  //   fetchData();
  //   // console.log(
  //   //   week[0].text,
  //   //   "week[0]week[0]week[0]week[0]week[0]week[0]week[0]week[0]week[0]"
  //   // );
  // }, []);

  // const getDays = () => {
  //   let x = 0;
  //   userWeeks.map((week) => {
  //     Object.keys(week).map(function (key, index) {
  //       if (key > 0) {
  //         console.log(week, "olololloolololololololol");
  //         console.log(week[key], "xooxoxoxoxoxoxoxoxoxox");
  //       }
  //     });
  //     x = +1;
  //   });
  // };
  // getDays();
  // console.log(userWeeks, "lolololololollolololololol");
  // userWeeks.map((weeks) => {
  //   console.log(weeks);
  //   console.log(weeks[0].text);
  // });
  const addDay = (day) => {
    const id = days.length + 1;
    const newDay = { id, ...day };
    setDays([...days, newDay]);
  };

  // Delete Day
  const deleteDay = (id) => {
    // console.log("delete", id);
    setDays(days.filter((day) => day.id !== id));
    // tasks.map((task) => console.log(task));
  };
  // const newlist = [];
  const weekProgram = [];
  const pull_data = (data) => {
    weekProgram.push(data);
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  };
  const handleonClick = (e) => {
    weekProgram.unshift(week);
    console.log(week);
  };

  const handleAddClick = (e) => {
    console.log(weekProgram); //THIS IS MY WEEK PROGRAMM TRAINING
    const scheduleID = userScheduleData[0].documentID;
    dispatch(addWeekTrainingStart({ weekProgram, scheduleID }));
  };
  const handleChange = () => {
    const scheduleID = userScheduleData[0].documentID;
    const documenID = week.documenID;

    console.log(week);
    week[2] = !week[2];
    console.log(week);
    dispatch(
      updateUserShowHide({
        scheduleID,
        documenID,
        week,
      })
    );
  };

  const handleDelete = () => {
    const scheduleID = userScheduleData[0].documentID;
    const documenID = week.documenID;
    console.log("Delete", scheduleID, documenID);
    dispatch(deleteWeekStart({ scheduleID, documenID }));
  };

  const isAdmin = checkUserIsAdmin(currentUser);
  console.log(week[2]);
  if (isAdmin) {
    return (
      <div className="containerone">
        <h2 className="weekHeader" onClick={() => setShowWeek(!showWeek)}>
          {week[0] ? week[0].text : "no tasks"}
          <div className="hideAndDelete">
            <div className="floatLeft">
              <BsTrash onClick={handleDelete} />
            </div>
            <div className="floatRight">
              hide
              <input
                type="checkbox"
                defaultChecked={week[2]}
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </h2>
        <CSSTransition
          // in={true}
          nodeRef={nodeRef}
          in={showWeek}
          appear={true}
          timeout={500}
          classNames="transition"
          unmountOnExit
          // unmountOnEnter
        >
          <div
            ref={nodeRef}
            // onClick={handleClick}
          >
            {/* {days.map((day) => ( */}
            {Object.keys(week).map(function (key, index) {
              {
                if (key > 2)
                  return (
                    <Day
                      key={key}
                      day={week[key]}
                      onDelete={deleteDay}
                      onClick={handleonClick}
                      func={pull_data}
                      weekTitle={week[0].text}
                      week={week}
                    />
                  );
              }
            })}
            {/* ))} */}
          </div>
        </CSSTransition>
      </div>
    );
  } else {
    return (
      <div className="containerone">
        <h2 className="weekHeader" onClick={() => setShowWeek(!showWeek)}>
          {week[0] ? week[0].text : "no tasks"}
          {/* sdaasd */}
          {/* {"ASdasddasasd"} */}
        </h2>
        <CSSTransition
          // in={true}
          nodeRef={nodeRef}
          in={showWeek}
          appear={true}
          timeout={500}
          classNames="transition"
          unmountOnExit
          // unmountOnEnter
        >
          <div
            ref={nodeRef}
            // onClick={handleClick}
          >
            {/* {days.map((day) => ( */}
            {Object.keys(week).map(function (key, index) {
              {
                if (key > 2)
                  return (
                    <Day
                      key={key}
                      day={week[key]}
                      onDelete={deleteDay}
                      onClick={handleonClick}
                      func={pull_data}
                      weekTitle={week[0].text}
                      week={week}
                    />
                  );
              }
            })}
            {/* ))} */}
          </div>
        </CSSTransition>
      </div>
    );
  }
};

export default Days;
