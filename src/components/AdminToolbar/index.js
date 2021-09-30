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
            <Nav.Link as={Link} to="/admin" className="navmenu">
              <Button className="btnlink" variant="outline-success">
                My Admin
              </Button>
            </Nav.Link>
          </li>
        </ul>
      </div>
    );
  }
};

export default AdminToolbar;
