import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
     <ul>
      <li><Link className="navlink" to ="/">Home</Link></li>
      <li><Link className="navlink" to="/">About</Link></li>
      <li><Link className="navlink" to="/Portfolio">Portfolio</Link></li>
      <li><Link className="navlink" to="/Contact">Contact</Link></li>
      <li><Link className="navlink" to="/Resume">Resume</Link></li>
     </ul>
    </header>
  );
}

export default Navbar;
