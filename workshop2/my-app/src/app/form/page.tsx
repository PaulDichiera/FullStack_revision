import Header from "../../components/Header";
import Navigation from "../../components/Naviagation";
import Footer from "../../components/Footer";


export default function Form(){
    return(
        <div>
            <main className="layout">
                <Header />
                <Navigation />
                    <p> This is the main body of the form page</p>
                <Footer />
            </main>
        </div>
    )

}