import React from 'react';
import Cuadrito from './Cuadrito';
import './Skills.css';

const Skills = () => {
    return (
        <div className='skills'>
            <div className='d'><Cuadrito nombre='HTML'/></div>
            <div className='d'><Cuadrito nombre='CSS'/></div>
            <div className='d'><Cuadrito nombre='Javascript ES6'/></div>
            <div className='d'><Cuadrito nombre='React JS'/></div>
            <div className='d'><Cuadrito nombre='Node JS'/></div>
            <div className='d'><Cuadrito nombre='Mongo DB'/></div>
        </div>
    )
}

export default Skills;