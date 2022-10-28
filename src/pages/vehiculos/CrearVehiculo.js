import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke"; 
import swal from "sweetalert";


const CrearVehiculo = () => {

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
    
    const [vehiculo, setVehiculo] = useState({
        placa: "",
        marca: "", 
        modelo: ""
    }); 

    const { placa, marca, modelo } = vehiculo; 


    const onChange = (e) => {
        setVehiculo({
            ...vehiculo, 
            [e.target.name]: e.target.value 
        });
    }

    useEffect(()=>{
        document.getElementById("placa").focus(); 
    }, []); 

    const crearVehiculo = async ()=>{
        //RECUPERAR LOS DATOS DEL HOOK
        const data = {
            placa: vehiculo.placa, 
            marca: vehiculo.marca,
            modelo: vehiculo.modelo
        }

        //INVOCAR LA PETICION 
        const response = await APIInvoke.invokePOST("/vehiculos/new", data); 
        const mensaje = response.mensaje; 
        let msj, tipo, titulo;
       
        //VALIDAR 
        if(mensaje === "vehiculo creado"){
            msj = "Vehiculo guardado correctamente"; 
            tipo = "success";
            titulo = "Proceso exitoso"; 
            alerta(msj, tipo, titulo); 

            //LIMPIAR CAJAS 
            setVehiculo({
                placa: "",
                marca: "",
                modelo: ""
            }); 
        }
        else if(mensaje === "vehiculo existente"){
            msj = "Existe un vehiculo con la misma placa"; 
            tipo = "error";
            titulo = "No se pudo guardar"; 
            alerta(msj, tipo, titulo); 
        }

        
    }


    const onSubmit = (e) => {
        e.preventDefault(); 
        crearVehiculo(); 
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