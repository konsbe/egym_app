import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserStart, setUser } from "../../redux/User/user.actions";

import "./styles.css";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  user: state.user.user,
});

const UserProfile = ({}) => {
  const dispatch = useDispatch();
  const { userID } = useParams();

  const { user } = useSelector(mapState);

  const { userUID, firstName, lastName, pelvic, rightChest } = user;

  useEffect(() => {
    dispatch(fetchUserStart(userID));
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarTop">
        {<h3>{firstName}</h3>}
        {<h4>{lastName}</h4>}
        {<h5>{userUID}</h5>}
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
      </div>
    </div>
  );
};

export default UserProfile;
