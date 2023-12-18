import React from "react";
import '../assets/styles/AboutPage.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutMe(){
  return(
    <div className="AboutPage">
      <Navbar/>
      <h2>Emmanuel Abreu</h2>
      <Footer/>
    </div>
  );
}