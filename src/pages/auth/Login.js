import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    let email, contra; 
    const onChange = () =>{

    }
    return (
        <div className="container">
            <div className="row mt-5" >
                <div className="col">

                </div>
                <div className="col-5">
                    <div className="card text-center">
                        <div className="card-header">
                            Acceso al sistema
                        </div>
                        <div className="card-body">
                            <form>
                                <div>
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="name@example.com"
                                            id="email" 
                                            name="email"
                                            value={email}
                                            onChange={onChange}
                                            required
                                        />
                                        <label htmlFor="floatingInput">Correo Electrónico</label>
                                    </div>
                                    <div className="form-floating">
                                        <input 
                                            type="password" 
                                            className="form-control"  
                                            placeholder="Contraseña" 
                                            id="contra"
                                            name="contra"
                                            value={contra}
                                            onChange={onChange}
                                            required
                                        />
                                        <label htmlFor="floatingPassword">Contraseña</label>
                                    </div>
                                </div>
                                <div className="container mt-4">
                                    <button type="submit" className="btn btn-primary my-2">Iniciar Sesión</button>
                                    <Link to={"/CrearCuenta"} className="btn btn-secondary mx-2">Crear Cuenta</Link>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-muted">
                            ¿Olvidaste tu contraseña?
                        </div>
                    </div>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    );
}

export default Login; 
