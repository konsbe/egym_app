import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesStart } from "../../redux/Courses/courses.actions";
import "./styles.css";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { updateUserStart } from "./../../redux/User/user.actions";
import { Link, useHistory } from "react-router-dom";

const mapState = ({ coursesData, user }) => ({
  courses: coursesData.courses,
  currentUser: user.currentUser,
});

const Courses = (props) => {
  const { courses } = useSelector(mapState);
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchCoursesStart());
  }, []);

  const handleChangeCourseTaken = async (e) => {
    if (currentUser) {
      const course = e;
      const documentID = currentUser.id;
      dispatch(
        updateUserStart({
          course: course,
          documentID,
        })
      );
      console.log(course, documentID);
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="coursePage">
      <h3 className="coursesHeader"></h3>
      <div>
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
              <div className="mytable" key={index}>
                <div className="card" key={index}>
                  {/* <Program {...configCourse} s/> */}
                  <div className="card-image">
                    {/* <img src={image3} alt=""></img> */}
                  </div>
                  {/* {imgUrl} */}
                  <div className="card-text">
                    <h2 className="cardName">{courseName}</h2>

                    <p>{courseDescription}</p>
                  </div>
                  <div className="card-stats">
                    <div className="stat">
                      <div className="value">{courseMonths}</div>
                      <div className="type">Months</div>
                    </div>
                    <div
                      className="stat"
                      onClick={(e) => {
                        // console.log(courseMonths);
                        handleChangeCourseTaken(courseMonths);
                      }}
                    >
                      <div className="buyitem" style={{ paddingLeft: 4 }}>
                        buy
                      </div>
                      <div className="buyitem">
                        <AiOutlineShoppingCart size={30} />
                      </div>
                    </div>
                    <div className="stat">
                      <div className="value">{price}</div>
                      <div className="type">Euro</div>
                    </div>
                    {/* <div className="stat"> */}
                    {/* <div class="value">
                    <FaTimes
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => dispatch(deleteCourseStart(documentID))}
                    />
                  </div> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
