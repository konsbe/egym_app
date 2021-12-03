import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Task from "../Task";

import Button from "./../Forms/Button";
import LoadMore from "../LoadMore";


import "./styles.css";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  user: state.user.user,
  userWeeks: state.trainingData.trainingWeeks,
  userScheduleData: state.trainingData.userScheduleData,
  // userWeeks: state.trainingData.trainingWeeks,
});

const Posts = (props) => {
  const dispatch = useDispatch();
  const { userID } = useParams();
  const { userScheduleData } = useSelector(mapState);
  const { userWeeks } = useSelector(mapState);
  const { data, queryDoc } = userWeeks;
  const { user } = useSelector(mapState);

  return (
    <div className="posts">
      <Task />
      {/* <Button type="submit" className="btnLoadMore">
        Load More
      </Button> */}
      {/* <LoadMore {...configLoadMore} /> */}
    </div>
  );
};

export default Posts;
