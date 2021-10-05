import React, { useState } from "react";

import "./styles.css";
import ExerciseForm from "../../components/ExerciseForm";

const Exercises = (props) => {
  const [showAddExercise, setShowAddExercise] = useState(false);
  return (
    <div>
      <ExerciseForm onAdd={() => setShowAddExercise(!showAddExercise)} />
      {showAddExercise && "THIS IS A TEST"}
    </div>
  );
};

export default Exercises;
