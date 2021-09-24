import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import snatch from "./../../assets/snatch.jpg";
import { auth } from "./../../firebase/utils";

const Header = (props) => {
  const { currentUser } = props;
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
          <Nav className="me-auto">
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
              <Nav.Link as={Link} to="/login" className="navmenu">
                {/* <Link > */}
                <Button className="btnlink" variant="outline-success">
                  LOG IN / SIGN UP
                </Button>
                {/* </Link> */}
              </Nav.Link>
            )}
            {currentUser && (
              <Nav.Link
                className="navmenu"
                style={{ marginRight: 5 }}
                eventKey={2}
                // href="#memes"
              >
                {/* onClick={() => auth.signOut()} */}
                <Button
                  className="btnlinnk"
                  style={{ fontSize: 5 }}
                  variant="outline-success"
                >
                  LOGOUT
                </Button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
  Header.defaultProps = {
    currentUser: null,
  };
};

export default Header;
