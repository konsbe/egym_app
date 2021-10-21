import React, {
  useState,
  // , useEffect
} from "react";
import {
  useDispatch,
  // , useSelector
} from "react-redux";
import "./styles.css";
// import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import {
  addCourseStart,
  // fetchCoursesStart,
  // deleteCourseStart,
} from "./../../redux/Courses/courses.actions";

import AddButton from "./../ExerciseForm/AddButton";
import FormInput from "./../Forms/FormInput";
import Button from "./../Forms/Button";

const AddPrograms = (props) => {
  const dispatch = useDispatch();
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseMonths, setCourseMonths] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [imgURL, setImgURL] = useState("");

  const resetForm = () => {
    setCourseName("");
    setCourseMonths("");
    setCourseDescription("");
    setImgURL("");
    setShowAddCourse(false);
  };

  // useEffect(() => {
  //   dispatch(fetchCoursesStart());
  // }, []);

  const handleProgramFormSubmit = (event) => {
    event.preventDefault();
    // resetForm();
    dispatch(
      addCourseStart({
        courseName,
        courseMonths,
        courseDescription,
        imgURL,
      })
    );
    resetForm();
  };

  return (
    <div className="addCourse">
      <AddButton
        className="btnPrograms"
        onAdd={() => setShowAddCourse(!showAddCourse)}
      >
        ADD COURSE
      </AddButton>
      {showAddCourse && (
        <form onSubmit={handleProgramFormSubmit}>
          <div className="form">
            <FormInput
              className="forminput"
              type="text"
              name="courseName"
              value={courseName}
              placeholder="Course Name"
              handleChange={(e) => setCourseName(e.target.value)}
            />
            <FormInput
              className="forminput"
              type="text"
              name="courseMonths"
              value={courseMonths}
              placeholder="Course Months"
              handleChange={(e) => setCourseMonths(e.target.value)}
            />
            <textarea
              className="formtext"
              type="textarea"
              name="courseDescription"
              rows="8"
              value={courseDescription}
              placeholder="describe your course content"
              onChange={(e) => setCourseDescription(e.target.value)}
            />
            <FormInput
              className="forminput"
              type="text"
              name="imgURL"
              value={imgURL}
              placeholder="Image URL"
              handleChange={(e) => setImgURL(e.target.value)}
            />
          </div>
          <Button className="btnPrograms" type="submit">
            ADD
          </Button>
        </form>
      )}
      <div className="courses">
        <h3 className="coursesHeader">Courses</h3>
        {/* {exercises.map((exercise, index) => {
          const { youtubeURL, exerciseName, imgURL, documentID } = exercise;
          return (
            <div className="exerciseDetails" key={index}>
              <span>{exerciseName}</span>

              <span>{youtubeURL}</span>

              <span>{imgURL}</span>

              <span className="deleteBtn">
                <FaTimes
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => dispatch(deleteExerciseStart(documentID))}
                />
              </span>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default AddPrograms;
