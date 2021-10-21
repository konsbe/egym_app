import React from "react";
import HomeDirectoy from "../../components/Directory/HomeDirectory";
import AboutDirectoy from "../../components/Directory/AboutDirectory";

const Homepage = (props) => {
  return (
    <div>
      <HomeDirectoy />
      <AboutDirectoy />
    </div>
  );
};

export default Homepage;
