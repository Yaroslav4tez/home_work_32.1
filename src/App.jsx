import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header/header.jsx";
import Main from "./main/forMain.jsx";
import Todo from "./todo/todo.jsx";
import Swapi from "./swapi/swapi.jsx";
import "./main.scss";


import './App.scss';
import './header/header.scss'


const App = () => (
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={ <Main/> }/>
            <Route path="/todo" element={ <Todo/> }/>
            <Route path="/swapi" element={ <Swapi/> }/>
        </Routes>
    </div>
);

export default App;