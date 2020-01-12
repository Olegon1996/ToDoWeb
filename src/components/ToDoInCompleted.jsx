import React from "react";
import { connect } from "react-redux";
import "../style.css";
import ToDoList from "./ItemList";
import MoodBadTwoToneIcon from "@material-ui/icons/MoodBadTwoTone";

function ToDoInCompleted({ todos }) {
  const [newTodos, setNewTodos] = React.useState([]);

  React.useEffect(() => {
    let arr = [];
    todos.map(item => {
      if (item.status === true) {
        arr.push(item);
        setNewTodos(arr);
      }
    });
  }, [todos]);
  return (
    <React.Fragment>
      {todos.find(({ status }) => status === true) ? (
        <ToDoList currentTodosList={newTodos} />
      ) : (
        <React.Fragment>
          <MoodBadTwoToneIcon fontSize="large" style={{ marginTop: "10%", zIndex: '2', color: '#f50057' }} />
          <p style={{zIndex: '2', textAlign: 'center', fontSize: '30px', color: '#f50057'}}>You haven't anything  To Do!</p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({ todos: state.ToDoReducer.todos });

export default connect(mapStateToProps)(ToDoInCompleted);
