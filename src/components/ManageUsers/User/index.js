import React from "react";
import { Link } from "react-router-dom";

const User = ({ documentID, firstName, lastName, nickName }) => {
  if (!documentID || !firstName || !lastName) return null;
  return (
    <div className="user">
      <Link to={`/user/${documentID}`}>
        <div className="thumb">{firstName}</div>
      </Link>
      <div className="Details">
        <ul>
          <li>
            <span>{lastName}</span>
          </li>
          <li>
            <span>{nickName}</span>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default User;
