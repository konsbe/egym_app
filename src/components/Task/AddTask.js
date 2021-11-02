import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchExercisesStart } from "../../redux/Exercises/exercises.actions";

const mapState = ({ exercisesData }) => ({
  exercises: exercisesData.exercises,
});

const AddTask = ({ onAdd }) => {
  const { exercises } = useSelector(mapState);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [youtube, setYoutube] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("please add task");
      return;
    }
    onAdd({ title, day, youtube });
    setTitle("");
    setDay("");
    setYoutube("");
    e.target.reset();
  };

  useEffect(() => {
    dispatch(fetchExercisesStart());
  }, []);

  const extractValues = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
    // setYoutube(e.target.data);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        {/* <input
          type="text"
          placeholder="add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        /> */}
        <select className="exerciseSelect" onChange={extractValues}>
          <option value="">--Please choose an option--</option>
          {exercises.map((exercise, index) => {
            const { youtubeURL, exerciseName, imgURL, documentID } = exercise;
            return (
              <option
                value={`${exerciseName},${youtubeURL},${imgURL}`}
                data-val={youtubeURL}
                key={index}
              >
                {exerciseName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-control">
        <label>sets & reps</label>
        <input
          type="text"
          placeholder="reps*kg"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <input type="submit" value="Save Task" className="btnTask btn-block" />
    </form>
  );
};

export default AddTask;
