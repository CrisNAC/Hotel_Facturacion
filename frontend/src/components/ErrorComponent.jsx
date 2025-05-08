import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';

function ErrorComponent({ code = 404, message = "Página no encontrada" }) {
    const navigate = useNavigate();

    return (
        <Container sx={{ textAlign: 'center', marginTop: '10vh' }}>
            <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main' }} />
            <Typography variant="h2" sx={{ marginY: 2 }}>{code}</Typography>
            <Typography variant="h5" sx={{ marginBottom: 3 }}>{message}</Typography>
            <Button variant="contained" onClick={() => navigate('/')} color="primary">
                Volver al inicio
            </Button>
        </Container>
    );
}

export default ErrorComponent;
