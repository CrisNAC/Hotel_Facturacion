import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HTTPClient from '../api/HTTPClient';
import NavBar from '../components/navbar';
import HuespedesActivos from '../components/HuespedesActivos.jsx';

function HuespedesActivosPage() {
    const client = new HTTPClient();
    const [ingresosOriginales, setIngresosOriginales] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchIngresos = async () => {
            try {
                const response = await client.getIngresos();
                setIngresosOriginales(response.data);
            } catch (err) {
                setError(err.message);
                console.error('Error al obtener ingresos:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchIngresos();
    }, []);

    if (loading) return <div className="text-center py-5">Cargando...</div>;
    if (error) return <div className="text-center py-5 text-danger">Error: {error}</div>;

    return (
        <>
            <NavBar />
            <div className="p-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-3" style={{ color: "#1C2324", padding: 10 }}>Huéspedes Activos</h2>
                <HuespedesActivos ingresosOriginales={ingresosOriginales} />
            </div>
        </>
    );
}

export default HuespedesActivosPage;
