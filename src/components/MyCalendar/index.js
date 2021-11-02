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
// import "./App.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  user: state.user.user,
});

function MyCalendar() {
  const [events, setEvents] = useState([]);
  const dispatch = useDispatch();
  const { userID } = useParams();

  const { user } = useSelector(mapState);
  const fetchData = async () => {
    try {
      const { calendarTracker } = await user;
      setEvents(calendarTracker);
      // calendarTracker.map((day) => events.push(day));
      // console.log(events);
    } catch (err) {}
  };

  fetchData();

  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800, margin: "50px" }}
      />
    </div>
  );
}

export default MyCalendar;
