import React from 'react';
import './styles/CarouselItem.css';

const CarouselItem = (props) => {
    return (
        <div tabIndex='0' className='carousel-item'>
            <img className='carousel-item__img' src={props.foto}></img>
            <div className='carousel-item__details'>                           
                     <img src='./src/icons8-folder-32.png' alt=''></img>
                     <img src='' alt=''></img>
                     <ul>
                        <li key='tema' className='carousel-item__details--item'>
                            <p className='label'>Tema:</p>
                            <p className='holis'>{props.tema}</p>
                        </li>
                        <li key='estado' className='carousel-item__details--item'>
                            <p className='label'>Estado:</p>
                            <p>{props.estado}</p>
                        </li>
                        <li key='sitio' className='carousel-item__details--item'>
                            <p className='label'>Sitio:</p>
                            <p>{props.sitio}</p>
                        </li>
                     </ul>
             </div>
        </div>
    )
}
export default CarouselItem;