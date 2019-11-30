import React from 'react';
import Curso from './Curso';
import './Formacion.css';

const formacionAc = [{estado: 'Egresado', titulo: 'Full Stack Web Developer', sitio: 'Codecademy'},
    {estado: 'En Curso', titulo: 'Arquitecto Frontend', sitio: 'Platzi'},
    {estado: 'En Curso', titulo: 'React JS Expert', sitio: 'Academind, by Maximilian Schwarzmüller'}
];

const Formacion = () => {
    return (
        <div id='formacion' className='formacion'>
            <h1>Formacion:</h1>
            <br></br>
            <ul className='listado'>
                {formacionAc.map(curso => <li><Curso estado={curso.estado} titulo={curso.titulo} sitio={curso.sitio} /></li>)}
            </ul>
        </div>
    )
}

export default Formacion;