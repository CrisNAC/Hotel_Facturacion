import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import NavBar from "./navbar";

const DatosHuesped = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		nombre: '',
		apellido: '',
		documento_identidad: 'DNI',
		numero_documento: '',
		correo: '',
		telefono: '',
		ruc: '',
		nacionalidad: 'PARAGUAY',
		fecha_nacimiento: ''
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.post('http://localhost:4000/api/huesped', {
				nombre: formData.nombre,
				apellido: formData.apellido,
				documento_identidad: formData.documento_identidad,
				numero_documento: formData.numero_documento,
				ruc: formData.ruc,
				nacionalidad: formData.nacionalidad,
				telefono: formData.telefono,
				email: formData.correo,
				fecha_nacimiento: formData.fecha_nacimiento
			});

			navigate('/ConfirmarReserva');
		} catch (error) {
			console.error("Error en respuesta:", error.response.data);
			alert(error.response.data.error);
		}
	};

	return (
		<div className="container py-4">
			<NavBar />
			<div className="row justify-content-center">
				<div className="col-lg-10">
					<div className="card shadow p-4">
						<div className="card-body">
							<h3 className="text-center fw-bold mb-4">Datos del Huésped</h3>

							<form className="px-2" onSubmit={handleSubmit}>
								<div className="row g-4">

									{/* Nombre */}
									<div className="col-md-6">
										<label htmlFor="nombre" className="form-label mb-1 text-start d-block">Nombre</label>
										<input
											type="text"
											className="form-control"
											id="nombre"
											placeholder="Inserte su nombre..."
											value={formData.nombre}
											onChange={handleChange}
											style={{ maxWidth: "100%", width: "400px" }}
										/>
									</div>

									{/* Apellido */}
									<div className="col-md-6">
										<label htmlFor="apellido" className="form-label mb-1 text-start d-block">Apellido</label>
										<input
											type="text"
											className="form-control"
											id="apellido"
											placeholder="Inserte su apellido..."
											value={formData.apellido}
											onChange={handleChange}
											style={{ maxWidth: "100%", width: "400px" }}
										/>
									</div>

									{/* Nacionalidad */}
									<div className="col-md-6">
										<label htmlFor="nacionalidad" className="form-label mb-1 text-start d-block">Nacionalidad</label>
										<select
											id="nacionalidad"
											className="form-select"
											value={formData.nacionalidad}
											onChange={handleChange}
											style={{ maxWidth: "100%", width: "400px" }}
										>
											<option value="PARAGUAY">Paraguaya</option>
											<option value="BRASIL">Brasilera</option>
											<option value="ARGENTINA">Argentina</option>
										</select>
									</div>

									{/* Tipo de documento de identidad*/}
									<div className="col-md-6">
										<label htmlFor="documento_identidad" className="form-label mb-1 text-start d-block">Tipo de Documento</label>
										<select
											id="documento_identidad"
											className="form-select"
											value={formData.documento_identidad}
											onChange={handleChange}
											style={{ maxWidth: "100%", width: "400px" }}
										>
											<option value="DNI">DNI</option>
											<option value="PASAPORTE">Pasaporte</option>
											<option value="LICENCIA">Licencia</option>
										</select>
									</div>

									{/* Número de Documento */}
									<div className="col-md-6">
										<label htmlFor="numero_documento" className="form-label mb-1 text-start d-block">Número de Documento</label>
										<input
											type="text"
											className="form-control"
											id="numero_documento"
											placeholder="Inserte su documento..."
											value={formData.numero_documento}
											onChange={handleChange}
											style={{ maxWidth: "100%", width: "400px" }}
										/>
									</div>

									{/* RUC */}
									<div className="col-md-6">
										<label htmlFor="ruc" className="form-label mb-1 text-start d-block">RUC</label>
										<input
											type="text"
											className="form-control"
											id="ruc"
											placeholder="Inserte su RUC..."
											value={formData.ruc}
											onChange={handleChange}
											style={{ maxWidth: "100%", width: "400px" }}
										/>
									</div>

									{/* Correo */}
									<div className="col-md-6">
										<label htmlFor="correo" className="form-label mb-1 text-start d-block">Correo</label>
										<input
											type="email"
											className="form-control"
											id="correo"
											placeholder="Inserte su correo..."
											value={formData.correo}
											onChange={handleChange}
											style={{ maxWidth: "100%", width: "400px" }}
										/>
									</div>

									{/* Teléfono */}
									<div className="col-md-6">
										<label htmlFor="telefono" className="form-label mb-1 text-start d-block">Teléfono</label>
										<input
											type="tel"
											className="form-control"
											id="telefono"
											placeholder="Inserte nº de contacto..."
											value={formData.telefono}
											onChange={handleChange}
											style={{ maxWidth: "100%", width: "400px" }}
										/>
									</div>

									{/* Fecha de Nacimiento */}
									<div className="col-md-6">
										<label htmlFor="fecha_nacimiento" className="form-label mb-1 text-start d-block">Fecha de Nacimiento</label>
										<input
											type="date"
											className="form-control"
											id="fecha_nacimiento"
											value={formData.fecha_nacimiento}
											onChange={handleChange}
											style={{ maxWidth: "100%", width: "400px" }}
										/>
									</div>

								</div>

								<div className="text-center mt-4">
									<button type="submit" className="btn btn-primary px-4">
										Agregar
									</button>
								</div>

							</form>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DatosHuesped;
