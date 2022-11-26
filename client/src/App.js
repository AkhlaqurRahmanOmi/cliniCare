import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
// import header from './components/header.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
    return (
        <div>
            <Routes>
                    <Route  path='/' element={<Home/>} />      
            </Routes>
            <h1>CliniCare</h1>
        </div>
    );
}

export default App;