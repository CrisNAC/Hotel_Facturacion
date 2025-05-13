import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';
import HTTPClient from '../api/HTTPClient';

function ErrorComponent({
    code = 500,
    message = "Ha ocurrido un error en el servidor",
    showButton = true,
    buttonText = "Volver al inicio",
    redirectTo = "/"
}) {
    const client = new HTTPClient();
    const navigate = useNavigate();

    const accion = async () => {
        await client.cerrarSesion();
        navigate(redirectTo);
    };

    return (
        <Box
            sx={{
                height: '50vh',
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                px: 2,
                mt: 10,
                ml: '25%',
                border: '1px solid grey',
                borderRadius: 1
            }}
        >
            <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main', mb: 2 }} />
            <Typography variant="h2">{code}</Typography>
            <Typography variant="h5" sx={{ mb: 3 }}>{message}</Typography>
            {showButton && (
                <Button
                    variant="contained"
                    onClick={accion}
                    color="primary"
                >
                    {buttonText}
                </Button>
            )}
        </Box>
    );
}

export default ErrorComponent;