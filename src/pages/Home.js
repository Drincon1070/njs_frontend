import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {

    const idUsuario = localStorage.getItem("user");


    if (idUsuario === null) {
        window.location.href = "/";
    }

    return (
        <div className="d-flex flex-column h-100">
            
            <Navbar/>

            <br></br>
            <br></br>
            <main className="flex-shrink-0">
                <div className="container">
                    <h1 className="mt-5">Funcionalidad de CRUD para vehiculos</h1>
                </div>
            </main>


            <Footer />

        </div>

    );
}

export default Home; 