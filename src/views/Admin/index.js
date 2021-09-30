import React, { useState, useEffect } from "react";
import "./styles.css";
import { checkUserIsAdmin } from "./../../Utils";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchUsersStart,
  signUpUserStart,
} from "./../../redux/User/user.actions";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  users: user.users,
});

// const mapState = ({ user }) => ({

// });

const Admin = (props) => {
  const dispatch = useDispatch();
  const { currentUser, users } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchUsersStart());
  }, []);

  const isAdmin = checkUserIsAdmin(currentUser);
  if (!isAdmin) {
    return null;
  } else {
    return (
      <div>
        <h1>Admin</h1>
        <div className="manageUsers">
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td>
                  <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                      {users.map((person, index) => {
                        const { firstName, lastName, nickName } = person;
                        return (
                          <tr key={index}>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{nickName}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
export default Admin;