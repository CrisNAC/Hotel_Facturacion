import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaRegTrashAlt, FaEye } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import HTTPClient from '../api/HTTPClient.js';
import HuespedesActivosSkeleton from '../skeleton/Huespedes.skeleton.jsx';
import ModalDetails from "./ModalDetails.jsx";
import ModalDelete from './ModalDelete.jsx';

function Huespedes() {
    const client = new HTTPClient();
    //Navigate
    const navigate = useNavigate();
    /*
     * Todos los estados
    */
    const [ingresosOriginales, setIngresosOriginales] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    // Estados del filtro
    const [ingresosFiltrados, setIngresosFiltrados] = useState([]);
    const [filtros, setFiltros] = useState({ huesped: '', habitacion: '', estado: '', fecha: '', checkIn: true });
    const [debouncedFiltros, setDebouncedFiltros] = useState(filtros);
    // Estados para las Acciones
    const [selectedItem, setSelectedItem] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    // Estado para la paginacion
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    const paginatedItems = ingresosFiltrados.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    const totalPages = Math.ceil(ingresosFiltrados.length / itemsPerPage);

    /**
     * Obtiene todos los ingresos
     */
    useEffect(() => {
        const fetchIngresos = async () => {
            try {
                setLoading(true);
                const response = await client.getIngresos();
                setIngresosOriginales(response.data);
            } catch (err) {
                // Si hay respuesta del servidor
                if (err.response) {
                    setError(err.response.data?.error || err.message);
                    setStatus(err.response.status);
                    console.error('Error al obtener ingresos:', err.response.status, err.response.data);
                } else {
                    // Errores de red u otros
                    setError(err.message);
                    setStatus(500);
                    console.error('Error de red o sin respuesta:', err.message);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchIngresos();
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedFiltros(filtros);
        }, 300);
        return () => clearTimeout(timeout);
    }, [filtros]);

    useEffect(() => {
        const filtrado = ingresosOriginales.filter((ingreso) => {
            const nombreCompleto = `${ingreso.huesped?.nombre || ''} ${ingreso.huesped?.apellido || ''}`.toLowerCase();
            if (filtros.huesped && !nombreCompleto.includes(debouncedFiltros.huesped.toLowerCase())) return false;
            if (filtros.habitacion && !ingreso.habitacion?.numero?.toString().includes(filtros.habitacion)) return false;
            if (filtros.estado && ingreso.estado?.toLowerCase() !== filtros.estado.toLowerCase()) return false;
            const fecha = debouncedFiltros.fecha;
            if (fecha) {
                const fechaComparar = debouncedFiltros.checkIn ? ingreso.checkIn : ingreso.checkOut;
                if (!fechaComparar?.includes(fecha)) return false;
            }
            return true;
        });
        setIngresosFiltrados(filtrado);
        setPage(1);
    }, [debouncedFiltros, ingresosOriginales, filtros]);

    /**
     * Para cambiar el formato de la fecha a Dia/Mes/Año
     * @param {*} dateString Se le pasa el una fecha
     * @returns Retorna la fecha modifica en caso de exito o si no en caso de fracaso -
     */
    const formatDMY = (dateString) => {
        if (!dateString) return '--/--/----';
        try {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
        } catch {
            return '—';
        }
    };

    const calcularNoches = (checkIn, checkOut) => {
        if (!checkIn || !checkOut) return 0;

        const unDia = 24 * 60 * 60 * 1000; // milisegundos en un día
        const fechaInicio = new Date(checkIn);
        const fechaFin = new Date(checkOut);

        // Redondear hacia arriba para contar noches completas
        return Math.round(Math.abs((fechaFin - fechaInicio) / unDia));
    };

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFiltros(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    /**
     * Para obtener un Ingreso y modificar el estado showDetailModal
     *  
     */
    const handleShowDetails = (item) => {
        setSelectedItem(item);
        setShowDetailModal(true);
    };

    /**
     * Muesta el contenido del ingreso seleccionado.
     * Cambia el estado de ShowDeleteModal.
     * @param {*} item 
     */
    const handleShowDelete = (item) => {
        setSelectedItem(item);
        setShowDeleteModal(true);
    };

    // Ir a Detalle Cuenta
    const irADetCuenta = (item) => {
        navigate(`/DetallesCuenta/${item.id_ingreso}`);
    };

    const skeletonPage = () => (
        <HuespedesActivosSkeleton></HuespedesActivosSkeleton>
    );

    const errorPage = () => (
        navigate('/ErrorPage', {
            state: {
                code: status,
                message: error
            },
            replace: true
        })
    );

    return (
        <>
            {loading ? skeletonPage() :
                error ? errorPage() : (
                    <>
                        <h2 className="text-3xl font-bold text-center p-2">Huéspedes</h2>
                        {/* Filtro */}
                        <div
                            className="row border border-gray rounded-2 p-3 d-flex justify-content-center align-items-center"
                            style={{ margin: "0.5rem 0 1rem 0" }}
                        >
                            <div className="col-2 h-100">
                                <label htmlFor="huesped" name="huesped" className="form-label small">Huesped</label>
                                <input
                                    id="huesped"
                                    type="text"
                                    className="form-control form-control-sm"
                                    name="huesped"
                                    value={filtros.huesped}
                                    onChange={handleFilterChange}
                                />
                            </div>

                            <div className="col-2 h-100">
                                <label htmlFor="habitacion" name="habitacion" className="form-label small">Habitacion</label>
                                <input
                                    id="habitacion"
                                    type="text"
                                    className="form-control form-control-sm"
                                    name="habitacion"
                                    value={filtros.habitacion}
                                    onChange={handleFilterChange}
                                />
                            </div>

                            <div className="col-3 h-100">
                                <label htmlFor="estado" name="estado" className="form-label small">Estado</label>
                                <select
                                    id="estado"
                                    className="form-select form-select-sm"
                                    name="estado"
                                    value={filtros.estado}
                                    onChange={handleFilterChange}
                                >
                                    <option value="">Todos los estados</option>  // Opción vacía para limpiar el filtro
                                    <option value="activo">Activo</option>
                                    <option value="pendiente">Pendiente</option>
                                    <option value="cancelado">Cancelado</option>
                                </select>
                            </div>

                            {/* Parte fecha y Checks */}
                            <div
                                className="col-5 row border border-gray rounded-2 align-items-center p-1"
                                style={{ margin: 0 }}
                            >
                                <div className="col">
                                    <label htmlFor="fecha" name="fecha" className="form-label small">Fecha</label>
                                    <input
                                        id="fecha"
                                        type="date"
                                        className="form-control form-control-sm"
                                        name="fecha"
                                        value={filtros.fecha}
                                        onChange={handleFilterChange}
                                    />
                                </div>
                                {/* Checks */}
                                <div className='col d-flex row'>
                                    <div className="d-flex justify-content-evenly align-items-center">
                                        <label htmlFor="checkIn" name="checkIn">Check-in</label>
                                        <input
                                            id="checkIn"
                                            type='checkbox'
                                            name="checkIn"
                                            checked={filtros.checkIn}
                                            onChange={handleFilterChange}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-evenly align-items-center">
                                        <label htmlFor="checkOut" name="checkOut">Check-out</label>
                                        <input
                                            id="checkOut"
                                            type='checkbox'
                                            name="checkOut"
                                            checked={!filtros.checkIn}
                                            onChange={() => setFiltros(prev => ({ ...prev, checkIn: !prev.checkIn }))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabla */}
                        <div>
                            <table className="table table-sm table-hover">
                                <thead>
                                    <tr className='text-center'>
                                        <th scope='col' style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>#</th>
                                        <th scope='col' style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Huésped</th>
                                        <th scope='col' style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Habitación</th>
                                        <th scope='col' style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Check-in</th>
                                        <th scope='col' style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Check-out</th>
                                        <th scope='col' style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Estado</th>
                                        <th scope='col' style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Total</th>
                                        <th scope='col' style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedItems.map((item, index) => (
                                        <tr key={item.id_ingreso}>
                                            <td className='text-center'>{(page - 1) * itemsPerPage + index + 1}</td>
                                            <td className='text-start'>{`${item.huesped?.nombre || 'N/A'} ${item.huesped?.apellido || ''}`}</td>
                                            <td className="text-center">{item.habitacion?.numero || '---'}</td>
                                            <td className="text-center">{formatDMY(item.checkIn) || '---'}</td>
                                            <td className="text-center">{formatDMY(item.checkOut) || '---'}</td>
                                            <td className="text-center">
                                                <span style={{
                                                    padding: '4px 8px',
                                                    borderRadius: '12px',
                                                    fontSize: '14px',
                                                    display: 'inline-block',
                                                    backgroundColor:
                                                        item.estado === 'Pendiente' ? '#fff3cd' :
                                                            item.estado === 'Cancelado' ? '#f8d7da' :
                                                                '#d4edda',
                                                    color:
                                                        item.estado === 'Pendiente' ? '#856404' :
                                                            item.estado === 'Cancelado' ? '#721c24' :
                                                                '#155724'
                                                }}>
                                                    {item.estado || '—'}
                                                </span>
                                            </td>
                                            <td className="text-center">
                                                {(() => {
                                                    const noches = calcularNoches(item.checkIn, item.checkOut);
                                                    const costoHabitacion = noches * (item.tarifa?.precio || 0);
                                                    const totalConsumos = item.cuenta?.[0]?.consumos
                                                        ?.filter(consumo => consumo.activo)
                                                        ?.reduce((acc, consumo) => acc + (Number(consumo.monto) || 0), 0) || 0;
                                                    const total = costoHabitacion + totalConsumos;

                                                    return total > 0 ? `${total.toLocaleString()} Gs` : '—';
                                                })()}
                                            </td>
                                            {/* Botones de la tabla */}
                                            <td className="text-center">
                                                {/* Detalles del huésped*/}
                                                <button
                                                    type='button'
                                                    className='btn rounded-circle mx-1'
                                                    onClick={() => handleShowDetails(item)}>
                                                    <FaEye />
                                                </button>
                                                {/* Cancelar el Ingreso */}
                                                <button
                                                    type='button'
                                                    className='btn rounded-circle mx-1 border-0'
                                                    disabled={item.estado === 'Cancelado'}
                                                    onClick={() => handleShowDelete(item)}>
                                                    <FaRegTrashAlt />
                                                </button>
                                                {/* Detalles Cuenta */}
                                                <button
                                                    type='button'
                                                    className='btn rounded-circle mx-1 border-0'
                                                    disabled={item.estado === 'Cancelado' || item.estado === 'Pendiente'}
                                                    onClick={() => irADetCuenta(item)}>
                                                    <FiFileText />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Paginación */}
                        <div className="d-flex justify-content-center mt-6 space-x-2">
                            <button
                                type='button'
                                className="px-3 py-1 border rounded disabled:opacity-50"
                                onClick={() => setPage(page - 1)}
                                disabled={page === 1}
                            >
                                Anterior
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    type='button'
                                    className={`px-3 py-1 mx-1 border rounded ${page === i + 1 ? 'bg-secondary' : ''}`}
                                    onClick={() => setPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                type='button'
                                className="px-3 py-1 border rounded disabled:opacity-50"
                                onClick={() => setPage(page + 1)}
                                disabled={page === totalPages}
                            >
                                Siguiente
                            </button>
                        </div>

                        {/* Modal de detalles */}
                        {showDetailModal && selectedItem && (
                            <ModalDetails item={selectedItem} setShowDetailModal={setShowDetailModal}></ModalDetails>
                        )}

                        {/* Modal de cancelar ingreso */}
                        {showDeleteModal && selectedItem && (
                            <ModalDelete item={selectedItem} setShowDeleteModal={setShowDeleteModal}></ModalDelete>
                        )}
                    </>
                )}
        </>
    );
}

export default Huespedes;