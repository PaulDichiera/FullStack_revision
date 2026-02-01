"use client"
import Link from "next/link"


const Navigation = () => {
    return(
        <nav className="nav">
            <p> This is the Navigation</p>
                <Link href = "/" >
                    Home
                </Link>
                <Link href = "Secret">
                    Secret Input
                </Link>
        </nav>
    )
};

export default Navigation;