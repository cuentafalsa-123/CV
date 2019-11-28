import React from 'react';
import './Cuadrito.css';

const Cuadrito = props => {
    return (
        <div className='tarjeta' >{props.nombre}</div>
    )
}

export default Cuadrito;