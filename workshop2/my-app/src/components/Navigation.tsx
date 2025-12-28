"use client"
import React from "react"
import Link from "next/link";
import {useAuth} from "../contexts/AuthContext"
import {useRouter} from "next/navigation"

const Navigation = () => {
    // Was not within the navigation function 
    // onCLick button use perfered as it is not a form and cleaner code overall

    const {logout} = useAuth();
    const router = useRouter();

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        logout;
        router.push("/");
    };

    return(
        <nav className="nav">
            <h1> This is the navigation</h1>
            <ul>
                <li>
                    <Link href= "/">
                        Home
                    </Link>

                </li>
                <li>
                    <Link href= "/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link href= "/forum">
                        Forum
                    </Link>
                </li>
                <li>
                    <Link href= "/form">
                        Form
                    </Link>
                </li>
                <li>
                    <Link href= "/signup">
                        Sign Up
                    </Link>
                </li>
                <li>
                    <button type="button" onClick={handleLogout}>
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;