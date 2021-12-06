import React from "react";

import { Link } from "react-router-dom";
import "./styles.css";

import MyUserProfile from "../../../components/MyUserProfile";

import Button from "../../../components/Forms/Button";

const ProfilePage = (props) => {
  let x = ["profile_body"];

  return (
    <div className={x.join(" ")}>
      <div className="userProfile">
        <div className="callToActions">
          <ul className="editInfo">
            <li>
              <Link to="/edit-profile-infos">
                <Button>Edit Profile Infos</Button>
              </Link>
            </li>
          </ul>
        </div>
        <MyUserProfile />
      </div>
    </div>
  );
};

export default ProfilePage;
