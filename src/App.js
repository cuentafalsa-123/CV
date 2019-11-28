import React from 'react';
import Imagen from './components/Imagen.js';
import Presentacion from './components/Presentacion';
import Skills from './components/Skills';
import Experiencia from './components/Experiencia';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import './App.css';


function App() {
  
  return (
    <div className='todo'>
    <div className="App">
      <header className='header'>
        <p>Curriculum Vitae</p>
      </header>
      <Navbar />
      
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

    </div>
    
    </div>
  );
}

export default App;
