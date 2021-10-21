import React from "react";
import Button from "../../Forms/Button";

import image2 from "./image2.png";
import "./styles.css";

const AboutDirectory = (props) => {
  return (
    <div>
      <section className="aboutpage">
        <h1 className="headings">This is the About Page</h1>
        <div className="pic">
          <img src={image2} alt=""></img>
          <div className="content">
            <h2>this is a heading</h2>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              cursus dui erat, et ultrices elit vestibulum vel. Mauris ex
              tortor, eleifend et porta eu, accumsan ac nunc. Nullam ac leo
              sapien. In maximus sapien eget tellus finibus, sit amet porta mi
              vulputate. Phasellus eget pharetra dui. Mauris volutpat est dolor,
              id pretium ex tempus ut. Nam eu tellus ipsum.
            </div>
          </div>
          {/* <Button className="btnDetails">Go to details</Button> */}
        </div>
        <div className="pic">
          <div className="content">
            <h2 className="contentHeading">this is a heading</h2>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              cursus dui erat, et ultrices elit vestibulum vel. Mauris ex
              tortor, eleifend et porta eu, accumsan ac nunc. Nullam ac leo
              sapien. In maximus sapien eget tellus finibus, sit amet porta mi
              vulputate. Phasellus eget pharetra dui. Mauris volutpat est dolor,
              id pretium ex tempus ut. Nam eu tellus ipsum.
            </div>
          </div>
          <img src={image2} alt=""></img>
          {/* <Button className="btnDetails">Go to details</Button> */}
        </div>
      </section>
    </div>
  );
};

export default AboutDirectory;
