import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import reducer from "./reducers/reducer";
import rootSaga from "./sagas/RootSaga";

const saga = createSagaMiddleware();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(rootSaga);

export default store;
