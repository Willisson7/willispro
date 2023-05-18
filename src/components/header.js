import React from 'react';
import Navbar from './nav';
import '../styles/header.css';
// import Profilepic from "../images/Profilepic.jpg";
function Header() {
  return (
    <div className="main-container" styles="margin:0">
     <Navbar></Navbar>
     <h2>Dream. Create. Repeat.</h2> 
     {/* <img src={Profilepic} alt="Handsome Dude"/> */}
    
    </div>
  );
}

export default Header;
