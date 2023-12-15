import React from 'react';
import Attribution from './Attribution'
import Icons from './Icons';
import '../assets/styles/Footer.css'

export default function Footer(){
  return (
    <footer className='Footer'>
      <Icons/>
      <Attribution/>
    </footer>
  );
}
