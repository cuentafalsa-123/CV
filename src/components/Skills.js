import React from 'react';
import Cuadrito from './Cuadrito';
import './Skills.css';

const Skills = () => {
    return (
        <div className='skills'>
            <div className='i'><Cuadrito nombre='HTML'/></div>
            <div className='i'><Cuadrito nombre='CSS'/></div>
            <div className='i'><Cuadrito nombre='Javascript ES6'/></div>
            <div className='i'><Cuadrito nombre='React.js'/></div>
        </div>
    )
}

export default Skills;