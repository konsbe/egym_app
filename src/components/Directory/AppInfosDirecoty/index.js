import React, { useState, useEffect } from "react";
import image2 from "./image2.png";
import "./styles.scss";
import Button from "../../Forms/Button";
import Modal from "./../../Modal";
import ScrolledKeys from "./../../ScrolledKeys";
import { Link } from "react-scroll";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaArrowCircleUp } from "@react-icons/all-files/fa/FaArrowCircleUp";
import { GiSmartphone } from "@react-icons/all-files/gi/GiSmartphone";
import { AiOutlineFileSearch } from "@react-icons/all-files/ai/AiOutlineFileSearch";
import { FaRegEdit } from "@react-icons/all-files/fa/FaRegEdit";
import { RiAdminLine } from "@react-icons/all-files/ri/RiAdminLine";

import manageusers from "./manageusers.webp";
import adminToolbar from "./adminToolbar.webp";
import manageexercises from "./manageexercises.webp";
import addcourse from "./addcourse.webp";
import addingweek from "./addingweek.webp";
import addProgramm from "./addProgramm.webp";
import addDay from "./addDay.webp";
import phoneApp from "./phoneApp.webp";
import d3 from "./d3.webp";
import d4 from "./d4.webp";
import d1 from "./d1.webp";
import calendarDay from "./calendarDay.webp";
import calendarMonth from "./calendarMonth.webp";
import calendarWeek from "./calendarWeek.webp";

const AppInfosDirectory = () => {
  const [modal, setModal] = useState(false);
  const [hideModal, setHideModal] = useState(true);
  const [image, setImage] = useState(image2);
  const [ikey, setIKey] = useState("asdasdasd");
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    const price = window.onClick;
    // console.log("33");
    if (offset > 20) {
      setScrolled(true);
      console.log("scroll");
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const toggleModal = (e) => {
    setHideModal(!hideModal);
    console.log(hideModal);

    //  setHideModal(!hideModal);

    //  console.log(e.target.alt);
  };
  const imageHandler = (e) => {
    setImage(e.target.alt);
    setIKey(e.clientX);
    setHideModal(!hideModal);
    console.log({ ...e });
    console.log(ikey);
  };
  const configModal = {
    hideModal,
    toggleModal,
  };
  let x = ["show"];

  if (scrolled) {
    x.push("scrolledKeys");
  }

  return (
    <div>
      <div className="show">
        {/* <div className={x.join(" ")}> */}
        <ScrolledKeys>
          <div className="scrolledKeysExp">
            <Link
              to="aboutPageScroll"
              smooth={true}
              duration={100}
              style={{ marginRight: 20 }}
            >
              <GiSmartphone size={25} />
            </Link>
            <Link
              to="aboutpageScrolled"
              smooth={true}
              duration={100}
              style={{ marginRight: 20 }}
            >
              <AiOutlineFileSearch size={25} />
            </Link>
            <Link to="aboutPageScroll" smooth={true} duration={100}>
              <FaArrowCircleUp size={25} />
            </Link>
            <Link
              to="headingTwoScrolled"
              smooth={true}
              duration={100}
              style={{ marginLeft: 20 }}
            >
              <RiAdminLine size={25} />
            </Link>
            <Link
              to="scrolledTwo"
              smooth={true}
              duration={100}
              style={{ marginLeft: 20 }}
            >
              <FaRegEdit size={25} />
            </Link>
          </div>
        </ScrolledKeys>
      </div>
      {/* <button onClick={() => toggleModal()}>OpenModal</button> */}
      <Modal {...configModal} key={ikey}>
        <FaTimes
          className="fatimes"
          style={{
            color: "red",
            cursor: "pointer",
            marginBottom: -20,
            zIndex: 1000,
          }}
          size={40}
          onClick={toggleModal}
        />
        <div className="imgView">
          <div className="picosView">
            <img src={image} alt=""></img>
          </div>
        </div>
      </Modal>
      {/* {modal && (
        <div className="modal-content">
          my image
          <button onClick={toggleModal}>Close</button>
        </div>
      )} */}
      <div id="aboutPageScroll">
        <section className="aboutpageInfos ">
          <h1 className="headings">This is the About Page</h1>
          {/* <div className="aboutSection"> */}
          <div className="pic picinfo pwaScrolled">
            <div className="content">
              <h2 className="contentHeading">Progressive Web Application</h2>

              <div>
                <p>
                  This is a Social Media - Ecommerce web app for Gyms and
                  Personal Trainers
                </p>
                Progreesive Web Application supported from the most of the
                common browsers (Google Chrome, Safari, Mozilla Firefox) it can
                be downloaded from your Browser (Google Chrome, Safari) as an
                App or even from Google Play Store.
              </div>
            </div>
            <img
              src={phoneApp}
              alt={phoneApp}
              key={phoneApp}
              className="phoneImage"
              onClick={(e) => imageHandler(e)}
            ></img>
            {/* <Button className="btnDetails">Go to details</Button> */}
          </div>
          <div className="pic picinfo">
            <img
              src={adminToolbar}
              alt={adminToolbar}
              key={adminToolbar}
              onClick={(e) => imageHandler(e)}
            ></img>
            <div className="content">
              <h2 className="headingTwo">Admin Navigation Bar</h2>
              <div>
                With the admin Toolbar you can have access all over your
                products and customers, by writing new products, updating and
                delete them
              </div>
              {/* </div> */}
              {/* <Button className="btnDetails">Go to details</Button> */}
            </div>
          </div>
        </section>
        <section className="aboutpageInfos aboutpageScrolled">
          {/* <div className="aboutSection"> */}
          <div className="pic picinfo">
            <div className="content">
              <h2 className="contentHeading ">Customer Management System</h2>

              <div>
                CMS helps you interact with all the users in this app, being
                updated, track them and have the abilty for better admin - user
                experience through this App
              </div>
            </div>
            <img
              src={manageusers}
              alt={manageusers}
              key={manageusers}
              onClick={(e) => imageHandler(e)}
            ></img>
            {/* <Button className="btnDetails">Go to details</Button> */}
          </div>
          <div className="pic picinfo headingTwoScrolled">
            <img
              src={addcourse}
              alt={addcourse}
              key={addcourse}
              onClick={(e) => imageHandler(e)}
            ></img>
            <img
              // className="scrolledTwo"
              src={manageexercises}
              alt={manageexercises}
              key={manageexercises}
              onClick={(e) => imageHandler(e)}
            ></img>
            <div className="content ">
              <h2 className="headingTwo ">
                READ WRITE UPDATE DELETE INDEPENDENTLY
              </h2>
              {/* <div>
                Read write update and delete your products independently
              </div> */}
            </div>
          </div>
        </section>
        <section className="aboutpageInfos scrolledTwo">
          {/* <div className="aboutSection"> */}
          <div className="picos picinfo newContent">
            <img
              src={addingweek}
              alt={addingweek}
              key={addingweek}
              onClick={(e) => imageHandler(e)}
            ></img>
            <img
              src={addDay}
              alt={addDay}
              key={addDay}
              onClick={(e) => imageHandler(e)}
            ></img>
            <img
              src={addProgramm}
              alt={addProgramm}
              key={addProgramm}
              onClick={(e) => imageHandler(e)}
            ></img>
            {/* <Button className="btnDetails">Go to details</Button> */}

            <div className=" newContent">
              <h2 className="contentHeading contentHeadingTwo">
                User Interface for Admin
              </h2>

              <div></div>
            </div>
          </div>
          <div className="picos picinfo newContent">
            <div className=" newContent">
              <h2
                className="contentHeading contentHeadingTwo"
                style={{ textAlign: "start" }}
              >
                User Interface for clients
              </h2>

              <div></div>
            </div>
            <img
              src={d3}
              alt={d3}
              key={d3}
              onClick={(e) => imageHandler(e)}
            ></img>
            <img
              src={d1}
              alt={d1}
              key={d1}
              onClick={(e) => imageHandler(e)}
            ></img>
            <img
              src={d4}
              alt={d4}
              key={d4}
              onClick={(e) => imageHandler(e)}
            ></img>
            {/* <Button className="btnDetails">Go to details</Button> */}
          </div>
          <div className="picos picinfo newContent">
            <img
              src={calendarMonth}
              alt={calendarMonth}
              key={calendarMonth}
              onClick={(e) => imageHandler(e)}
            ></img>
            <img
              src={calendarWeek}
              alt={calendarWeek}
              key={calendarWeek}
              onClick={(e) => imageHandler(e)}
            ></img>
            <img
              src={calendarDay}
              alt={calendarDay}
              key={calendarDay}
              onClick={(e) => imageHandler(e)}
            ></img>
            {/* <Button className="btnDetails">Go to details</Button> */}

            <div className=" newContent">
              <h2 className="contentHeading contentHeadingTwo">
                Calendar Notes
              </h2>

              <div></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppInfosDirectory;
