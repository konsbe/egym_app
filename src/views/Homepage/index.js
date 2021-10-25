import React from "react";
import HomeDirectoy from "../../components/Directory/HomeDirectory";
import AboutDirectoy from "../../components/Directory/AboutDirectory";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Homepage = (props) => {
  // const myRef = useRef(null);
  // const executeScroll = () => scrollToRef(myRef);

  return (
    <div>
      <HomeDirectoy />
      <AboutDirectoy />
    </div>
  );
};

export default Homepage;
