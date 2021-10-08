import React from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const Popup = (props) => {
  return props.trigger ? (
    <div className="modalOverlay" onClick={() => props.setTrigger(false)}>
      <div className="popup">
        <div className="popup-inner">
          {/* <FaTimes onClick={() => props.setTrigger(false)} className="close" /> */}
          {props.children}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
