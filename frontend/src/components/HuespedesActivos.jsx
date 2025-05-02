import React, { useState, useEffect } from 'react';
import { FaRegTrashAlt, FaEye } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function HuespedesActivos({ ingresosOriginales }) {
    const [ingresosFiltrados, setIngresosFiltrados] = useState([]);
    const [filtros, setFiltros] = useState({ huesped: '', habitacion: '', estado: '', fecha: '', checkIn: true });
    const [debouncedFiltros, setDebouncedFiltros] = useState(filtros);
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    const [selectedItem, setSelectedItem] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const navigate = useNavigate();

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
            console.log(fecha)
            if (fecha) {
                const fechaComparar = debouncedFiltros.checkIn ? ingreso.reserva?.check_in : ingreso.reserva?.check_out;
                if (!fechaComparar?.includes(fecha)) return false;
            }

            return true;
        });

        setIngresosFiltrados(filtrado);
        setPage(1);
    }, [debouncedFiltros, ingresosOriginales, filtros]);

    const paginatedItems = ingresosFiltrados.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    const totalPages = Math.ceil(ingresosFiltrados.length / itemsPerPage);

    const formatDMY = (dateString) => {
        if (!dateString) return '—';
        try {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
        } catch {
            return '—';
        }
    };

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFiltros(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    //const resetFilters = () => setFiltros({ huesped: '', habitacion: '', estado: '', fecha: '', checkIn: true });

    const handleShowDetails = (item) => {
        setSelectedItem(item);
        setShowDetailModal(true);
    };

    const handleShowDelete = (item) => {
        setSelectedItem(item);
        setShowDeleteModal(true);
    };

    const handleDelete = () => {
        setIngresosFiltrados(prev => prev.filter(item => item.id_ingreso !== selectedItem.id_ingreso));
        setShowDeleteModal(false);
    };

    const irADetCuenta = (ingreso) => {
        console.log(ingreso)
        //navigate(`/DetallesCuentas/${ingreso.id_ingreso}`);
    };
    
    return (
        <>
            {/* Filtro */}
            <div className="row border border-gray rounded-2 p-3 align-items-center"
                style={{ margin: 0, marginTop: "0.5rem", marginBottom: "1rem" }}>
                <div className="mb-3 col">
                    <label htmlFor="huesped" name="huesped" className="form-label">Huesped</label>
                    <input
                        id="huesped"
                        type="text"
                        className="form-control"
                        name="huesped"
                        value={filtros.huesped}
                        onChange={handleFilterChange}
                    />
                </div>

                <div className="mb-3 col">
                    <label htmlFor="habitacion" name="habitacion" className="form-label">Habitacion</label>
                    <input
                        id="habitacion"
                        type="text"
                        className="form-control"
                        name="habitacion"
                        value={filtros.habitacion}
                        onChange={handleFilterChange}
                    />
                </div>

                <div className="mb-3 col">
                    <label htmlFor="estado" name="estado" className="form-label">Estado</label>
                    <select
                        id="estado"
                        className="form-select"
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

                <div className="mb-3 col">
                    <label htmlFor="fecha" name="fecha" className="form-label">Fecha</label>
                    <input
                        id="fecha"
                        type="date"
                        className="form-control"
                        name="fecha"
                        value={filtros.fecha}
                        onChange={handleFilterChange}
                    />
                </div>

                <div className='col d-flex row'>
                    <div className="d-flex justify-content-around align-items-center">
                        <label htmlFor="checkIn" name="checkIn">Check-in</label>
                        <input
                            id="checkIn"
                            type='checkbox'
                            name="checkIn"
                            checked={filtros.checkIn}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="d-flex justify-content-around align-items-center">
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

            {/* Tabla */}
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr className='text-center'>
                            <th className="align-middle" style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>#</th>
                            <th className="align-middle" style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Huésped</th>
                            <th className="align-middle" style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Habitación</th>
                            <th className="align-middle" style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Check-in</th>
                            <th className="align-middle" style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Check-out</th>
                            <th className="align-middle" style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Estado</th>
                            <th className="align-middle text-center" style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Total</th>
                            <th className="align-middle text-center" style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedItems.map((item, index) => (
                            <tr key={item.id_ingreso}>
                                <td>{(page - 1) * itemsPerPage + index + 1}</td>
                                <td>{`${item.huesped?.nombre || 'N/A'} ${item.huesped?.apellido || ''}`}</td>
                                <td className="text-center">{item.habitacion?.numero || '—'}</td>
                                <td className="text-center">{formatDMY(item.reserva?.check_in) || '—'}</td>
                                <td className="text-center">{formatDMY(item.reserva?.check_out) || '—'}</td>

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
                                <td className="text-end">
                                    {item.cuenta?.length > 0 && item.cuenta[0].consumos?.length > 0
                                        ? item.cuenta[0].consumos.reduce((acc, consumo) => acc + (consumo.monto || 0), 0).toLocaleString()
                                        : '—'}
                                     Gs
                                </td>
                                <td className="d-flex justify-content-center">
                                    <button
                                        className='btn rounded-circle mx-1'
                                        onClick={() => handleShowDetails(item)}>
                                        <FaEye />
                                    </button>
                                    <button
                                        className='btn rounded-circle mx-1'
                                        onClick={() => handleShowDelete(item)}>
                                        <FaRegTrashAlt />
                                    </button>
                                    <button
                                        className='btn rounded-circle mx-1'
                                        style={{ width: 35, height: 35 }}
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
        </>
    );
}

export default HuespedesActivos;
