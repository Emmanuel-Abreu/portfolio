import React from 'react';
import '../assets/styles/ProjectsPage.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Projects(){
  //projects are listed for planning purposes
  return (
    <div className="ProjectsPage">
      <Navbar/>
      <h2>Projects</h2>
      <Footer/>
    </div>
  );
}

/*
  <ul>
    <li><a href="https://www.github.com/emmanuel-abreu/frontend-showcase">Front-End Designs Showcase</a></li>
    <li><a href="https://www.github.com/emmanuel-abreu/appointment-setting-site">Appointment Setting App</a></li>
  </ul>
*/