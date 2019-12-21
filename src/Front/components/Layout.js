import React from 'react';
import Imagen from './Imagen.js';
import Presentacion from './Presentacion';
import Skills from './Skills';
import Experiencia from './Experiencia';
import Navbar from './Navbar';
import Pie from './Pie';
import '../styles/App.scss';
import Carousel from './Carousel.js';
import {Link} from 'react-router-dom';

const Layout = props => {
    return (
        <div className="App">
            {props.children}
        </div>
    )
}

export default Layout;