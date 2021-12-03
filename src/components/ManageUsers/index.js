import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersStart } from "../../redux/User/user.actions";

import "./styles.css";

import User from "./User";

const mapState = ({ user }) => ({
  users: user.users,
});

const ManageUsers = ({}) => {
  const dispatch = useDispatch();
  const { users } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchUsersStart());
  }, []);

  if (!Array.isArray(users)) return null;

  if (users.length < 1) {
    return (
      <div className="users">
        <p>No users..</p>
      </div>
    );
  }

  return (
    <div className="users">
      <h1 className="manageUsers">Manage Users</h1>
      {users.map((user, pos) => {
        const { firstName, lastName, weight, birthDay } = user;
        if (!firstName || !lastName) return null;
        const configUser = {
          ...user,
          pos,
        };

        return (
          <div key={pos} className="userLine">
            <User {...configUser} />
          </div>
        );
      })}
    </div>
  );
};

export default ManageUsers;
