import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import HTTPClient from '../api/HTTPClient';
import NavBar from '../components/navbar';
import HuespedesActivos from '../components/HuespedesActivos.jsx';
import DetallesFactura from '../components/DetallesCuenta.jsx';
import Invoice from "../components/InvoiceComponentEli.jsx";
import NavBarSkeleton from '../skeleton/navbar.skeleton.jsx';
import HuespedesActivosSkeleton from '../skeleton/HuespedesActivos.skeleton.jsx';
import ErrorComponent from '../components/ErrorComponent.jsx';

import { HuespedesActivosContext, HuespedesActivosProvider } from '../context/HuespedesActivosContexto.jsx';

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

    const skeletonPage = () => (
        <>
            <NavBarSkeleton />
            <HuespedesActivosSkeleton />
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
                                            <HuespedesActivos ingresosOriginales={ingresosOriginales} />)
                                    }
                                </Container>
                            ) : vistaFactura ? (
                                <Container>
                                    <Invoice></Invoice>
                                </Container>
                            ) : (
                                <Container>
                                    <DetallesFactura />
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
