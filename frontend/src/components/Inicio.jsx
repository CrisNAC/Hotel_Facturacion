import React, { useState } from 'react';
import { FaRegTrashAlt, FaEye } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const datos = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    huesped: `Nombre Apellido ${i + 1}`,
    checkIn: `2025-04-${(i % 30 + 1).toString().padStart(2, '0')}`,
    checkOut: `2025-04-${((i + 3) % 30 + 1).toString().padStart(2, '0')}`,
    habitacion: `${(i % 10) + 1}${String.fromCharCode(65 + (i % 3))}`,
    estadoIngreso: i % 2 === 0 ? "Reserva Completa" : "Reserva Pendiente",
    consumo: 50000 + i * 1000,
    cargosExtras: 20000 + i * 500,
    total: 70000 + i * 1500,
}));

function Inicio() {
    // Paginacion
    const itemsPerPage = 10;
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(datos.length / itemsPerPage);

    const paginatedItems = datos.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    // Botones para la accion
    const [selectedItem, setSelectedItem] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleShowDetails = (item) => {
        setSelectedItem(item);
        setShowDetailModal(true);
    };

    const handleShowDelete = (item) => {
        setSelectedItem(item);
        setShowDeleteModal(true);
    };

    const handleDelete = () => {
        // Aquí eliminarías el ítem (p. ej. setDatos(datos.filter(d => d.id !== selectedItem.id)))
        alert(`Eliminado: ${selectedItem.huesped}`);
        setShowDeleteModal(false);
    };

    const navigate = useNavigate();

    const irADetCuenta = () => {
        navigate('/DetallesCuentas');
    };

    return (
        <>
            <div className="p-6 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-3">Lista de ingresos</h1>

                {/* Filtro */}
                <div className="row border border-gray rounded-2 p-3 my-5 align-items-center">
                    {/* Entradas */}
                    <div className="mb-3 col">
                        <label htmlFor="inputHuepsed" className="form-label">Huesped</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="mb-3 col">
                        <label htmlFor="inputHabitacion" className="form-label">Habitacion</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="mb-3 col">
                        <label htmlFor="inputEstadoIngreso" className="form-label">Estado Ingreso</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    {/* Fecha */}
                    <div className="mb-3 col">
                        <label htmlFor="inputEstadoIngreso" className="form-label">Fecha</label>
                        <input type="date" className="form-control" />
                    </div>
                    {/* Checkbox */}
                    <div className='col d-flex row'>
                        <div className="d-flex justify-content-around align-items-center">
                            <label htmlFor="fecha1">Check-in</label>
                            <input type='checkbox' name="fecha1" />
                        </div>
                        <div className="d-flex justify-content-around align-items-center">
                            <label htmlFor="fecha2">Check-out</label>
                            <input type='checkbox' name="fecha2" />
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
                                <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Estado de Ingreso</th>
                                <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Consumo</th>
                                <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Cargos Extras</th>
                                <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Total</th>
                                <th className="align-middle" style={{ backgroundColor: "#003366", color: "white" }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedItems.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="align-middle">{(page - 1) * itemsPerPage + index + 1}</td>
                                    <td className="align-middle">{item.huesped}</td>
                                    <td className="align-middle">{item.checkIn}</td>
                                    <td className="align-middle">{item.checkOut}</td>
                                    <td className="align-middle">{item.habitacion}</td>
                                    <td className="align-middle">{item.estadoIngreso}</td>
                                    <td className="align-middle">{item.consumo.toLocaleString()} Gs</td>
                                    <td className="align-middle">{item.cargosExtras.toLocaleString()} Gs</td>
                                    <td className="align-middle">{item.total.toLocaleString()} Gs</td>
                                    <td className="align-middle">
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
                                        <button className='btn rounded-circle mx-1' style={{ backgroundColor: "#003366", color: "white" }} onClick={irADetCuenta}><FiFileText /></button>
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
                                            <tr>
                                                <td>{selectedItem.id}</td>
                                                <td>{selectedItem.huesped}</td>
                                                <td>{selectedItem.huesped}</td>
                                                <td>{selectedItem.huesped}</td>
                                                <td>{selectedItem.huesped}</td>
                                                <td>{selectedItem.huesped}</td>
                                            </tr>
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
        </>
    );
}

export default Inicio