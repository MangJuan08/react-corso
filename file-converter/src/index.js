import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ExportTableExcel } from './ExportTableExcel';
import Profile from './Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExportTableExcel/>
  </React.StrictMode>
);

