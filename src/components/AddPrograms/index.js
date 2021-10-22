import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import {
  addCourseStart,
  fetchCoursesStart,
  deleteCourseStart,
} from "./../../redux/Courses/courses.actions";

import AddButton from "./../ExerciseForm/AddButton";
import FormInput from "./../Forms/FormInput";
import Button from "./../Forms/Button";

import Program from "./Program";
import image3 from "./image3.jpg";
const mapState = ({ coursesData }) => ({
  courses: coursesData.courses,
});

const AddPrograms = ({}) => {
  const { courses } = useSelector(mapState);
  const dispatch = useDispatch();
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseMonths, setCourseMonths] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imgURL, setImgURL] = useState("");

  const resetForm = () => {
    setCourseName("");
    setCourseMonths("");
    setCourseDescription("");
    setPrice(0);
    setImgURL("");
    setShowAddCourse(false);
  };

  useEffect(() => {
    dispatch(fetchCoursesStart());
  }, []);

  const handleProgramFormSubmit = (event) => {
    event.preventDefault();
    // resetForm();
    dispatch(
      addCourseStart({
        courseName,
        courseMonths,
        courseDescription,
        price,
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
              type="number"
              name="price"
              value={price}
              placeholder="Course Price"
              handleChange={(e) => setPrice(e.target.value)}
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
      <h3 className="coursesHeader">Courses</h3>
      <div className="courses">
        {courses.map((course, index) => {
          const {
            courseName,
            courseMonths,
            imgURL,
            courseDescription,
            price,
            documentID,
          } = course;
          const configCourse = {
            ...course,
          };
          return (
            <div className="card" key={index}>
              {/* <Program {...configCourse} /> */}
              <div className="card-image">
                {/* <img src={image3} alt=""></img> */}
              </div>
              {/* {imgUrl} */}
              <div className="card-text">
                <h2 className="cardName">{courseName}</h2>

                <p>{courseDescription}</p>
              </div>
              <div className="card-stats">
                <div class="stat">
                  <div class="value">{courseMonths}</div>
                  <div class="type">Months</div>
                </div>
                <div class="stat">
                  <div class="value">{price}</div>
                  <div class="type">Euro</div>
                </div>
                <div class="stat">
                  <div class="value">
                    <FaTimes
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => dispatch(deleteCourseStart(documentID))}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddPrograms;
