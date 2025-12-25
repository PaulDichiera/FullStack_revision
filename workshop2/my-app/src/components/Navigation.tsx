import Link from "next/link";

const Navigation = () => {
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
            </ul>
        </nav>
    );
};

export default Navigation;