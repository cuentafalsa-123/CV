import React from 'react';
import Cuadrito from './Cuadrito';
import Skill from './Skill.js';
import './Skills.css';
import './Skill.css';

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
                <a className='d' onClick={this.btnAbrirPopup}><Cuadrito nombre='HTML'/></a>
                <a className='d'><Cuadrito nombre='CSS'/></a>
                <a className='d'><Cuadrito nombre='Javascript ES6'/></a>
                <a className='d'><Cuadrito nombre='React JS'/></a>
                <a className='d'><Cuadrito nombre='Node JS'/></a>
                <a className='d'><Cuadrito nombre='Mongo DB'/></a>

                <Skill />
            </div>
        )
    }
}

export default Skills;