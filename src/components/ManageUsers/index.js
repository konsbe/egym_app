import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersStart } from "../../redux/User/user.actions";

import "./styles.css";

import User from "./User";
import LoadMore from "./../LoadMore";
const mapState = ({ user }) => ({
  users: user.users,
});

const ManageUsers = ({}) => {
  const dispatch = useDispatch();
  const { users } = useSelector(mapState);
  const bla = "ads";
  const { data, queryDoc, isLastPage } = users;

  useEffect(() => {
    dispatch(fetchUsersStart({ bla }));
  }, []);

  if (!Array.isArray(data)) return null;

  const handleLoadMore = () => {
    dispatch(
      fetchUsersStart({
        bla,
        startAfterDoc: queryDoc,
        persistUsers: data,
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };
  console.log(data, "dasasddasasdadsasdasdasd");
  if (data.length < 1) {
    return (
      <div className="users">
        <p>No users..</p>
      </div>
    );
  }

  return (
    <div className="users">
      <h1 className="manageUsers">Manage Users</h1>
      <div className="user userLabels">
        <span>index</span>
        <span>First Name/Last Name</span>

        <span>BirthDay</span>
        <span>Kilos</span>
        <span>Created Date</span>
        <span>Course</span>
        <span>Pay</span>
        <span>Last Program</span>
        <span>Month Program</span>
      </div>
      {data.map((user, pos) => {
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
      {!isLastPage && <LoadMore {...configLoadMore} />}
    </div>
  );
};

export default ManageUsers;
