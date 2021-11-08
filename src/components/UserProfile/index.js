import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserStart } from "../../redux/User/user.actions";

import imgMen from "./imgMen.jpg";
import imgWomen from "./imgWomen.jpg";

import "./styles.css";

import { fetchUserCalendarStart } from "../../redux/CalendarTracker/calendarTracker.actions";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  user: state.user.user,
  calendar: state.calendarData.calendar,
});

const UserProfile = ({}) => {
  const dispatch = useDispatch();
  const { userID } = useParams();

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
    rightShouled,
    rightSoleAnkle,
    leftSoleAnkle,
    email,
  } = user;
  // const letters = genre.length

  useEffect(() => {
    const fetchUser = () => {
      setTimeout(() => {
        dispatch(fetchUserStart(userID));
      }, 1000);
      fetchCalendar();
    };
    const fetchCalendar = () => {
      setTimeout(() => {
        // dispatch(fetchUserCalendarStart(email));
      }, 2000);
    };

    fetchUser();
    fetchCalendar();
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
      <div className="sidebarMiddle">
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
      <div className="sidebarBottom">
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
            <span>Right Shoulder:</span> {rightShouled}
          </h6>
        }
      </div>
    </div>
  );
};

export default UserProfile;
