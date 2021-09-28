import React, { useEffect } from "react";
import "./styles.css";

import { useAuth } from "./../../customHooks";
// import { getSnapshotFromUserAuth } from "../../redux/User/user.sagas";

const Dashboard = (props) => {
  useEffect(() => {
    document.title = "My Profile";
  }, []);

  const user = useAuth();

  return (
    <div>
      <h1> {user.firstName}</h1>
      <h2> {user.id}</h2>
    </div>
  );
};

export default Dashboard;
