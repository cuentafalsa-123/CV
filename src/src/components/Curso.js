import React from 'react';

const Curso = (props) => {
    return (
        <div>
            <p>Estado: {props.estado}</p>
            <p>Titulo: {props.titulo}</p>         
            <p>Sitio: {props.sitio}</p>            
        </div>
    )
}

export default Curso;