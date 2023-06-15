import React from 'react';
import '../styles/about.css';

// About component to describe the author
function About() {
  return (
    <div className="main-container">
      <h2>About Me</h2>
      <p className='info'>
        Welcome to my profile. My name is Grant, and I am an ambitious full-stack developer with a strong passion for creating innovative solutions. Currently, I am actively engaged in a coding bootcamp where I am honing my technical skills and building a diverse portfolio of completed projects. Throughout this journey, I am acquiring expertise in JavaScript, React, and various other programming languages and developer tools.
      </p>
      <p className='info'>
        My ultimate aspiration is to establish a prominent online presence through a personal website. This platform will serve as a hub for sharing my profound insights and theories on a wide range of topics, enabling me to connect and engage with like-minded individuals. I firmly believe in the power of meaningful conversations that delve into significant subjects. Cultivating a stimulating environment where individuals can contribute and exchange ideas is of paramount importance to me. After all, I firmly believe that everyone possesses an inner nerd yearning to be cherished and appreciated.
      </p>
    </div>
  );
}

export default About;
