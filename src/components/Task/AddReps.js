import React, { useState } from "react";

const AddReps = ({ i, func }) => {
  const [set, setSet] = useState("");
  const [rep, setRep] = useState("");
  const [kg, setKg] = useState("");
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

  const addSetsValues = (e) => {
    setSet(e.target.value);
  };
  const addRepsValues = (e) => {
    setRep(e.target.value);
  };
  const addKiloValues = (e) => {
    setKg(e.target.value);
  };
  const handleClick = () => {
    // console.log(i, set, rep, kg);
    func(i, set, rep, kg);
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
      <span className="setsNreps" onClick={handleClick}>
        {0 + i}
      </span>
      {/* <div onClick={handleClick}>asd</div> */}
    </div>
  );
};

export default AddReps;
