import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage'
import CreateAccount from './Components/CreateAccount';
import ConnectWallet from './Components/ConnectWallet';

const Routing = () => {
    return(
<Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signUp' element={<CreateAccount/>}/>
    <Route path='/wallet' element={<ConnectWallet/>}/>

</Routes>
    );
};
export default Routing;