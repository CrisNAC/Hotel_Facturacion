import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrash, FaSearch, FaTimes } from "react-icons/fa";
import NavBar from "./navbar";
import { HuespedesActivosContext } from "../context/HuespedesActivosContexto";

function DetallesCuenta({ refresh }) {
  const {
    setMainPage,
    setVistaFactura,
    huespedSeleccionado
  } = useContext(HuespedesActivosContext);

  const [consumos, setConsumos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [consumoEditando, setConsumoEditando] = useState(null);
  const [nuevaCantidad, setNuevaCantidad] = useState(1);
  
  // Estado para nuevo consumo
  const [nuevoConsumo, setNuevoConsumo] = useState({
    producto: null,
    cantidad: 1,
    monto: 0
  });

  // Extraer datos del huésped
  const huesped = huespedSeleccionado?.huesped || {};
  const habitacion = huespedSeleccionado?.habitacion || {};
  const reserva = huespedSeleccionado?.reserva || {};
  const tarifa = huespedSeleccionado?.tarifa || {};
  const cuenta = huespedSeleccionado?.cuenta?.[0] || {};

  // Cargar datos iniciales
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true);

        // Cargar consumos existentes
        if (cuenta?.consumos) {
          setConsumos(cuenta.consumos.filter(c => c.activo !== false));
        }
        
        // Cargar productos del hotel
        const response = await fetch('http://localhost:4000/api/productos');
        const data = await response.json();
        
        if (response.ok) {
          setProductos(data);
        } else {
          throw new Error(data.error || 'Error al cargar productos');
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    cargarDatos();
  }, [cuenta]);

  // Filtrar productos según búsqueda
  useEffect(() => {
    if (busqueda.length > 0) {
      const filtrados = productos.filter(p =>
        p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      );
      setProductosFiltrados(filtrados);
      setShowDropdown(true);
    } else {
      setProductosFiltrados([]);
      setShowDropdown(false);
    }
  }, [busqueda, productos]);

  // Calcular noches de estadía
  const calcularNoches = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return 0;
    const unDia = 24 * 60 * 60 * 1000;
    const fechaInicio = new Date(checkIn);
    const fechaFin = new Date(checkOut);
    return Math.round(Math.abs((fechaFin - fechaInicio) / unDia));
  };

  const noches = calcularNoches(huespedSeleccionado.checkIn, huespedSeleccionado.checkOut);
  const precioHabitacion = tarifa.precio || 0;
  const totalHabitacion = noches * precioHabitacion;
  const totalConsumos = consumos.reduce((acc, item) => acc + (Number(item.monto)|| 0), 0);
  const totalGeneral = Number(totalHabitacion) + Number(totalConsumos);

  // Navegación
  const irAHuespedes = () => {
    setMainPage(true);
    setVistaFactura(false);
  };

  const irAFactura = () => {
    setMainPage(false);
    setVistaFactura(true);
  };

  // Función para limpiar la selección
  const limpiarSeleccion = () => {
    setBusqueda('');
    setNuevoConsumo({
      producto: null,
      cantidad: 1,
      monto: 0
    });
    setShowDropdown(false);
  };

  // Función para seleccionar producto
  const seleccionarProducto = (producto) => {
    setNuevoConsumo({
      producto,
      cantidad: 1,
      monto: producto.precio_unitario * 1 // Calcula el monto inicial
    });
    setBusqueda(producto.descripcion);
    setShowDropdown(false);
  };

  // Manejar cambio de cantidad
  const handleCantidadChange = (e) => {
    const cantidad = Math.max(1, Number(e.target.value));
    setNuevoConsumo(prev => ({
      ...prev,
      cantidad,
      monto: (prev.producto?.precio_unitario || 0) * cantidad
    }));
  };

  // Función para abrir modal de edición
  const abrirModalEdicion = (consumo) => {
    setConsumoEditando(consumo);
    setNuevaCantidad(consumo.cantidad);
    setShowEditModal(true);
  };

  // Función para guardar la edición de cantidad
  const guardarEdicionCantidad = async () => {
  if (!consumoEditando || nuevaCantidad < 1) return;

  try {
    setLoading(true);
    setError('');
    
    const response = await fetch(`http://localhost:4000/api/consumo/${consumoEditando.id_consumo}`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ cantidad: nuevaCantidad })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Error al actualizar');
    }

    const data = await response.json();

    // Actualización optimista con los nuevos datos
    setConsumos(prev => 
      prev.map(consumo => 
        consumo.id_consumo === consumoEditando.id_consumo 
          ? { ...consumo, cantidad: data.cantidad, monto: data.monto } 
          : consumo
      )
    );
    
    setShowEditModal(false);
  } catch (error) {
    console.error('Error al actualizar cantidad:', error);
    setError('Error al actualizar cantidad: ' + error.message);
  } finally {
    setLoading(false);
    refresh();
  }
};

  const agregarConsumo = async () => {
    try {
      setLoading(true);
      setError('');

      // Validación exhaustiva
      if (!nuevoConsumo.producto) {
        throw new Error('Debe seleccionar un producto de la lista');
      }

      const cantidad = Number(nuevoConsumo.cantidad);
      if (isNaN(cantidad) || cantidad < 1) {
        throw new Error('La cantidad debe ser un número mayor a 0');
      }

      const idCuenta = Number(cuenta?.id_cuenta);
      const idUsuario = Number(huespedSeleccionado?.usuario?.id_usuario);

      if (!idCuenta || !idUsuario) {
        throw new Error('No se pudo obtener la cuenta o usuario asociado');
      }
      
      const monto = Number(nuevoConsumo.cantidad) * Number(nuevoConsumo.producto.precio_unitario);

      // Preparar datos
      const consumoData = {
        fk_producto: Number(nuevoConsumo.producto.id_producto),
        cantidad: Number(nuevoConsumo.cantidad),
        monto: monto,
        fk_cuenta: idCuenta,
        fk_usuario: idUsuario
      };

      console.log("Enviando datos al backend:", consumoData);

      const response = await fetch('http://localhost:4000/api/consumo', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(consumoData)
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Error del backend:", {
          status: response.status,
          data,
          request: consumoData
        });

        const backendError = data.error || "Error del servidor";
        const backendMessage = data.message || "No se pudo crear el consumo";
        
        throw new Error(`${backendError}: ${backendMessage}`);
      }

      // Verificar respuesta
      if (!data.id_consumo) {
        console.warn("Respuesta inesperada:", data);
        throw new Error("La respuesta del servidor no contiene ID de consumo");
      }

      // Actualizar estado
      setConsumos(prev => [...prev, {
        ...data,
        Productos: nuevoConsumo.producto
      }]);

      // Resetear formulario
      setShowDetailModal(false);
      setNuevoConsumo({
        producto: null,
        cantidad: 1,
        monto: 0
      });
      setBusqueda('');

    } catch (error) {
      console.error("Error completo:", {
        message: error.message,
        stack: error.stack,
        context: {
          producto: nuevoConsumo.producto,
          cantidad: nuevoConsumo.cantidad,
          cuenta: cuenta?.id_cuenta,
          usuario: huespedSeleccionado?.usuario?.id_usuario
        }
      });

      // Mensajes amigables
      let userMessage = error.message;
      
      if (error.message.includes('Failed to fetch')) {
        userMessage = 'Error de conexión con el servidor';
      } else if (error.message.includes('500') || error.message.includes('intern')) {
        userMessage = 'Error interno del servidor. Contacte al administrador.';
      } else if (error.message.includes('Violación')) {
        userMessage = 'Problema con los datos relacionados. Verifique la información.';
      }

      setError(userMessage);
      
    } finally {
      setLoading(false);
      refresh(); // Actualizar datos
    }
  };

  const eliminarConsumo = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este consumo?')) return;

    try {
      setLoading(true);
      
      const response = await fetch(`http://localhost:4000/api/consumo/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ activo: false })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error al eliminar');
      }

      // Actualización optimista
      setConsumos(prev => prev.filter(c => c.id_consumo !== id));
    } catch (error) {
      console.error('Error al eliminar consumo:', error);
      setError('Error al eliminar consumo: ' + error.message);
    } finally {
      setLoading(false);
      refresh();
    }
  };

  return (
    <div className="container mt-5">
      <NavBar />
      {/* Encabezado */}
      <h2 className="d-block mt-n3 text-center">Detalles Cuenta</h2>

      {/* Formulario */}
      <div className="row mb-4 text-start">
        <div className="col-md-3">
          <label>Nombre Completo</label>
          <input 
            type="text" 
            className="form-control" 
            value={`${huesped.nombre || ''} ${huesped.apellido || ''}`} 
            readOnly 
          />
        </div>
        <div className="col-md-3">
          <label>RUC</label>
          <input 
            type="text" 
            className="form-control" 
            value={huesped.ruc || ''} 
            readOnly 
          />
        </div>
        <div className="col-md-3">
          <label>Correo Electrónico</label>
          <input 
            type="email" 
            className="form-control" 
            value={huesped.email || ''} 
            readOnly 
          />
        </div>
        <div className="col-md-3">
          <label>Teléfono</label>
          <input 
            type="text" 
            className="form-control" 
            value={huesped.telefono || ''} 
            readOnly 
          />
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
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th className="text-start" style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Descripción</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Cant. Noches</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Nro. Habitación</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Adicionales</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Precio</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Precio Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{habitacion?.tipoHabitacion?.nombre|| 'Habitación'}</td>
            <td className="text-center">{noches}</td>
            <td className="text-center">{habitacion.numero || '—'}</td>
            <td className="text-center">{tarifa.descripcion || '—'}</td>
            <td className="text-end">{precioHabitacion.toLocaleString()}</td>
            <td className="text-end">{totalHabitacion.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      {/* Cargos Extras */}
      <h4 className="text-start mt-4">
        Consumos y Cargos Extras
        <button 
          className="btn btn-sm ms-3" 
          style={{ backgroundColor: '#83A3A8', color: "white" }} 
          onClick={() => setShowDetailModal(true)}
          disabled={loading}
        >
          + Agregar
        </button>
      </h4>
      
      {error && <div className="alert alert-danger">{error}</div>}
      
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th className="text-start" style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Descripción</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Cantidad</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Precio</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Precio Total</th>
            <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {consumos.length > 0 ? (
            consumos.map((item) => (
              <tr key={item.id_consumo}>
                <td>{item.Productos?.descripcion || item.descripcion || 'Consumo'}</td>
                <td className="text-center">{item.cantidad || 1}</td>
                <td className="text-end">{(item.Productos?.precio_unitario || item.monto || 0).toLocaleString()}</td>
                <td className="text-end">
                  {((item.Productos?.precio_unitario || item.monto || 0) * (item.cantidad || 1)).toLocaleString()}
                </td>
                <td className="d-flex justify-content-center align-items-center" style={{ gap: "3px" }}>
                  <button 
                    className="btn  rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "30px", height: "30px", padding: 0}}
                    onClick={() => abrirModalEdicion(item)}
                    disabled={loading}
                    title="Editar cantidad"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    className="btn rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "30px", height: "30px", padding: 0 }}
                    onClick={() => eliminarConsumo(item.id_consumo)}
                    disabled={loading}
                    title="Eliminar consumo"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No hay consumos registrados</td>
            </tr>
          )}
        </tbody>
      </table>
      
      <h5 className="text-end">
        <strong>Total: {totalGeneral.toLocaleString()} Gs</strong>
      </h5>

      {/* Botones finales */}
      <div className="d-flex justify-content-center align-items-center mt-4" style={{ gap: "30px" }}>
        <button 
          className="btn btn-secondary fw-bold" 
          style={{ width: "150px", height: "40px" }} 
          onClick={irAHuespedes}
          disabled={loading}
        >
          Volver
        </button>
        <button 
          className="btn btn-success fw-bold" 
          style={{ width: "150px", height: "40px" }} 
          onClick={irAFactura}
          disabled={loading || consumos.length === 0}
        >
          Generar Factura
        </button>
      </div>

      {/* Modal Agregar consumo */}
      {showDetailModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title w-100 text-center">Agregar Consumo</h5>
              </div>
              <div className="modal-body">
                {error && <div className="alert alert-danger">{error}</div>}

                <div className="mb-3">
                  <label className="form-label">Seleccionar Producto</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={busqueda}
                      onChange={(e) => setBusqueda(e.target.value)}
                      placeholder="Busque y seleccione un producto..."
                    />
                    {busqueda && (
                      <button 
                        className="btn btn-outline-secondary" 
                        type="button"
                        onClick={limpiarSeleccion}
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                  
                  {/* Dropdown de resultados */}
                  {showDropdown && (
                    <div className="list-group mt-2" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                      {productosFiltrados.length > 0 ? (
                        productosFiltrados.map(producto => (
                          <button
                            key={producto.id_producto}
                            type="button"
                            className={`list-group-item list-group-item-action ${
                              nuevoConsumo.producto?.id_producto === producto.id_producto ? 'active' : ''
                            }`}
                            onClick={() => seleccionarProducto(producto)}
                          >
                            <div className="d-flex justify-content-between">
                              <span>{producto.descripcion}</span>
                              <span>{producto.precio_unitario.toLocaleString()} Gs.</span>
                            </div>
                          </button>
                        ))
                      ) : (
                        <div className="list-group-item text-muted">
                          {busqueda ? 'No se encontraron productos' : 'Escriba para buscar productos'}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {nuevoConsumo.producto && (
                  <>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">Cantidad</label>
                        <input
                          type="number"
                          className="form-control"
                          min="1"
                          value={nuevoConsumo.cantidad}
                          onChange={handleCantidadChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Precio Unitario</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nuevoConsumo.producto.precio_unitario.toLocaleString()}
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="alert alert-info">
                      <strong>Total:</strong> {nuevoConsumo.monto.toLocaleString()} Gs.
                    </div>
                  </>
                )}
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => {
                    setShowDetailModal(false);
                    limpiarSeleccion();
                  }}
                >
                  Cancelar
                </button>
                 <button type="button" className="btn btn-success" onClick={agregarConsumo} disabled={loading || !nuevoConsumo.producto}>
                  {loading ? 'Guardando...' : 'Guardar Consumo'}</button>
                
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Editar Cantidad */}
      {showEditModal && consumoEditando && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title w-100 text-center">Editar Cantidad</h5>
              </div>
              <div className="modal-body">
                {error && <div className="alert alert-danger">{error}</div>}

                <div className="mb-3">
                  <label className="form-label">Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    value={consumoEditando.Productos?.descripcion || consumoEditando.descripcion || 'Consumo'}
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Cantidad</label>
                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    value={nuevaCantidad}
                    onChange={(e) => setNuevaCantidad(Math.max(1, Number(e.target.value)))}
                  />
                </div>

                <div className="alert alert-info">
                  <strong>Precio Unitario:</strong> {(consumoEditando.Productos?.precio_unitario || consumoEditando.monto || 0).toLocaleString()} Gs.
                  <br />
                  <strong>Nuevo Total:</strong> {(consumoEditando.Productos?.precio_unitario || consumoEditando.monto || 0) * nuevaCantidad} Gs.
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowEditModal(false)}
                >
                  Cancelar
                </button>
                <button 
                  type="button" 
                  className="btn btn-success" 
                  onClick={guardarEdicionCantidad}
                  disabled={loading || nuevaCantidad === consumoEditando.cantidad}
                >
                  {loading ? 'Guardando...' : 'Guardar Cambios'}
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