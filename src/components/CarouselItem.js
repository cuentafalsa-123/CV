import React from 'react';
import './CarouselItem.css';

const CarouselItem = () => {
    return (
        <div tabindex='0' className='carousel-item'>
            <img className='carousel-item__img' src='https://scontent.faep4-1.fna.fbcdn.net/v/t1.0-9/s960x960/37597148_10213492372837082_4929994638963507200_o.jpg?_nc_cat=108&_nc_ohc=lMDcG-MpcfYAQnCYv61k3b3EWxebfoXVr-zyVvJYDYbSH8lvIB2qp0UhA&_nc_ht=scontent.faep4-1.fna&oh=0276aaf59e44437f5602d23e0d2e59ca&oe=5E87D080'></img>
            <div className='carousel-details'>
                <div>                            
                     <img src='../icons8-folder-32.png' alt=''></img>
                     <img src='' alt=''></img>
                </div>
             </div>
             <p className='carousel-item__details--title'>Titulo descriptivo</p>
            <p className='carousel-item__details--subtitle'>Detalles</p>
        </div>
    )
}
export default CarouselItem;