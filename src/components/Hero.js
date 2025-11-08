import React from 'react';
import profileImg from '../assets/profile.JPG';
import '../App.css'

const Hero = () => {
  return (
    <section className="hero">
      <img src={profileImg} alt="My Profile" className="hero-img" />
      <h1>Hi, I'm <span>Syed Raza Ali Shah Hashmi</span></h1>
      <p>Computer Systems Engineer | Front-End Web Developer</p>
      <a href="#projects" className="btn">View My Work</a>
    </section>
  );
};

export default Hero;
