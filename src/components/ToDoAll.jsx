import React from "react";
import { connect } from "react-redux";
import "../style.css";
import ToDoList from "./ItemList";
import MoodBadTwoToneIcon from "@material-ui/icons/MoodBadTwoTone";

function ToDoAll({ todos }) {

  return (
    <React.Fragment>
      {todos && todos.length > 0 ? (
        <ToDoList currentTodosList={todos} />
      ) : (
        <React.Fragment>
          <MoodBadTwoToneIcon
            fontSize="large"
            style={{ marginTop: "10%", zIndex: "2", color: "#f50057" }}
          />
          <p
            style={{
              zIndex: "2",
              textAlign: "center",
              fontSize: "30px",
              color: "#f50057"
            }}
          >
            You haven't anything To Do!
          </p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  todos: state.ToDoReducer.todos,
  userID: state.AuthReducer.userInfo.id
});

export default connect(mapStateToProps)(ToDoAll);
