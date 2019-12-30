import React, {useState} from 'react';
import './styles/Contacto.css';
import axios from 'axios';
import ReactDOM from 'react-dom';

const Formulario = () => {    

    const [autor, setAutor] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handleMensaje = async (e) => {            
        e.preventDefault();
        if (mensaje !== '') {
        await axios.post('http://localhost:5000/api/mensajes', 
        {
            autor, 
            empresa, 
            mensaje,
            date: new Date()
        });
        console.log('MENSAJE CREADO PAPU');
        btnAbrirPopup();
        }
        else {
            alert('Mensaje vacio! No has escrito aun')
        }
    }

    function btnAbrirPopup(){        
        document.getElementById('gracias').classList.add('active');
        document.getElementById('popup').classList.add('active');
    };
    
    function btnCerrarPopup(e){
        e.preventDefault();
        document.getElementById('gracias').classList.remove('active');
        document.getElementById('popup').classList.remove('active');
        setAutor('');
        setEmpresa('');
        setMensaje('');
    };
    
    return (
        <div tabIndex='0' className='container'>
            <form onSubmit={handleMensaje} className='form-container' >
                <label id="nombreLabel" htmlFor="nombreInput">Tu nombre:</label>
                <input onChange={e => setAutor(e.target.value)} value={autor} type="text" id="nombreInput" placeholder='Juancito' />

                <label id="empresaLabel" htmlFor="empresaInput">Empresa:</label>
                <input onChange={e => setEmpresa(e.target.value)} value={empresa} type="text" id="empresaInput" placeholder='Google (ah re)' />

                <label id="mensajeLabel" htmlFor="mensaje">Mensaje:</label>
                <textarea onChange={e => setMensaje(e.target.value)} value={mensaje} id='mensaje' placeholder='...' ></textarea>

                <input type="submit" className="submitForm"/>
            </form>

            {ReactDOM.createPortal(
                <div className="gracias" id="gracias">
                    <div className="popup" id="popup">
                        <div className='conjunto'>
                            <a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup" onClick={btnCerrarPopup}><i className="fas fa-times"></i></a>
                            <h4>Mensaje recibido! 😉</h4>
                        </div>
                    </div>
                </div>,
                document.getElementById('root2')
            )}

        </div>

        
    )
}


const Contacto = () => {

    return (
        <>
            <Formulario/>            
        </>
    )
}


export default Contacto;