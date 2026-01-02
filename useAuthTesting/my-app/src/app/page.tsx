"use client";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {useSecret} from "../contexts/ShareContext";
import {useState} from "react";

export default function Home(){

    const {secret} = useSecret();
    const [display, setDisplay] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setDisplay(secret);
    }

    return(
        <main className="layout">
            <Header/>
            <Navigation/>
            <div className="main">
            <form onSubmit={handleSubmit}>
                <label className="text-white block mb-4">
                    get secret
                </label>
                <button className=" bg-green-300 px-4 text-gray-100">
                    Submit
                </button>
            </form>
                <p className="text-white"> {display}</p>
            </div>
            <Footer/>
        </main>

    )
};