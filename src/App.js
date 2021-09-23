import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./default.css";
import MainLayout from "./layouts/MainLayout";
import Header from "./components/Header";
import Homepage from "./views/Homepage";
import Registration from "./views/Registration";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Switch>
          <MainLayout>
            <Route exact path="/" component={Homepage} />

            <Route path="/registration" component={Registration} />
          </MainLayout>
        </Switch>
      </div>
    </div>
  );
}

export default App;
