import React from "react";
import "../style.css";

import check from "../icons/success.png";
import uncheck from "../icons/unchecked.png";
import deleted from "../icons/delete.png";

import { connect } from "react-redux";
import { changeStatus, deleteTodoItem } from "../redux/actions/actions";

function ToDoList({ todos, changeToDoItem, deleteTodoItem }) {
  function changeStatus(e) {
    changeToDoItem(e.target.parentNode.getAttribute("value"));
  }

  function deleteTodo(e) {
    deleteTodoItem(e.target.parentNode.getAttribute("value"));
  }

  return (
    <div className='listItems'>
      {todos.length === 0 ? <p className="noTodos">No todos!</p> : null}
      {todos.map((todo, id) =>
        todo.status ? (
          <p className="todoList" key={index} value={index}>
            <span className="span" onClick={changeStatus}>
              <img src={check} alt="success" className="image"></img>
              {todo.name}
            </span>
            <img
              src={deleted}
              alt="delete"
              className="image"
              onClick={deleteTodo}
            ></img>
          </p>
        ) : (
          <p key={id} value={id} className="todoListFalse">
            <span className="span" onClick={changeStatus}>
              <img src={uncheck} alt="unsuccess" className="image"></img>
              {todo.name}
            </span>
            <img
              onClick={deleteTodo}
              src={deleted}
              alt="delete"
              className="image"
            ></img>
          </p>
        )
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.ToDoReducer.todos,
    todoLength: state.ToDoReducer.todoLength
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeToDoItem: id => {
      dispatch(changeStatus(id));
    },
    deleteTodoItem: id => {
      dispatch(deleteTodoItem(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);