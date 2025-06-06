import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaSearch, FaTimes } from "react-icons/fa";
import DetallesCuentaSkeleton from "../skeleton/DetallesCuenta.skeleton";
import HTTPClient from "../api/HTTPClient";

function DetallesCuenta() {
  /*
   * Uso de la api
   */
  const client = new HTTPClient();

  /**
   * Uso de react-router-dom
   */
  const { id } = useParams();
  const navigate = useNavigate();

  /*
   * Estados
   */
  // Apartado ingreso
  const [ingreso, setIngreso] = useState({
    id_ingreso: 0,
    estado: '',
    checkIn: '',
    checkOut: ''
  });
  const [huesped, setHuesped] = useState({
    id_huesped: 0,
    nombre: '',
    apellido: '',
    email: '',
    nacionalidad: '',
    ruc: '',
    telefono: ''
  });
  const [habitacion, setHabitacion] = useState({
    id_habitacion: 0,
    numero: '',
    tipoHabitacion: { nombre: '' }
  });
  const [tarifa, setTarifa] = useState({
    descripcion: '',
    precio: 0
  });
  const [cuenta, setCuenta] = useState({
    id_cuenta: 0,
    consumos: []
  });
  const [usuario, setUsuario] = useState({
    id_usuario: 0
  });

  // Apartado consumo
  const [consumos, setConsumos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
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
  // Funcionalidad de la pagina
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(null);

  /*
   * Cargar datos del ingreso
   */
  useEffect(() => {
    const cargarIngreso = async () => {
      try {
        setLoading(true);
        const res = await client.getIngresoById(Number(id));
        const valor = res.data;

        setIngreso({
          id_ingreso: Number(valor.id_ingreso),
          estado: valor.estado,
          checkIn: valor.checkIn,
          checkOut: valor.checkOut,
        });
        setHuesped({
          id_huesped: Number(valor.huesped.id_huesped),
          nombre: valor.huesped.nombre,
          apellido: valor.huesped.apellido,
          email: valor.huesped.email,
          nacionalidad: valor.huesped.nacionalidad,
          ruc: valor.huesped.ruc,
          telefono: valor.huesped.telefono
        });
        setHabitacion({
          id_habitacion: Number(valor.habitacion.id_habitacion),
          numero: valor.habitacion.numero,
          tipoHabitacion: { nombre: valor.habitacion.tipoHabitacion.nombre }
        });
        setTarifa({
          descripcion: valor.tarifa.descripcion,
          precio: Number(valor.tarifa.precio)
        });
        setCuenta({
          id_cuenta: Number(valor.cuenta?.[0].id_cuenta),
          consumos: valor.cuenta?.[0].consumos
        });
        setUsuario({
          id_usuario: Number(valor.usuario.id_usuario)
        });
      } catch (error) {
        setError(error.message);
        setStatus(error.response.status);
      } finally {
        setLoading(false);
      }
    }
    cargarIngreso()
  }, []);

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
        const response = await client.getProductos();
        setProductos(response.data);
      } catch (error) {
        console.error('Error al cargar datos:', error);
        setError(error.message);
        setStatus(error.response.status);
      } finally {
        setLoading(false);
      }
    };
    // Luego en tu useEffect
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

  /**
     * Para el manejo de error
     */
  useEffect(() => {
    if (error) {
      navigate('/ErrorPage', {
        state: {
          code: status,
          message: error
        },
        replace: true,
      });
    }
  }, [error, status, navigate]);

  // Calcular noches de estadía
  const calcularNoches = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return 0;
    const unDia = 24 * 60 * 60 * 1000;
    const fechaInicio = new Date(checkIn);
    const fechaFin = new Date(checkOut);
    return Math.round(Math.abs((fechaFin - fechaInicio) / unDia));
  };

  // Calculo de la cuenta
  const noches = calcularNoches(ingreso.checkIn, ingreso.checkOut);
  const precioHabitacion = tarifa.precio || 0;
  const totalHabitacion = noches * precioHabitacion;
  const totalConsumos = consumos.reduce((acc, item) => acc + (Number(item.monto) || 0), 0);
  const totalGeneral = Number(totalHabitacion) + Number(totalConsumos);

  /*
   * Navegación
   */
  // Volver a huesped
  const irAHuespedes = () => {
    navigate('/Huespedes');
  };

  // Ir a factura. Cierre de cuenta
  const irAFactura = () => {
    navigate(`/InvoiceCierre/${id}`);
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
      const response = await client.updateConsumo(consumoEditando.id_consumo, { cantidad: nuevaCantidad });

      const data = await response.data;

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

      const idCuenta = Number(cuenta.id_cuenta);
      const idUsuario = Number(usuario.id_usuario);

      if (!idCuenta || !idUsuario) {
        throw new Error('No se pudo obtener la cuenta o usuario asociado');
      }

      const monto = cantidad * Number(nuevoConsumo.producto.precio_unitario);

      // Preparar datos
      const consumoData = {
        fk_producto: Number(nuevoConsumo.producto.id_producto),
        cantidad,
        monto,
        fk_cuenta: idCuenta,
        fk_usuario: idUsuario
      };

      console.log("Enviando datos al backend (Axios):", consumoData);

      // Enviar con Axios (ya configurado con token si usás un interceptor)
      const response = await client.postConsumo(consumoData);
      const data = response.data;

      // Verificar que el backend devuelva el id
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
      console.error('Error completo:', error);
      console.error('Error status:', error.response?.status);
      console.error('Error data:', error.response?.data);

      console.error("Error completo:", {
        message: error.message,
        stack: error.stack,
        context: {
          producto: nuevoConsumo.producto,
          cantidad: nuevoConsumo.cantidad,
          cuenta: cuenta.id_cuenta,
          usuario: usuario.id_usuario
        }
      });

      // Mensajes amigables
      let userMessage = error.message;

      if (error.message.includes('Network')) {
        userMessage = 'Error de conexión con el servidor';
      } else if (error.response?.status === 500) {
        userMessage = 'Error interno del servidor. Contacte al administrador.';
      } else if (error.response?.data?.message) {
        userMessage = error.response.data.message;
      }

      setError(userMessage);

    } finally {
      setLoading(false);
    }
  };

  const eliminarConsumo = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este consumo?')) return;

    try {
      setLoading(true);

      await client.deleteConsumo(id);

      setConsumos(prev => prev.filter(c => c.id_consumo !== id));
    } catch (error) {
      console.error('Error al eliminar consumo:', error);

      const mensaje =
        error.response?.data?.message ||
        error.message ||
        'Error desconocido al eliminar consumo';

      setError('Error al eliminar consumo: ' + mensaje);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>{loading ? <DetallesCuentaSkeleton></DetallesCuentaSkeleton> : (
      <div className="container mt-5">
        {/* Encabezado */}
        <h2 className="d-block mt-n3 text-center">Detalles Cuenta</h2>
        {/* Datos del Huésped */}
        <div className="card border-secondary-subtle bg-light p-3 mb-4">
          <h4 className="card-title mb-3">Datos del Huésped</h4>
          <div className="d-flex flex-wrap gap-4">
            <div className="flex-fill" style={{ minWidth: "160px" }}>
              <small className="text-muted">Nombre completo</small>
              <div className="fw-semibold">{`${huesped.nombre || '-'} ${huesped.apellido || ''}`}</div>
            </div>
            <div className="flex-fill" style={{ minWidth: "160px" }}>
              <small className="text-muted">RUC</small>
              <div className="fw-semibold">{huesped.ruc || '-'}</div>
            </div>
            <div className="flex-fill" style={{ minWidth: "160px" }}>
              <small className="text-muted">Correo electrónico</small>
              <div className="fw-semibold">{huesped.email || '-'}</div>
            </div>
            <div className="flex-fill" style={{ minWidth: "160px" }}>
              <small className="text-muted">Teléfono</small>
              <div className="fw-semibold">{huesped.telefono || '-'}</div>
            </div>
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
              <td>{habitacion?.tipoHabitacion?.nombre || 'Habitación'}</td>
              <td className="text-center">{noches}</td>
              <td className="text-center">{habitacion.numero || '—'}</td>
              <td className="text-center">{tarifa.descripcion || '—'}</td>
              <td className="text-end">{precioHabitacion.toLocaleString("de-DE")}</td>
              <td className="text-end">{totalHabitacion.toLocaleString("de-DE")}</td>
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
                  <td className="text-end">{(item.Productos?.precio_unitario || item.monto || 0).toLocaleString("de-DE")}</td>
                  <td className="text-end">
                    {((item.Productos?.precio_unitario || item.monto || 0) * (item.cantidad || 1)).toLocaleString("de-DE")}
                  </td>
                  <td className="d-flex justify-content-center align-items-center" style={{ gap: "3px" }}>
                    <button
                      className="btn  rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "30px", height: "30px", padding: 0 }}
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
          <strong>Total: {totalGeneral.toLocaleString("de-DE")} Gs</strong>
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
            disabled={loading}
          >
            Cerrar Cuenta
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
                              className={`list-group-item list-group-item-action ${nuevoConsumo.producto?.id_producto === producto.id_producto ? 'active' : ''
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
    )}
    </>
  );
};

export default DetallesCuenta;