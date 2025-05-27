import "bootstrap/dist/css/bootstrap.min.css";

import HTTPClient from "../api/HTTPClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaSlack } from "react-icons/fa";

const Login = () => {
	const client = new HTTPClient();
	const [loginForm, setLoginForm] = useState({
		nombre_usuario: '',
		contrasena: '',
	});
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState(null);
	const [mostrarPassword, setMostrarPassword] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
	}

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			const response = await client.login(loginForm);
			const data = response.data;
			console.log(data);

			if (response) {
				setErrors(null);
				navigate('/Inicio');
			}
		} catch (error) {
			if (error.response && error.response.data) {
				setErrors(error.response.data.error);
				console.log(errors);
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<div className="card p-4 shadow" style={{ width: "350px" }}>
				{/* Titulo */}
				<div className="d-flex justify-content-center align-items-center text-black fw-bold fs-4 mb-3">
					<FaSlack size={32} className="me-2" /> JAZEL
				</div>
				{/* Formulario */}
				<form onSubmit={handleLogin}>
					{/* Usuario */}
					<div className="mb-3">
						<label htmlFor="nombre_usuario" className="form-label">Usuario:</label>
						<input
							type="text"
							id="nombre_usuario"
							name='nombre_usuario'
							className="form-control"
							value={loginForm.nombre_usuario}
							onChange={handleChange}
						/>
					</div>
					{/* Contraseña */}
					<div className="mb-3">
						<label htmlFor="contrasena" className="form-label">Contraseña:</label>
						<div className="input-group">
							<input
								type={mostrarPassword ? "text" : "password"}
								id="contrasena"
								name="contrasena"
								className="form-control"
								value={loginForm.contrasena}
								onChange={handleChange}
							/>
							<span className="input-group-text" style={{ cursor: "pointer" }} onClick={() => setMostrarPassword(!mostrarPassword)}>
								{mostrarPassword ? <FaEyeSlash /> : <FaEye />}
							</span>
						</div>
					</div>
					{/* Boton */}
					<button type="submit" className="btn btn-dark w-100" disabled={(loading || loginForm.nombre_usuario === '' || loginForm.contrasena === '') ? true : false}>
						{(loginForm.nombre_usuario === '' || loginForm.contrasena === '') ?
							"Complete los campos" : loading ? "Verificando" : "Iniciar sesión"}
					</button>
				</form>
				{/* Errores */}
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
