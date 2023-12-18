import React from 'react';
import Attribution from './Attribution'
import Icons from './Icons';
import '../assets/styles/Footer.css'

export default function Footer(){
  return (
    <footer className='Footer'>
      <Icons/>
      <Attribution/>
      <p>Questions, comments, or feedback? Let me know! <a href='/Contact'>Send me an email</a></p>
    </footer>
  );
}
