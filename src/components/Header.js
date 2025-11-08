import React from "react";
import '../App.css'
export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">MyPortfolio</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
