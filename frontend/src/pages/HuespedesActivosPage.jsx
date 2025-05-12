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
    //const [status, setStatus] = useState(null);
    
    const fetchIngresos = async () => {
        try {
            setLoading(true);
            const response = await client.getIngresos();
            setIngresosOriginales(response.data);
        } catch (err) {
            setError(err.message);
            console.error('Error al obtener ingresos:', err);
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
            <ErrorComponent message={error}></ErrorComponent>
        </>
    );

    return (
        <>
            <HuespedesActivosProvider>
                <HuespedesActivosContext.Consumer>
                    {({ mainPage, vistaFactura }) => (
                        <>
                            <NavBar />
                            {mainPage ? (
                                <Container>
                                    {loading ? skeletonPage() :
                                        error ? errorPage() : (
                                            <HuespedesActivos ingresosOriginales={ingresosOriginales} refresh={fetchIngresos}/>)
                                    }
                                </Container>
                            ) : vistaFactura ? (
                                <Container>
                                    <Invoice></Invoice>
                                </Container>
                            ) : (
                                <Container>
                                    <DetallesCuenta refresh={fetchIngresos}/>
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
