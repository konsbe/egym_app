import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./default.css";
import Header from "./components/Header";
import Homepage from "./views/Homepage";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Homepage />
        <h2>hello word 2</h2>
      </div>
    </>
  );
}

export default App;
