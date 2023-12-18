import React from 'react';
import Image from 'next/image'
import GithubIcon from '../assets/images/icons8-github.svg'
import InstagramIcon from '../assets/images/icons8-instagram.svg'
import LinkedinIcon from '../assets/images/icons8-linkedin.svg'

export default function Icons(){
  return (
    <div>
      <a href="https://www.github.com/emmanuel-abreu/">
        <Image src={GithubIcon} alt="Github Icon" width={30} height={30}/>
      </a>
      <a href="https://www.instagram.com/emmanuelabreu01/">
        <Image src={InstagramIcon} alt="Instagram Icon" width={30} height={30}/>
      </a>
      <a href="https://www.linkedin.com/in/emmanuel-abreu-2b0175187/">
        <Image src={LinkedinIcon} alt="LinkedIn Icon" width={30} height={30}/>
      </a>
    </div>
  );
}