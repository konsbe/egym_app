import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Task from "../Task";

import Button from "./../Forms/Button";
import LoadMore from "../LoadMore/iinex";

import { fetchUserStart } from "../../redux/User/user.actions";
import {
  fetchUserTrainingScheduleStart,
  fetchTrainingSchedulesStart,
  addWeekTrainingStart,
  fetchUserTrainingWeeksStart,
} from "./../../redux/WeekTraining/weekTraining.actions";

import "./styles.css";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  user: state.user.user,

  userScheduleData: state.trainingData.userScheduleData,
  // userWeeks: state.trainingData.trainingWeeks,
});

const Posts = (props) => {
  const dispatch = useDispatch();
  const { userID } = useParams();
  const { userScheduleData } = useSelector(mapState);
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

  const handleLoadMore = () => {};

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

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
        dispatch(fetchUserTrainingWeeksStart(scheduleID));
      }, 1500);
    };
    fetchUser();
    fetchData();
  }, [userScheduleData[0].email !== email]);

  return (
    <div className="posts">
      <Task />
      {/* <Button type="submit" className="btnLoadMore">
        Load More
      </Button> */}
      <LoadMore {...configLoadMore} />
    </div>
  );
};

export default Posts;
