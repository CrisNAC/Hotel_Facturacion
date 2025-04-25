import React from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";

export const NavBar = () => {
  const navigate = useNavigate();

  const irAInicio = () => {
    navigate('/');
  };
  
  const irAIngresoHuesped = () => {
    navigate('/IngresoHuesped');
  };

  const irAFacturasEmitidas = () => {
    navigate('/FacturasEmitidas');
  };

  const irALogin = () => {
    navigate('/Login');
};

  return (
    <>
      {/* NavBar */}
      <div
        className="nav-bar fixed-top w-100 d-flex align-items-center py-2 px-4"
        style={{ backgroundColor: "#003366", height: "60px" }}
      >
        {/* Logo */}
        <div className="d-flex align-items-center text-white fw-bold fs-4" onClick={irAInicio}>
          <FaSlack size={32} className="me-2"/> JAZEL
        </div>

        {/* Acciones de navegación */}
        <div className="d-flex gap-4 mx-auto">
          <a href="#" className="text-white fw-normal text-decoration-none" onClick={irAInicio}>Inicio</a>
          <a href="#" className="text-white fw-normal text-decoration-none" onClick={irAIngresoHuesped}>Ingreso de huésped</a>
          <a href="#" className="text-white fw-normal text-decoration-none" onClick={irAFacturasEmitidas}>Facturas emitidas</a>
          <a href="#" className="text-white fw-normal text-decoration-none">Reportes</a>
        </div>

        {/* Auth section */}
        <div className="d-flex align-items-center" onClick={irALogin}>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
            className="rounded-circle"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          <FaChevronDown className="text-white ms-2" />
        </div>
      </div>

      {/* Contenido debajo del NavBar */}
      <div style={{ marginTop: "60px" }}>
      </div>
    </>
  );
};

export default NavBar;
