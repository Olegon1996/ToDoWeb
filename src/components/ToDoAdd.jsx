import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addToDoItem } from "../redux/actions/actions";
import "../style.css";

import AddButton from "../components/ButtonAdd/ButtonAdd";
import Input from "../components/TextField/TextField";

function ToDoAdd({ addToDoItem }) {
  const [value, setValue] = useState("");
  const Token = JSON.parse(sessionStorage.getItem('token'));

  function handleValue(e) {
    setValue(e.target.value);
  }

  function saveToDo() {
    if (value) {
      addToDoItem(value, Token.uid);
      setValue("");
    } else {
      return null;
    }
  }

  return (
    <div className="addTodoDiv">
      <Input
        onChange={handleValue}
        label="some todo"
        name="todo"
        type="text"
        value={value}
        variant="outlined"
        color="secondary"
        style={{
          width: "100%",
          fontFamily: "cursive",
        }}
        inputStyle={{ color: "#f50057" }}
        labelStyle={{ color: "#f50057" }}
      ></Input>
      <AddButton onClick={saveToDo} color="secondary" size="medium" style={{marginLeft: '15px'}}></AddButton>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.ToDoReducer.todos,
    todoLength: state.ToDoReducer.todoLength,
    userID: state.AuthReducer.userInfo.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToDoItem: (value, userID) => {
      dispatch(addToDoItem(value, userID));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoAdd);
