import React from "react";
import Header from "./../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

const MainLayout = (props) => {
  return (
    <div>
      <Header {...props} />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
