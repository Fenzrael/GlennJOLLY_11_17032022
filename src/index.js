// Fichier de départ avec import de base(react, react-dom, le css et le fichier app contenant l'arborescence du site)
import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/style.css";
import App from './App';

// Rendu react
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Envoi de App dans la div principale du body (root)
  document.getElementById('root')
);


