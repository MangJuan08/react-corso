import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import DragAndDrop from './DragAndDrop';
import { ExportTableExcel } from './pages/ExportTableExcel';
import { App } from './App';

import Profile from './Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
 <App/>
    </BrowserRouter>
);

