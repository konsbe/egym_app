import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserStart, setUser } from "../../redux/User/user.actions";

import "./styles.css";

const mapState = (state) => ({
  user: state.user.user,
});

const UserProfile = ({}) => {
  const dispatch = useDispatch();
  const { userID } = useParams();
  const { user } = useSelector(mapState);

  const { userUID, firstName, lastName } = user;

  useEffect(() => {
    dispatch(fetchUserStart(userID));
  }, []);

  return (
    <div>
      {<h1>{firstName}</h1>}
      {<h2>{lastName}</h2>}
      {<h3>{userUID}</h3>}
    </div>
  );
};

export default UserProfile;
