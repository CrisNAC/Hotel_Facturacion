import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown, FaSlack } from "react-icons/fa"; // Ícono de flecha hacia abajo, Ícono similar al de la imagen

export const NavBar = () => {
  return (
    <>
      {/* NavBar */}
      <div
        className="nav-bar fixed-top w-100 d-flex align-items-center py-2 px-4"
        style={{ backgroundColor: "#003366", height: "60px" }} // Color hexadecimal
      >
        {/* Logo */}
        <div className="d-flex align-items-center text-white fw-bold fs-4">
          <FaSlack size={32} className="me-2" /> JAZEL
        </div>

        {/* Acciones de navegación */}
        <div className="d-flex gap-4 mx-auto">
          <span className="text-white fw-normal cursor-pointer">Inicio</span>
          <span className="text-white fw-normal cursor-pointer">Ingreso de huésped</span>
          <span className="text-white fw-normal cursor-pointer">Facturas emitidas</span>
          <span className="text-white fw-normal cursor-pointer">Reportes</span>
        </div>

        {/* Auth section */}
        <div className="d-flex align-items-center">
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
      <div style={{ paddingTop: "60px" }}>
        {/* Aquí va el contenido de la página */}
      </div>
    </>
  );
};

export default NavBar;
