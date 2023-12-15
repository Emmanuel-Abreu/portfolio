import React from 'react';
import '../../assets/styles/ProjectsPage.css'

export default function Projects(){
  //projects are listed for planning purposes
  return (
    <div className="ProjectsPage">
      <h2>Projects</h2>
      <ul>
        <li><a href="https://www.github.com/emmanuel-abreu/frontend-showcase">Front-End Designs Showcase</a></li>
        <li><a href="https://www.github.com/emmanuel-abreu/appointment-setting-site">Appointment Setting App</a></li>
      </ul>
    </div>
  );
}