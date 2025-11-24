"use client"
import React,{useState} from'react';
import Header from "../../components/Header";
import Navigation from "../../components/Footer"
import Footer from "../../components/Naviagation"





export default function Login(){

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("entered form function");
    }
    return(
        <div>
            <main className="layout">
                <Header />
                <Navigation />
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label className="block mb0-4">
                                Username:
                            </label>
                            <input className="bg-blue-300 text-white block mb-4"
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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