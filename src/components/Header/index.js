import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  signOutUserStart,
  // fetchUsersStart,
} from "./../../redux/User/user.actions";

import "./styles.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import snatch from "./../../assets/snatch.jpg";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  users: user.currentUser,
});

const Header = (props) => {
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  // const userID = useAuth();
  const { currentUser } = useSelector(mapState);
  const { users } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
      console.log("scroll");
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navigation-bar"];
  let y = ["navmenu"];
  if (scrolled) {
    x.push("navigation-bar scrolled");
    y.push("navmenu scrolled");
  }
  const configUser = { ...currentUser };

  // useEffect(() => {
  //   dispatch(fetchUsersStart());
  // }, []);

  return (
    <nav sticky="top" onScroll={handleScroll}>
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="dark"
        variant="dark"
        fixed="top"
        sticky="top"
        // onScroll={handleScroll}
        // className="navigation-bar"
        className={x.join(" ")}
      >
        <Navbar.Brand
          style={{ marginLeft: 10 }}
          className="navbarBrand"
          href="/"
        >
          <div className="wrap">
            <img className="brand-image" src={snatch} alt="Brand Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          className="burger"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto pc_display">
            <Nav.Link as={Link} to="/" className="navmenu">
              <span className={y.join(" ")}>HOME</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/courses" className="navmenu">
              <span className={y.join(" ")}>COURSES</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/test" className="navmenu">
              <span className={y.join(" ")}>TEST</span>
            </Nav.Link>
            <NavDropdown
              className="navmenu"
              title="TEST"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="submenu">Action</NavDropdown.Item>
              <NavDropdown.Item className="submenu">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item className="submenu">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="submenu">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {!currentUser && (
              <ul>
                <li>
                  <Nav.Link as={Link} to="/profile" className="navmenu">
                    <Button
                      className="btnlink"
                      variant="outline-success"
                      id="btnNavbar"
                    >
                      My Profile
                    </Button>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} to="/login" className="navmenu">
                    <Button
                      className="btnlink"
                      variant="outline-success"
                      id="btnNavbar"
                    >
                      LOG IN / SIGN UP
                    </Button>
                  </Nav.Link>
                </li>
              </ul>
            )}
            {currentUser && (
              <ul>
                <li>
                  <Nav.Link
                    as={Link}
                    to={`/user/${users.id}`}
                    className="navmenu"
                  >
                    <Button
                      className="btnlink"
                      variant="outline-success"
                      id="btnNavbar"
                    >
                      My Profile
                    </Button>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="navmenu">
                    <Button
                      className="btnlink"
                      variant="outline-success"
                      id="btnNavbar"
                    >
                      <span onClick={() => signOut()}>LOGOUT</span>
                    </Button>
                  </Nav.Link>
                </li>
              </ul>
            )}

            <Nav.Link as={Link} to="/" className="navmenu nav_burger">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/courses" className="navmenu nav_burger">
              COURSES
            </Nav.Link>
            <Nav.Link as={Link} to="/test" className="navmenu nav_burger">
              TEST
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
