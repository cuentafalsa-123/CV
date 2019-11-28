import React from 'react';
import Cuadrito from './Cuadrito';
import './Skills.css';
import './Skill.css';


const skillsArr = ['HTML','CSS', 'Javascript ES6', 'React JS', 'Node JS', 'MongoDB'];

const Skills = () => {
        return (
            // itero sobre el array de skills para crear varios botones, uno por cada skill
            <div className='skills'>
                {skillsArr.map(skill => {
                    return <a><Cuadrito nombre={skill} quezezta={skill}/></a>
                })}
            </div>
        )
    }

export default Skills;