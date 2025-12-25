"use client"
import React,{useState} from'react'
import Header from "../../components/Header"
import Navigation from "../../components/Footer"
import Footer from "../../components/Navigation"



export default function Login(){

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (e: React.FormEvent) => {

        // checks if item is in localstorage 

        if (localStorage.getItem('username')){
            // log user in, goes to home page. past confirmation page
        }else{
            // user not found, user is notified
        }




        e.preventDefault();
        console.log("entered form function");
        console.log("Username: ", username, "Password: ", password)
    }

    // set up local storage 
    // validation with paassword and uername inputs 
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