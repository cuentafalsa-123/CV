import React from 'react';
import Cuadrito from './Cuadrito';
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

                <div className="overlay" id="overlay">
                        <div className="popup" id="popup">
                            <a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup" onClick={this.btnCerrarPopup}><i className="fas fa-times"></i></a>
                            <h3>HTML</h3>
                            <h4>Visualiza cada proyecto en mi repositorio de Github!</h4>
                            <form action="">
                                <div className="contenedor-inputs">
                                    <a href='https://www.google.com'>Proyecto 1</a>
                                    <input type="submit" className="btn-submit" value="Descargar codigo fuente de proyecto"/>
                                    <a href='www.google.com'>Proyecto 2</a>
                                    <input type="submit" className="btn-submit" value="Descargar codigo fuente de proyecto"/>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}

export default Skills;