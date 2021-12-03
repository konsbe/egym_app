import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

import {
  Calendar,
  dateFnsLocalizer,
  momentLocalizer,
  globalizeLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";
import calendarIcon from "./calendarIcon.jpg";

import "./styles.css";

import {
  fetchUserCalendarStart,
  fetchUserCalendarDaysStart,
} from "../../redux/CalendarTracker/calendarTracker.actions";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = momentLocalizer(moment); // or globalizeLocalizer

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  user: state.user.user,
  calendar: state.calendarData.calendar,
  userCalendar: state.calendarData.calendarDays,
});

function MyCalendar() {
  // const [events, setEvents] = useState([]);

  const dispatch = useDispatch();
  const { userID } = useParams();
  const { user } = useSelector(mapState);
  const { calendar } = useSelector(mapState);
  const { userCalendar } = useSelector(mapState);
  // const events = [];

  // const { documentID } = calendar;
  const { email } = user;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchDataDispatch().then(fetchCalendarDispatch());
      } catch (err) {}
    };
    const fetchDataDispatch = async () => {
      await setTimeout(() => {
        dispatch(fetchUserCalendarStart(email));
      }, 1000);
    };
    const fetchCalendarDispatch = async () => {
      await setTimeout(async () => {
        const myCalendar = { ...calendar };
        const calID = await calendar[0].documentID;
        dispatch(fetchUserCalendarDaysStart(calID));
      }, 2000);
    };

    fetchData();
  }, [calendar[0].email !== email]);
  // const bees = [];
  // console.log(bees);
  const events = [
    // {
    //   title: "Big Meeting",
    //   allDay: true,
    //   start: new Date(2021, 10, 11),
    //   end: new Date(2021, 10, 11),
    // },
    // {
    //   title: "Vacation",
    //   allDay: true,
    //   start: new Date(2021, 10, 9),
    //   end: new Date(2021, 10, 9),
    // },
    // {
    //   title: "Conference",
    //   allDay: true,
    //   start: new Date(2021, 10, 8),
    //   end: new Date(2021, 10, 8),
    // },
  ];

  const getDays = () => {
    let x = 0;
    userCalendar.map((day) => {
      Object.keys(day).map(function (key, index) {
        // console.log(index);
        // console.log(userCalendar[x][key]);
        events.push(userCalendar[x][key]);
      });
      x += 1;
    });
  };
  getDays();

  console.log(userCalendar);
  console.log(events);

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
          // events={userCalendar[0][1]}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
          eventPropGetter={(event, start, end, isSelected) => {
            let newStyle = {
              backgroundColor: "grey",
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
