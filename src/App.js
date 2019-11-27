import React from 'react';
import Imagen from './components/Imagen.js';
import Presentacion from './components/Presentacion';
import Skills from './components/Skills';
import Experiencia from './components/Experiencia';
import Navbar from './components/Navbar';
import './App.css';


function App() {
  
  return (
    <div className='todo'>
    <div className="App">
      <header className='header'>
        <p>Curriculum Vitae</p>
      </header>
      <Navbar />
      
{/* aca falta acomodar las skills con algun recurso de CSS, para que en vez de listarse o quedar como se les cante el culo, se acomoden prolijamente en una caja segun la cantidad que sean */}
      <section className='yo' >
        <Imagen />
        <Presentacion />
      </section>
      <section>
        
      <Skills />
      </section>
      <section>
        <Experiencia />
      </section>

    </div></div>
  );
}

export default App;
