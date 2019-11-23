import React from 'react';

const Navbar = () => {
    return (        
      <nav className='navegacion' >
        <ul>
            <li><a href='presentacion' >Presentacion</a></li>
            <li><a href='skills' >Skills</a></li>
            <li><a href='experiencia' >Experiencia Laboral</a></li>
            <li><a href='proyectos' >Proyectos Propios</a></li>
            <li><a href='referencias' >Referencias</a></li>
            <li><a href='contacto' >Contacto</a></li>
        </ul>
    </nav>
    )
}

export default Navbar;