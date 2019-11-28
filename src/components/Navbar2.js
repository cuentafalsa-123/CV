import React from 'react';
import './Navbar2.css';

const Navbar2 = () => {
    return (      
    
        <header class="header">

        <nav class="navigation">
      
          <section class="logo"></section>
      
          <section class="navigation__icon">
            <span class="topBar"></span>
            <span class="middleBar"></span>
            <span class="bottomBar"></span>
          </section>
      
          <ul class="navigation__ul">
            <li><a href="">HOME</a></li>
            <li><a href="">GALLERY</a></li>
            <li><a href="">TEAM</a></li>
            <li><a href="">CLIENT</a></li>
            <li><a href="">FAQ</a></li>
          </ul>
      
          <section class="navigation__social">
            <ul class="navigation__social-ul">
              <li>
                <a href="" class="social-icon"></a>
              </li>
              <li>
                <a href="" class="social-icon"></a>
              </li>
              <li>
                <a href="" class="social-icon"></a>
              </li>
              <li>
                <a href="" class="social-icon"></a>
              </li>
            </ul>
          </section>
      
        </nav>
      
      </header>
    )
}

export default Navbar2;