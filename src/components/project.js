
import React from 'react';

const ProjectItem = ({ project }) => {
  const { title, description, demoLink, image } = project;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        View Demo
      </a>
      <img src={image} alt={title} />
    </div>
  );
};

export default ProjectItem;