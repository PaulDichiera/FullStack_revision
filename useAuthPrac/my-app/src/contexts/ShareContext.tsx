"use client"
import React, {createContext, useContext, useEffect, useState} from "react";

interface ShareContextValue{
    secret: String;
    checkSecret: (input: string) => boolean;
}

const SecretContext = createContext<ShareContextValue | undefined>(undefined);

export function SecretProvider({children}: {children: React.ReactNode}){

    const [secret, setSecret] =  useState("");

    const checkSecret = (input: string) => {
        const trimmed = input.trim();

        if(trimmed.length < 3){
            return false;
        }else{
            setSecret(trimmed);
            return true;
        }
    };


    return(
        <SecretContext.Provider value={{secret, checkSecret}}>
            {children}
        </SecretContext.Provider>
    )
}

export function useSecret(){
    const ctx = useContext(SecretContext);
    if(!ctx){
        throw new Error( "useSecret must be used with secretProvider");
    }

    return ctx;
}