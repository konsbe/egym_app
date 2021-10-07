import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const User = ({ documentID, firstName, lastName, nickName }) => {
  if (!documentID || !firstName || !lastName) return null;
  return (
    <div className="user">
      <span>
        <Link to={`/user/${documentID}`}>{firstName}</Link>
      </span>

      <span>
        <Link to={`/user/${documentID}`}>{lastName}</Link>
      </span>
      <span>
        <Link to={`/user/${documentID}`}>{nickName}</Link>
      </span>
      <span>
        <input type="checkbox"></input>
        <label>Pay</label>
      </span>
      <span>
        <input type="checkbox"></input>
        <label>Month Program</label>
      </span>
    </div>
  );
};

export default User;
