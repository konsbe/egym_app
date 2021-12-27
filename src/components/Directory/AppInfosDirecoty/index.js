import React, { useState } from "react";
import image2 from "./image2.png";
import "./styles.scss";
import Button from "../../Forms/Button";
import Modal from "./../../Modal";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import manageusers from "./manageusers.webp";
import adminToolbar from "./adminToolbar.webp";
import manageexercises from "./manageexercises.webp";
import addcourse from "./addcourse.webp";
import addingweek from "./addingweek.webp";
import addProgramm from "./addProgramm.webp";
import addDay from "./addDay.webp";
import phoneApp from "./phoneApp.webp";

const AppInfosDirectory = () => {
  const [modal, setModal] = useState(false);
  const [hideModal, setHideModal] = useState(true);
  const [image, setImage] = useState(image2);

  const toggleModal = (e) => {
    setHideModal(!hideModal);
    console.log(hideModal);

    //  setHideModal(!hideModal);

    //  console.log(e.target.alt);
  };
  const imageHandler = (e) => {
    setImage(e.target.alt);
    setHideModal(!hideModal);
  };
  const configModal = {
    hideModal,
    toggleModal,
  };

  return (
    <div>
      {/* <button onClick={() => toggleModal()}>OpenModal</button> */}
      <Modal {...configModal}>
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
        <section className="aboutpageInfos">
          <h1 className="headings">This is the About Page</h1>
          {/* <div className="aboutSection"> */}
          <div className="pic picinfo">
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
              className="phoneImage"
              onClick={(e) => imageHandler(e)}
            ></img>
            {/* <Button className="btnDetails">Go to details</Button> */}
          </div>
          <div className="pic picinfo">
            <img
              src={adminToolbar}
              alt={adminToolbar}
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
        <section className="aboutpageInfos">
          {/* <div className="aboutSection"> */}
          <div className="pic picinfo">
            <div className="content">
              <h2 className="contentHeading">Customer Management System</h2>

              <div>
                CMS helps you interact with all the users in this app, being
                updated, track them and have the abilty for better admin - user
                experience through this App
              </div>
            </div>
            <img
              src={manageusers}
              alt={manageusers}
              onClick={(e) => imageHandler(e)}
            ></img>
            {/* <Button className="btnDetails">Go to details</Button> */}
          </div>
          <div className="pic picinfo">
            <img
              src={addcourse}
              alt={addcourse}
              onClick={(e) => imageHandler(e)}
            ></img>
            <img
              src={manageexercises}
              alt={manageexercises}
              onClick={(e) => imageHandler(e)}
            ></img>
            <div className="content">
              <h2 className="headingTwo">
                READ WRITE UPDATE DELETE INDEPENDENTLY
              </h2>
              {/* <div>
                Read write update and delete your products independently
              </div> */}
            </div>
          </div>
        </section>
        <section className="aboutpageInfos">
          {/* <div className="aboutSection"> */}
          <div className="picos picinfo newContent">
            <img
              src={addingweek}
              alt={addingweek}
              onClick={(e) => imageHandler(e)}
            ></img>
            <img
              src={addDay}
              alt={addDay}
              onClick={(e) => imageHandler(e)}
            ></img>
            <img
              src={addProgramm}
              alt={addProgramm}
              onClick={(e) => imageHandler(e)}
            ></img>
            {/* <Button className="btnDetails">Go to details</Button> */}

            <div className=" newContent">
              <h2 className="contentHeading">Post Section</h2>

              <div>
                CMS helps you interact with all the users in this app, being
                updated, track them and have the abilty for better admin - user
                experience through this App
              </div>
            </div>
          </div>
          <div className="pic picinfo">
            <img
              src={addcourse}
              alt={addcourse}
              onClick={(e) => imageHandler(e)}
            ></img>
            <img
              src={manageexercises}
              alt={manageexercises}
              onClick={(e) => imageHandler(e)}
            ></img>
            <div className="content">
              <h2 className="headingTwo">Post Section</h2>
              {/* <div>
                Read write update and delete your products independently
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppInfosDirectory;
