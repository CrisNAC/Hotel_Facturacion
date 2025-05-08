import React from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import axios from "axios";

export const NavBar = () => {

  const navigate = useNavigate();

  const irAInicio = () => {
    navigate('/Inicio');
  };

  const irAHuespedes = () => {
    navigate('/Huespedes');
  };

  const irAIngresoHuesped = () => {
    navigate('/IngresoHuesped');
  };

  const irAFacturasEmitidas = () => {
    navigate('/FacturasEmitidas');
  };

  const irALogin = () => {
    navigate('/');
  };

	const handleLogout = async () => {
		try {
			const response = await axios.delete('/api/session/', { withCredentials: true});
			console.log(response.data);
			irALogin();
		}
		catch(error){
			console.log('Error al intentar hacer logout:', error);
		}
	}

  return (
    <>
      {/* NavBar */}
      <div
        className="nav-bar fixed-top w-100 d-flex align-items-center py-2 px-4"
        style={{ backgroundColor: "#83A3A8", height: "60px" }}
      >
        {/* Logo */}
        <div className="d-flex align-items-center text-white fw-bold fs-4" onClick={irAInicio}>
          <FaSlack size={32} className="me-2" /> JAZEL
        </div>

        {/* Acciones de navegación */}
        <div className="d-flex gap-4 mx-auto">
          <button className="btn btn-link text-white fw-normal text-decoration-none" onClick={irAInicio}>Inicio</button>
          <button className="btn btn-link text-white fw-normal text-decoration-none" onClick={irAHuespedes}>Huespedes</button>
          <button className="btn btn-link text-white fw-normal text-decoration-none" onClick={irAIngresoHuesped}>Ingreso de huésped</button>
          <button className="btn btn-link text-white fw-normal text-decoration-none" onClick={irAFacturasEmitidas}>Facturas emitidas</button>
          <button className="btn btn-link text-white fw-normal text-decoration-none">Reportes</button>
					<button className="btn btn-link text-white fw-normal text-decoration-none" onClick={handleLogout}>Logout</button>
        </div >

        {/* Auth section */}

        <div className="d-flex align-items-center" onClick={irALogin}>
          <FaUser className="text-white ms-2"></FaUser>
          <FaChevronDown className="text-white ms-2" />
        </div >
      </div >

      {/* Contenido debajo del NavBar */}
      < div style={{ marginTop: "60px" }}>
      </div >
    </>
  );
};

export default NavBar;
