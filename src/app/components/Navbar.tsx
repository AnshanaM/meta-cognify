import Link from "next/link";

export default function Navbar() {
    return (
        <div className="nav-bar">
            <Link href={'/'} className="logo"><h1>MetaCognify</h1></Link>
            <button className="button">Log In</button>
        </div>
    )
}