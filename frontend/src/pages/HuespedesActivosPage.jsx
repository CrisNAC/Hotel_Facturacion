import React, { useEffect, useState } from 'react';
import HTTPClient from '../api/HTTPClient';
import NavBar from '../components/navbar';
import HuespedesActivos from '../components/HuespedesActivos.jsx';
import NavBarSkeleton from '../skeleton/narbar.skeleton.jsx';
import { Skeleton } from '@mui/material';
import { Container } from 'react-bootstrap';

function HuespedesActivosPage() {
    const client = new HTTPClient();
    const [ingresosOriginales, setIngresosOriginales] = useState([]);
    const [mainPage, setMainPage] = useState(true);
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
            <Container>
                <div className='d-flex justify-content-center' style={{ marginTop: "50px" }}><Skeleton variant='text' animation='wave' width={180} height={60}></Skeleton></div>
                <div className='d-flex justify-content-center mb-3'><Skeleton variant='rectangular' animation='wave' width={1200} height={100}></Skeleton></div>
                <div className='d-flex justify-content-center'><Skeleton variant='rectangular' animation='wave' width={1200} height={350}></Skeleton></div>
                <div className='d-flex justify-content-center mt-2'>
                    <div className='d-flex'>
                        <Skeleton variant='rectangular' animation='wave' width={100} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                        <Skeleton variant='rectangular' animation='wave' width={30} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                        <Skeleton variant='rectangular' animation='wave' width={30} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                        <Skeleton variant='rectangular' animation='wave' width={30} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                        <Skeleton variant='rectangular' animation='wave' width={100} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                    </div>
                </div>
            </Container>
        </>
    );

    const errorPage = () => (
        <div className="text-center py-5 text-danger">Error: {error}</div>
    );

    if (loading) return skeletonPage();
    if (error) return errorPage();

    return (
        <>
            {
                loading ? skeletonPage() :
                    error ? errorPage() :
                        (
                            <>
                                <NavBar />
                                {mainPage ?
                                    <Container>
                                        <HuespedesActivos ingresosOriginales={ingresosOriginales} />
                                    </Container>
                                    :
                                    <h1>Pantalla de consumos</h1>
                                }
                            </>
                        )
            }
        </>
    );
}

export default HuespedesActivosPage;
