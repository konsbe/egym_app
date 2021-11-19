import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";

import { fetchExercisesStart } from "../../redux/Exercises/exercises.actions";

const mapState = ({ exercisesData }) => ({
  exercises: exercisesData.exercises,
});

const AddTask = ({ onAdd }) => {
  const [count, setCount] = useState(1);
  const { exercises } = useSelector(mapState);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [youtube, setYoutube] = useState("");
  const [day, setDay] = useState("");
  const sets = [];
  for (let i = 0; i < 100; i++) {
    sets.push(i);
  }
  const reps = [];
  for (let i = 0; i < 100; i++) {
    reps.push(i);
  }
  const kilos = [];
  for (let i = 0; i < 300; i += 0.25) {
    kilos.push(i);
  }

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
  const handleClick = () => {
    setCount(count + 1);
  };
  const deleteCount = () => {
    setCount(count - 1);
  };
  let menuItems = [];
  for (var i = 0; i < count; i++) {
    // if (i === count - 1) {
    menuItems.push(
      <div className="setsNrepsSelects">
        <select className="setsNreps">
          <option value="">--sets--</option>
          {sets.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </select>
        <select className="setsNreps">
          <option value="">--reps--</option>
          {reps.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </select>
        <select className="setsNreps">
          <option value="">--kg--</option>
          {kilos.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </select>
        <span className="setsNreps">{i + 1}</span>
      </div>
    );
    // } else {
  }

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
        <label>Training Comments</label>
        <input
          type="text"
          placeholder="write a quick comment about his training e.g. rest.."
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control">
        <div className="grid-container">
          <label>
            <span>
              <FaTimes
                style={{ color: "red", cursor: "pointer", height: 20 }}
                onClick={deleteCount}
              />
            </span>
            <span>sets | reps | kg</span>
            <span>
              <FaRegPlusSquare
                style={{ color: "green", cursor: "pointer", height: 20 }}
                onClick={handleClick}
              />
            </span>
          </label>
        </div>

        <div>{menuItems}</div>
        {/* <div className="spansAddDeleteSets"> */}
      </div>
      {/* </div> */}

      <input type="submit" value="Save Task" className="btnTask btn-block" />
    </form>
  );
};

export default AddTask;
