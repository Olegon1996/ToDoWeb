import React, { useEffect } from "react";
import ToDoAdd from "./ToDoAdd";
import ToDoStatus from "./ToDoStatus";
import ToDoCompleted from "./ToDoCompleted";
import ToDoInCompleted from "./ToDoInCompleted";
import ToDoAll from "./ToDoAll";

import Badge from "@material-ui/core/Badge";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import { connect } from "react-redux";
import { HashRouter as Router, Route, useHistory } from "react-router-dom";
import "../style.css";
import Background from "./BGAnimation/Background";
import DropMenu from "./DropMenu/DropMenu";

function ToDoApp({ todoLength, isUser, vereficateFunc }) {
  const history = useHistory();

  useEffect(() => {
    vereficateFunc();
    if (!isUser) {
      history.push("/");
    }
  }, [isUser]);

  return (
    <div className="mainBlock">
      <Background />
      <Router>
        <div className="functionallDiv">
          <div className="header">
            <h2 className="titleName">TODO APP</h2>
            <Badge
              overlap="circle"
              max={9}
              badgeContent={todoLength}
              color="secondary"
              style={{
                position: "absolute",
                top: "15px",
                left: "20px",
                zIndex: "2"
              }}
            >
              <NotificationsActiveOutlinedIcon fontSize="large" />
            </Badge>
            {/* <DropMenu/> */}
          </div>
          <ToDoAdd />
          <Route exact path="/app/" component={ToDoAll} />
          <Route path="/app/completed" component={ToDoCompleted} />
          <Route path="/app/incompleted" component={ToDoInCompleted} />
        </div>
        <ToDoStatus />
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  todoLength: state.ToDoReducer.todoLength,
  isUser: state.AuthReducer
});

const mapDispatchToProps = dispatch => {
  return {
    vereficateFunc: () => {
      dispatch({type: 'VEREFICATE_REQUEST'});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
