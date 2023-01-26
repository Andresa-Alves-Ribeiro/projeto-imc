import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Formulario } from '../components/formulario/Formulario';
import PaginaInicial from '../components/paginaInicial/PaginaInicial';


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <PaginaInicial/> } />
            <Route path='/form-homem' element={ <Formulario/> } />
        </Routes>
    </BrowserRouter>
);

export default Router;