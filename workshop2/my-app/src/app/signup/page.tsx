"use client"
import React,{useState} from'react'
import Header from "../../components/Header"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"

export default function SignUp (){
    const [username, setUsername] = useState("");

    //set up user 
    //take email, username, password
    //save to localstorage 

    return(
        <div>
            <main className="layout">
                <Header />
                <Navigation />
                    <div>
                        <p> add in the form here </p>
                        <form>
                            <label 
                            />
                            <input>
                            </input>
                        </form>
                    </div>
                <Footer />
            </main>
        </div>
    )
}