import React from "react";
import "./styles.css";
// import { auth } from "./../../firebase/utils";
// import WithAuth from "./../../hoc";
// import { useAuther } from '../../context/authContext';
import { useAuth } from './../../customHooks'
import { setCurrentUser } from './../../redux/User/user.actions'

const Dashboard = (props) => {
  // const { currentUser } = useAuther();
  // const WithAuth = (props) => useAuth(props) && props.children;
  // const { payload } = setCurrentUser()
  const user = useAuth();

  return (
    <div>
  <h1> {user.firstName}</h1>
  <h2> {user.id}</h2>
    </div>
)
};

export default Dashboard;
