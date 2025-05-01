import React, { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import HTTPClient from '../api/HTTPClient';
import NavBar from '../components/navbar';
import HuespedesActivos from '../components/HuespedesActivos.jsx';
import NavBarSkeleton from '../skeleton/narbar.skeleton.jsx';

function HuespedesActivosPage() {
    const client = new HTTPClient();
    const [ingresosOriginales, setIngresosOriginales] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //const navigate = useNavigate();

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

    const skeletonPage = () => {
        return (
            <>
                <NavBarSkeleton></NavBarSkeleton>
                <div className="text-center py-5">Cargando...</div>
            </>
        );
    };

    const errorPage = () => {
        return (<div className="text-center py-5 text-danger">Error: {error}</div>);
    };

    if (loading) skeletonPage();
    if (error) errorPage();

    return (
        <>
            <NavBar />
            <div className="p-6 max-w-7xl mx-auto">
                <HuespedesActivos ingresosOriginales={ingresosOriginales} />
            </div>
        </>
    );
}

export default HuespedesActivosPage;
