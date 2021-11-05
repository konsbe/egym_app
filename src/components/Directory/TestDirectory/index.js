import React, { useRef } from "react";
import Button from "../../Forms/Button";

import "./styles.css";

import { Link } from "react-scroll";

const TestDirectory = (props) => {
  return (
    <div>
      <section className="testpage">
        <div className="mainDetails">
          <h1 className="headings" id="homeHeading">
            What is the test
          </h1>
          <Link to="formTestScroll" smooth={true} duration={100}>
            <Button className="btnDetails">Go to Test</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TestDirectory;
