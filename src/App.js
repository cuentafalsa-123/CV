import React from 'react';
import Imagen from './components/Imagen.js';
import Presentacion from './components/Presentacion';
import Skills from './components/Skills';
import Experiencia from './components/Experiencia';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <p>Curriculum Vitae</p>
      </header>

      <nav className='navegacion' >
        <ul>
          <li><a href='presentacion' >Presentacion</a></li>
          <li><a href='skills' >Skills</a></li>
          <li><a href='experiencia' >Experiencia Laboral</a></li>
          <li><a href='proyectos' >Proyectos Propios</a></li>
          <li><a href='referencias' >Referencias</a></li>
          <li><a href='contacto' >Datos de contacto</a></li>
        </ul>
      </nav>
      
{/* aca falta acomodar las skills con algun recurso de CSS, para que en vez de listarse o quedar como se les cante el culo, se acomoden prolojamente en una caja segun la cantidad que sean */}
      <section>
        <Imagen />
        <Presentacion />
        <Skills />
      </section>

      <section>
        <Experiencia />
      </section>

    </div>
  );
}

export default App;
