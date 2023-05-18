import React from 'react';
import Project from './project';
import oldPortfolio from '../images/OldPortfolio.jpg';
import  BrewerMe from '../images/BrewerMe.png';


function Portfolio() {
  const projects = [
    {
      title: 'Test Portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      demoLink: 'https://willisson7.github.io/Willison7-Portfolio/#work',
      image: oldPortfolio,
    },
    {
      title: 'BrewerMe',
      description: 'This is an example of a project I worked on using JavaScript with a focus on thirdd party APIs',
      demoLink: 'https://willisson7.github.io/BrewerMe/',
      image: BrewerMe,
    },
  ];
  return (
    <div className="project-container">
     <h2>My Collective Works</h2> 
     {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}

export default Portfolio;
