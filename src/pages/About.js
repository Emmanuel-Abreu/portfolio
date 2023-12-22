import React from "react";
import '../../public/styles/AboutPage.css'
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

export default function About(){
  return(
    <div className="AboutPage">
      <Navbar/>
      <h2>Emmanuel Abreu</h2>
      <Footer/>
    </div>
  );
}