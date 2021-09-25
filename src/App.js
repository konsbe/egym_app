import React, { useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Redirect,
} from "react-router-dom";
import { auth, handleUserProfile } from "./firebase/utils";
import { getauth, onAuthStateChanged } from "firebase/auth";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/User/user.actions";

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
  const { setCurrentUser, currentUser } = props;

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });

    return () => {
      authListener();
    };
  }, []);

  // render() {
  //   const { currentUser } = this.state;
  // }

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
              // currentUser ? (
              //   <Redirect to="/" />
              // ) :
              <MainLayout>
                <Registration />
              </MainLayout>
            )}
          />
          <Route
            path="/login"
            render={() => (
              // currentUser ? (
              //   <Redirect to="/" />
              // ) :
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

          {/* <MainLayout currentUser={currentUser}>
              <Route exact path="/" component={Homepage} />

              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
            </MainLayout> */}
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
