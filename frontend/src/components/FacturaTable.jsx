import React from "react";
import ReactPaginate from "react-paginate";
import "../styles/FacturaTable.css";
import Skeleton from "@mui/material/Skeleton";
import Alert from "@mui/material/Alert";

const FacturaTable = ({
    filters,
    setFilters,
    handleResetFilters,
    filtered,
    loading,
    pageCount,
    currentPage,
    setCurrentPage,
    dateError,
    setDateError,
    navigate
}) => {
    const handleChange = (e) => {
        const { id, value } = e.target;
        const campo = id.replace("filtro", "").toLowerCase();

        const nuevosFiltros = {
            ...filters,
            [campo]: value,
        };

        const desde = nuevosFiltros.desde ? new Date(nuevosFiltros.desde) : null;
        const hasta = nuevosFiltros.hasta ? new Date(nuevosFiltros.hasta) : null;

        setFilters(nuevosFiltros);

        if (desde && hasta && desde > hasta) {
            setFechaInvalida(true);
            setDateError("La fecha 'Desde' no puede ser mayor que la fecha 'Hasta'.");
        } else {
            setFechaInvalida(false);
            setDateError("");
        }
    };

    const [fechaInvalida, setFechaInvalida] = React.useState(false);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <div className="factura-wrapper container-fluid px-4 mt-4">
            {fechaInvalida && (
                <div
                    style={{
                        position: "fixed",
                        top: "80px",
                        right: "20px",
                        zIndex: 9999,
                        width: "300px"
                    }}
                >
                    <Alert severity="warning" onClose={() => setFechaInvalida(false)}>
                        {dateError}
                    </Alert>
                </div>
            )}
            <h2 className="text-center" style={{ paddingBottom: "20px" }}>Facturas emitidas</h2>
            {/* Filtros */}
            <div className="bg-light p-3 rounded mb-3">
                <div className="row align-items-center filter-row" style={{ paddingLeft: "32px" }}>
                    <div className="col-12 col-md-auto">
                        <label className="form-label">Desde:</label>
                        <div className="position-relative d-flex align-items-center calendar-wrapper">
                            <input
                                type="date"
                                id="filtroDesde"
                                className="form-control"
                                value={filters?.desde || ""}
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
                                value={filters?.hasta || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-auto">
                        <label className="form-label">Huésped:</label>
                        <input
                            type="text"
                            id="filtroHuesped"
                            className="form-control"
                            placeholder="Nombre"
                            value={filters?.huesped || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 col-md-2">
                        <label className="form-label">Condición Venta:</label>
                        <select
                            id="filtroCondicion"
                            className="form-select"
                            value={filters?.condicion || "Todos"}
                            onChange={handleChange}
                            style={{ cursor: "pointer" }}
                        >
                            <option>Todos</option>
                            <option>Contado</option>
                            <option>Crédito</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-auto">
                        <button
                            className="btn btn-secondary w-100"
                            onClick={handleResetFilters}
                            style={{ marginTop: "25px" }}
                        >
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
                        <th style={{ backgroundColor: "#E6E6E6", color: "2E2E2E" }}>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        [...Array(5)].map((_, i) => (
                            <tr key={i}>
                                <td className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <Skeleton variant="text" animation="wave" width="80%" height="32px" />
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <Skeleton variant="text" animation="wave" width="60%" height="32px" />
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <Skeleton variant="text" animation="wave" width="70%" height="32px" />
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <Skeleton variant="text" animation="wave" width="50%" height="32px" />
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <Skeleton variant="text" animation="wave" width="60%" height="32px" />
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <Skeleton variant="circular" animation="wave" width="25px" height="25px" sx={{ marginTop: "3.5px" }} />
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : !filtered || filtered.length === 0 ? (
                        <tr><td colSpan="6">No se encontraron resultados.</td></tr>
                    ) : (
                        filtered.map((factura, index) => (
                            <tr key={index}>
                                <td>{`${factura.cuenta?.ingreso?.huesped?.nombre || ""} ${factura.cuenta?.ingreso?.huesped?.apellido || ""}`}</td>
                                <td>{factura.numero_factura}</td>
                                <td>
                                    {(() => {
                                        const d = new Date(factura.fecha_emision);
                                        return `${d.getUTCDate().toString().padStart(2, "0")}-${(d.getUTCMonth() + 1).toString().padStart(2, "0")}-${d.getUTCFullYear()}`;
                                    })()}
                                </td>
                                <td>
                                    {new Intl.NumberFormat("es-PY", {
                                        style: "currency",
                                        currency: "PYG",
                                    }).format(factura.total)}
                                </td>
                                <td>{factura.condicion_venta}</td>
                                <td>
                                    <button className="btn btn-sm color-accion" title="Ver factura" fontSize="100px" onClick={() => navigate(`/Invoice/${factura.id_factura}`)}>
                                        <i className="bi bi-eye text-black"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {pageCount > 0 && (
                <div className="d-flex justify-content-center mt-3">
                    <ReactPaginate
                        previousLabel={"Anterior"}
                        nextLabel={"Siguiente"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        activeClassName={"mi-clase-activa"}
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
    );
};

export default FacturaTable;
