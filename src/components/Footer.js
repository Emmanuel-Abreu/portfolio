import React from 'react';
import Attribution from './Attribution'
import Icons from './Icons';
import Link from 'next/link';
//import '../assets/styles/Footer.css'

export default function Footer(){
  return (
    <footer className='Footer'>
      <Icons/>
      <Attribution/>
      <p>Questions, comments, or feedback? Let me know! <Link href='/Contact'>Send me an email</Link></p>
    </footer>
  );
}
