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

const mapState = ({ user, trainingData }) => ({
  user: user.user,
  currentUser: user.currentUser,
  userWeeks: trainingData.trainingWeeks,
  userScheduleData: trainingData.userScheduleData,
});

const Weeks = ({ onDelete }) => {
  const dispatch = useDispatch();
  const { userID } = useParams();
  const { userScheduleData } = useSelector(mapState);
  const { currentUser } = useSelector(mapState);
  const { userWeeks } = useSelector(mapState);
  const { data, queryDoc } = userWeeks;
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
  const scheduleID = userScheduleData[0].documentID;
  useEffect(() => {
    const fetchUser = async () => {
      await dispatch(fetchUserStart(userID));
    };

    const fetchData = async () => {
      try {
        await fetchDataDispatch();
        fetchProgramDispatch();
      } catch (err) {}
    };

    const fetchDataDispatch = async () => {
      await setTimeout(async () => {
        dispatch(await fetchUserTrainingScheduleStart(email));
      }, 1000);
    };

    const fetchProgramDispatch = async () => {
      await setTimeout(async () => {
        const scheduleID = await userScheduleData[0].documentID;
        dispatch(fetchUserTrainingWeeksStart({ scheduleID }));
      }, 1500);
    };
    fetchUser();
    fetchData();
  }, [userScheduleData[0].email !== email]);

  const handleLoadMore = () => {
    dispatch(
      fetchUserTrainingWeeksStart({ scheduleID, startAfterDoc: queryDoc })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };
  console.log(data, ":slsllsslsllslslslslslsllslsls");
  return (
    <div>
      <div
        className="weeksContainer"
        //   onClick={() => setShowWeek(!showWeek)}
      >
        {data.map((week, index) => (
          <Days
            onDelete={onDelete}
            key={index}
            week={week}
            onDelete={deleteWeek}
          />
        ))}
        <LoadMore {...configLoadMore} />
      </div>
    </div>
  );
};

export default Weeks;
