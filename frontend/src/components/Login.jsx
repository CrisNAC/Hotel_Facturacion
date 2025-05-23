import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSlack } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
	nombre_usuario: '',
	contrasena: '',
}

const Login = () => {

	const [loginForm, setLoginForm] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState("");
	const navigate = useNavigate();

	const handleChange = (e) => {
		setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
	}

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			const response = await axios.post('/api/session', loginForm, { withCredentials: true });
			const data = response.data;
			console.log(data);

			if (response) {
				setErrors([]);

				navigate('/Inicio');
			}

		} catch (error) {
			if (error.response && error.response.data) {
				setErrors(error.response.data.error);
				console.log(errors);
			}
		} finally{
			setLoading(false);
		}
	}

	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<div className="card p-4 shadow" style={{ width: "350px" }}>

				{/* <i className="bi bi-person-circle" style={{ fontSize: "50px" }}></i> */}
				<div className="d-flex justify-content-center align-items-center text-black fw-bold fs-4 mb-3">
					<FaSlack size={32} className="me-2" /> JAZEL
				</div>

				<form onSubmit={handleLogin}>

					<div className="mb-3">
						<label htmlFor="nombre_usuario" name="nombre_usuario" className="form-label">Usuario:</label>
						<input
							type="text"
							id="nombre_usuario"
							name='nombre_usuario'
							className="form-control"
							value={loginForm.nombre_usuario}
							onChange={handleChange}
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="contrasena" name="contrasena" className="form-label">Contraseña:</label>
						<input
							type="password"
							id="contrasena"
							name='contrasena'
							className="form-control"
							value={loginForm.contrasena}
							onChange={handleChange}
						/>
					</div>

					<button type="submit" className="btn btn-dark w-100">
						{loading?"Verificando":"Iniciar sesión"}
					</button>

				</form>
				{errors && (
					<div className="alert alert-danger mt-3 text-center" role="alert">
						<i className="bi bi-exclamation-triangle-fill"></i> {errors}
					</div>
				)}
			</div>
		</div>
	);
}

export default Login;
