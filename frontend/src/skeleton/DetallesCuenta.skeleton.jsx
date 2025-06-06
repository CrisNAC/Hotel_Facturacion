import React from 'react';
import { Skeleton, Box, Grid, Button } from '@mui/material';

export default function DetallesCuentaSkeleton() {
    const styles = { backgroundColor: "#E6E6E6", color: "#2E2E2E" };
    return (
        <div className="container mt-5">
            {/* Título */}
            <h2 className="d-block mt-n3 text-center">Detalles Cuenta</h2>

            {/* Datos del huésped */}
            <Box className="card p-3 mb-4" sx={{ backgroundColor: '#f8f9fa' }}>
                <Skeleton variant="text" width={200} height={30} sx={{ mb: 2 }} />
                <div className="d-flex flex-wrap gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex-fill" style={{ minWidth: "160px" }}>
                            <Skeleton variant="text" width="60%" height={20} />
                            <Skeleton variant="text" width="90%" height={28} />
                        </div>
                    ))}
                </div>
            </Box>

            {/* Tabla habitación */}
            <h4 className="text-start">Detalles Habitación</h4>
            <table className="table table-bordered">
                <thead>
                    <tr className="text-center">
                        <th className="text-start" style={styles}>Descripción</th>
                        <th style={styles}>Cant. Noches</th>
                        <th style={styles}>Nro. Habitación</th>
                        <th style={styles}>Adicionales</th>
                        <th style={styles}>Precio</th>
                        <th style={styles}>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(1)].map((_, i) => (
                        <tr key={i}>
                            <td>
                                <div className="d-flex justify-content-start">
                                    <Skeleton variant="text" animation="wave" width="40%" height="32px" />
                                </div>
                            </td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <Skeleton variant="text" animation="wave" width="50%" height="32px" />
                                </div>
                            </td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <Skeleton variant="text" animation="wave" width="50%" height="32px" />
                                </div>
                            </td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <Skeleton variant="text" animation="wave" width="50%" height="32px" />
                                </div>
                            </td>
                            <td>
                                <div className="d-flex justify-content-end">
                                    <Skeleton variant="text" animation="wave" width="50%" height="32px" />
                                </div>
                            </td>
                            <td>
                                <div className="d-flex justify-content-end">
                                    <Skeleton variant="text" animation="wave" width="60%" height="32px" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Cargos Extras */}
            <h4 className="text-start mt-4">
                Consumos y Cargos Extras
                <button
                    className="btn btn-sm ms-3"
                    style={{ backgroundColor: '#83A3A8', color: "white" }}
                >
                    + Agregar
                </button>
            </h4>
            <table className="table table-bordered">
                <thead>
                    <tr className="text-center">
                        <th className="text-start" style={styles}>Descripción</th>
                        <th style={styles}>Cantidad</th>
                        <th style={styles}>Precio</th>
                        <th style={styles}>Precio Total</th>
                        <th style={styles}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(3)].map((_, i) => (
                        <tr key={i}>
                            <td>
                                <div className="d-flex justify-content-start">
                                    <Skeleton variant="text" animation="wave" width="40%" height="32px" />
                                </div>
                            </td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <Skeleton variant="text" animation="wave" width="50%" height="32px" />
                                </div>
                            </td>
                            <td>
                                <div className="d-flex justify-content-end">
                                    <Skeleton variant="text" animation="wave" width="50%" height="32px" />
                                </div>
                            </td>
                            <td>
                                <div className="d-flex justify-content-end">
                                    <Skeleton variant="text" animation="wave" width="60%" height="32px" />
                                </div>
                            </td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <Skeleton className="mx-1" variant="circular" animation="wave" width="25px" height="25px" sx={{ marginTop: "3.5px" }} />
                                    <Skeleton className="mx-1" variant="circular" animation="wave" width="25px" height="25px" sx={{ marginTop: "3.5px" }} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Total */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Skeleton variant="text" width={200} height={30} />
            </div>

            {/* Botones finales */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 4, marginBottom: 4 }}>
                <Skeleton variant="text" width={150} height={40} />
                <Skeleton variant="text" width={150} height={40} />
            </div>
        </div>
    );
}
