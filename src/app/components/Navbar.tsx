import Link from "next/link";

export default function Navbar() {
    return (
        <div className="nav-bar">
            <div className="logo">
                <Link href={'/'}>
                    {/* <img src="/logo.png" alt="Logo"/> */}
                    <h1 className="logo-text">MetaCognify</h1>
                </Link>
            </div>
            <div className="nav-bar-content">
                <p className="nav-bar-item">About Falcon AI</p>
                <p className="nav-bar-item">Github</p>
            </div>
            <button className="log-in-button">Log In</button>
        </div>
    )
}
