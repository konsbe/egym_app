import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";
import Button from "./../Forms/Button";

import AddReps from "./AddReps";

import { fetchExercisesStart } from "../../redux/Exercises/exercises.actions";
import { listen } from "dom-helpers";

const mapState = ({ exercisesData }) => ({
  exercises: exercisesData.exercises,
});

const AddTask = ({ onAdd }) => {
  const [count, setCount] = useState(1);
  const [newCount, setNewCount] = useState(1);
  const { exercises } = useSelector(mapState);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [youtube, setYoutube] = useState("");
  const [day, setDay] = useState("");
  const [select, setSelect] = useState([]);
  const [myReps, setMyReps] = useState([]);
  const [alist, setAList] = useState([1]);

  // const select = [];
  let newObj = new Object();
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
    onAdd({ title, day, youtube, myReps });
    setTitle("");
    setDay("");
    setYoutube("");
    setCount(1);
    setMyReps([]);
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
  const addSetsValues = (e) => {
    console.log(e.target.value);
    select.push(e.target.value);
    console.log(select);
    const set = e.target.value;
    // setYoutube(e.target.data);
  };
  const addRepsValues = (e) => {
    console.log(e.target.value);
    select.push(e.target.value);
    console.log(select);
    const rep = e.target.value;
    // setYoutube(e.target.data);
  };
  const addKiloValues = (e) => {
    console.log(e.target.value);
    select.push(e.target.value);
    console.log(select);
    const kilo = e.target.value;
    // setYoutube(e.target.data);
  };

  const pull_data = (i, set, rep, kg) => {
    console.log(i, set, rep, kg);
    select.push(set);
    select.push(rep);
    select.push(kg);
    select.push({ id: i });
    console.log(select);
    myReps.push({ ...select });
    console.log(myReps);
    setSelect([]);
  };

  const handleClick = async () => {
    setCount(count + 1);
    alist.push(count);
    // const id = count;
    // if (newCount === 0) {
    //   setNewCount(1);
    // } else {
    //   await select.push({ id: count });
    //   console.log(select);
    //   myReps.push({ ...select });
    //   setNewCount(1);
    // }
    // const newObj = {
    //   sets: sets,
    //   reps: reps,
    //   kilos: kilos,
    //   id: count,
    // };
    // // myReps.push(newObj);
    // // myReps.push(select);
    // console.log("dasdasadsdasadsasd");

    // console.log(myReps);
  };
  const deleteCount = () => {
    setCount(count - 1);
    alist.pop();
    // if (newCount === 1) {
    //   setNewCount(0);
    // } else {
    //   console.log(count);
    //   myReps.map((i) => {
    //     if (i[3].id === count) {
    //       // console.log(i[3].id);
    //       console.log(i);
    //       myReps.pop();
    //       console.log(myReps);
    //     }
    //   });
    // }
  };

  let menuItems = [];
  for (var i = 0; i < count; i++) {
    // if (i === count - 1) {
    menuItems.push(
      <div className="setsNrepsSelects" key={i}>
        <select className="setsNreps" onChange={addSetsValues}>
          {/* <option key={-1}>--sets--</option> */}
          {sets.map((i, index) => {
            return (
              <option key={i.toString()} value={i}>
                {i}
              </option>
            );
          })}
        </select>
        <select className="setsNreps" onChange={addRepsValues}>
          {/* <option key={-1}>--reps--</option> */}
          {reps.map((i, index) => {
            return (
              <option key={i.toString()} value={i}>
                {i}
              </option>
            );
          })}
        </select>
        <select className="setsNreps" onChange={addKiloValues}>
          {/* <option key={-1}>--kg--</option> */}
          {kilos.map((i, index) => {
            return (
              <option key={i.toString()} value={i}>
                {i}
              </option>
            );
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
        <label>Exercise</label>
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
            <span>sets | reps | kg | rest</span>
            <span>
              <FaRegPlusSquare
                style={{ color: "green", cursor: "pointer", height: 20 }}
                onClick={handleClick}
              />
            </span>
          </label>
        </div>

        {/* <div>{menuItems}</div> */}
        {alist.map((i, index) => (
          <AddReps i={index} key={index} func={pull_data} />
        ))}
        {count}
        {/* <div className="spansAddDeleteSets"> */}
      </div>
      {/* </div> */}

      <input type="submit" value="Save Task" className="btnTask btn-block" />
    </form>
  );
};

export default AddTask;
