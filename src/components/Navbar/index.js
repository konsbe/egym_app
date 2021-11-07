import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  signOutUserStart,
  // fetchUsersStart,
} from "../../redux/User/user.actions";

import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import { SideBarDataLogIn, SideBarDataLogOut } from "./SideBarData";

import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { BiLogOutCircle } from "@react-icons/all-files/bi/BiLogOutCircle";
import { BiLogInCircle } from "@react-icons/all-files/bi/BiLogInCircle";

import snatch from "./../../assets/snatch.jpg";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  users: user.currentUser,
});

const NavigationBar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [scrolled, setScrolled] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);
  // const userID = useAuth();
  const { currentUser } = useSelector(mapState);
  const { users } = useSelector(mapState);

  const signOut = async () => {
    await dispatch(signOutUserStart());
    history.push("/");
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
      // console.log("scroll");
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navigation-bar-phone"];
  let y = ["navmenu-phone"];
  if (scrolled) {
    x.push("navigation-bar-phone scrolled");
    y.push("navmenu-phone scrolled");
  }
  const configUser = { ...currentUser };

  // useEffect(() => {
  //   dispatch(fetchUsersStart());
  // }, []);

  return (
    <>
      <div className={x.join(" ")} sticky="top" onScroll={handleScroll}>
        <Link to="#" className="menu-bars">
          {!sidebar && <FaBars onClick={showSideBar} />}
          {sidebar && <AiOutlineClose onClick={showSideBar} />}
        </Link>
      </div>
      {currentUser && (
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            {/* <li className="navbar-toggle">
                <div onClick={showSideBar} className="menu-bars close">
                  <AiOutlineClose />
                </div>
              </li> */}
            {SideBarDataLogIn.map((item, index) => {
              if (index === 3) {
                return (
                  <li key={index} className={item.cname}>
                    <Link to={`/user/${users.id}`}>
                      <span>{item.title}</span>
                      <span className="icon">{item.icon}</span>
                      {/* {item.icon} */}
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={index} className={item.cname}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                      <span className="icon">{item.icon}</span>
                      {/* {item.icon} */}
                    </Link>
                  </li>
                );
              }
            })}
            <li className="navbar-toggle">
              <div onClick={() => signOut()} className="nav-text">
                <span onClick={() => signOut()}>LOGOUT</span>
                <span className="icon">
                  <BiLogOutCircle />
                </span>
              </div>
            </li>
          </ul>
        </nav>
      )}

      {!currentUser && (
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            {SideBarDataLogOut.map((item, index) => {
              return (
                <li key={index} className={item.cname}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                    <span className="icon">{item.icon}</span>
                    {/* {item.icon} */}
                  </Link>
                </li>
              );
            })}
            <li className="navbar-toggle">
              <Link to="/login" className="nav-text">
                <span>LOGIN</span>
                <span className="icon">
                  <BiLogInCircle />
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavigationBar;
