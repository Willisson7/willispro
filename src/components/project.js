
import React from 'react';
import '../styles/projects.css'

const projectCards = ({ project }) => {
  const { title, description, demoLink, image } = project;

  return (
    <div className='card-container'>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        View Demo
      </a>
      <p>{description}</p>
    </div>
  );
};


export default projectCards;