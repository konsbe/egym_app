import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  auth,
  handleUserProfile,
  getCurrentUser,
} from "./../../firebase/utils";
import userTypes from "./user.types";
import {
  signInSuccess,
  signOutUserSuccess,
  resetPasswordSuccess,
  userError,
  setUsers,
  setUser,
} from "./user.actions";
import {
  handleFetchUsers,
  handleResetPasswordAPI,
  handleNewData,
  handleFetchUser,
} from "./user.helpers";
import { useAuth } from "./../../customHooks";

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
  try {
    const userRef = yield call(handleUserProfile, {
      userAuth: user,
      additionalData,
    });
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (err) {
    // console.log(err);
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    // console.log(err);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    // console.log(err);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(signOutUserSuccess());
  } catch (err) {
    // console.log(err);
  }
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}
export function* signUpUser({
  payload: {
    firstName,
    lastName,
    genre,
    height,
    weight,
    email,
    birthDay,
    password,
    confirmPassword,
    injuries,
    gear,
  },
}) {
  if (password !== confirmPassword) {
    const err = ["Password don't much"];
    yield put(userError(err));
    return;
  }
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const additionalData = {
      firstName,
      lastName,
      birthDay,
      genre,
      height,
      weight,
      injuries,
      gear,
    };
    yield getSnapshotFromUserAuth(user);
    yield call(handleUserProfile, {
      userAuth: user,
      additionalData,
    });
  } catch (err) {}
}

export function* onSignUpUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export function* resetPassword({ payload: { email } }) {
  try {
    yield call(handleResetPasswordAPI, email);
    yield put(resetPasswordSuccess());
  } catch (err) {
    yield put(userError(err));
  }
}

export function* onResetPasswordStart() {
  yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword);
}

export function* fetchUsers() {
  try {
    const users = yield handleFetchUsers();
    yield put(setUsers(users));
  } catch (err) {}
}

export function* onFetchUsersStart() {
  yield takeLatest(userTypes.FETCH_USERS_START, fetchUsers);
}

export function* addData({
  payload: {
    rightShoulder,
    leftShoulder,
    rightPlentar,
    leftPlentar,
    pelvic,
    rightChest,
    leftChest,
    rightAnkle,
    leftAnkle,
    rightAdductor,
    leftAdductor,
    rightSoleAnkle,
    leftSoleAnkle,
    rightGluteus,
    leftGluteus,
    goodmorning,
    anterior,
    posterior,
    birthDay,
    firstName,
    lastName,
    genre,
    height,
    weight,
    injuries,
    gear,
    email,
    createdDate,
    userRoles,
  },
}) {
  try {
    yield handleNewData({
      rightShoulder,
      leftShoulder,
      rightPlentar,
      leftPlentar,
      pelvic,
      rightChest,
      leftChest,
      rightAnkle,
      leftAnkle,
      rightAdductor,
      leftAdductor,
      rightSoleAnkle,
      leftSoleAnkle,
      rightGluteus,
      leftGluteus,
      goodmorning,
      anterior,
      posterior,
      birthDay,
      firstName,
      lastName,
      genre,
      height,
      weight,
      injuries,
      gear,
      email,
      createdDate,
      userRoles,
      userUID: auth.currentUser.uid,
    });
  } catch (err) {}
}

export function* onAddTestData() {
  yield takeLatest(userTypes.ADD_NEW_DATA_START, addData);
}

export function* fetchUser({ payload }) {
  try {
    const user = yield handleFetchUser(payload);
    yield put(setUser(user));
  } catch (err) {}
}

export function* onFetchUserStart() {
  yield takeLatest(userTypes.FETCH_USER_START, fetchUser);
}

export default function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutUserStart),
    call(onSignUpUserStart),
    call(onResetPasswordStart),
    call(onFetchUsersStart),
    call(onAddTestData),
    call(onFetchUserStart),
  ]);
}
