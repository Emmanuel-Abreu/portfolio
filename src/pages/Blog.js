import React from 'react';
import Blog1 from '../../src/components/Blog1'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../../public/styles/Blog.css'

export default function Blog(){
  return (
    <div className='Blog'>
      <Navbar/>
      <Blog1/>
      <Footer/>
    </div>
  );
}
