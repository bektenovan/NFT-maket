import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Routing from './Routing'
import Footer from './Components/Footer'

const App=()=> {
  return (
    <BrowserRouter >
    <Header></Header>
    <Routing/>
    <Footer/>
       </BrowserRouter>
  );
}

export default App;
