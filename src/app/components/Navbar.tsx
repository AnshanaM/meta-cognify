"use client"

import { useState } from "react";
import Link from "next/link";
import "../styles/NavBar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-bar">
      <Link href={'/'}>
        <h1 className="logo-text">MetaCognify</h1>
      </Link>
      <div className={`nav-bar-content ${menuOpen ? 'active' : ''}`}>
        <p className="nav-bar-item">About</p>
        <a href="https://falconllm.tii.ae/falcon-180b.html" className="nav-bar-item" target="_blank" rel="noopener noreferrer">
          Models
        </a>
        <p className="nav-bar-item">Github</p>
      </div>
      <button className="log-in-button">Log In</button>
      <div className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
