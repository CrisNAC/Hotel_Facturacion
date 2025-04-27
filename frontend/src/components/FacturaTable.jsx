import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./FacturaTable.css";
import NavBar from "../components/navbar.jsx";

const FacturaTable = () => {

    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        desde: "",
        hasta: "",
        huesped: "",
        condicion: "Todos",
    });

    const [filtered, setFiltered] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 15;

    const [facturas, setFacturas] = useState([]);
    
    
    useEffect(() => {
        // Cambiá la URL por la de tu API real
        fetch("http://localhost:4000/api/facturas")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al obtener las facturas");
                }
                return response.json();
            })
            .then(data => setFacturas(data))
            .catch(error => {
                console.error("Error al cargar los datos:", error);
            });
    }, []);

    // Función para convertir "01/03/2025" a "2025-03-01"
    function convertirFecha(fechastr) {
        const [dia, mes, anho] = fechastr.split("/");
        return `${anho}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
    }

    // Función para normalizar cadenas de texto, eliminando acentos y convirtiendo todo a minúsculas
    function normalizarTexto(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    useEffect(() => {
        const { desde, hasta, huesped, condicion } = filters;
        const huespedNormalizado = normalizarTexto(huesped);

        const nuevasFacturas = facturas.filter((f) => {
            const fecha = convertirFecha(f.fecha);
            const nombre = normalizarTexto(f.huesped);

            return (
                (!desde || fecha >= desde) &&
                (!hasta || fecha <= hasta) &&
                (!huesped || nombre.includes(huespedNormalizado)) &&
                (condicion === "Todos" || f.condicion === condicion)
            );
        });

        setFiltered(nuevasFacturas);
        setCurrentPage(0); // Reinicia la paginación al cambiar filtros
    }, [filters]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFilters(prev => ({ 
            ...prev, 
            [id.replace("filtro", "").toLowerCase()]: value, 
        }));
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = filtered.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(filtered.length / itemsPerPage);

    return (
        <>
        <NavBar />
        <div className="factura-wrapper container-fluid px-4 mt-4">
            {/* Filtros */}
            <h2 className="text-center" style={{ paddingBottom: "20px" }}>Facturas emitidas</h2>
            <div className="bg-light p-3 rounded mb-4">
                <div className="row" style={{ paddingTop: "8px" }}>
                    <div className="col-12 col-md-3 mb-3">
                        <label className="form-label">Desde:</label>
                        <div className="position-relative d-flex align-items-center calendar-wrapper">
                            <input
                                type="date"
                                id="filtroDesde"
                                className="form-control pe-5"
                                value={filters.desde}
                                onChange={handleChange}
                            />
                            <i className="bi bi-calendar calendar-icon-right" onClick={() => document.getElementById("filtroDesde")?.showPicker?.()} style={{ cursor: "pointer" }}></i>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mb-3">
                        <label className="form-label">Hasta:</label>
                        <div className="position-relative d-flex align-items-center calendar-wrapper">
                            <input
                                type="date"
                                id="filtroHasta"
                                className="form-control pe-5"
                                value={filters.hasta}
                                onChange={handleChange}
                            />
                            <i className="bi bi-calendar calendar-icon-right" onClick={() => document.getElementById("filtroHasta")?.showPicker?.()} style={{ cursor: "pointer" }}></i>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mb-3">
                        <label className="form-label">Huésped:</label>
                        <input
                            type="text"
                            id="filtroHuesped"
                            className="form-control pe-5"
                            placeholder="Nombre"
                            value={filters.huesped}
                            onChange={handleChange}
                            />
                    </div>
                    <div className="col-12 col-md-3 mb-3">
                        <label className="form-label">Condición Venta:</label>
                        <select
                            id="filtroCondicion"
                            className="form-select"
                            value={filters.condicion}
                            onChange={handleChange}
                            style={{ cursor: "pointer" }}
                        >
                            <option>Todos</option>
                            <option>Contado</option>
                            <option>Crédito</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Tabla de resultados */}
            <table id="tablaFacturas" className="table table-bordered table-hover w-100 text-center">
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "#E6E6E6", color: "2E2E2E" }}>Huésped</th>
                        <th style={{ backgroundColor: "#E6E6E6", color: "2E2E2E" }}>Número de factura</th>
                        <th style={{ backgroundColor: "#E6E6E6", color: "2E2E2E" }}>Fecha de emisión</th>
                        <th style={{ backgroundColor: "#E6E6E6", color: "2E2E2E" }}>Monto total</th>
                        <th style={{ backgroundColor: "#E6E6E6", color: "2E2E2E" }}>Condición venta</th>
                        <th style={{ backgroundColor: "#E6E6E6", color: "2E2E2E" }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.length > 0 ? (
                        currentItems.map((factura, index) => (
                            <tr key={index}>
                                <td>{factura.huesped}</td>
                                <td>{factura.numero}</td>
                                <td>{factura.fecha}</td>
                                <td>
                                    {new Intl.NumberFormat("es-PY", {
                                        style: "currency",
                                        currency: "PYG",
                                    }).format(factura.monto)}
                                </td>
                                <td>{factura.condicion}</td>
                                <td>
                                    <button
                                        className="btn btn-sm"
                                        onClick={() => navigate(`/invoice/${factura.numero}`)}
                                    >
                                        <i className="bi bi-eye text-black"></i>
                                    </button>
                                    <button className="btn btn-sm">
                                        <i className="bi bi-download text-black"></i>
                                    </button>
                                    <button className="btn btn-sm">
                                        <i className="bi bi-printer text-black"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No se encontraron resultados</td>
                        </tr>
                    )}
                </tbody>
            </table>
            
            {/* Paginación */}
            {pageCount > 1 && (
                <div className="d-flex justify-content-center mt-3">
                    <ReactPaginate
                        previousLabel={"←"}
                        nextLabel={"→"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        forcePage={currentPage}
                    />
                </div>
            )}
        </div>
        </>
    );
};

export default FacturaTable;
