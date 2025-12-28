"use client"
import Header from "../../components/Header";
import Navigation from "../../components/Footer"
import Footer from "../../components/Navigation"


export default function Forum(){
    return(
        <div>
            <main className="layout">
                <Header />
                <Navigation />
                    <div>
                        <h1> This is the main body of the forum page </h1>
                    </div>
                <Footer />
            </main>
        </div>
    );
}