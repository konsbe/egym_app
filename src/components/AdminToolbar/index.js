import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import { checkUserIsAdmin } from "./../../Utils";
// WithAdminAuth;
import "./styles.css";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const AdminToolbar = (props) => {
  const { currentUser } = useSelector(mapState);

  const isAdmin = checkUserIsAdmin(currentUser);
  if (!isAdmin) {
    return null;
  } else {
    return (
      <div className="adminToolbar">
        <ul className="toolbar">
          <li>
            <Nav.Link as={Link} to="/manageusers" className="navmenu">
              <Button
                className="btnlink"
                variant="outline-success"
                id="btnAdmin"
              >
                Manage Users
              </Button>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to="/programs" className="navmenu">
              <Button
                className="btnlink"
                variant="outline-success"
                id="btnAdmin"
              >
                My Programs
              </Button>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to="/exercises" className="navmenu">
              <Button
                className="btnlink"
                variant="outline-success"
                id="btnAdmin"
              >
                My Exercises
              </Button>
            </Nav.Link>
          </li>
        </ul>
      </div>
    );
  }
};

export default AdminToolbar;
