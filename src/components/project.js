
import React from 'react';
import '../styles/projects.css'

const ProjectCards = ({ project }) => {
  const { title, description, demoLink, GithubRepo, image } = project;

  return (
    <div className='card-container'>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        View Demo
      </a>
      <a href={GithubRepo} target="_blank" rel="noopener noreferrer">
        View Repository
      </a>
    </div>
  );
};


export default ProjectCards;