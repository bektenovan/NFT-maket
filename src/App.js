import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Routing from './Routing'

const App=()=> {
  return (
    <BrowserRouter >
    <Header></Header>
    <Routing/>
       </BrowserRouter>
  );
}

export default App;
