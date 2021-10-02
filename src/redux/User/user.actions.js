import userTypes from "./user.types";

export const emailSignInStart = (userCredentials) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});

export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START,
});

export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS,
});

export const signUpUserStart = (userCredentials) => ({
  type: userTypes.SIGN_UP_USER_START,
  payload: userCredentials,
});

export const userError = (err) => ({
  type: userTypes.USER_ERRORS,
  payload: err,
});

export const resetPasswordStart = (userCredentials) => ({
  type: userTypes.RESET_PASSWORD_START,
  payload: userCredentials,
});

export const resetPasswordSuccess = () => ({
  type: userTypes.RESET_PASSWORD_SUCCESS,
  payload: true,
});

// export const addNewUserStart

export const fetchUsersStart = () => ({
  type: userTypes.FETCH_USERS_START,

})

export const setUsers = (users) => ({
  type: userTypes.SET_USERS,
  payload: users
})

export const addDataStart = (userData) => ({
  type: userTypes.ADD_NEW_DATA_START,
  payload: userData,
});


export const fetchUserStart = (userID) => ({
  type: userTypes.FETCH_USER_START,
  payload: userID,
});

export const setUser = (user) => ({
  type: userTypes.SET_USER,
  payload: user,
});

// export const setCurrentUser = (user) => ({
//   type: userTypes.SET_CURRENT_USER,
//   payload: user,
// });

// export const resetAllAuthForms = () => ({
//   type: userTypes.RESET_AUTH_FORMS,
// });
