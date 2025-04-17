import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net";
import { FaEye } from "react-icons/fa";
import { IoMdDownload, IoMdPrint } from "react-icons/io";

const FacturaTable = () => {

    const navigate = useNavigate();

    const facturas = [
        { huesped: "Juan Pérez", numero: "001-001-0002525", fecha: "01/03/2025", monto: 150000, condicion: "Contado" },
        { huesped: "María López", numero: "001-001-0002526", fecha: "02/03/2025", monto: 645000, condicion: "Crédito" },
        { huesped: "Carlos Gómez", numero: "001-001-0002527", fecha: "03/03/2025", monto: 300000, condicion: "Contado" },
        { huesped: "Ana Torres", numero: "001-001-0002528", fecha: "04/03/2025", monto: 250000, condicion: "Crédito" },
        { huesped: "Laura Martínez", numero: "001-001-0002529", fecha: "05/03/2025", monto: 400000, condicion: "Contado" },
        { huesped: "Luis Fernández", numero: "001-001-0002530", fecha: "06/03/2025", monto: 180000, condicion: "Crédito" },
        { huesped: "Sofía Rodríguez", numero: "001-001-0002531", fecha: "07/03/2025", monto: 220000, condicion: "Contado" },
        { huesped: "Pedro Sánchez", numero: "001-001-0002532", fecha: "08/03/2025", monto: 350000, condicion: "Crédito" },
        { huesped: "Elena Castillo", numero: "001-001-0002533", fecha: "09/03/2025", monto: 500000, condicion: "Contado" },
        { huesped: "Miguel Ángel", numero: "001-001-0002534", fecha: "10/03/2025", monto: 600000, condicion: "Crédito" },
        { huesped: "Sergio Morales", numero: "001-001-0002535", fecha: "11/03/2025", monto: 450000, condicion: "Contado" },
        { huesped: "Patricia Díaz", numero: "001-001-0002536", fecha: "12/03/2025", monto: 380000, condicion: "Crédito" },
        { huesped: "Andrés Castillo", numero: "001-001-0002537", fecha: "13/03/2025", monto: 200000, condicion: "Contado" },
        { huesped: "Gabriela Herrera", numero: "001-001-0002538", fecha: "14/03/2025", monto: 550000, condicion: "Crédito" },
        { huesped: "Miguel Díaz", numero: "001-001-0002539", fecha: "15/03/2025", monto: 245000, condicion: "Contado" },
    ];

    const tableRef = useRef(null);

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
        const waitForFiltersAndInitialize = () => {
            const filtroDesde = document.getElementById("filtroDesde");
            const filtroHasta = document.getElementById("filtroHasta");
            const filtroHuesped = document.getElementById("filtroHuesped");
            const filtroCondicion = document.getElementById("filtroCondicion");

            if (filtroDesde && filtroHasta && filtroHuesped && filtroCondicion) {
                const filtroPersonalizado = function (settings, data) {
                    const desde = document.getElementById("filtroDesde")?.value;
                    const hasta = document.getElementById("filtroHasta")?.value;
                    const huespedSinAcento = normalizarTexto(document.getElementById("filtroHuesped")?.value || "");
                    const condicion = document.getElementById("filtroCondicion")?.value;

                    const fechaStr = convertirFecha(data[2]);
                    const nombreSinAcento = normalizarTexto(data[0] || ""); // Normaliza el nombre del huésped de los datos
                    const tipoCondicion = data[4];

                    console.log("Filtering row:", data);
                    console.log("  Desde:", desde, " FechaStr:", fechaStr);
                    console.log("  Hasta:", hasta, " FechaStr:", fechaStr);
                    console.log("  Huésped (sin acento):", huespedSinAcento, " Nombre (sin acento):", nombreSinAcento);
                    console.log("  Condición:", condicion, " TipoCondicion:", tipoCondicion);

                    let isVisible = true;
                    if (desde && fechaStr < desde) isVisible = false;
                    if (hasta && fechaStr > hasta) isVisible = false;
                    if (huespedSinAcento && !nombreSinAcento.includes(huespedSinAcento)) isVisible = false;
                    if (condicion !== "Todos" && tipoCondicion !== condicion) isVisible = false;

                    console.log("  isVisible:", isVisible);
                    return isVisible;
                };

                if ($.fn.DataTable.isDataTable(tableRef.current)) {
                    $(tableRef.current).DataTable().destroy();
                }

                const existingIndex = $.fn.dataTable.ext.search.indexOf(filtroPersonalizado);
                if (existingIndex === -1) {
                    $.fn.dataTable.ext.search.push(filtroPersonalizado);
                }

                const table = $(tableRef.current).DataTable({
                    paging: true,
                    info: false,
                    //searching: false,
                    lengthChange: false,
                    ordering: false,
                    language: {
                        paginate: {
                            first: "Primero",
                            last: "Último",
                            next: "Siguiente",
                            previous: "Anterior",
                        },
                        zeroRecords: "No se encontraron resultados",
                        infoEmpty: "No hay registros disponibles",
                    },
                });

                const ids = ["filtroDesde", "filtroHasta", "filtroHuesped", "filtroCondicion"];
                ids.forEach(id => {
                    const el = document.getElementById(id);
                    if (el) {
                        console.log(`Attaching event listeners to element with ID: ${id}`);
                        el.addEventListener("input", () => {
                            console.log(`Input event triggered on ${id}`);
                            table.draw(); // Asegúrate de usar la variable 'table' aquí
                        });
                        el.addEventListener("change", () => {
                            console.log(`Change event triggered on ${id}`);
                            table.draw(); // Asegúrate de usar la variable 'table' aquí
                        });
                    } else {
                        console.log(`Element with ID: ${id} not found when attaching listeners.`);
                    }
                });

                console.log("DataTable instance:", table);
                console.log("Current $.fn.dataTable.ext.search:", $.fn.dataTable.ext.search);

                return () => {
                    if ($.fn.DataTable.isDataTable(tableRef.current)) {
                        $(tableRef.current).DataTable().destroy();
                    }
                    const index = $.fn.dataTable.ext.search.indexOf(filtroPersonalizado);
                    if (index > -1) {
                        $.fn.dataTable.ext.search.splice(index, 1);
                    }
                };
            } else {
                setTimeout(waitForFiltersAndInitialize, 100);
            }
        };

        waitForFiltersAndInitialize();

    }, []);

    return (
        <div className="container mt-4">
            <table id="tablaFacturas" ref={tableRef} className="table text-center">
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "#003366", color: "white" }}>Huésped</th>
                        <th style={{ backgroundColor: "#003366", color: "white" }}>Número de factura</th>
                        <th style={{ backgroundColor: "#003366", color: "white" }}>Fecha de emisión</th>
                        <th style={{ backgroundColor: "#003366", color: "white" }}>Monto total</th>
                        <th style={{ backgroundColor: "#003366", color: "white" }}>Condición venta</th>
                        <th style={{ backgroundColor: "#003366", color: "white" }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {facturas.map((factura, index) => (
                        <tr key={index}>
                            <td>{factura.huesped}</td>
                            <td>{factura.numero}</td>
                            <td>{factura.fecha}</td>
                            <td>{new Intl.NumberFormat('es-PY', { style: 'currency', currency: 'PYG' }).format(factura.monto)}</td>
                            <td>{factura.condicion}</td>
                            <td>
                                <button
                                    className='btn rounded-circle mx-1'
                                    style={{ backgroundColor: "#003366", color: "white" }}
                                    onClick={() => navigate(`/invoice/${factura.numero}`)}>
                                    <FaEye />
                                </button>
                                <button className='btn rounded-circle mx-1'
                                    style={{ backgroundColor: "#003366", color: "white" }}>
                                    <IoMdDownload />
                                </button>
                                <button className='btn rounded-circle mx-1'
                                    style={{ backgroundColor: "#003366", color: "white" }}>
                                    <IoMdPrint />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FacturaTable;
