import React from 'react';
import Project from './project';
import oldPortfolio from '../images/OldPortfolio.jpg';
import  BrewerMe from '../images/BrewerMe.png';
import  TeamProfiler from '../images/TPG screenshot.jpg';
import ColoredScreenShot  from '../images/ColoredScreenShot.jpg';
import  WeatherApp from '../images/WeatherApp.jpg';
import BarkBuddy from '../images/Bark-Buddy.png'


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
      description: 'This is a simple web app that was created to help me learn Node.js',
      demoLink: 'https://willisson7.team-profile-generator',
      image: TeamProfiler,
    },
    {
      title: 'Simple Weather App',
      description: 'This was a project where I got to experiment with css frameworks and third party APIs',
      demoLink: 'https://willisson7.team-profile-generator',
      image: WeatherApp,
    },
    {
      title: 'Daily Scheduler',
      description: 'An app that was created to help me learn Node.js',
      demoLink: 'https://willisson7.team-profile-generator',
      image: ColoredScreenShot,
    },
    {
      title: 'Bark-Buddy',
      description: 'Bark-Buddy is a react app that incorporates everything I learned during the Full Stack Web Development Bootcamp. Bark Buddy was collabrative effort between me and several classmates.',
      demoLink: 'http://cf-bark-buddy.herokuapp.com/',
      image: BarkBuddy,
    },
  
  ];
  return (
    <div>
     <h2> Works</h2> 
    <div className="project-container">
     {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
      </div>
    </div>
  );
}

export default Portfolio;
