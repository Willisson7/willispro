import React from 'react';
import Project from './project';
import oldPortfolio from '../images/OldPortfolio.jpg';
import  BrewerMe from '../images/BrewerMe.png';
import BarkBuddy from '../images/Bark-Buddy.png'


function Portfolio() {
  const projects = [

    {
      title: 'Bark-Buddy',
      description: 'Bark-Buddy is a react app that incorporates everything I learned during the Full Stack Web Development Bootcamp. Bark Buddy was collabrative effort between me and several classmates.',
      demoLink: 'http://cf-bark-buddy.herokuapp.com/',
      GithubRepo:'https://github.com/123sites/bark-buddy',
      image: BarkBuddy,
    },
    {
      title: 'Test Portfolio',
      description: 'This was my first attempt at creating a webpage portfolio, utilizing HTML, CSS, and JavaS',
      demoLink: 'https://willisson7.github.io/Willison7-Portfolio/#work',
      GithubRepo:'https://github.com/Willisson7/Willison7-Portfolio',
      image: oldPortfolio,
    },
    {
      title: 'BrewerMe',
      description: 'Html, Css, javascript, third-party APIs',
      demoLink: 'https://willisson7.github.io/BrewerMe/',
      GithubRepo:'https://github.com/Willisson7/BrewerMe',
      image: BrewerMe,
    },
    
  ];
  return (
    <div>
     <h2> Work</h2> 
    <div className="project-container">
     {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
      </div>
    </div>
  );
}

export default Portfolio;
