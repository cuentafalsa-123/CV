import React from 'react';
import './Carousel.css';
import CarouselItem from './CarouselItem';
import { tsPropertySignature } from '@babel/types';

const formacionAc = [{estado: 'Aprobado', tema: 'Learn HTML', sitio: 'Codecademy', foto: 'https://desarrolloweb.com/storage/tag_images/actual/NTyqDTKED8kFAhWxUzUwFGQJacxNoQBfFekELDya.png'},
    {estado: 'Aprobado', tema: 'Styling a Website: CSS', sitio: 'Codecademy', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuy0IgiPd7DLIFMaB6ehojjR6wCDZXlOgktaGi5HmLzcru64QoiQ&s'},
    {estado: 'Aprobado', tema: 'Getting started with Javascript', sitio: 'Codecademy', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'},
    {estado: 'Aprobado', tema: 'Getting More Advanced with Design: CSS', sitio: 'Codecademy', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuy0IgiPd7DLIFMaB6ehojjR6wCDZXlOgktaGi5HmLzcru64QoiQ&s'},
    {estado: 'Aprobado', tema: 'JavaScript: Arrays, Loops, and Objects', sitio: 'Codecademy', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'},
    {estado: 'Aprobado', tema: 'Building Interactive JavaScript Websites', sitio: 'Codecademy', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'},
    {estado: 'Aprobado', tema: 'Intermediate JavaScript', sitio: 'Codecademy', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'},
    {estado: 'Aprobado', tema: 'Learn the Command Line', sitio: 'Codecademy', foto: 'http://www.cotcli.com/img/cotcli-logo.png'},
    {estado: 'Aprobado', tema: 'Git', sitio: 'Codecademy', foto: 'https://justcodeit.io/wp-content/uploads/2014/01/logo-git.png'},
    {estado: 'Aprobado', tema: 'Building Front-end Applications with React JS', sitio: 'Codecademy', foto: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png'},
    {estado: 'Aprobado', tema: 'JavaScript Back-End Development: Node JS', sitio: 'Codecademy', foto: 'https://ih0.redbubble.net/image.109336634.1604/ap,550x550,12x12,1,transparent,t.u1.png'},
    {estado: 'Aprobado', tema: 'SQL and Databases for Web Development', sitio: 'Codecademy', foto: 'https://hackr.io/tutorials/sql/logo-sql.svg?ver=1555309685'},
    {estado: 'Aprobado', tema: 'Building a Persistent API: Node JS + Sqlite', sitio: 'Codecademy', foto: 'https://firebearstudio.com/blog/wp-content/uploads/2015/11/Database-for-Node.jpg'},
    {estado: 'Aprobado', tema: 'Test-Driven Development with JavaScript: Mocha, Chai and Mongoose', sitio: 'Codecademy', foto: 'https://foundation.nodejs.org/wp-content/uploads/sites/50/2018/02/Mocha.png'},
    {estado: 'Aprobado (10)', tema: 'Curso Práctico de React JS', sitio: 'Platzi', foto: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png'},
    {estado: 'Aprobado (9)', tema: 'Curso de Frontend Developer', sitio: 'Platzi', foto: 'https://i1.wp.com/devana.rs/blog/wp-content/uploads/2015/10/frontend.jpg?fit=1200%2C800'}
];


const Carousel = () => {
    return (

        <section className='carousel'>
            <div className='carousel__container'>
                {formacionAc.map(curso => <CarouselItem estado={curso.estado} tema={curso.tema} sitio={curso.sitio} foto={curso.foto} />)}
            </div>
        </section>
    )
}

export default Carousel;

const formacionAc1 = [{estado: 'Egresado', titulo: 'Full Stack Web Developer', sitio: 'Codecademy', foto: 'https://desarrolloweb.com/storage/tag_images/actual/NTyqDTKED8kFAhWxUzUwFGQJacxNoQBfFekELDya.png'},
    {estado: 'En Curso', titulo: 'Arquitecto Frontend', sitio: 'Platzi'},
    {estado: 'En Curso', titulo: 'React JS Expert', sitio: 'Academind, by Maximilian Schwarzmüller'}
];