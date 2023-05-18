import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/footer.css';

function Footer() {
  return (
    <div className="footer-container">
        <a href="https://www.facebook.com">
          <FaFacebookSquare size={30}/></a>
          <a href="https://github.com/Willisson7">
          <FaGithub size={30}/></a>
          <a href="https://www.linkedin.com/in/grantwilllis/">
          <FaLinkedin size={30}/></a>
    </div>
  );
}

export default Footer;
