import {
  FETCHING_DATA,
  FETCH_DATA_SUCCESES,
  FETCH_DATA_ERROR
} from "./actionsTypes";

import store from "../store";
import { database } from "../../firebase";

const fetchingData = () => ({
  type: FETCHING_DATA,
  payload: []
});

const fetchingDataSucceses = todos => ({
  type: FETCH_DATA_SUCCESES,
  loading: false,
  payload: todos,
  errorMessage: ""
});

const fetchingDataError = error => ({
  type: FETCH_DATA_ERROR,
  loading: false,
  payload: [],
  errorMessage: error
});

let userId = localStorage.getItem("user");

const startFetchingData = () => dispatch => {
  store.dispatch(fetchingData());
  try {
    database.ref(`${userId}/todos`).on("value", async snap => {
      if (snap && snap.val() && Object.values(snap.val())) {
        let todos = await Object.values(snap.val());
        dispatch(fetchingDataSucceses(todos));
      }
    });
  } catch (error) {
    dispatch(fetchingDataError(error));
  }
};

export { startFetchingData };
