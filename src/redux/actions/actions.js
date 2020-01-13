import {
  ADD_TODO_ITEM,
  CHANGE_TODO_STATUS,
  DELETE_TODO_ITEM
} from "../actions/actionsTypes";
import { database } from "../../firebase";

const addToDoItem = (value, userID) => dispatch => {
  const Element = database
    .ref()
    .child(`${userID}/todos`)
    .push({ title: value, status: true }).key;
  database
    .ref()
    .child(`${userID}/todos/${Element}`)
    .update({ id: Element });
  dispatch({ type: ADD_TODO_ITEM });
};

const deleteTodoItem = (id, userID) => dispatch => {
  database
    .ref()
    .child(`${userID}/todos/${id}`)
    .remove();
  dispatch({ type: DELETE_TODO_ITEM });
};

const changeStatus = (obj, userID) => dispatch => {
  database
    .ref()
    .child(`${userID}/todos/${obj.id}`)
    .update({
      status: !obj.status
    });
  dispatch({ type: CHANGE_TODO_STATUS });
};

export { addToDoItem, deleteTodoItem, changeStatus };
