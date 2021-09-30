import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "./../../redux/User/user.actions";

import "./styles.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import snatch from "./../../assets/snatch.jpg";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = (props) => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        className="navigation-bar"
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
              HOME
            </Nav.Link>
            <Nav.Link className="navmenu">COURSES</Nav.Link>
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
                  <Button className="btnlink" variant="outline-success">
                      My Profile
                    </Button>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} to="/login" className="navmenu">
                  <Button className="btnlink" variant="outline-success">
                      LOG IN / SIGN UP
                    </Button>
                  </Nav.Link>
                </li>
              </ul>
            )}
            {currentUser && (
              <ul>
                <li>
                  <Nav.Link as={Link} to="/profile" className="navmenu">
                  <Button className="btnlink" variant="outline-success">
                      My Profile
                    </Button>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    className="navmenu"
                    style={{ marginRight: 5 }}
                    eventKey={2}
                  >
                  <Button
                      className="btnlinnk"
                  variant="outline-success"
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
            <Nav.Link className="navmenu nav_burger">COURSES</Nav.Link>
            <NavDropdown
              className="navmenu nav_burger"
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
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
