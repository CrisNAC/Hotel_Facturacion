import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./FacturaTable.css";
import NavBar from "../components/navbar.jsx";

const FacturaTable = () => {

    const navigate = useNavigate();

    const initialFilters = {
        desde: "",
        hasta: "",
        huesped: "",
        condicion: "Todos",
    };

    const [filters, setFilters] = useState(initialFilters);

    const handleResetFilters = () => {
        setFilters(initialFilters);
        setDateError(""); // limpia errores si los hay
    };

    const [filtered, setFiltered] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 15;
    const [facturas, setFacturas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dateError, setDateError] = useState(""); // mensaje de error si el rango de fechas seleccionado no es válido

    useEffect(() => {
        const fetchFacturas = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/facturas", {
                    headers: {
                        "Accept": "application/json"
                    }
                });

                if (!response.ok) {
                    // Capturamos errores de HTTP
                    throw new Error(`Error al obtener las facturas: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                setFacturas(data);
            } catch (error) {
                console.error("Error al cargar los datos:", error);
            }
            finally {
                setLoading(false); // 👈 Finaliza la carga, sea éxito o error
            }
        };
        fetchFacturas();
    }, []);

    // Función para normalizar cadenas de texto, eliminando acentos y convirtiendo todo a minúsculas
    function normalizarTexto(texto) {
        if (!texto) return "";
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    useEffect(() => {
        const { desde, hasta, huesped, condicion } = filters;
        const huespedNormalizado = normalizarTexto(huesped);

        const nuevasFacturas = facturas.filter((f) => {
            let fechaEmision;
            if (f.fecha) {
                fechaEmision = new Date(f.fecha);
            }
            else {
                return false;
            }

            const filtroDesde = desde ? new Date(desde) : null;
            const filtroHasta = hasta ? new Date(hasta) : null;

            const nombreCompleto = normalizarTexto(f.huesped);

            return (
                (!filtroDesde || fechaEmision >= filtroDesde) &&
                (!filtroHasta || fechaEmision <= filtroHasta) &&
                (!huesped || nombreCompleto.includes(huespedNormalizado)) &&
                (condicion === "Todos" || f.condicion === condicion)
            );
        });

        setFiltered(nuevasFacturas);
        setCurrentPage(0); // Reinicia la paginación al cambiar filtros
    }, [filters, facturas]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        const campo = id.replace("filtro", "").toLowerCase();

        const nuevosFiltros = {
            ...filters,
            [campo]: value,
        };

        const desde = nuevosFiltros.desde ? new Date(nuevosFiltros.desde) : null;
        const hasta = nuevosFiltros.hasta ? new Date(nuevosFiltros.hasta) : null;

        setFilters(nuevosFiltros); // primero actualizamos los filtros

        if (desde && hasta && desde > hasta) {
            alert("La fecha 'Desde' no puede ser mayor que la fecha 'Hasta'.");
        }
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
                <div className="bg-light p-3 rounded mb-3">
                    <div className="row align-items-center filter-row" style={{ paddingLeft: "32px" }}>
                        <div className="col-12 col-md-auto">
                            <label className="form-label">Desde:</label>
                            <div className="position-relative d-flex align-items-center calendar-wrapper">
                                <input
                                    type="date"
                                    id="filtroDesde"
                                    className="form-control"
                                    value={filters.desde}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-auto">
                            <label className="form-label">Hasta:</label>
                            <div className="position-relative d-flex align-items-center calendar-wrapper">
                                <input
                                    type="date"
                                    id="filtroHasta"
                                    className="form-control"
                                    value={filters.hasta}
                                    onChange={handleChange}
                                />
                            </div>
                            {dateError && (
                                <div className="text-danger mt-1" style={{ fontSize: "0.9rem" }}>
                                    {dateError}
                                </div>
                            )}
                        </div>
                        <div className="col-12 col-md-auto">
                            <label className="form-label">Huésped:</label>
                            <input
                                type="text"
                                id="filtroHuesped"
                                className="form-control"
                                placeholder="Nombre"
                                value={filters.huesped}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12 col-md-2">
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
                        <div className="col-12 col-md-auto">
                            <button className="btn btn-secondary w-100" style={{ marginTop: "25px" }} onClick={handleResetFilters}>
                                Reestablecer
                            </button>
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
                        {loading ? (
                            <tr><td colSpan="6">Cargando...</td></tr>
                        ) : filtered.length === 0 ? (
                            <tr><td colSpan="6">No se encontraron resultados.</td></tr>
                        ) : (
                            currentItems.map((factura, index) => (
                                <tr key={index}>
                                    <td>{factura.huesped}</td>
                                    <td>{factura.numero}</td>
                                    <td>
                                        {factura.fecha ? (
                                            (() => {
                                                const utcDate = new Date(factura.fecha);
                                                const day = utcDate.getUTCDate().toString().padStart(2, '0');
                                                const month = (utcDate.getUTCMonth() + 1).toString().padStart(2, '0');
                                                const year = utcDate.getUTCFullYear();
                                                return `${day}-${month}-${year}`;
                                            })()
                                        ) : (
                                            '-'
                                        )}
                                    </td>
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
                                            aria-label="Ver factura"
                                            title="Ver factura"
                                            onClick={() => navigate(`/invoice/${factura.numero}`)}
                                        >
                                            <i className="bi bi-eye text-black"></i>
                                        </button>
                                        <button className="btn btn-sm" aria-label="Descargar factura" title="Descargar factura">
                                            <i className="bi bi-download text-black"></i>
                                        </button>
                                        <button className="btn btn-sm" aria-label="Imprimir factura" title="Imprimir factura">
                                            <i className="bi bi-printer text-black"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
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
