import userTypes from "./user.types";
import { auth, handleUserProfile } from "../../firebase/utils";

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const resetAllAuthForms = () => ({
  type: userTypes.RESET_AUTH_FORMS,
});

export const logInUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      dispatch({
        type: userTypes.SIGN_IN_SUCCESS,
        payload: true,
      });
    } catch (err) {}
  };

export const signUpUser =
  ({
    firstName,
    lastName,
    nickName,
    email,
    birthDay,
    password,
    confirmPassword,
  }) =>
  async (dispatch) => {
    if (password !== confirmPassword) {
      const err = ["Password don't much"];
      dispatch({
        type: userTypes.SIGN_UP_ERROR,
        payload: err,
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, {
        firstName,
        lastName,
        nickName,
        birthDay,
      });
      dispatch({
        type: userTypes.SIGN_UP_SUCCESS,
        payload: true,
      });
    } catch (err) {}
  };

export const resetPassword =
  ({ email }) =>
  async (dispatch) => {
    try {
      const config = {
        url: "http://localhost:3000/login",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          dispatch({
            type: userTypes.RESET_PASSWORD_SUCCESS,
            payload: true,
          });
          // props.history.push("/login");
          //   console.log("Password Reset");
        })
        .catch(() => {
          const err = ["Email not Found"];
          dispatch({
            type: userTypes.RESET_PASSWORD_ERROR,
            payload: err,
          });
          // setErrors(err);
          //   console.log("Something went Wrong");
        });
    } catch (err) {}
  };







