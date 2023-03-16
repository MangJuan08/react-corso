import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ExportTableExcel } from './pages/ExportTableExcel';
import { Home } from './Home';

import Profile from './Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
 <Home/>
    </BrowserRouter>
);

