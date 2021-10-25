import React from "react";
import Button from "./TaskComponents/Button";
// import App from "./App";
// import Header from "./components/Header";
// import AddTask from "./AddTask";
// import Tasks from "./components/Tasks";
import { useState } from "react";
const AddDay = ({ onAdd }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please add Day");
      return;
    }
    onAdd({ text });
    setText("");
  };
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: "Doctors Appointment",
  //     day: "Feb 5th at 2:30pm",
  //     reminder: true,
  //   },
  //   {
  //     id: 2,
  //     text: "Meeting at School",
  //     day: "Feb 6th at 1:30pm",
  //     reminder: true,
  //   },
  // ]);
  // //Add Task

  // const addTask = (task) => {
  //   const id = tasks.length + 1;
  //   const newTask = { id, ...task };
  //   setTasks([...tasks, newTask]);
  // };

  // //Delete Task
  // const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };
  // const onClick = () => {
  //   // return console.log("yes");
  //   return (
  //     <div className="container">
  //       <h1>Hello from React</h1>
  //       <Header />
  //       <AddTask onAdd={addTask} />
  //       {tasks.length > 0 ? (
  //         <Tasks tasks={tasks} onDelete={deleteTask} />
  //       ) : (
  //         "No tasks"
  //       )}
  //     </div>
  //   );
  // };

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <header className="headerAddDay">
          <h2>Add A Day</h2>
          <Button
            color="green"
            text="Add"
            className="btnTask btn-block"
            onChange={(e) => setText(e.target.value)}
          />
        </header>
        <div className="form-control">
          <label>Day</label>
          <input
            type="text"
            placeholder="Day"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <input type="submit" value="Save Day" className="btnTask btn-block" />
      </form>
    </>
  );
};

export default AddDay;
