import React from "react";
import ToDoAdd from "./ToDoAdd";
import ToDoStatus from "./ToDoStatus";
import ToDoCompleted from "./ToDoCompleted";
import ToDoInCompleted from "./ToDoInCompleted";
import ToDoAll from './ToDoAll';

import Badge from '@material-ui/core/Badge';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../style.css";
import Background from "./BGAnimation/Background";
import DropMenu from './DropMenu/DropMenu';

function ToDoApp({ todoLength }) {
  return (
    <div className="mainBlock">
      <Background/>
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
                position: 'absolute',
                top: '15px',
                left: '20px',
                zIndex: '2',
            
              }}
            ><NotificationsActiveOutlinedIcon fontSize='large'/></Badge>
            {/* <DropMenu/> */}
          </div>
          <ToDoAdd />
          <Route exact path="/" component={ToDoAll} />
          <Route path="/completed" component={ToDoCompleted} />
          <Route path="/incompleted" component={ToDoInCompleted} />
        </div>
        <ToDoStatus />
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({ todoLength: state.todoLength });

export default connect(mapStateToProps)(ToDoApp);
