import React from 'react';
import GithubIcon from '../assets/images/icons8-github.svg'
import InstagramIcon from '../assets/images/icons8-instagram.svg'
import TwitterIcon from '../assets/images/icons8-twitter.svg'
import LinkedInIcon from '../assets/images/icons8-linkedin.svg'

export default function Icons(){
  return (
    <div>
      <a href="https://www.github.com/emmanuel-abreu/">
        <img src={GithubIcon} alt="Github Icon" />
      </a>
      <a href="https://www.instagram.com/emmanuelabreu01/">
        <img src={InstagramIcon} alt="Instagram Icon" />
      </a>
      <a href="https://www.twitter.com/emmanuelabreu01/">
        <img src={TwitterIcon} alt="Twitter Icon" />
      </a>
      <a href="https://www.linkedin.com/in/emmanuel-abreu-2b0175187/">
        <img src={LinkedInIcon} alt="LinkedIn Icon" />
      </a>
    </div>
  );
}