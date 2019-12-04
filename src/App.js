import React from 'react';
import Imagen from './components/Imagen.js';
import Presentacion from './components/Presentacion';
import Skills from './components/Skills';
import Experiencia from './components/Experiencia';
import Navbar from './components/Navbar';
import Pie from './components/Pie';
import Formacion from './components/Formacion';
import './App.css';
import Carousel from './components/Carousel.js';


function App() {
  
  return (
    <div className="App">
      <header className='App__header'>
        <p>Pablo Poggio</p>
      <Navbar />
      </header>
      
      <section className='App__yo' >
        <Imagen />
        <Presentacion />
      </section>
          
      <Skills className='skills'> </Skills>
      <Experiencia className='experiencia'/>
      <Carousel className='carousel'/>
      <Pie className='pie'/>
    </div>
  );
}

export default App;
