import React, { useRef } from "react";
import Button from "../../Forms/Button";

import "./styles.css";

import { Link } from "react-scroll";

const HomeDirectory = (props) => {
  return (
    <div>
      <section className="homepage">
        <div className="mainDetails">
          <h1 className="headings" id="homeHeading">
            This is the homepage
          </h1>
          <Link to="aboutPageScroll" smooth={true} duration={100}>
            <Button className="btnDetails">Go to details</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeDirectory;
