import React from 'react';
import './CarouselItem.css';

const CarouselItem = (props) => {
    return (
        <div tabindex='0' className='carousel-item'>
            <img className='carousel-item__img' src={props.foto}></img>
            <div className='carousel-item__details'>                           
                     <img src='./src/icons8-folder-32.png' alt=''></img>
                     <img src='' alt=''></img>
                     <ul>
                        <li className='carousel-item__details--item'>
                            <p>Estado:</p>
                            <p>{props.estado}</p>
                        </li>
                        <li className='carousel-item__details--item'>
                            <p>Tema:</p>
                            <p className='holis'>{props.tema}</p>
                        </li>
                        <li className='carousel-item__details--item'>
                            <p>Sitio:</p>
                            <p>{props.sitio}</p>
                        </li>
                     </ul>
             </div>
        </div>
    )
}
export default CarouselItem;