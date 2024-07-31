import Link from "next/link";
import "../styles/NavBar.css";

export default function Navbar() {
    return (
        <div className="nav-bar">
        <Link href={'/'}>
            <h1 className="logo-text">MetaCognify</h1>
        </Link>
        <div className="nav-bar-content">
            <p className="nav-bar-item">About</p>
            <p className="nav-bar-item">Models</p>
            <p className="nav-bar-item">Github</p>
        </div>
        <button className="log-in-button">Log In</button>
    </div>
    )
}
