import React from 'react';
import Navbar from './nav';
import Profilepic from "../images/Profilepic.jpg";
function Header() {
  return (
    <div className="main-container">
     <h2>This the Header</h2> 
     <img src={Profilepic} alt="Handsome Dude"/>
     <Navbar></Navbar>
    </div>
  );
}

export default Header;
