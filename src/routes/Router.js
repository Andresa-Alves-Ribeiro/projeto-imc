import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormHomem } from '../components/formHomem/FormHomem';
import PaginaInicial from '../components/paginaInicial/PaginaInicial';


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <PaginaInicial/> } />
            <Route path='/form-homem' element={ <FormHomem/> } />
        </Routes>
    </BrowserRouter>
);

export default Router;