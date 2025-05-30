import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HTTPClient from "../api/HTTPClient";
import FacturaTable from "../components/FacturaTable";

const httpClient = new HTTPClient();

const FacturaPage = () => {
    const navigate = useNavigate();
    const itemsPerPage = 15;

    const [facturas, setFacturas] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [dateError, setDateError] = useState("");

    const initialFilters = {
        desde: "",
        hasta: "",
        huesped: "",
        condicion: "Todos",
    };

    const [filters, setFilters] = useState(initialFilters);

    const fetchFacturas = async () => {
        try {
            const { data } = await httpClient.getFacturas();
            setFacturas(data);
        } catch (err) {
            console.error("Error al obtener facturas:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFacturas();
    }, []);

    // Normalizar texto sin acentos y en minúsculas
    const normalizarTexto = (texto) => {
        return texto?.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() || "";
    };

    useEffect(() => {
        const { desde, hasta, huesped, condicion } = filters;
        const huespedNormalizado = normalizarTexto(huesped);

        const nuevasFacturas = facturas.filter((f) => {
            if (!f.fecha_emision) return false;
            const fechaEmision = new Date(f.fecha_emision);
            const filtroDesde = desde ? new Date(desde) : null;
            const filtroHasta = hasta ? new Date(hasta) : null;
            const nombreCompleto = normalizarTexto(`${f.cuenta?.ingreso?.huesped?.nombre || ""} ${f.cuenta?.ingreso?.huesped?.apellido || ""}`);

            return (
                (!filtroDesde || fechaEmision >= filtroDesde) &&
                (!filtroHasta || fechaEmision <= filtroHasta) &&
                (!huesped || nombreCompleto.includes(huespedNormalizado)) &&
                (condicion === "Todos" || f.condicion_venta === condicion)
            );
        });

        setFiltered(nuevasFacturas);
        setCurrentPage(0);
    }, [filters, facturas]);

    const handleResetFilters = () => {
        setFilters(initialFilters);
        setDateError("");
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = filtered.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(filtered.length / itemsPerPage);

    return (
        <>
            <FacturaTable
                filters={filters}
                setFilters={setFilters}
                handleResetFilters={handleResetFilters}
                filtered={currentItems}
                loading={loading}
                pageCount={pageCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                dateError={dateError}
                setDateError={setDateError}
                totalItems={filtered.length}
                navigate={navigate}
            />
        </>
    );
};

export default FacturaPage;
