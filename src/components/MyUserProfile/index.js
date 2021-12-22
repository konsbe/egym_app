import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserStart } from "../../redux/User/user.actions";

import imgMen from "./imgMen.jpg";
import imgWomen from "./imgWomen.jpg";

import "./styles.css";

import { fetchUserCalendarStart } from "../../redux/CalendarTracker/calendarTracker.actions";

import {
  fetchUserTrainingScheduleStart,
  fetchTrainingSchedulesStart,
  addWeekTrainingStart,
  fetchUserTrainingWeeksStart,
} from "./../../redux/WeekTraining/weekTraining.actions";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  user: state.user.user,
  calendar: state.calendarData.calendar,
  userScheduleData: state.trainingData.userScheduleData,
  // userWeeks: state.trainingData.trainingWeeks,
});

const MyUserProfile = ({}) => {
  const dispatch = useDispatch();
  const { userID } = useParams();

  const { userScheduleData } = useSelector(mapState);
  const { userWeeks } = useSelector(mapState);
  const { user } = useSelector(mapState);
  const { calendar } = useSelector(mapState);
  // const { email } = calendar;

  const {
    userUID,
    firstName,
    lastName,
    genre,
    pelvic,
    rightChest,
    weight,
    injuries,
    gear,
    rightShoulder,
    rightSoleAnkle,
    leftSoleAnkle,
    email,
  } = user;
  // const letters = genre.length

  useEffect(() => {
    const fetchUser = async () => {
      // setTimeout(() => {

      await dispatch(fetchUserStart(userID));
      dispatch(fetchTrainingSchedulesStart());
      dispatch(fetchUserTrainingScheduleStart(email));
      // }, 1000);
      // fetchCalendar();
    };
    // const fetchCalendar = () => {
    // setTimeout(() => {
    // dispatch(fetchUserCalendarStart(email));
    // }, 2000);
    // };

    // const fetchData = async () => {
    //   try {
    //     await fetchDataDispatch();
    //     // fetchProgramDispatch();
    //   } catch (err) {}
    // };

    // const fetchDataDispatch = async () => {
    //   await setTimeout(async () => {
    //     dispatch(await fetchUserTrainingScheduleStart(email));
    //   }, 1000);
    // };

    // const fetchProgramDispatch = async () => {
    //   await setTimeout(async () => {
    //     const scheduleID = await userScheduleData[0].documentID;
    //     dispatch(fetchUserTrainingWeeksStart(scheduleID));
    //   }, 1500);
    // };
    console.log(
      userScheduleData[0].email === email,
      "asddasdasadsdassdadsadasasddsa"
    );
    fetchUser();
    //// fetchCalendar();
    // fetchData();
    // if (calendar.length === 0) {
    // setBool(true);
    // dispatch(fetchUserCalendarStart(email));
    // }
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <h3>
          {genre === "woman" ? (
            <img src={imgWomen}></img>
          ) : (
            <img src={imgMen}></img>
          )}
        </h3>
        {<h3>{firstName}</h3>}
        {<h4>{lastName}</h4>}
        {<h6>{userUID}</h6>}
      </div>
      <div className="mySidebarMiddle">
        {
          <div className="weight">
            <h6>Weight: {weight}</h6>
          </div>
        }
        {
          <div className="infos-lot">
            <h6 className="weight">Injuries:</h6>
            <span className="weight">{injuries}</span>
          </div>
        }
        {
          <div className="infos-lot">
            <h6 className="infos">Gear:</h6>
            <span className="infos-text">{gear}</span>
          </div>
        }
      </div>
      <div className="mySidebarBottom">
        {
          <h6>
            <span>Pelvic:</span> {pelvic}
          </h6>
        }
        {
          <h6>
            <span>rightChest:</span> {rightChest}
          </h6>
        }
        {
          <h6>
            <span>Left Sole Ankle:</span> {leftSoleAnkle}
          </h6>
        }
        {
          <h6>
            <span>Right Sole Ankle:</span> {rightSoleAnkle}
          </h6>
        }
        {
          <h6>
            <span>Right Shoulder:</span> {rightShoulder}
          </h6>
        }
      </div>
    </div>
  );
};

export default MyUserProfile;
