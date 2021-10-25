import React from "react";

const Program = ({
  courseName,
  courseMonhs,
  imgURL,
  courseDescription,
  price,
}) => {
  return (
    //  key={index}
    <div className="courseCard">
      <div className="cardImg"></div>
      {/* {imgUrl} */}
      <div className="cardText">
        <h2>{courseName}</h2>

        <p>{courseDescription}</p>
      </div>
      <div className="cardStatus"></div>
      {/* <span className="deleteBtn">
        <FaTimes
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => dispatch(deleteExerciseStart(documentID))}
        />
        </span> */}
    </div>
  );
};

export default Program;
