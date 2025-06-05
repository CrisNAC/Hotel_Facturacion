import React from 'react';
import { Skeleton, Box, Grid, Button } from '@mui/material';

export default function DetallesCuentaSkeleton() {
    return (
        <div className="container mt-5">
            {/* Título */}
            <Skeleton variant="text" height={40} width="30%" sx={{ mx: 'auto' }} />

            {/* Datos del huésped */}
            <Box className="card p-3 mb-4" sx={{ backgroundColor: '#f8f9fa' }}>
                <Skeleton variant="text" width={200} height={30} sx={{ mb: 2 }} />
                <Grid container spacing={2}>
                    {[...Array(4)].map((_, i) => (
                        <Grid item xs={12} md={6} lg={3} key={i}>
                            <Skeleton variant="text" width="60%" height={20} />
                            <Skeleton variant="text" width="90%" height={28} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Tabla habitación */}
            <Skeleton variant="text" width="30%" height={30} sx={{ mb: 1 }} />
            <Skeleton variant="rectangular" height={50} sx={{ mb: 1 }} />
            <Skeleton variant="rectangular" height={50} />

            {/* Cargos Extras */}
            <Skeleton variant="text" width="40%" height={30} sx={{ mt: 4, mb: 1 }} />
            <Skeleton variant="rectangular" height={50} sx={{ mb: 1 }} />
            {[...Array(2)].map((_, i) => (
                <Skeleton key={i} variant="rectangular" height={50} sx={{ mb: 1 }} />
            ))}

            {/* Total */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Skeleton variant="text" width={200} height={30} />
            </Box>

            {/* Botones finales */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 4 }}>
                <Skeleton variant="rectangular" width={150} height={40} />
                <Skeleton variant="rectangular" width={150} height={40} />
            </Box>
        </div>
    );
}
