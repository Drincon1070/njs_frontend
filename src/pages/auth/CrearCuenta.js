import React from "react";
import { Link } from "react-router-dom";

const CrearCuenta = ()  => {
    let contra, nombre, email; 
    const onChange = ()=>{
        
    }
    return(
        <div className="container">
        <div className="row mt-5" >
            <div className="col">

            </div>
            <div className="col-5">
                <div className="card text-center">
                    <div className="card-header">
                        Crear Cuenta de usuario
                    </div>
                    <div className="card-body">
                        <form>
                            <div>
                                <div className="form-floating mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="nombre" 
                                        placeholder="Nombre" 
                                        name="nombre"
                                        value={nombre}
                                        onChange={onChange}
                                        required
                                    />
                                    <label htmlFor="floatingInput">Nombre</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        placeholder="name@example.com" 
                                        name="email"
                                        value={email}
                                        onChange={onChange}
                                        required
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="contra" 
                                        placeholder="Password"
                                        name="contra"
                                        value={contra}
                                        onChange={onChange}
                                        required 
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                            </div>
                            <div className="container mt-4">
                                <button type="button" className="btn btn-primary my-2">Crear Cuenta</button>
                                <Link to={"/"} className="btn btn-secondary mx-2">Iniciar Sesión</Link>
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
    );
}

export default CrearCuenta; 