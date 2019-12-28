import React, { useState } from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const handleSelect = e => {
        const el = e.target;
        document.getElementById('link').className = 'no-active';
        document.getElementById('link1').className = 'no-active';
        document.getElementById('link2').className = 'no-active';
        document.getElementById('link3').className = 'no-active';
        document.getElementById('link4').className = 'no-active';
        el.className = 'seleccionado'
    }

    return (        
      <nav className='navegacion' >
          <div className='navegador'>
            <p tabIndex='0'>Secciones</p>
            <ul id='barra' className='barra'>
                <li><Link id='link' className='no-active' onClick={handleSelect} tabIndex='0' to='/presentacion' >Presentacion</Link></li>
                <li><Link id='link1' className='no-active' onClick={handleSelect} tabIndex='0' to='/skills' >Skills</Link></li>
                <li><Link id='link2' className='no-active' onClick={handleSelect} tabIndex='0' to='/experiencia' >Experiencia Profesional</Link></li>
                <li><Link id='link3' className='no-active' onClick={handleSelect} tabIndex='0' to='/formacion' >Formacion</Link></li>
                <li><Link id='link4' className='no-active' onClick={handleSelect} tabIndex='0' to='/contacto' >Contacto</Link></li>
            </ul></div>
    </nav>
    )
}

export default Navbar;

