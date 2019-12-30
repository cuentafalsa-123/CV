import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

const Sugerencias = ({query}) => {
    
    const handleSugerencia = async () => {
        await axios.post('http://localhost:5000/api/sugerencias', {
            "tema": query,
            "date": new Date()
        })
        btnAbrirPopup();
    }

    const [mostrado, setMostrado] = useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setMostrado(true);
        }, 0)
    })
    
    function btnAbrirPopup(){        
        document.getElementById('gracias').classList.add('active');
        document.getElementById('popup').classList.add('active');
    };
    
    function btnCerrarPopup(e){
        e.preventDefault();
        document.getElementById('gracias').classList.remove('active');
        document.getElementById('popup').classList.remove('active');
    };


    return (
        <>
            <div style={mostrado ? {transition: '.31s ease all', visibility: 'visible', transform: 'scale(1)'} : {visibility: 'visible'}} className='children' >
                <p id='sugerencia' className='sugerencia'>No hice aun cursos sobre esto, si te parece interesante voy a estar muy agradecido de tu sugerencia! :D</p>
                <button onClick={handleSugerencia} className='btn-sugerencia' type='submit'>Sugerime el tema</button>
            </div>

            
            
            {ReactDOM.createPortal(
                <div className="gracias" id="gracias">
                    <div className="popup" id="popup">
                        <div className='conjunto'>
                            <a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup" onClick={btnCerrarPopup}><i className="fas fa-times"></i></a>
                            <h4>Gracias por el dato! 😉</h4>
                        </div>
                    </div>
                </div>,
                document.getElementById('root2')
            )}
        </>
    )

}


export default Sugerencias;