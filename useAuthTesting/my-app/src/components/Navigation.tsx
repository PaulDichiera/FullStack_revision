"use client"
import Link from "next/link"
import React from "react"




const Navigation = () => {
    return(
        <nav className="nav">
            <h1 className=" text-white">
                This is the nav
            </h1>
            <ul>
                <li>
                    <Link href= "/">
                        Home 
                    </Link>
                </li>
                <li>
                    <Link href="/input">
                        InputPage
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;