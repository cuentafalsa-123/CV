import React from 'react';
import Cuadrito from './Cuadrito';
import Skill from './Skill.js';
import './Skills.css';

<<<<<<< HEAD
class Skills extends React.Component {
    constructor(props) {
        super(props);
        
      
    this.btnAbrirPopup = this.btnAbrirPopup.bind(this);
    this.btnCerrarPopup = this.btnCerrarPopup.bind(this);
    }

    btnAbrirPopup(){
        document.getElementById('overlay').classList.add('active');
        document.getElementById('popup').classList.add('active');
    };

    btnCerrarPopup(e){
        e.preventDefault();
        document.getElementById('overlay').classList.remove('active');
        document.getElementById('popup').classList.remove('active');
    };

    render() {
            
        return (
            <div className='skills'>
                <a className='d'><Cuadrito nombre='HTML'/></a>
                <a className='d'><Cuadrito nombre='CSS'/></a>
                <a className='d'><Cuadrito nombre='Javascript ES6'/></a>
                <a className='d'><Cuadrito nombre='React JS'/></a>
                <a className='d'><Cuadrito nombre='Node JS'/></a>
                <a className='d'><Cuadrito nombre='Mongo DB'/></a>

                <Skill />
            </div>
        )
    }
=======
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
>>>>>>> parent of cee4add... Merge branch 'master' of https://github.com/pablopoggiog/CV
}

export default Skills;