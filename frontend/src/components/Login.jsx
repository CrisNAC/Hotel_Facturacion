import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const adminUser = "admin";
        const adminPass = "12345";

        if (username === adminUser && password === adminPass) {
            navigate("/home"); // Redirigir a la pantalla de inicio
        }
        else {
            setError("Error al iniciar sesión. Verifica tus credenciales.");
            // Se limpian los campos de entrada
            setUserName("");
            setPassword("");
        }
    };
    
    return (
        <div className="login-wrapper">
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow" style={{ width: "350px" }}>
                    <div className="text-center mb-3">
                        <i className="bi bi-person-circle" style={{ fontSize: "50px" }}></i>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label">Usuario:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => {
                                    setUserName(e.target.value);
                                    if (error) setError(null); // Limpia el error al escribir
                                }}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => { 
                                    setPassword(e.target.value);
                                    if (error) setError(null); // Limpia el error al escribir
                                }}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-dark w-100">
                            Iniciar sesión
                        </button>
                    </form>
                    {error && (
                        <div className="alert alert-danger mt-3 text-center" role="alert">
                            <i className="bi bi-exclamation-triangle-fill"></i> {error}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
