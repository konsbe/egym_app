import React from "react";
import "./styles.css";
import { checkUserIsAdmin } from "./../../Utils";
import { useSelector } from "react-redux";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Admin = (props) => {
  const { currentUser } = useSelector(mapState);

  const isAdmin = checkUserIsAdmin(currentUser);
  if (!isAdmin) {
    return null;
  } else {
    return (
      <div>
        <h1>Admin</h1>
      </div>
    );
  }
};
export default Admin;
