"use client"

import { useState } from "react";
import Link from "next/link";
import "../styles/NavBar.css";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-bar">
      <Link href={'/'}>
        <h1 className="logo-text">MetaCognify</h1>
      </Link>
      <div className={`nav-bar-content ${menuOpen ? 'active' : ''}`}>
        <p className="nav-bar-item" onClick={() => router.push('/About')}>About</p>
        <a href="https://falconllm.tii.ae/falcon-180b.html" className="nav-bar-item" target="_blank" rel="noopener noreferrer">
          Models
        </a>
        <a href="https://github.com/AnshanaM/meta-cognify" className="nav-bar-item" target="_blank" rel="noopener noreferrer" >Github</a>
      </div>
      <button className="log-in-button" onClick={() => router.push('/ChatPage')}>Noobert</button>
      <button className="log-in-button" onClick={() => router.push('/SocraChat')}>SocraBot</button>
      <div className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
