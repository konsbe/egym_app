import React, { useState } from "react";
import "./styles.scss";

const ScrolledKeys = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return [
    <div className="modalOverlayScrolled" onClick={() => toggleModal()} />,
    <div className="modalWrapScrolled">
      {/* <div className="modal"> */}
      <div className="modalDivScrolled">{children}</div>
      {/* </div> */}
    </div>,
  ];
};
export default ScrolledKeys;
