import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Card description="Nuevo celular de Samsung" name="Samsung Galaxy s22 ultra"/>
  </React.StrictMode>
);
