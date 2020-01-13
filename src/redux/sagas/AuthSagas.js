import { call, put, delay, take } from "redux-saga/effects";
import {
  LogInFunc,
  LogUpFunc,
  Vereficte,
  LogOut
} from "../../Services/ApiAuth";
import {
  LOGIN_ERROR,
  LOGIN_SUCCESSES,
  LOGUP_ERROR,
  LOGUP_SUCCESSES,
  VEREFICATE_SUCCESSES,
  VEREFICATE_ERROR,
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
    console.log("CurrentUser: ", CurrentUser);

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
    console.log("CreatedUser: ", CreatedUser);

    yield put({ type: LOGUP_SUCCESSES, payload: CreatedUser });
  } catch (error) {
    yield put({ type: LOGUP_ERROR, payload: error });
  }
}

function* logOutAuthorization() {
  try {
    yield call(LogOut);
    localStorage.removeItem("user");
    yield put({ type: LOGOUT_SUCCESSES });
  } catch (error) {
    yield put({ type: LOGOUT_ERROR });
  }
}

function* vereficateAuthorization() {
  try {
    yield put({ type: VEREFICATE_SUCCESSES, payload: true });
  } catch (error) {
    yield put({ type: VEREFICATE_ERROR, payload: false });
  }
}

export {
  logInAuthorization,
  logUpAuthorization,
  vereficateAuthorization,
  logOutAuthorization
};
