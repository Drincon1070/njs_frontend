import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import APIInvoke from "../../utils/APIInvoke"; 
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";



const ActualizarVehiculo = () => {

    const alerta= (mensaje, tipo, titulo)=>{
        swal({
            title: titulo,
            text: mensaje, 
            icon: tipo,
            buttons: {
                confirm:{
                    text: "Aceptar",
                    value: true, 
                    visible: true,
                    className: "btn btn-secondary",
                    closeModal: true
                }
            }
        });
    }

    const navegador = useNavigate(); 
    const { id } = useParams(); 

    const [vehiculo, setVehiculo] = useState({
        placa: "",
        marca: "",
        modelo: ""
    }); 
    
    const { placa, marca, modelo } = vehiculo; 
    
    const cargarDatos = async ()=>{
        const response = await APIInvoke.invokeGET("/vehiculos/find/"+id);
        setVehiculo(response);  

    }

    useEffect(()=>{
        document.getElementById("placa").focus(); 
        cargarDatos();
    },[]); 

    const onChange = (e)=>{
        setVehiculo({
            ...vehiculo,
            [e.target.name]: e.target.value
        }); 
    }

    const editarVehiculo = async ()=>{
        const data = {
            placa: vehiculo.placa, 
            marca: vehiculo.marca, 
            modelo: vehiculo.modelo
        }

        const response = await APIInvoke.invokePUT("/vehiculos/edit/"+id, data);
        let msj, tipo, titulo; 

        if(response.mensaje === "Editado correctamente"){
            msj = "Vehiculo editado correctamente"; 
            tipo = "success";
            titulo = "Proceso exitoso"; 
            alerta(msj, tipo, titulo);

            navegador("/list"); 
        }
        else {
            msj = "No se pudo editar el vehiculo"; 
            tipo = "error";
            titulo = "Error en el proceso"; 
            alerta(msj, tipo, titulo);

            navegador("/list");
        }
    }

    const onSubmit = (e)=>{
        e.preventDefault(); 
        editarVehiculo(); 
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
                                    <h2>Actualizar Vehiculo</h2>
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
                                                    readOnly
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
                                            <button type="submit" className="btn btn-secondary my-2">Editar Vehiculo</button>
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

export default ActualizarVehiculo; 