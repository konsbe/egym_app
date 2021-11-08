import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

import moment from "moment";
import {
  Calendar,
  dateFnsLocalizer,
  momentLocalizer,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";
import calendarIcon from "./calendarIcon.jpg";

import "./styles.css";

import { fetchUserCalendarStart } from "../../redux/CalendarTracker/calendarTracker.actions";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  user: state.user.user,
  calendar: state.calendarData.calendar,
});

function MyCalendar() {
  const [events, setEvents] = useState([]);

  const dispatch = useDispatch();
  const { userID } = useParams();

  const { user } = useSelector(mapState);
  const { calendar } = useSelector(mapState);

  const { documentID } = calendar;

  const [bool, setBool] = useState(false);

  const { email } = user;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { calendarTracker } = await user;
        // const mymail = await email;
        setEvents(calendarTracker);
        fetchDataDispatch();
        // calendarTracker.map((day) => events.push(day));
      } catch (err) {}
    };
    const fetchDataDispatch = () => {
      setTimeout(() => {
        dispatch(fetchUserCalendarStart(email));
      }, 2000);
    };

    // console.log(email);
    fetchData();

    // console.log(calendar[0].documentID);
    // console.log(user);
    // calendar.map((i) => console.log(i));
  }, []);

  // console.log(bool);

  return (
    <div className="AppCalendar">
      <h1 className="calendar">
        <div className="backcal">
          <img src={calendarIcon}></img>
        </div>
      </h1>
      <div className="calendarBox">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          // style={{ height: 500, margin: "50px" }}
          eventPropGetter={(event, start, end, isSelected) => {
            let newStyle = {
              backgroundColor: "red",
              color: "black",
              borderRadius: "0px",
              border: "none",
              height: "14px",
              fontSize: "10px",
            };

            if (event.reminder) {
              newStyle.backgroundColor = "lightgreen";
            }

            return {
              className: "",
              style: newStyle,
            };
          }}
        />
      </div>
    </div>
  );
}
{
  /* <div className="sidebar"></div> */
}

export default MyCalendar;
