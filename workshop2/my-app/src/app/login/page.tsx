"use client"
import React,{useState} from'react'
import Header from "../../components/Header"
import Navigation from "../../components/Footer"
import Footer from "../../components/Navigation"
import { useAuth} from "../../contexts/AuthContext"
import { useRouter } from "next/navigation"




export default function Login(){

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const {login} = useAuth();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        setError("");
        console.log("entered form function");
        console.log("Username: ", username, "Password: ", password)

        const success = login(username, password);
        if(success) {
            router.push("/forum");

        } else {
            setError("Invalid username or password");
        }
    };

    console.log(error);

    // set up local storage - in Auth context
    // validation with paassword and uername inputs - required
    // login with success popup 
    // logoout with success popup


    return(
        <div>
            <main className="layout">
                <Header />
                <Navigation />
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label className="block mb-4">
                                Username:
                            </label>
                            <input className="bg-blue-300 text-white block mb-4"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            />
                            <label className="block mb-4">
                                Password:
                            </label>
                            <input className="bg-blue-300 text-white block mb-4"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                            <button className="bg-blue-300 text-white px-4" type="submit">
                                Submit
                            </button>
                        </form>
                        <h1> This is the main body of the login page </h1>
                    </div>
                <Footer />
            </main>
        </div>
    );
}