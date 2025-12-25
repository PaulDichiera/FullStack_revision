"use client"
import React, {createContext, useContext, useEffect, useState} from "react";
import {User, SAVED_USERS} from "../types/users";


// contract, if someone uses the context this is what will be shared
interface AuthContextType {
    user: User | null;
    users: User[];
    login: (username: string, password:string) => boolean;
    logout: () => void;
}

// creating the context (object), the pipe.
const AuthContext = createContext<AuthContextType | undefined>(undefined); // undefined and default undefined so we have a clear error if used without wrapping component

export function AuthProvider({ children }: { children: React.ReactNode}){

    // wraps app, everything inside can use the context
    // <AuthProvider>
    // <App />
    // </AuthProvider>

    const [user, setUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);

    // useEffect, this loads from local storage once

    // the below checks if there are any saved users in local storage using the key
    // "users" and passes them into the container 'storedUsers', if there are none it calls the SAVED_USERS default and sets them
    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (!storedUsers) {
            localStorage.setItem("users", JSON.stringify(SAVED_USERS));
            setUsers(SAVED_USERS);
        } else {
            setUsers(JSON.parse(storedUsers));
        }
    })

    // check for existing login
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
        setUser(JSON.parse(storedUser));
    }


    // the username and password input are passed in and the users array is searched for a match
    // login is set to true and sent back to the UI to confirm match and login
    const login = (username: string, password: string): boolean => {
        const foundUser = users.find(
            (user) => user.username === username && user.password === password
        );

        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem("currentUser", JSON.stringify(foundUser));
            return true;
        }
        return false;
    }

    // log user out 
    // clear state

    const logout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
    };

    // Provide (pass) the value to the whole tree
    // Provider makes the context available to decendents. allowing the child to now, read user, call login, call logout
    return (
        <AuthContext.Provider value={{user, users, login, logout}}>
        {children}
        </AuthContext.Provider>
        );
    }

    // useAuth() wrapper hook
    export function useAuth() {
        const context = useContext(AuthContext);
        if (context === undefined) {
            throw new Error("useAuth must be used within an AuthProvider");
        }
        return context;
    }
