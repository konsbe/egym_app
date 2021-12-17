import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  useState,
  // , useRef
} from "react";
import Days from "./Days";
import AddWeek from "../AddWeek";
import { fetchUserStart } from "./../../../redux/User/user.actions";
import {
  fetchUserTrainingScheduleStart,
  fetchTrainingSchedulesStart,
  addWeekTrainingStart,
  fetchUserTrainingWeeksStart,
} from "./../../../redux/WeekTraining/weekTraining.actions";

import LoadMore from "./../../LoadMore";

const mapState = (state) => ({
  user: state.user.user,
  currentUser: state.user.currentUser,
  userScheduleData: state.trainingData.userScheduleData,
  userWeeks: state.trainingData.trainingWeeks,
  userData: state.trainingData.trainingWeeks.data,
});

const Weeks = ({ onDelete }) => {
  const dispatch = useDispatch();
  const { userID } = useParams();
  const { userScheduleData } = useSelector(mapState);
  const { currentUser } = useSelector(mapState);
  const { userWeeks } = useSelector(mapState);
  const { userData } = useSelector(mapState);
  const { data, queryDoc, isLastPage } = userWeeks;
  const userSchedule = { ...userScheduleData[0] };
  const [bool, setBool] = useState(true);

  // console.log(userSchedule, "dasdasdassdadsaasdasdasasddasasd");
  console.log(userSchedule.email, "dasdasdassdadsaasdasdasasddasasd");

  console.log(userData, "dasdasdassdadsaasdasdasasddasasd");
  //   const [showWeek, setShowWeek] = useState(false);
  const { user } = useSelector(mapState);
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
  const [weeks, setWeeks] = useState([
    // {
    //   id: 1,
    //   text: "Week 1",
    //   day: "Feb 5th at 2:30pm",
    //   reminder: true,
    // },
    //
  ]);
  const addWeek = (week) => {
    const id = weeks.length + 1;
    const newWeek = { id, ...week };
    setWeeks([...weeks, newWeek]);
  };

  const deleteWeek = (id) => {
    // console.log("delete", id);

    setWeeks(weeks.filter((week) => week.id !== id));
  };

  // userWeeks.map((week) =>
  //   console.log(week, "frfrrffrfrfrfrfrfrrfrffrfrrffrfrrffrfrfrfrfr")
  // );

  //   const nodeRef = useRef(null);

  useEffect(() => {
    setBool(false);
    const fetchUser = async () => {
      await dispatch(fetchUserStart(userID));
    };
    const fetchData = async () => {
      try {
        await fetchDataDispatch().then(fetchProgramDispatch());
      } catch (err) {}
    };

    const fetchDataDispatch = async () => {
      await setTimeout(async () => {
        dispatch(await fetchUserTrainingScheduleStart(email));
      }, 2000);
    };

    const fetchProgramDispatch = async () => {
      await setTimeout(async () => {
        const scheduleID = userSchedule.documentID;
        dispatch(fetchUserTrainingWeeksStart({ scheduleID }));
      }, 3000);
    };
    fetchUser().then(fetchData());
    // console.log(userData.length);

    if (userSchedule.email === email) {
      setBool(true);
    }
  }, [bool]);
  console.log(data, "frfrfrfrfrrffrfrfrfrfrfrrffr");
  console.log(userWeeks, "frfrfrfrfrrffrfrfrfrfrfrrffr");
  // userScheduleData[0].email !== email;
  const handleLoadMore = () => {
    const scheduleID = userScheduleData[0].documentID;
    dispatch(
      fetchUserTrainingWeeksStart({
        scheduleID,
        startAfterDoc: queryDoc,
        persistWeeks: data,
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };
  console.log(data, queryDoc, ":slsllsslsllslslslslslsllslsls");
  return (
    <div>
      <div
        className="weeksContainer"
        //   onClick={() => setShowWeek(!showWeek)}
      >
        {/* {userData.map((week, index) => (
          <Days
            onDelete={onDelete}
            key={index}
            week={week}
            onDelete={deleteWeek}
          />
        ))} */}
        {!isLastPage && <LoadMore {...configLoadMore} />}
      </div>
    </div>
  );
};

export default Weeks;
