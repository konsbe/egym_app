import React from "react";
import Header from "./../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default MainLayout;
