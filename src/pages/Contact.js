import React from "react";
import '../../public/styles/ContactPage.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact(){

  const handleSubmit = () => {
    e.preventDefault();

    //look into email.js package
  }

  return(
    <div className="ContactPage">
      <Navbar/>
      <h2>Contact Me</h2>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="" id="" />
        <label htmlFor="email">Email</label>
        <input type="text" name="" id="" />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="number" name="" id="" />
        <label htmlFor="message">Message</label>
        <textarea name="" id="message" cols={30} rows={10}/>
        <button id="submit-btn">Submit</button>
      </form>
      <Footer/>
    </div>
  );
}
