import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke"; 
import { Link } from "react-router-dom";
import swal from "sweetalert";

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

    const eliminarVehiculo = async (e, id)=>{
        e.preventDefault(); 

        const confirmar = swal({
            title: "Confirmar eliminación ",
            text: "¿Desea eliminar este registro", 
            icon: "info",
            buttons: {
                confirm:{
                    text: "Aceptar",
                    value: true, 
                    visible: true,
                    className: "btn btn-secondary",
                    closeModal: true,
                    return: true
                },
                cancel:{
                    text: "Cancelar",
                    value: false, 
                    visible: true,
                    className: "btn btn-secondary",
                    closeModal: true,
                    return: false
                }
            }
        }); 

        if(confirmar){
            const response = await APIInvoke.invokeDELETE("/vehiculos/delete/"+id);
            console.log(response.mensaje); 
            cargarVehiculos(); 
        }
    }

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
                                                <Link class="btn btn-outline-success mx-3"
                                                    to={`/edit/${item._id}`} >
                                                    Actualizar
                                                </Link>
                                                <button 
                                                    class="btn btn-outline-secondary"
                                                    onClick={(e)=> eliminarVehiculo(e, item._id)}>
                                                    Eliminar
                                                </button>
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