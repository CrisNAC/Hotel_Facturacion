import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import { Container } from 'react-bootstrap';

import HTTPClient from '../api/HTTPClient';
import NavBar from '../components/navbar';
import HuespedesActivos from '../components/HuespedesActivos.jsx';
import DetallesCuenta from '../components/DetallesCuenta.jsx';
import Invoice from "../components/InvoiceComponentEli.jsx";
import ErrorComponent from "../components/ErrorComponent.jsx";
import NavBarSkeleton from '../skeleton/navbar.skeleton.jsx';
import HuespedesActivosSkeleton from '../skeleton/HuespedesActivos.skeleton.jsx';

import { HuespedesActivosContext, HuespedesActivosProvider } from '../context/HuespedesActivosContexto.jsx';

function HuespedesActivosPage() {
    const client = new HTTPClient();
    const [ingresosOriginales, setIngresosOriginales] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);

    const fetchIngresos = async () => {
        try {
            setLoading(true);
            const response = await client.getIngresos();
            setIngresosOriginales(response.data);
        } catch (err) {
            // Si hay respuesta del servidor
            if (err.response) {
                setError(err.response.data?.error || err.message);
                setStatus(err.response.status);
                console.error('Error al obtener ingresos:', err.response.status, err.response.data);
            } else {
                // Errores de red u otros
                setError(err.message);
                setStatus(500);
                console.error('Error de red o sin respuesta:', err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchIngresos();
    }, []);

    const skeletonPage = () => (
        <>
            <NavBarSkeleton />
            <HuespedesActivosSkeleton></HuespedesActivosSkeleton>
        </>
    );

    const errorPage = () => (
        <>
            <ErrorComponent code={status} message={error}></ErrorComponent>
        </>
    );

    return (
        <>
            <HuespedesActivosProvider>
                <HuespedesActivosContext.Consumer>
                    {({ mainPage, vistaFactura }) => (
                        <>
                            {mainPage ? (
                                <Container>
                                    {loading ? skeletonPage() :
                                        error ? errorPage() : (
                                            <>
                                                <NavBar />
                                                <HuespedesActivos ingresosOriginales={ingresosOriginales} refresh={fetchIngresos} />
                                            </>
                                    )}
                                </Container>
                            ) : vistaFactura ? (
                                <Container>
                                    <NavBar />
                                    <Invoice></Invoice>
                                </Container>
                            ) : (
                                <Container>
                                    <NavBar />
                                    <DetallesCuenta refresh={fetchIngresos} />
                                </Container>
                            )}
                        </>
                    )}
                </HuespedesActivosContext.Consumer>
            </HuespedesActivosProvider>
        </>
    );
}

export default HuespedesActivosPage;
