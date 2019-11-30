import React from 'react';
import './Carousel.css';
import CarouselItem from './CarouselItem';

const Carousel = () => {
    return (

        <section classNanem='carousel'>
            <div className='carousel__container'>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </div>
        </section>
    )
}

export default Carousel;