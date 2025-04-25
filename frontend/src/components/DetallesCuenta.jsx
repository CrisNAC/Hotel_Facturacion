import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
import NavBar from "./navbar";
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
const DetallesCuenta = () => {

  const items = [
    {
      descripcion: "Cama Individual",
      cantidad: 1,
      precio: 50000,
      precioTotal: 50000,
    },
    {
      descripcion: "Piscina",
      cantidad: 2,
      precio: 15000,
      precioTotal: 30000,
    },
  ];

  const navigate = useNavigate();

  const irAInicio = () => {
    navigate('/');
  };

  const irAFactura = () => {
    navigate('/VistaFactura');
  };

  return (    
    <div className="container mt-5">
<<<<<<< HEAD
=======
      <NavBar />
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
      {/* Encabezado */}
      <h2 class="d-block mt-n3">Detalles Cuenta</h2>

      {/* Formulario */}
      <div className="row mb-4 text-start" >
        <div className="col-md-3">
          <label>Nombre Completo</label>
          <input type="text" className="form-control" value="María López" readOnly />
        </div>
        <div className="col-md-3">
          <label>RUC</label>
          <input type="text" className="form-control" value="3458237" readOnly />
        </div>
        <div className="col-md-3">
          <label>Correo Electrónico</label>
          <input type="email" className="form-control" value="marialopez@gmail.com" readOnly />
        </div>
        <div className="col-md-3">
          <label>Teléfono</label>
          <input type="text" className="form-control" value="+595981654234" readOnly />
        </div>
      </div>

      {/* Condición de venta */}
      <div className="mb-4 text-start">
        <label className="me-3">Condición de venta:</label>
        <div>
            <input type="radio" className="me-1" disabled /> Contado
            <input type="radio" className="ms-3 me-1" checked readOnly /> Crédito
        </div>
        </div>

      {/* Detalles Habitación */}
      <h4 className="text-start">Detalles Habitación</h4>
      <table className="table  table-bordered">
      <thead >
        <tr >
            <th style={{ backgroundColor: "#003366", color: "white" }}>Descripción</th>
            <th style={{ backgroundColor: "#003366", color: "white" }}>Cant. Noches</th>
            <th style={{ backgroundColor: "#003366", color: "white" }}>Nro. Habitación</th>
            <th style={{ backgroundColor: "#003366", color: "white" }}>Adicionales</th>
            <th style={{ backgroundColor: "#003366", color: "white" }}>Precio</th>
            <th style={{ backgroundColor: "#003366", color: "white" }}>Precio Total</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Habitación Suite</td>
            <td>3</td>
            <td>202</td>
            <td>Desayuno incluido</td>
            <td class="text-end">300.000</td>
            <td class="text-end">1.020.000</td>
          </tr>
        </tbody>
      </table>


      {/* Cargos Extras */}
      <h4 className="text-start mt-4">Consumos y Cargos Extras <button className="btn btn-primary btn-sm ms-3" style={{ backgroundColor: "#003366", color: "white", border: "#003366" }} >+ Agregar</button></h4>
      <table className="table table-bordered">
        <thead style={{ backgroundColor: "#003366 !important" }}>
          <tr>
            <th style={{ backgroundColor: "#003366", color: "white" }}>Descripción</th>
            <th style={{ backgroundColor: "#003366", color: "white" }}>Cantidad</th>
            <th style={{ backgroundColor: "#003366", color: "white" }}>Precio</th>
            <th style={{ backgroundColor: "#003366", color: "white" }}>Precio Total</th>
            <th style={{ backgroundColor: "#003366", color: "white" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.descripcion}</td>
              <td>{item.cantidad}</td>
              <td className="text-end">{item.precio}</td>
              <td className="text-end">{item.precioTotal}</td>
              <td className="d-flex justify-content-center align-items-center">
              <button className="btn plus rounded-circle d-flex align-items-center justify-content-center"
              style={{backgroundColor: "#003366", color: "white",width: "30px",height: "30px",padding: 0,fontSize: "14px"}}><FaPlus /></button>
              <button className="btn plus rounded-circle d-flex align-items-center justify-content-center"
              style={{backgroundColor: "#003366", color: "white",width: "30px",height: "30px",padding: 0,fontSize: "14px"}}><FaMinus /></button>
              <button className="btn plus rounded-circle d-flex align-items-center justify-content-center"
              style={{backgroundColor: "#003366", color: "white",width: "30px",height: "30px",padding: 0,fontSize: "14px"}}><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
          
      </table>
      <h5 className="text-end"><strong>Total: 80.000 Gs</strong></h5>
      

      {/* Botones finales */}
      <div className="d-flex justify-content-center align-items-center  mt-4" style={{ gap: "30px" }}>
        <button className="btn btn-secondary fw-bold"  style={{ width: "150px", height:"40px" }} onClick={irAInicio}>Volver</button>
        <button className="btn btn-success fw-bold" style={{ width: "150px", height:"40px" }} onClick={irAFactura}>Generar Factura</button>
      </div>
    </div>
  );
};

export default DetallesCuenta;
