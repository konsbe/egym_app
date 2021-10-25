import React, { useEffect } from "react";
import EmailPassword from "../../components/EmailPassword";

const Recovery = (props) => {
  useEffect(() => {
    document.title = "Recover Password";
  }, []);
  return (
    <div>
      <EmailPassword />
    </div>
  );
};

export default Recovery;
