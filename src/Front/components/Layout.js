import React from 'react';
import Navbar from './Navbar';
import Pie from './Pie';
import './styles/Layout.css';

const Layout = props => {
    return (
        <div className="App">        
            <header className='App__header'>
                <p>Pablo Poggio</p>
                <Navbar className='barra'/>
            </header>  
            <div className='children'>
                {props.children}    
            </div>
            <Pie/>
        </div>
    )
}

export default Layout;