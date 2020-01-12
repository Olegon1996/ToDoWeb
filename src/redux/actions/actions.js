import {
  ADD_TODO_ITEM,
  CHANGE_TODO_STATUS,
  DELETE_TODO_ITEM
} from "../actions/actionsTypes";
import { database } from "../../firebase";

let userId = localStorage.getItem("user");

const addToDoItem = value => dispatch => {
  const Element = database
    .ref()
    .child(`${userId}/todos`)
    .push({ title: value, status: true }).key;
  database
    .ref()
    .child(`${userId}/todos/${Element}`)
    .update({ id: Element });
  dispatch({ type: ADD_TODO_ITEM });
};

const deleteTodoItem = id => dispatch => {
  database
    .ref()
    .child(`${userId}/todos/${id}`)
    .remove();
  dispatch({ type: DELETE_TODO_ITEM });
};

const changeStatus = obj => dispatch => {
  database
    .ref()
    .child(`${userId}/todos/${obj.id}`)
    .update({
      status: !obj.status
    });
  dispatch({ type: CHANGE_TODO_STATUS });
};

export { addToDoItem, deleteTodoItem, changeStatus };
