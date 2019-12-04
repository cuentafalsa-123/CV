import React from 'react';
import Cuadrito from './Cuadrito';
import './Skills.css';


const skillsArr = ['HTML','CSS', 'Javascript ES6', 'React JS', 'Node JS', 'MongoDB'];

const Skills = () => {
        return (
            // itero sobre el array de skills para crear varios botones, uno por cada skill
            <div className='skills' id='skills'>
                {skillsArr.map(skill => {
                    return <a tabindex='0' ><Cuadrito nombre={skill}/></a>
                })}
            </div>
        )
    }

export default Skills;