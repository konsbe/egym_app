import React from "react";
import "./styles.css";

import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import snatch from "./../../assets/snatch.jpg";

const Header = () => {
  return (
    <div>
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
          href="#home"
        >
          <div className="wrap">
            <img className="brand-image" src={snatch} alt="Brand Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ alignContent: "center" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navmenu" href="#features">
              HOME
            </Nav.Link>
            <Nav.Link className="navmenu" href="#pricing">
              COURSES
            </Nav.Link>
            <NavDropdown
              className="navmenu"
              title="TEST"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="submenu" href="#action/3.1">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item className="submenu" href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item className="submenu" href="#action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="submenu" href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="navmenu" href="#deets">
              <Button variant="outline-success">LOG IN / SIGN UP</Button>
            </Nav.Link>
            <Nav.Link
              className="navmenu"
              style={{ marginRight: 5 }}
              eventKey={2}
              href="#memes"
            >
              <Button variant="outline-success">LOGOUT</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
