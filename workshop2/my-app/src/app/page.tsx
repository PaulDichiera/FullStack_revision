import Header from "../components/Header";
import Navigation from "../components/Footer"
import Footer from "../components/Naviagation"


export default function Home(){
    return(
        <div>
            <main className="layout">
                <Header />
                <Navigation />
                    <div>
                        <h1> This is the main body</h1>
                    </div>
                <Footer />
            </main>
        </div>
    );
}