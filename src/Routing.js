import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage'
import CreateAccount from './Components/CreateAccount';

const Routing = () => {
    return(
<Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signUp' element={<CreateAccount/>}/>
</Routes>
    );
};
export default Routing;