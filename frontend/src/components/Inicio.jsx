import React, { useState, useEffect } from 'react';
import { FaRegTrashAlt, FaEye } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import HTTPClient from '../api/HTTPClient.js';

function Inicio() {
    const client = new HTTPClient();
    const [ingresosOriginales, setIngresosOriginales] = useState([]); // Datos originales
    const [ingresosFiltrados, setIngresosFiltrados] = useState([]); // Datos filtrados
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Estados para filtros
    const [filtros, setFiltros] = useState({
        huesped: '',
        habitacion: '',
        estado: '',
        fecha: '',
        checkIn: true
    });
    const [debouncedFiltros, setDebouncedFiltros] = useState(filtros);
    
    // Estados para paginación
    const itemsPerPage = 10;
    const [page, setPage] = useState(1);
    
    // Estados para modales
    const [selectedItem, setSelectedItem] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // Obtener datos de la API
    useEffect(() => {
        const fetchIngresos = async () => {
            try {
                setLoading(true);
                const response = await client.getIngresos();
                setIngresosOriginales(response.data);
                setIngresosFiltrados(response.data); // Inicialmente mostrar todos
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
                console.error('Error al obtener ingresos:', err);
            }
        };
        
        fetchIngresos();
    }, []);

    // Filtrado con debounce
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedFiltros(filtros);
        }, 300);
        
        return () => clearTimeout(timeout);
    }, [filtros]);

    // Filtrar ingresos según los filtros aplicados
    useEffect(() => {
        if (ingresosOriginales.length === 0) return;

        const filteredIngresos = ingresosOriginales.filter((ingreso) => {
            // Filtro por huesped (búsqueda parcial en nombre y apellido)
            if (debouncedFiltros.huesped) {
                const nombreCompleto = `${ingreso.huesped?.nombre || ''} ${ingreso.huesped?.apellido || ''}`.toLowerCase();
                if (!nombreCompleto.includes(debouncedFiltros.huesped.toLowerCase())) {
                    return false;
                }
            }

            // Filtro por habitacion (búsqueda exacta o parcial según prefieras)
            if (debouncedFiltros.habitacion) {
                const numeroHabitacion = ingreso.habitacion?.numero?.toString() || '';
                if (!numeroHabitacion.includes(debouncedFiltros.habitacion)) {
                    return false;
                }
            }

            // Filtro por estado (búsqueda exacta)
            if (debouncedFiltros.estado) {
                if (ingreso.estado?.toLowerCase() !== debouncedFiltros.estado.toLowerCase()) {
                    return false;
                }
            }

            // Filtro por fecha (check-in o check-out según selección)
            if (debouncedFiltros.fecha) {
                const fechaBusqueda = debouncedFiltros.fecha;
                if (debouncedFiltros.checkIn) {
                    if (!ingreso.reserva?.check_in?.includes(fechaBusqueda)) {
                        return false;
                    }
                } else {
                    if (!ingreso.reserva?.check_out?.includes(fechaBusqueda)) {
                        return false;
                    }
                }
            }

            return true;
        });

        setIngresosFiltrados(filteredIngresos);
        setPage(1); // Resetear a la primera página al aplicar nuevos filtros
    }, [debouncedFiltros, ingresosOriginales]);

    // Calcular paginación
    const totalPages = Math.ceil(ingresosFiltrados.length / itemsPerPage);
    const paginatedItems = ingresosFiltrados.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    // Handlers
    // Handlers
    const handleShowDetails = (item) => {
        setSelectedItem(item);
        setShowDetailModal(true);
    };

    const handleShowDelete = (item) => {
        setSelectedItem(item);
        setShowDeleteModal(true);
    };

    const handleDelete = () => {
        // Implementación real iría aquí
        setListaHuespedes(prev => prev.filter(item => item.id !== selectedItem.id));
        setShowDeleteModal(false);
    };

    const navigate = useNavigate();
    const irADetCuenta = () => navigate('/DetallesCuentas');

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFiltros(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const resetFilters = () => {
        setFiltros({
            huesped: '',
            habitacion: '',
            estado: '',
            fecha: '',
            checkIn: true
        });
        // No necesitas setIngresosFiltrados aquí porque el efecto de filtro se encargará
    };

    if (loading) return <div className="text-center py-5">Cargando...</div>;
    if (error) return <div className="text-center py-5 text-danger">Error: {error}</div>;

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-3">Lista de ingresos</h1>

            {/* Filtro */}
            <div className="row border border-gray rounded-2 p-3 my-5 align-items-center">
                <div className="mb-3 col">
                    <label htmlFor="huesped" className="form-label">Huesped</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="huesped"
                        value={filtros.huesped}
                        onChange={handleFilterChange}
                        placeholder="Buscar por nombre..."
                    />
                </div>

                <div className="mb-3 col">
                    <label htmlFor="habitacion" className="form-label">Habitacion</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="habitacion"
                        value={filtros.habitacion}
                        onChange={handleFilterChange}
                    />
                </div>

                <div className="mb-3 col">
                    <label htmlFor="estado" className="form-label">Estado</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="estado"
                        value={filtros.estado}
                        onChange={handleFilterChange}
                    />
                </div>

                <div className="mb-3 col">
                    <label htmlFor="fecha" className="form-label">Fecha</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        name="fecha"
                        value={filtros.fecha}
                        onChange={handleFilterChange}
                    />
                </div>

                <div className='col d-flex row'>
                    <div className="d-flex justify-content-around align-items-center">
                        <label htmlFor="checkIn">Check-in</label>
                        <input 
                            type='checkbox' 
                            name="checkIn"
                            checked={filtros.checkIn}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="d-flex justify-content-around align-items-center">
                        <label htmlFor="checkOut">Check-out</label>
                        <input 
                            type='checkbox' 
                            name="checkOut"
                            checked={!filtros.checkIn}
                            onChange={() => setFiltros(prev => ({...prev, checkIn: !prev.checkIn}))}
                        />
                    </div>
                </div>
            </div>

            {/* Tabla */}
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>#</th>
                            <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Huésped</th>
                            <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Check-in</th>
                            <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Check-out</th>
                            <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Habitación</th>
                            <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Estado</th>
                            <th className="align-middle text-center" style={{ backgroundColor: "#003366", color: "white" }}>Total</th>
                            <th className="align-middle text-center" style={{ backgroundColor: "#003366", color: "white" }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedItems.map((item, index) => (
                            <tr key={item.id_ingreso}>
                                <td>{(page - 1) * itemsPerPage + index + 1}</td>
                                <td>{`${item.huesped?.nombre || 'N/A'} ${item.huesped?.apellido || ''}`}</td>
                                <td>{item.reserva?.check_in?.slice(0, 10) || '—'}</td>
                                <td>{item.reserva?.check_out?.slice(0, 10) || '—'}</td>
                                <td>{item.habitacion?.numero || '—'}</td>
                                <td>{item.estado || '—'}</td>
                                <td className="text-end">
                                    {item.cuenta?.length > 0 && item.cuenta[0].consumos?.length > 0 
                                        ? item.cuenta[0].consumos.reduce((acc, consumo) => acc + (consumo.monto || 0), 0).toLocaleString() 
                                        : '—'}
                                    Gs
                                </td>                                
                                <td className="d-flex justify-content-center">
                                    <button
                                        className='btn rounded-circle mx-1'
                                        style={{ backgroundColor: "#003366", color: "white" }}
                                        onClick={() => handleShowDetails(item)}>
                                        <FaEye />
                                    </button>
                                    <button
                                        className='btn rounded-circle mx-1'
                                        style={{ backgroundColor: "#003366", color: "white" }}
                                        onClick={() => handleShowDelete(item)}>
                                        <FaRegTrashAlt />
                                    </button>
                                    <button 
                                        className='btn rounded-circle mx-1' 
                                        style={{ backgroundColor: "#003366", color: "white" }} 
                                        onClick={irADetCuenta}>
                                        <FiFileText />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             {/* Paginación */}
             <div className="flex justify-center mt-6 space-x-2">
                    <button
                        className="px-3 py-1 border rounded disabled:opacity-50"
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                    >
                        Anterior
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`px-3 py-1 border rounded ${page === i + 1 ? 'bg-secondary' : ''}`}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        className="px-3 py-1 border rounded disabled:opacity-50"
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                    >
                        Siguiente
                    </button>
                </div>
            {/* Modal de detalles */}
            {showDetailModal && selectedItem && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header d-flex justify-content-center">
                                <h4 className="modal-title">Detalles del huésped</h4>
                            </div>
                            <div className="modal-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>#</th>
                                            <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Nombre</th>
                                            <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Apellido</th>
                                            <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Nacionalidad</th>
                                            <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Telefono</th>
                                            <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Correo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowDetailModal(false)}>Volver</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

                {/* Modal de cancelar ingreso */}
                {showDeleteModal && selectedItem && (
                    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header d-flex justify-content-center">
                                    <h5 className="modal-title">¿Estás seguro de que quieres cancelar este ingreso?</h5>
                                </div>
                                <div className="modal-body row row-cols-2 text-start py-5">
                                    <p ><strong>Nombre:</strong> {selectedItem.huesped}</p>
                                    <p className='text-left'><strong>Habitación:</strong> {selectedItem.habitacion}</p>
                                    <p><strong>Check-in:</strong> {selectedItem.checkIn}</p>
                                    <p><strong>Check-out:</strong> {selectedItem.checkOut}</p>
                                    <p><strong>Estado ingreso:</strong> {selectedItem.estadoIngreso.toLocaleString()}</p>
                                    <p><strong>Total:</strong> {selectedItem.total.toLocaleString()} Gs</p>
                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>Volver</button>
                                    <button type="button" className="btn btn-danger" onClick={handleDelete}>Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
)}

export default Inicio;