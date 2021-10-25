import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import {
  addExerciseStart,
  fetchExercisesStart,
  deleteExerciseStart,
} from "./../../redux/Exercises/exercises.actions";

import ExerciseForm from "../../components/ExerciseForm";
import AddButton from "./../../components/ExerciseForm/AddButton";
import FormInput from "../../components/Forms/FormInput";
import Button from "./../../components/Forms/Button";

const mapState = ({ exercisesData }) => ({
  exercises: exercisesData.exercises,
});

const Exercises = (props) => {
  const { exercises } = useSelector(mapState);
  const dispatch = useDispatch();
  const [showAddExercise, setShowAddExercise] = useState(false);
  const [exerciseName, setExerciseName] = useState("");
  const [youtubeURL, setYoutubeURL] = useState("");
  const [imgURL, setImgURL] = useState("");

  const resetForm = () => {
    setExerciseName("");
    setYoutubeURL("");
    setImgURL("");
    setShowAddExercise(false);
  };

  useEffect(() => {
    dispatch(fetchExercisesStart());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    resetForm();
    dispatch(
      addExerciseStart({
        exerciseName,
        youtubeURL,
        imgURL,
      })
    );
    resetForm();
  };

  return (
    <div className="addForm">
      <AddButton
        className="addForm"
        onAdd={() => setShowAddExercise(!showAddExercise)}
      >
        ADD EXERCISE
      </AddButton>
      {showAddExercise && (
        <form onSubmit={handleSubmit}>
          <div className="form">
            <FormInput
              className="forminput"
              type="text"
              name="exerciseName"
              value={exerciseName}
              placeholder="Exercise Name"
              handleChange={(e) => setExerciseName(e.target.value)}
            />
            <FormInput
              className="forminput"
              type="text"
              name="youtubeURL"
              value={youtubeURL}
              placeholder="Youtube URL"
              handleChange={(e) => setYoutubeURL(e.target.value)}
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
          <Button type="submit" className="btnPrograms">
            ADD
          </Button>
        </form>
      )}
      <div className="exercises">
        <h3 className="exerciseHeader">Exercises</h3>
        {exercises.map((exercise, index) => {
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
        })}
      </div>
    </div>
  );
};

export default Exercises;
