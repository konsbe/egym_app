import React, { useRef } from "react";
import HomeDirectoy from "../../components/Directory/HomeDirectory";
import AboutDirectoy from "../../components/Directory/AboutDirectory";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Homepage = (props) => {
  // const myRef = useRef(null);
  // const executeScroll = () => scrollToRef(myRef);
  const aboutSection = useRef(AboutDirectoy);
  const goToAboutSection = () =>
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: "smooth",
    });

  return (
    <div>
      <HomeDirectoy {...goToAboutSection} />
      <AboutDirectoy ref={aboutSection} />
    </div>
  );
};

export default Homepage;
