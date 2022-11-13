import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home.js';
import {browserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </Router>
            <h1>CliniCare</h1>
        </div>
    );
}

export default App;