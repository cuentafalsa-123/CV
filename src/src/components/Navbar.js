import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (        
      <nav className='navegacion' >
          <div className='navegador'>
            <p tabindex='0'>Secciones</p>
            <ul className='barra'>
                <li><a tabindex='0' href='#presentacion' >Presentacion</a></li>
                <li><a tabindex='0' href='#skills' >Skills</a></li>
                <li><a tabindex='0' href='#experiencia' >Experiencia Profesional</a></li>
                <li><a tabindex='0' href='#formacion' >Formacion</a></li>
                <li><a tabindex='0' href='#contacto' >Contacto</a></li>
            </ul></div>
    </nav>
    )
}

export default Navbar;