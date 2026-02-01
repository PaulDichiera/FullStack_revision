"use client"

import Header from "../../components/Header"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import {useState} from "react";
import {useSecret} from "../../contexts/ShareContext";


export default function Secret(){

    const [input, setInput] = useState("");
    const {checkSecret} = useSecret();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(input);

        checkSecret(input);


    }

    return(
        <main className="layout">
            <Header/>
            <Navigation/>
                <div className="main">
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-4">
                            <input className="bg-blue-300 block mb-4"
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                required
                            />
                            <button className="bg-green-300 test-gray-400 px-4 block mb-4"
                                type="submit">
                                Submit
                            </button>
                        </label>
                    </form>

                </div>
            <Footer/>
        </main>


    )
};