import React from 'react';
import Imagen from './components/Imagen.js';
import Presentacion from './components/Presentacion';
import Skills from './components/Skills';
import Experiencia from './components/Experiencia';
import Navbar from './components/Navbar';
import Pie from './components/Pie';
import './App.css';
import Carousel from './components/Carousel.js';
import {Link} from 'react-router-dom';


function App() {
  
  return (
    <>
    <header className='App__header'>
        <p>Pablo Poggio</p>
        <Navbar className='barra'/>
    </header>      
    <section className='App__yo' >
        <Imagen />
        <Link to='/'>Des-borra (?) la presentacion</Link>
    </section>
        
    <Skills className='skills'> </Skills>
    <Experiencia className='experiencia'/>
    <Carousel className='carousel'/>
    <Pie className='pie'/>
    </>
  );
}

export default App;
