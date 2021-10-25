import React from "react";
import FormTest from "../../components/FormTest";
import TestDirectory from "../../components/Directory/TestDirectory";

const Test = (props) => {
  return (
    <div className="testView">
      <TestDirectory />
      <FormTest />
    </div>
  );
};

export default Test;
