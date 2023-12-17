import React from 'react';
import '../../assets/styles/HomePage.css'
import HomeMessage from '../../components/HomeMessage';

export default function Home(){
  return(
    <div className='HomePage'>
      <HomeMessage/>
      <p>A developer that wants to enhance people&apos;s lives through building software.</p>
      <p>Page is undergoing some changes.  What is coming next:
        <ul>
          <li>Blog posts on upcoming projects/topics.</li>
          <li>UI improvements.</li>
          <li>Personal log of my software dev journey.</li>
        </ul>
      </p>
    </div>
  );
}
