import React from 'react'
import ReactDOM from 'react-dom/client'
import { UsersApp } from './UsersApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/context/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider >
        <UsersApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
