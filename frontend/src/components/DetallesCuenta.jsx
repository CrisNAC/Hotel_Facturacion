import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from "./navbar";
import axios from 'axios';

const DetallesCuenta = (idIngreso) => {
  const [cuenta, setCuenta] = useState(null);
  const { idCuenta } = useParams(); // asume que la ruta es /cuenta/:id
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCuenta = async () => {
      console.log("idCuenta recibido:", idIngreso);

      try {
        const res = await axios.get(`http://localhost:4000/api/cuenta/${idIngreso}`);
        setCuenta(res.data);
      } catch (err) {
        console.error("Error al obtener la cuenta", err);
      }
    };
    fetchCuenta();
  }, [idCuenta]);


  if (!cuenta) return <div className="text-center mt-5">Cargando...</div>;

  const { huesped, habitacion, consumos } = cuenta;
  const totalConsumos = consumos?.reduce((acc, item) => acc + item.monto * item.cantidad, 0) || 0;

  const irAInicio = () => {
    navigate('/');
  };

  const irAFactura = () => {
    navigate('/VistaFactura');
  };

  return (    
    <div className="container mt-5">
      <NavBar />
      {/* Encabezado */}
      <h2 class="d-block mt-n3">Detalles Cuenta</h2>

      {/* Formulario */}
      <div className="row mb-4 text-start" >
        <div className="col-md-3">
          <label>Nombre Completo</label>
          <input type="text" className="form-control" value={`${huesped?.nombre} ${huesped?.apellido}`}/>
        </div>
        <div className="col-md-3">
          <label>RUC</label>
          <input type="text" className="form-control" value={huesped?.ruc || ''} />
        </div>
        <div className="col-md-3">
          <label>Correo Electrónico</label>
          <input type="email" className="form-control" value={huesped?.correo || ''} />
        </div>
        <div className="col-md-3">
          <label>Teléfono</label>
          <input type="text" className="form-control" value={huesped?.telefono || ''} />
        </div>
      </div>

      {/* Condición de venta */}
      <div className="mb-4 text-start">
        <label className="me-3">Condición de venta:</label>
        <div>
            <input type="radio" className="me-1"/> Contado
            <input type="radio" className="ms-3 me-1"/> Crédito
        </div>
        </div>

      {/* Detalles Habitación */}
      <h4 className="text-start">Detalles Habitación</h4>
      <table className="table  table-bordered">
      <thead >
        <tr >
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Descripción</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Cant. Noches</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Nro. Habitación</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Adicionales</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Precio</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Precio Total</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>{habitacion?.descripcion}</td>
            <td>{habitacion?.noches}</td>
            <td>{habitacion?.numero}</td>
            <td>{habitacion?.adicionales}</td>
            <td className="text-end">{habitacion?.precio.toLocaleString()}</td>
            <td className="text-end">{(habitacion?.precio * habitacion?.noches).toLocaleString()}</td>
          </tr>
        </tbody>
      </table>


      {/* Cargos Extras */}
      <h4 className="text-start mt-4">Consumos y Cargos Extras <button className="btn btn-primary btn-sm ms-3" style={{ backgroundColor: "#003366", color: "white", border: "#003366" }} >+ Agregar</button></h4>
      <table className="table table-bordered">
        <thead style={{ backgroundColor: "#003366 !important" }}>
          <tr>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Descripción</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Cantidad</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Precio</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Precio Total</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {consumos.map((item, index) => (
            <tr key={index}>
              <td>{item.descripcion}</td>
              <td>{item.cantidad}</td>
              <td className="text-end">{item.monto.toLocaleString()}</td>
              <td className="text-end">{(item.monto * item.cantidad).toLocaleString()}</td>
              <td className="d-flex justify-content-center">
                <button className="btn plus rounded-circle me-1"><FaPlus /></button>
                <button className="btn plus rounded-circle me-1"><FaMinus /></button>
                <button className="btn plus rounded-circle"><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
          
      </table>
      <h5 className="text-end"><strong>Total: {totalConsumos.toLocaleString()} Gs</strong></h5>
      

      {/* Botones finales */}
      <div className="d-flex justify-content-center align-items-center  mt-4" style={{ gap: "30px" }}>
        <button className="btn btn-secondary fw-bold"  style={{ width: "150px", height:"40px" }} onClick={irAInicio}>Volver</button>
        <button className="btn btn-success fw-bold" style={{ width: "150px", height:"40px" }} onClick={irAFactura}>Generar Factura</button>
      </div>
    </div>
  );
};

export default DetallesCuenta;
