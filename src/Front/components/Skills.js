import React from 'react';
import Cuadrito from './Cuadrito';
import './styles/Skills.css';


const skillsArr = [{nombre: 'HTML', key: 1},{nombre: 'Javascript ES6', key: 2},{nombre: 'React JS', key: 3},{nombre: 'Node JS', key: 4},{nombre: 'Git', key: 5},{nombre: 'MongoDB', key: 6}];

const Skills = () => {
        return (
            // itero sobre el array de skills para crear varios botones, uno por cada skill
            <div className='skills' id='skills'>
                {skillsArr.map((skill, index) => {
                    return <button tabIndex='0' key={skill.key}><Cuadrito nombre={skill.nombre} /></button>
                })}
            </div>
        )
    }

export default Skills;