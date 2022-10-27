import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from "./pages/auth/Login";
import CrearCuenta from "./pages/auth/CrearCuenta";
import Home from "./pages/Home";
import ListaVehiculos from "./pages/vehiculos/ListaVehiculos";
import CrearVehiculo from "./pages/vehiculos/CrearVehiculo";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/CrearCuenta" exact element={<CrearCuenta/>}/>
          <Route path="/Home" exact element={<Home/>}/>
          <Route path="/list" exact element={<ListaVehiculos/>}/>
          <Route path="/new" exact element={<CrearVehiculo/>} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
