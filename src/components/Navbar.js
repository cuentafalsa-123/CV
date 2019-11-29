import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (        
      <nav className='navegacion' >
          <div className='navegador'>Secciones
        <ul className='barra'>
            <li><a href='presentacion' >Presentacion</a></li>
            <li><a href='#skills' >Skills</a></li>
            <li><a href='experiencia' >Experiencia Profesional</a></li>
            <li><a href='proyectos' >Proyectos Propios</a></li>
            <li><a href='referencias' >Referencias</a></li>
            <li><a href='contacto' >Contacto</a></li>
        </ul></div>
    </nav>
    )
}

export default Navbar;