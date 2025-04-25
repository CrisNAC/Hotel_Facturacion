import React from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
<<<<<<< HEAD
=======
import { FaUser } from "react-icons/fa";
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1

export const NavBar = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const irAInicio = () => {
    navigate('/');
=======
  

  const irAInicio = () => {
    navigate('/Inicio');
  };

  const irAHuespedes = () => {
    navigate('/Huespedes');
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
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
<<<<<<< HEAD
        style={{ backgroundColor: "#003366", height: "60px" }}
=======
        style={{ backgroundColor: "#83A3A8", height: "60px" }}
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
      >
        {/* Logo */}
        <div className="d-flex align-items-center text-white fw-bold fs-4" onClick={irAInicio}>
          <FaSlack size={32} className="me-2"/> JAZEL
        </div>

        {/* Acciones de navegación */}
        <div className="d-flex gap-4 mx-auto">
          <a href="#" className="text-white fw-normal text-decoration-none" onClick={irAInicio}>Inicio</a>
<<<<<<< HEAD
=======
          <a href="#" className="text-white fw-normal text-decoration-none" onClick={irAHuespedes}>Huespedes</a>
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
          <a href="#" className="text-white fw-normal text-decoration-none" onClick={irAIngresoHuesped}>Ingreso de huésped</a>
          <a href="#" className="text-white fw-normal text-decoration-none" onClick={irAFacturasEmitidas}>Facturas emitidas</a>
          <a href="#" className="text-white fw-normal text-decoration-none">Reportes</a>
        </div>

        {/* Auth section */}
<<<<<<< HEAD
        <div className="d-flex align-items-center" onClick={irALogin}>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
            className="rounded-circle"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          <FaChevronDown className="text-white ms-2" />
=======
        <div className="d-flex align-items-center">
        
          <FaUser className="text-white ms-2"></FaUser>
          <FaChevronDown className="text-white ms-2" />
          
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
        </div>
      </div>

      {/* Contenido debajo del NavBar */}
      <div style={{ marginTop: "60px" }}>
      </div>
    </>
  );
};

export default NavBar;
