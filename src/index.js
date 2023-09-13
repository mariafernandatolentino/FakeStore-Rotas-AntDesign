import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import { PaginaInicial } from './paginas/PaginaInicial';
import { PaginaProduto } from './paginas/PaginaProduto';
import { NavBar } from './NavBar';
import { PaginaCategorias } from './paginas/PaginaCategorias';

const roteador = createBrowserRouter([
  {path: '/', element: <PaginaInicial/>},
  {path: '/produto/:id', element: <PaginaProduto/>},
  {path: '/categorias/:category', element: <PaginaCategorias/>},
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <RouterProvider router= {roteador}/>
  </React.StrictMode>
);

reportWebVitals();
