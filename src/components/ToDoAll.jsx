import React from "react";
import { connect } from "react-redux";
import "../style.css";
import ToDoList from "./ItemList";
import MoodBadTwoToneIcon from "@material-ui/icons/MoodBadTwoTone";
import { startFetchingData } from "../redux/actions/fetchActions";

function ToDoAll({ todos, startFetchingData }) {
  React.useEffect(() => {
     startFetchingData();
     console.log('todos: ', todos);
     
  }, [startFetchingData]);

  return (
    <React.Fragment>
      { todos && todos.length > 0 ? (
        <ToDoList currentTodosList={todos} />
      ) : (
        <React.Fragment>
          <MoodBadTwoToneIcon fontSize="large" style={{ marginTop: "10%", zIndex: '2', color: '#f50057' }} />
          <p style={{zIndex: '2', textAlign: 'center', fontSize: '30px', color: '#f50057'}}>You haven't anything  To Do!</p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({ todos: state.todos });
const mapDispatchToProps = dispatch => ({
  startFetchingData: () => dispatch(startFetchingData())
});
export default connect(mapStateToProps, mapDispatchToProps)(ToDoAll);
