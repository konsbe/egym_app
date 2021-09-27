import React from "react";

import { useSelector } from "react-redux";

import "./styles.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import { auth } from "./../../firebase/utils";

import snatch from "./../../assets/snatch.jpg";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = (props) => {
  const { currentUser } = useSelector(mapState);
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
            {/* <Link to="/"> */}
            <img className="brand-image" src={snatch} alt="Brand Logo" />
            {/* </Link> */}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          className="burger"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto pc_display">
            <Nav.Link as={Link} to="/" className="navmenu">
              {/* <Link to="/"> */}
              HOME
              {/* </Link> */}
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
                    {/* <Link > */}
                    <Button className="btnlink" variant="outline-success">
                      My Profile
                    </Button>
                    {/* </Link> */}
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} to="/login" className="navmenu">
                    {/* <Link > */}
                    <Button className="btnlink" variant="outline-success">
                      LOG IN / SIGN UP
                    </Button>
                    {/* </Link> */}
                  </Nav.Link>
                </li>
              </ul>
            )}
            {currentUser && (
              <ul>
                <li>
                  <Nav.Link as={Link} to="/profile" className="navmenu">
                    {/* <Link > */}
                    <Button className="btnlink" variant="outline-success">
                      My Profile
                    </Button>
                    {/* </Link> */}
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    className="navmenu"
                    style={{ marginRight: 5 }}
                    eventKey={2}
                    // href="#memes"
                  >
                    {/* onClick={() => auth.signOut()} */}
                    <Button
                      className="btnlinnk"
                      // style={{ fontSize: 5 }}
                      variant="outline-success"
                    >
                      <span onClick={() => auth.signOut()}>LOGOUT</span>
                    </Button>
                  </Nav.Link>
                </li>
              </ul>
            )}

            <Nav.Link as={Link} to="/" className="navmenu nav_burger">
              {/* <Link to="/"> */}
              HOME
              {/* </Link> */}
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
