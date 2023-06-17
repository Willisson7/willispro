import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';
function Navbar() {
  return (
    <header className="navHeader">
      <div className="pro">Willis Portfolio</div>
     <ul>
      <li><Link className="navlink" to ="/">Home</Link></li>
      <li><Link className="navlink" to="/About">About</Link></li>
      <li><Link className="navlink" to="/Portfolio">Projects</Link></li>
      <li><Link className="navlink" to="/Contact">Contact</Link></li>
      <li><Link className="navlink" to="/Resume">Resume</Link></li>
     </ul>
    </header>
  );
}

export default Navbar;
