import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { checkUserSession } from "./redux/User/user.actions";

//high order components
import WithAuth from "./hoc/withAuth";

//css and styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./default.css";
//layouts
import MainLayout from "./layouts/MainLayout";

//views
import Homepage from "./views/Homepage";
import Registration from "./views/Registration";
import Login from "./views/Login";
import Recovery from "./views/Recovery";
import Dashboard from "./views/Dashboard";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <div className="main">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainLayout>
                <Homepage />
              </MainLayout>
            )}
          />
          <Route
            path="/registration"
            render={() => (
              <MainLayout>
                <Registration />
              </MainLayout>
            )}
          />
          <Route
            path="/login"
            render={() => (
              <MainLayout>
                <Login />
              </MainLayout>
            )}
          />
          <Route
            path="/recovery"
            render={() => (
              <MainLayout>
                <Recovery />
              </MainLayout>
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <WithAuth>
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              </WithAuth>
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
