import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage'
import CreateAccount from './Components/CreateAccount';
import ConnectWallet from './Components/ConnectWallet';
import Marketplace from './Components/Marketplace';
import Rankings from './Components/Rankings'

const Routing = () => {
    return(
<Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signUp' element={<CreateAccount/>}/>
    <Route path='/wallet' element={<ConnectWallet/>}/>
    <Route path='/marketplace' element={<Marketplace/>}/>
    <Route path='/rankings' element={<Rankings/>}/>




</Routes>
    );
};
export default Routing;