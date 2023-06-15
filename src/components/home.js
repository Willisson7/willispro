import React from 'react';
import '../styles/home.css'; // Import the CSS file

function HomePage() {
  return (
    <div className="home-page">
      <h1>Hello friends, my name is Grant Willis</h1>
      <p className='info'>I am a <span className="emphasize">Full Stack Developer</span></p>
      <p className='info'>with experience in JavaScript, MERN, CSS, and much more!</p>
    </div>
  );
}

export default HomePage;
