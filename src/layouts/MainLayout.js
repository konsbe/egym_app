import React from "react";
import Header from "./../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import "./styles.css";

const MainLayout = (props) => {
  return (
    <div className="layout">
      <div className="navBar">
        <Header {...props} />
      </div>

      <div className="props">{props.children}</div>
      <div className="footerLayout">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
