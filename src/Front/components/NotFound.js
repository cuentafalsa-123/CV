import React from 'react';
import './styles/NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1 className='error'>Error 404</h1>
            <p className='error-mensaje'>Jojo, la pagina que buscas no existe, picaroun.</p>
        </div>    
    )
}

export default NotFound;