import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const CrearVehiculo = () => {
    let placa, marca, modelo;

    const onChange = () => {

    }

    const onSubmit = () => {

    }

    return (
        <div>
            <Navbar />
            <main>
                <div className="container">
                    <br></br>
                    <br></br>
                    <div className="row mt-5" >
                        <div className="col">

                        </div>
                        <div className="col-8">
                            <div className="card text-center">
                                <div className="card-header">
                                    <h2>Crear Vehiculo</h2>
                                </div>
                                <div className="card-body">
                                <form onSubmit={onSubmit} >
                            <div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="placa"
                                        placeholder="placa"
                                        name="placa"
                                        value={placa}
                                        onChange={onChange}
                                        required
                                    />
                                    <label htmlFor="floatingInput">Placa</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="marca"
                                        placeholder="marca"
                                        name="marca"
                                        value={marca}
                                        onChange={onChange}
                                        required
                                    />
                                    <label htmlFor="floatingInput">Marca</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="modelo"
                                        placeholder="modelo"
                                        name="modelo"
                                        value={modelo}
                                        onChange={onChange}
                                        required
                                    />
                                    <label htmlFor="floatingPassword">Modelo</label>
                                </div>
                            </div>
                            <div className="container mt-4">
                                <button type="submit" className="btn btn-secondary my-2">Crear Vehiculo</button>
                            </div>
                        </form>
                                </div>
                                <div className="card-footer text-muted">
                                    Todos los campos son obligatorios
                                </div>
                            </div>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default CrearVehiculo; 