import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesStart } from "../../redux/Courses/courses.actions";

const mapState = ({ coursesData }) => ({
  courses: coursesData.courses,
});

const Courses = (props) => {
  const { courses } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoursesStart());
  }, []);

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
              <div className="mytable">
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
                    <div className="stat">
                      <div className="value">{courseMonths}</div>
                      <div className="type">Months</div>
                    </div>
                    <div className="stat">
                      <div className="value">{price}</div>
                      <div className="type">Euro</div>
                    </div>
                    <div className="stat">
                      {/* <div class="value">
                    <FaTimes
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => dispatch(deleteCourseStart(documentID))}
                    />
                  </div> */}
                    </div>
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
