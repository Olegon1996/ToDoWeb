import React from 'react'
import {
    HashRouter as Router,
    Route,
  } from "react-router-dom";

import ToDoApp from './ToDoApp';
import LogIn from './LogIn';

export default function App() {
    return (
        <div>
            <Router>
                <Route exact path='/' component={LogIn}/>
                <Route  path='/app' component={ToDoApp}/>
            </Router>
        </div>
    )
}
