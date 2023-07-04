import React from 'react';
import error404 from '../../assets/img/pizza-estado-vacio-error-404-ilustracion-plana_288067-137.jpg';
import './NotFound.css';

function NotFound() {
    return (
        <div className="not-found-container">
        <h1 className="not-found-title">Error 404</h1>
        <p className="not-found-message">Disculpa, no pudimos encontrar lo que estas buscando.</p>
        <img src={error404} alt="Imagen de comida no encontrada" className="not-found-image" />
        <a href="/home" className="not-found-link">Volver al inicio</a>
        </div>
    );
}

export default NotFound;
