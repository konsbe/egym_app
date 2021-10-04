import React from "react";
import Calendar from "../../components/Calendar";
import UserProfile from "../../components/UserProfile";
import Posts from "./../../components/Posts";
import "./styles.css";

const Profile = ({}) => {
  return (
    <div className="profile_body">
      <div className="userProfile">
        <UserProfile />
      </div>
      <div className="userPosts">
        <Posts />
      </div>
      <div className="userCalendar">
        <Calendar />
      </div>
    </div>
  );
};

export default Profile;
