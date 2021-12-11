import React, { useState } from "react";
import { GrTableAdd } from "@react-icons/all-files/gr/GrTableAdd";
const AddReps = ({ i, func }) => {
  const [set, setSet] = useState("");
  const [rep, setRep] = useState("");
  const [kg, setKg] = useState("");
  const [rests, setRests] = useState("");
  const [list, setList] = useState("");

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
  const rest = [];
  const sec = [];
  // for (let i = 0; i < 60; i += 0.1) {}
  for (let i = 0; i < 60; i += 1) {
    // rest.push(parseFloat(i + "." + i));
    sec.push(i);
  }
  //   // sec.push(i);
  const gank = () => {
    {
      Object.keys(sec).map(function (key, index) {
        for (let i = 0; i < 60; i += 1) {
          // key.map((i) => (
          rest.push(parseFloat(index + "." + i));
          // console.log(rest[key], i);
        }
        // ))
      });
    }
    return rest;
  };
  gank();
  const addSetsValues = (e) => {
    setSet(e.target.value);
  };
  const addRepsValues = (e) => {
    setRep(e.target.value);
  };
  const addKiloValues = (e) => {
    setKg(e.target.value);
  };
  const addRestsValues = (e) => {
    setRests(e.target.value);
  };
  const handleClick = () => {
    // console.log(i, set, rep, kg, rests);
    func(i, set, rep, kg, rests);
  };

  return (
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
      <select className="setsNreps" onChange={addRestsValues}>
        {/* <option key={-1}>--kg--</option> */}
        {rest.map((i, index) => {
          return (
            <option key={index} value={i}>
              {i}
            </option>
          );
        })}
      </select>
      <span className="setsNreps" onClick={handleClick}>
        {0 + i} <GrTableAdd className="setsNrepsAdd" />
      </span>
      <span className="setsNreps" onClick={handleClick}></span>
      {/* <div onClick={handleClick}>asd</div> */}
    </div>
  );
};

export default AddReps;
