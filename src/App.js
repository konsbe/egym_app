import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { checkUserSession } from "./redux/User/user.actions";

//components
import AdminToolbar from "./components/AdminToolbar";

//high order components
import WithAuth from "./hoc/withAuth";
import WithAdminAuth from "./hoc/withAdminAuth";
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
import Admin from "./views/Admin";
import Courses from "./views/Courses";
import DoTest from "./views/DoTest";
import Users from "./views/Users";
import Profile from "./views/Profile";
import Exercises from "./views/Exercises";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <div className="main">
        <AdminToolbar />
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
            exact
            path="/courses"
            render={() => (
              <MainLayout>
                <Courses />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/test"
            render={() => (
              <MainLayout>
                <DoTest />
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

          {/* FIX THOSE TWO ROUTS FOR ADMIN PERMISSIONS ONLY */}
          <Route
            path="/manageusers"
            render={() => (
              <MainLayout>
                <Users />
              </MainLayout>
            )}
          />
          <Route
            path="/exercises"
            render={() => (
              <MainLayout>
                <Exercises />
              </MainLayout>
            )}
          />
          <Route
            path="/user/:userID"
            render={() => (
              <MainLayout>
                <Profile />
              </MainLayout>
            )}
          />
          {/* FIX THOSE TWO ROUTS FOR ADMIN PERMISSIONS ONLY */}

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
          <Route
            path="/admin"
            render={() => (
              <WithAdminAuth>
                <MainLayout>
                  <Admin />
                </MainLayout>
              </WithAdminAuth>
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
