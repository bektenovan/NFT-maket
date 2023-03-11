import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage'

const Routing = () => {
    return(
<Routes>
    <Route path='/' element={<HomePage/>}/>
</Routes>
    );
};
export default Routing;