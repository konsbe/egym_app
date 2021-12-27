import React, { useState } from "react";
import image2 from "./image2.png";
import "./styles.scss";
import Button from "../../Forms/Button";
import Modal from "./../../Modal";
import manageusers from "./manageusers.jpg";

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
      <button onClick={() => toggleModal()}>OpenModal</button>
      <Modal {...configModal}>
        <div className="imgView">
          <div className="picos">
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
              <h2 className="contentHeading">this is a heading</h2>

              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                cursus dui erat, et ultrices elit vestibulum vel. Mauris ex
                tortor, eleifend et porta eu, accumsan ac nunc. Nullam ac leo
                sapien. In maximus sapien eget tellus finibus, sit amet porta mi
                vulputate. Phasellus eget pharetra dui. Mauris volutpat est
                dolor, id pretium ex tempus ut. Nam eu tellus ipsum.
              </div>
            </div>
            <img
              src={image2}
              alt={image2}
              onClick={(e) => imageHandler(e)}
            ></img>
            {/* <Button className="btnDetails">Go to details</Button> */}
          </div>
          <div className="pic picinfo">
            <img
              src={manageusers}
              alt={manageusers}
              onClick={(e) => imageHandler(e)}
            ></img>
            <div className="content">
              <h2 className="headingTwo">this is a heading</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                cursus dui erat, et ultrices elit vestibulum vel. Mauris ex
                tortor, eleifend et porta eu, accumsan ac nunc. Nullam ac leo
                sapien. In maximus sapien eget tellus finibus, sit amet porta mi
                vulputate. Phasellus eget pharetra dui. Mauris volutpat est
                dolor, id pretium ex tempus ut. Nam eu tellus ipsum.
              </div>
              {/* </div> */}
              {/* <Button className="btnDetails">Go to details</Button> */}
            </div>
          </div>
        </section>
        <section className="aboutpageInfos">
          <h1 className="headings">This is the About Page</h1>
          {/* <div className="aboutSection"> */}
          <div className="pic picinfo">
            <div className="content">
              <h2 className="contentHeading">this is a heading</h2>

              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                cursus dui erat, et ultrices elit vestibulum vel. Mauris ex
                tortor, eleifend et porta eu, accumsan ac nunc. Nullam ac leo
                sapien. In maximus sapien eget tellus finibus, sit amet porta mi
                vulputate. Phasellus eget pharetra dui. Mauris volutpat est
                dolor, id pretium ex tempus ut. Nam eu tellus ipsum.
              </div>
            </div>
            <img
              src={image2}
              alt={image2}
              onClick={(e) => imageHandler(e)}
            ></img>
            {/* <Button className="btnDetails">Go to details</Button> */}
          </div>
          <div className="pic picinfo">
            <img
              src={manageusers}
              alt={manageusers}
              onClick={(e) => imageHandler(e)}
            ></img>
            <div className="content">
              <h2 className="headingTwo">this is a heading</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                cursus dui erat, et ultrices elit vestibulum vel. Mauris ex
                tortor, eleifend et porta eu, accumsan ac nunc. Nullam ac leo
                sapien. In maximus sapien eget tellus finibus, sit amet porta mi
                vulputate. Phasellus eget pharetra dui. Mauris volutpat est
                dolor, id pretium ex tempus ut. Nam eu tellus ipsum.
              </div>
              {/* </div> */}
              {/* <Button className="btnDetails">Go to details</Button> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppInfosDirectory;
