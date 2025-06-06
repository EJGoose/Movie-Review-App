import React from 'react'
import logo from '../assets/camera-reels.svg'
import "../CSS/Header.css"

//returns a customisable header
const Header = ({title, subtitle}) => {
  return (
    <header id="header">
      <img src={logo} alt='Movie Review App Logo'/>
      <div className='headingText'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div>
        <nav>
          <ul>
            <li><button>Home</button></li>
            <li><button onClick={() => {window.alert("Favourites page coming soon")}}>Favourites</button></li>
            <li><button onClick={() => {window.alert("About page coming soon")}}>About</button></li>
          </ul>
        </nav>
      </div>
      
    </header>
  );
};

export default Header
