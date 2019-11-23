import React from 'react';
import './Presentacion.css';

const texto = 'Soy un programador. El Duki del Web Development. Pagame.'

const Presentacion = () => {
    return (
        <div>
            <p className='texto'>{texto}</p>
            <p className='texto'>{texto}</p>
            <p className='texto'>{texto}</p> 
        </div>
    )
}

export default Presentacion;