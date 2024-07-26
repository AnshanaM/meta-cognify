import Link from "next/link";

export default function Navbar() {
    return (
        <div className="nav-bar">
            <Link href={'/'} className="logo">
                {/* <h1 className="text-gradient-underline"><b>MetaCognify</b></h1> */}
                <img src="/logo.png"/>
            </Link>
            <button className="log-in-button"><b>Log In</b></button>
        </div>
    )
}
