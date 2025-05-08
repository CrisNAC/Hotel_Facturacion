import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/navbar";

const AgregarHuesped = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const huespedEditar = location.state?.huespedEditar || null;
	const indexEditar = location.state?.indexEditar;
	// Obtener huéspedes previos si existen
	const huespedesPrevios = location.state?.huespedes || [];

	useEffect(() => {
		if (huespedEditar) {
			setFormData({
				nombre: huespedEditar.nombre || "",
				apellido: huespedEditar.apellido || "",
				documento_identidad: huespedEditar.documento_identidad || "DNI",
				numero_documento: huespedEditar.numero_documento || "",
				correo: huespedEditar.email || "",
				telefono: huespedEditar.telefono || "",
				ruc: huespedEditar.ruc || "",
				nacionalidad: huespedEditar.nacionalidad || "PARAGUAY",
				fecha_nacimiento: huespedEditar.fecha_nacimiento || "",
			});
		}
	}, [huespedEditar]);

	const [formData, setFormData] = useState({
		nombre: "",
		apellido: "",
		documento_identidad: "DNI",
		numero_documento: "",
		correo: "",
		telefono: "",
		ruc: "",
		nacionalidad: "PARAGUAY",
		fecha_nacimiento: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const nuevoHuesped = {
			nombre: formData.nombre,
			apellido: formData.apellido,
			documento_identidad: formData.documento_identidad,
			numero_documento: formData.numero_documento,
			ruc: formData.ruc,
			nacionalidad: formData.nacionalidad,
			telefono: formData.telefono,
			email: formData.correo,
			fecha_nacimiento: formData.fecha_nacimiento
		};

		try {
			let huespedActualizado;

			if (huespedEditar && typeof huespedEditar.id_huesped === 'number') {
				// Modo edición: enviar PUT al backend
				const response = await axios.put(`http://localhost:4000/api/huesped/${huespedEditar.id_huesped}`, nuevoHuesped);
				huespedActualizado = response.data.data;

				// Reemplazar huésped en la lista
				const nuevosHuespedes = [...huespedesPrevios];
				nuevosHuespedes[indexEditar] = huespedActualizado;

				navigate('/ConfirmarReserva', {
					state: { huespedes: nuevosHuespedes }
				});
			} else {
				// Modo creación: enviar POST
				const response = await axios.post('http://localhost:4000/api/huesped', nuevoHuesped);
				huespedActualizado = response.data;

				navigate('/ConfirmarReserva', {
					state: {
						huespedes: [...huespedesPrevios, huespedActualizado]
					}
				});
			}
		} catch (error) {
			console.error("Error al guardar huésped:", error.response?.data || error.message);
			alert(error.response?.data?.error || "Error al guardar huésped");
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
										<label
											htmlFor="nombre"
											className="form-label mb-1 text-start d-block"
										>
											Nombre
										</label>
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
										<label
											htmlFor="apellido"
											className="form-label mb-1 text-start d-block"
										>
											Apellido
										</label>
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
										<label
											htmlFor="nacionalidad"
											className="form-label mb-1 text-start d-block"
										>
											Nacionalidad
										</label>
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
										<label
											htmlFor="documento_identidad"
											className="form-label mb-1 text-start d-block"
										>
											Tipo de Documento
										</label>
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
										<label
											htmlFor="numero_documento"
											className="form-label mb-1 text-start d-block"
										>
											Número de Documento
										</label>
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
										<label
											htmlFor="ruc"
											className="form-label mb-1 text-start d-block"
										>
											RUC
										</label>
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
										<label
											htmlFor="correo"
											className="form-label mb-1 text-start d-block"
										>
											Correo
										</label>
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
										<label
											htmlFor="telefono"
											className="form-label mb-1 text-start d-block"
										>
											Teléfono
										</label>
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
										<label
											htmlFor="fecha_nacimiento"
											className="form-label mb-1 text-start d-block"
										>
											Fecha de Nacimiento
										</label>
										<input
											type="date"
											className="form-control"
											id="fecha_nacimiento"
											value={formData.fecha_nacimiento}
											onChange={handleChange}
											style={{ maxWidth: "100%", width: "400px", appearance: 'auto', WebkitAppearance: 'auto' }}
										/>
									</div>
								</div>

								<div className="text-center mt-4">
									<button type="submit" className="btn btn-primary px-4">
										{huespedEditar ? "Guardar cambios" : "Agregar"}
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

export default AgregarHuesped;
