"use client"
import React,{useState} from'react'
import Header from "../../components/Header"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import {User} from "../../types"

export default function SignUp (){
    const [username, setUsername] = useState("");
    const [user, setUser] = useState<User>({
        id: 0,
        email: "",
        username: "",
        password: "",
    });

    //set up user 
    //take email, username, password
    //save to localstorage 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        console.log("addUser entered");

        setUser(prev => ({
            ...prev, 
            [name]: value
        }));
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const storedUsers = localStorage.getItem("users");
        const users = storedUsers ? JSON.parse(storedUsers) : [];
        const count = users.length + 1

        console.log("onSubmit entered");
        console.log("testing count: ", count);

        const newUser : User = {
            ...user,
            id: count,
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        setUser({ id:0, email:"", username: "", password: ""});
    }

    return(
        <div>
            <main className="layout">
                <Header />
                <Navigation />
                    <div>
                        <p> add in the form here </p>
                        <form onSubmit={onSubmit}>
                            <label className='block mb-4'>
                                Email:
                            </label>
                            <input className='bg-blue-300 text-white block mb-4'
                                type='text'
                                name='email'
                                value={user.email}
                                onChange={handleChange}
                                required
                                />
                            <label className='block mb-4'>
                                Username:
                            </label>
                            <input className='bg-blue-300 text-white block mb-4'
                                type='text'
                                name='username'
                                value={user.username}
                                onChange={handleChange}
                                required
                                />
                            <label>
                                Password:
                            </label>
                            <input className='bg-blue-300 text-white block mb-4'
                                type='text'
                                name='password'
                                value={user.password}
                                onChange={handleChange}
                                required
                                />
                            <button className='bg-blue-300 text-white px-4' type='submit'>
                                Submit
                            </button>
                        </form>
                    </div>
                <Footer />
            </main>
        </div>
    )
}