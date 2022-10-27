import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke"; 

const ListaVehiculos = () => {

    const [vehiculos, setVehiculos] = useState([]); 

    const cargarVehiculos = async () =>{
        const response = await APIInvoke.invokeGET("/vehiculos/list"); 
        console.log(response); 
        setVehiculos(response); 
    }

    useEffect(()=>{
        cargarVehiculos(); 
    },[])

    return (
        <div className="container">
            <Navbar />

            <main className="flex-shrink-0">
                <div className="container">
                    <br></br>
                    <h2 className="mt-5">Lista de vehiculos</h2>
                    <form><br></br>
                        <div className="row">
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">Ingrese un valor</span>
                                <input type="text" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                <button className="btn btn-secondary" type="button" id="inputGroupFileAddon04">Buscar</button>
                            </div>
                        </div>
                    </form>
                    <div className="row mt-5">
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Placa</th>
                                    <th scope="col">Marca</th>
                                    <th scope="col">Modelo</th>
                                    <th> Acciones </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    vehiculos.map(
                                        item => 
                                        <tr>
                                            <th scope="row">{item._id}</th>
                                            <td>{item.placa}</td>
                                            <td>{item.marca}</td>
                                            <td>{item.modelo}</td>
                                            <td>
                                                <button type="button" class="btn btn-outline-success mx-3">Actualizar</button>
                                                <button type="button" class="btn btn-outline-secondary">Eliminar</button>
                                            </td>
                                        </tr>
                                    )
                                }
                                
                            </tbody>
                        </table>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default ListaVehiculos; 