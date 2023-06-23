import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'; // Import the arrow icon from react-icons
import '../styles/home.css';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Hello friends, my name is Grant Willis</h1>
      <p className='info'>I am a <span className="emphasize">Full Stack Developer</span></p>
      <p className='info'>with experience in JavaScript, MERN, CSS, HTML, GraphQL and much more!</p>

      <div className="button-container">
        <Link to="/portfolio" className="portfolio-button">
          View Portfolio <FiArrowRight className="arrow-icon" />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
