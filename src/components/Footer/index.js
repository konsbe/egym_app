import React from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";

const Footer = (props) => {
  const history = useHistory();
  return (
    <footer className="footer" sticky="bottom">
      <div>
        <p>© Copyrights to Berdelis Konstantinos</p>

        <p>© email: berdelis.konstantinos@gmail.com</p>
        <p>
          © App-Specs:{" "}
          <Link className="loginlink" to="/app-specs">
            {" "}
            app-specs{" "}
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
