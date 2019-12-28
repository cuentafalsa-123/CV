import React from 'react';
import './styles/Carousel.css';
import CarouselItem from './CarouselItem';
import Sugerencias from './Sugerencias';

const formacion = [{id: 0, estado: 'Aprobado', tema: 'Learn HTML', sitio: 'Codecademy', foto: 'https://desarrolloweb.com/storage/tag_images/actual/NTyqDTKED8kFAhWxUzUwFGQJacxNoQBfFekELDya.png'},
    {id: 1, estado: 'Aprobado', tema: 'Styling a Website: CSS', sitio: 'Codecademy', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuy0IgiPd7DLIFMaB6ehojjR6wCDZXlOgktaGi5HmLzcru64QoiQ&s'},
    {id: 2, estado: 'Aprobado', tema: 'Getting started with Javascript', sitio: 'Codecademy', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'},
    {id: 3, estado: 'Aprobado', tema: 'Getting More Advanced with Design: CSS', sitio: 'Codecademy', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuy0IgiPd7DLIFMaB6ehojjR6wCDZXlOgktaGi5HmLzcru64QoiQ&s'},
    {id: 4, estado: 'Aprobado', tema: 'JavaScript: Arrays, Loops, and Objects', sitio: 'Codecademy', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'},
    {id: 5, estado: 'Aprobado', tema: 'Building Interactive JavaScript Websites', sitio: 'Codecademy', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'},
    {id: 6, estado: 'Aprobado', tema: 'Intermediate JavaScript', sitio: 'Codecademy', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'},
    {id: 7, estado: 'Aprobado', tema: 'Learn the Command Line', sitio: 'Codecademy', foto: 'http://www.cotcli.com/img/cotcli-logo.png'},
    {id: 8, estado: 'Aprobado', tema: 'Git', sitio: 'Codecademy', foto: 'https://justcodeit.io/wp-content/uploads/2014/01/logo-git.png'},
    {id: 9, estado: 'Aprobado', tema: 'Building Front-end Applications with React JS', sitio: 'Codecademy', foto: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png'},
    {id: 10, estado: 'Aprobado', tema: 'Javascript Back-End Development: Node JS', sitio: 'Codecademy', foto: 'https://ih0.redbubble.net/image.109336634.1604/ap,550x550,12x12,1,transparent,t.u1.png'},
    {id: 11, estado: 'Aprobado', tema: 'SQL and Databases for Web Development', sitio: 'Codecademy', foto: 'https://hackr.io/tutorials/sql/logo-sql.svg?ver=1555309685'},
    {id: 12, estado: 'Aprobado', tema: 'Building a Persistent API: Node JS + Sqlite', sitio: 'Codecademy', foto: 'https://firebearstudio.com/blog/wp-content/uploads/2015/11/Database-for-Node.jpg'},
    {id: 13, estado: 'Aprobado', tema: 'Test-Driven Development with JavaScript: Mocha, Chai and Mongoose', sitio: 'Codecademy', foto: 'https://foundation.nodejs.org/wp-content/uploads/sites/50/2018/02/Mocha.png'},
    {id: 14, estado: 'Aprobado (10)', tema: 'Curso Práctico de React JS', sitio: 'Platzi', foto: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png'},
    {id: 15, estado: 'Aprobado (9.66)', tema: 'Curso de React JS', sitio: 'Platzi', foto: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png'},
    {id: 16, estado: 'Aprobado (9)', tema: 'Curso de Frontend Developer', sitio: 'Platzi', foto: 'https://i1.wp.com/devana.rs/blog/wp-content/uploads/2015/10/frontend.jpg?fit=1200%2C800'}
].reverse();


const Carousel = () => {

    const [query, setQuery] = React.useState('');
    let cursosFiltrados = formacion.filter(curso => {
        return curso.tema.toLowerCase().includes(query.toLowerCase());
    })

    
    return (

        <section className='carousel'>
            <label className='titulo' >Filtra cursos:</label>
            <input id='filtrador' type='text' value={query} placeholder='Tematica del curso' onChange={e => {setQuery(e.target.value)}} ></input>
            <div className='carousel__container'>
                {cursosFiltrados.length > 0 ? 
                    cursosFiltrados.map(curso => <CarouselItem key={curso.id} estado={curso.estado} tema={curso.tema} sitio={curso.sitio} foto={curso.foto} />) :
                    <Sugerencias query={query} />}
            </div>


        </section>
    )
}

export default Carousel;