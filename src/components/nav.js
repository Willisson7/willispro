import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="main-container">
     <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">About</Link></li>
      <li><Link to="/Portfolio">Projects</Link></li>
      <li><Link to="/Contact">Contacts</Link></li>
      <li><Link to="/Resume">Resume</Link></li>
     </ul>
    </div>
  );
}

export default Navbar;
