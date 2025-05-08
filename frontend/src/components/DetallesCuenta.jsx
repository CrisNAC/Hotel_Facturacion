import React, { useContext , useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import NavBar from "./navbar";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HuespedesActivosContext } from "../context/HuespedesActivosContexto";

const DetallesCuenta = () => {
  
  const { 
    setMainPage, 
    setVistaFactura,
    huespedSeleccionado 
  } = useContext(HuespedesActivosContext);

  const [consumo, setConsumos] = useState([]);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [nuevoConsumo, setNuevoConsumo] = useState({
    descripcion: '',
    cantidad: 1,
    precio: 0,
    monto: 0
  });
  

  // Extraer datos del huésped seleccionado
  const huesped = huespedSeleccionado?.huesped || {};
  const habitacion = huespedSeleccionado?.habitacion || {};
  const reserva = huespedSeleccionado?.reserva || {};
  const tarifa = huespedSeleccionado?.tarifa || {};
  const consumos = huespedSeleccionado?.cuenta?.[0]?.consumos || [];
  
  // Función para calcular noches de estadía
  const calcularNoches = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return 0;
    const unDia = 24 * 60 * 60 * 1000;
    const fechaInicio = new Date(checkIn);
    const fechaFin = new Date(checkOut);
    return Math.round(Math.abs((fechaFin - fechaInicio) / unDia));
  };

  const noches = calcularNoches(reserva.check_in, reserva.check_out);
  const precioHabitacion = tarifa.precio || 0;
  const totalHabitacion = noches * precioHabitacion;
  const totalConsumos = consumos.filter(item => item.activo === true)
  .reduce((acc, item) => acc + (item.monto*item.cantidad || 0), 0);
  const totalGeneral = totalHabitacion + totalConsumos;

  const irAHuespedes = () => {
    setMainPage(true);
    setVistaFactura(false);
  };

  const irAFactura = () => {
    setMainPage(false);
    setVistaFactura(true);
  };

  const agregarConsumo = async () => {
    try {
      // Validación
      if (!nuevoConsumo.descripcion || nuevoConsumo.precio <= 0) {
        throw new Error('Descripción y precio son requeridos');
      }
  
      const idCuenta = huespedSeleccionado?.cuenta?.[0]?.id_cuenta;
      const idUsuario = huespedSeleccionado?.usuario?.id_usuario;
  
      if (!idCuenta || !idUsuario) {
        throw new Error('No se encontró cuenta o usuario asociado al ingreso');
      }
  
      
      const consumoData = {
        descripcion: nuevoConsumo.descripcion,
        cantidad: Number(nuevoConsumo.cantidad),
        monto: Number(nuevoConsumo.cantidad * nuevoConsumo.precio),
        fk_cuenta: idCuenta,
        fk_usuario: idUsuario
      };
      
      console.log("Consumo que se enviará:", consumoData);

  
      const response = await fetch('http://localhost:4000/api/consumo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(consumoData)
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Error en el servidor');
      }
  
      setConsumos(prev => [...prev, data]);
      setShowDetailModal(false);
      setNuevoConsumo({ descripcion: '', cantidad: 1, precio: 0, monto: 0 });
  
      alert('Consumo agregado correctamente');
    } catch (error) {
      console.error('Error completo:', error);
      alert(`Error: ${error.message}`);
    }
  };
  

  const eliminarConsumo = async (id) => { 
    if (!window.confirm('¿Estás seguro?')) return;
  
    try {
      const response = await fetch(`http://localhost:4000/api/consumo/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ activo: false })
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error al eliminar');
      }
  
      // Actualización optimista: eliminar el consumo de la lista local
      setConsumos(prev => prev.filter(c => c.id_consumo !== id));
  
      // Opcional: Revalidar el estado desde el servidor para asegurar consistencia
      // Esto es un re-fetch en caso de que haya más actualizaciones en el backend.
      const refreshedData = await fetch('http://localhost:4000/api/consumo').then(r => r.json());
      setConsumos(refreshedData);
  
    } catch (error) {
      console.error('Error:', error);
      alert('Error al eliminar consumo');
    }
  };
  
  
  const actualizarCantidad = async (id, cantidad) => {
    try {
      const respuesta = await fetch(`/api/consumo/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cantidad }), // Enviamos la nueva cantidad
      });
  
      const data = await respuesta.json();
  
      if (!respuesta.ok) {
        throw new Error(data.error || 'Error al actualizar cantidad');
      }
  
      // Actualizamos el consumo en el estado local
      setConsumos((prev) =>
        prev.map((consumo) =>
          consumo.id_consumo === id ? { ...consumo, cantidad } : consumo
        )
      );
  
      alert('Cantidad actualizada correctamente');
    } catch (error) {
      console.error('Error al actualizar cantidad:', error);
      alert('Hubo un error al intentar actualizar la cantidad.');
    }
  };
  
  const aumentarCantidad = (id, cantidad) => {
    const nuevaCantidad = cantidad + 1;
    actualizarCantidad(id, nuevaCantidad);
  };
  
  const disminuirCantidad = (id, cantidad) => {
    if (cantidad > 1) {
      const nuevaCantidad = cantidad - 1;
      actualizarCantidad(id, nuevaCantidad);
    }
  };
 

  return (
    <div className="container mt-5">
      <NavBar />
      {/* Encabezado */}
      <h2 className="d-block mt-n3 text-center">Detalles Cuenta</h2>

      {/* Formulario */}
      <div className="row mb-4 text-start" >
        <div className="col-md-3">
          <label>Nombre Completo</label>
          <input type="text" className="form-control"  value={`${huesped.nombre || ''} ${huesped.apellido || ''}`} readOnly />
        </div>
        <div className="col-md-3">
          <label>RUC</label>
          <input type="text" className="form-control" value={huesped.ruc || ''}  readOnly />
        </div>
        <div className="col-md-3">
          <label>Correo Electrónico</label>
          <input type="email" className="form-control" value={huesped.email || ''}  readOnly />
        </div>
        <div className="col-md-3">
          <label>Teléfono</label>
          <input type="text" className="form-control" value={huesped.telefono || ''} readOnly />
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
          <tr className="text-center">
            <th className="text-start" style={{  backgroundColor: "#E6E6E6", color: "#2E2E2E"  }}>Descripción</th>
            <th style={{  backgroundColor: "#E6E6E6", color: "#2E2E2E"  }}>Cant. Noches</th>
            <th style={{  backgroundColor: "#E6E6E6", color: "#2E2E2E"  }}>Nro. Habitación</th>
            <th style={{  backgroundColor: "#E6E6E6", color: "#2E2E2E"  }}>Adicionales</th>
            <th style={{  backgroundColor: "#E6E6E6", color: "#2E2E2E"  }}>Precio</th>
            <th style={{  backgroundColor: "#E6E6E6", color: "#2E2E2E"  }}>Precio Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{tarifa.descripcion || 'Habitación'}</td>
            <td className="text-center">{noches}</td>
            <td className="text-center">{habitacion.numero || '—'}</td>
            <td className="text-center">{huespedSeleccionado?.adicionales || '—'}</td>
            <td className="text-end">{precioHabitacion.toLocaleString()}</td>
            <td className="text-end">{totalHabitacion.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>


      {/* Cargos Extras */}
      <h4 className="text-start mt-4">Consumos y Cargos Extras 
        <button className="btn btn-sm ms-3" style={{backgroundColor: '#83A3A8', color: "white"}} onClick={() => setShowDetailModal(true)}>+ Agregar</button>
      </h4>
      <table className="table table-bordered">
        <thead style={{ backgroundColor: "#003366 !important" }}>
          <tr className="text-center">
            <th className="text-start" style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Descripción</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Cantidad</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Precio</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Precio Total</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {consumos
          .filter(item => item.activo === true) // Filtra solo consumos activos
          .map((item) => (
            <tr key={item.id_consumo}>
              <td>{item.descripcion || 'Consumo'}</td>
              <td className="text-center">{item.cantidad || 1}</td>
              <td className="text-end">{(item.monto || item.precio || 0).toLocaleString()}</td>
              <td className="text-end">{((item.monto || item.precio || 0) * (item.cantidad || 1)).toLocaleString()}</td>
              <td className="d-flex justify-content-center align-items-center">
                <button className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center"
                    style={{ 
                      width: "30px", 
                      height: "30px", 
                      padding: 0, 
                      border: "2px solid black",
                      fontSize: "14px"}}
                      onClick={() => aumentarCantidad(item.id_consumo, item.cantidad)}
                  >
                  <FaPlus />
                </button>
                <button className="btn plus rounded-circle d-flex align-items-center justify-content-center"
                  style={{width: "30px", 
                    height: "30px", 
                    padding: 0, 
                    border: "2px solid black",
                    fontSize: "14px" }}
                    onClick={() => disminuirCantidad(item.id_consumo, item.cantidad)}>
                  <FaMinus />
                </button>
                <button className="btn plus rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "30px", 
                    height: "30px", 
                    padding: 0, 
                    border: "2px solid black",
                    fontSize: "14px" }}
                   onClick={() => eliminarConsumo(item.id_consumo)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
      <h5 className="text-end"><strong>Total: {totalGeneral.toLocaleString()} Gs</strong></h5>


      {/* Botones finales */}
      <div className="d-flex justify-content-center align-items-center  mt-4" style={{ gap: "30px" }}>
        <button className="btn btn-secondary fw-bold" style={{ width: "150px", height: "40px" }} onClick={irAHuespedes}>Volver</button>
        <button className="btn btn-success fw-bold" style={{ width: "150px", height: "40px" }} onClick={irAFactura}>Generar Factura</button>
      </div>

      {/* Modal Agregar consumo */}
      {showDetailModal && (
      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <h4 className="modal-title">Agregar Consumo</h4>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label>Descripción:</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={nuevoConsumo.descripcion}
                    onChange={(e) => setNuevoConsumo({...nuevoConsumo, descripcion: e.target.value})}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Cantidad:</label>
                  <input 
                    type="number" 
                    className="form-control"
                    min="1"
                    value={nuevoConsumo.cantidad}
                    onChange={(e) => {
                      const cantidad = parseInt(e.target.value) || 1;
                      setNuevoConsumo({
                        ...nuevoConsumo,
                        cantidad,
                        monto: cantidad * nuevoConsumo.precio
                      });
                    }}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Precio Unitario:</label>
                  <input 
                    type="number" 
                    className="form-control"
                    min="0"
                    value={nuevoConsumo.precio}
                    onChange={(e) => {
                      const precio = parseInt(e.target.value) || 0;
                      setNuevoConsumo({
                        ...nuevoConsumo,
                        precio,
                        monto: nuevoConsumo.cantidad * precio
                      });
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <label>Total: {nuevoConsumo.monto.toLocaleString()} Gs.</label>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={() => {
                  setShowDetailModal(false);
                  setNuevoConsumo({
                    descripcion: '',
                    cantidad: 1,
                    precio: 0,
                    monto: 0
                  });
                }}
              >
                Cancelar
              </button>
              <button 
                type="button" 
                className="btn btn-success"
                onClick={agregarConsumo}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default DetallesCuenta;
