import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import { auth } from "./firebase/utils";

import "bootstrap/dist/css/bootstrap.min.css";
import "./default.css";
import MainLayout from "./layouts/MainLayout";
// import Header from "./components/Header";
import Homepage from "./views/Homepage";
import Registration from "./views/Registration";
import Login from "./views/Login";

const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }
  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged((userAuth) => {
      if (!userAuth) return;
      this.setState({
        currentUser: userAuth,
      });
    });
  }
  componentWillUnmount() {
    this.authListener();
  }
  render() {
    const { currentUser } = this.state;
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <Switch>
            <MainLayout currentUser={currentUser}>
              <Route exact path="/" component={Homepage} />

              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
            </MainLayout>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
