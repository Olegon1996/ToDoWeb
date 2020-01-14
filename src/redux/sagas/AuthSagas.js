import { call, put } from "redux-saga/effects";
import {
  LogInFunc,
  LogUpFunc,
  LogOut
} from "../../Services/ApiAuth";
import {
  LOGIN_ERROR,
  LOGIN_SUCCESSES,
  LOGUP_ERROR,
  LOGUP_SUCCESSES,
  LOGOUT_SUCCESSES,
  LOGOUT_ERROR
} from "../actions/actionsTypes";

function* logInAuthorization({ credentions: { email, password } }) {
  try {
    const tokenLogIn = yield call(LogInFunc, email, password);
    const CurrentUser = {
      name: tokenLogIn.name,
      email: tokenLogIn.Auth.user.email,
      uid: tokenLogIn.Auth.user.uid
    };
    sessionStorage.setItem("token", JSON.stringify(CurrentUser));
    yield put({ type: LOGIN_SUCCESSES, payload: CurrentUser });
  } catch (error) {
    yield put({ type: LOGIN_ERROR, payload: error });
  }
}

function* logUpAuthorization({ credentions: { email, password, name } }) {
  try {
    const tokenLogUp = yield call(LogUpFunc, email, password, name);
    const CreatedUser = {
      name: name,
      email: tokenLogUp.user.email,
      uid: tokenLogUp.user.uid
    };
    sessionStorage.setItem("token", CreatedUser);
    yield put({ type: LOGUP_SUCCESSES, payload: CreatedUser });
  } catch (error) {
    yield put({ type: LOGUP_ERROR, payload: error });
  }
}

function* logOutAuthorization() {
  try {
    yield call(LogOut);
    sessionStorage.removeItem("token");
    yield put({ type: LOGOUT_SUCCESSES });
  } catch (error) {
    yield put({ type: LOGOUT_ERROR });
  }
}

export {
  logInAuthorization,
  logUpAuthorization,
  logOutAuthorization
};
