import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate, useLocation } from 'react-router-dom';
import HTTPClient from '../api/HTTPClient';

function ErrorComponent() {
    const client = new HTTPClient();
    const navigate = useNavigate();
    const location = useLocation();
    const {
        code,
        message,
        showButton,
        buttonText,
        redirectToDashboard,
        redirectToLogin
    } = location.state || {
        code: 500,
        message: "Ha ocurrido un error en el servidor",
        showButton: true,
        buttonText: "Volver al inicio",
        redirectToDashboard: "/Inicio",
        redirectToLogin: "/"
    }

    const accionLogin = async () => {
        await client.cerrarSesion();
        navigate(redirectToLogin);
    };

    const accionDash = () => {
        navigate(redirectToDashboard);
    };

    return (
        <Box
            sx={{
                height: "50vh",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                px: 2,
                mt: 10,
                ml: "25%",
                border: "1px solid grey",
                borderRadius: 1,
            }}
        >
            <ErrorOutlineIcon sx={{ fontSize: 80, color: "error.main", mb: 2 }} />
            <Typography variant="h2">{code}</Typography>
            <Typography
                variant="h5"
                sx={{ mb: 3 }}
            >
                {message}
            </Typography>
            {code === 401 ? (
                showButton && (
                    <Button
                        variant="contained"
                        onClick={accionLogin}
                        color="primary"
                    >
                        {buttonText}
                    </Button>
                )
            ) : (
                showButton && (
                    <Button
                        variant="contained"
                        onClick={accionDash}
                        color="primary"
                    >
                        {buttonText}
                    </Button>
                )
            )}
        </Box>
    );
}

export default ErrorComponent;