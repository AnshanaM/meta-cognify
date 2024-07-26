import Link from "next/link";

export default function Navbar() {
    return (
        <div className="nav-bar">
            <Link href={'/'} className="logo"><h1><b>MetaCognify</b></h1></Link>
            <button className="log-in-button">Log In</button>
        </div>
    )
}