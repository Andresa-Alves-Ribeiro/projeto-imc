import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from '../components/paginaInicial/PaginaInicial';


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PaginaInicial />} />
        </Routes>
    </BrowserRouter>
);

export default Router;