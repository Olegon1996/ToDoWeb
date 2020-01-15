import React, { useEffect } from "react";
import ToDoAdd from "./ToDoAdd";
import ToDoCompleted from "./ToDoCompleted";
import ToDoInCompleted from "./ToDoInCompleted";
import ToDoAll from "./ToDoAll";
import { startFetchingData } from "../redux/actions/fetchActions";

import Badge from "@material-ui/core/Badge";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import { connect } from "react-redux";
import { HashRouter as Router, Route, useHistory } from "react-router-dom";
import "../style.css";
import Background from "./BGAnimation/Background";
import DropMenu from "./DropMenu/DropMenu";

function ToDoApp({ todoLength, logOutFunc, startFetchingData }) {
  const history = useHistory();
  const Token = JSON.parse(sessionStorage.getItem('token'));

  React.useEffect(() => {
    if(Token){
      startFetchingData(Token.uid);
    }
  }, []);

  useEffect(() => {
    if (!Token) {
      history.push("/");
    }
  }, [history, Token]);

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
                top: "20px",
                right: "20px",
                zIndex: "10",
                filter: 'invert(1)',
              }}
            >
              <NotificationsActiveOutlinedIcon fontSize="large" />
            </Badge>
            <DropMenu/>
          </div>
          <ToDoAdd />
          <Route exact path="/app/" component={ToDoAll} />
          <Route path="/app/completed" component={ToDoCompleted} />
          <Route path="/app/incompleted" component={ToDoInCompleted} />
        </div>

      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  todoLength: state.ToDoReducer.todoLength,
  isUser: state.AuthReducer.isLogIn
});

const mapDispatchToProps = dispatch => {
  return {
    logOutFunc: () => {
      dispatch({type: 'LOGOUT_REQUEST'});
    },
    startFetchingData: (id) => dispatch(startFetchingData(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
