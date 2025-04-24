import React from "react";
import NavBar from "./navbar";
const FacturaFilters = () => {
    return (
        <div className="container my-4">
            <NavBar />
            <h2 className="text-center">Facturas emitidas</h2>
            <div className="bg-light p-3 rounded">
                <div className="row">
                    <div className="col-md-3">
                        <label className="form-label">Desde:</label>
                        <input id="filtroDesde" type="date" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Hasta:</label>
                        <input id="filtroHasta" type="date" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Huésped:</label>
                        <input id="filtroHuesped" type="text" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Condición Venta:</label>
                        <select id="filtroCondicion" className="form-select">
                            <option>Todos</option>
                            <option>Contado</option>
                            <option>Crédito</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacturaFilters;
