import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/RootSaga";

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(saga),
  )
);

saga.run(rootSaga);

export default store;
