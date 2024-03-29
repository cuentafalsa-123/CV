import React from 'react';
import './styles/Skill.css';
import ReactDOM from 'react-dom';

class Cuadrito extends React.Component {
    constructor(props) {
        super(props);  
        
    this.btnAbrirPopup = this.btnAbrirPopup.bind(this);
    this.btnCerrarPopup = this.btnCerrarPopup.bind(this);
    }

    btnAbrirPopup(){
        
        document.getElementById('nombreDeSkill').innerHTML = this.props.nombre;
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
            <div>
                <div className='tarjeta' id={this.props.nombre} onClick={this.btnAbrirPopup}>{this.props.nombre}</div>

                {ReactDOM.createPortal(
                    
                <div className="overlay" id="overlay">
                    <div className="popup" id="popup">
                        <div className='conjunto'>
                            <a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup" onClick={this.btnCerrarPopup}><i className="fas fa-times"></i></a>
                            <h3 id='nombreDeSkill'>{this.props.nombre}</h3>
                            <h4>Visualiza cada proyecto en mi repositorio de Github!</h4>
                            <form action="">
                                <div className="contenedor-inputs">
                                    <button type="link" href='https://www.google.com'>Proyecto 1</button>
                                    <input type="submit" className="btn-submit" value="Descargar codigo fuente de proyecto"/>
                                    <br></br>
                                    <button type="submit" href='www.google.com'>Proyecto 2</button>
                                    <input type="submit" className="btn-submit" value="Descargar codigo fuente de proyecto"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>, document.getElementById('root2')
                )}
            </div>    
    )
}}

export default Cuadrito;
