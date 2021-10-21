import React from "react";
import Button from "../../Forms/Button";

import "./styles.css";

const HomeDirectory = (props) => {
  return (
    <div>
      <section className="homepage">
        <div className="mainDetails">
          <h1 className="headings">This is the homepage</h1>
          <Button className="btnDetails">Go to details</Button>
        </div>
      </section>
    </div>
  );
};

export default HomeDirectory;
