import React from 'react';
import Project from './project';
import oldPortfolio from '../images/OldPortfolio.jpg';
import  BrewerMe from '../images/BrewerMe.png';
import  TeamProfiler from '../images/TPG screenshot.jpg';
// import  BrewerMe from '../images/BrewerMe.png';
// import  BrewerMe from '../images/BrewerMe.png';


function Portfolio() {
  const projects = [
    {
      title: 'Test Portfolio',
      description: 'This was my first attempt at creating a webpage portfolio, utilizing HTML, CSS, and JavaS',
      demoLink: 'https://willisson7.github.io/Willison7-Portfolio/#work',
      image: oldPortfolio,
    },
    {
      title: 'BrewerMe',
      description: 'This is an example of a project I worked on using JavaScript with a focus on third party APIs',
      demoLink: 'https://willisson7.github.io/BrewerMe/',
      image: BrewerMe,
    },
    {
      title: 'Team Profile Generator',
      description: 'An app that was created to help me learn Node.js',
      demoLink: 'https://willisson7.Team-Profile-Generator',
      image: TeamProfiler,
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
