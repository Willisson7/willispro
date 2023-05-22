import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
     <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">About</Link></li>
      <li><Link to="/Portfolio">Portfolio</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
      <li><Link to="/Resume">Resume</Link></li>
     </ul>
    </header>
  );
}

export default Navbar;
