import React from 'react';
import '../../public/styles/Navbar.css'
import Link from 'next/link'

export default function Navbar(){
  return (
    <header>
      <nav className="Navbar">
        <Link href="/">Home</Link>
        <Link href="/Projects">Projects</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="/About">About Me</Link>
        <Link href="/Contact">Contact</Link>
      </nav>
    </header>
  );
}
