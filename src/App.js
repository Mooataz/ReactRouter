
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';
import Liste from './Liste';
import { InputGroup,FormControl,Button,Form } from 'react-bootstrap';
import { Data } from './Data';
import { useState } from 'react';
import React from 'react'
import {Routes, Route, Link } from "react-router-dom";
import Descrip from './Components/Descrip';
import Home from './Components/Home';
import { Sub } from './Components/CardEL';
//const Delete=(e)=>{ setState=state.filter(state.rating != e) }
  function App(){
  return (
    <div className="App">
      
      <header className="App-header ">
        Liste of movies
      </header>
      <nav>
      <Link to="/">Homes</Link>
      <Link to="/Descrip"></Link>
      </nav>
      
    
    <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/Descrip" element={<Descrip />} />
         
</Routes>
    </div>
  

  )};


export default App  
