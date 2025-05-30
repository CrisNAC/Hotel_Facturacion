import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HTTPClient from "../api/HTTPClient.js";

const AgregarHuesped = () => {
	const client = new HTTPClient();
	const navigate = useNavigate();
	const location = useLocation();
	const [cancelado, setCancelado] = useState(false);
	const [cargando, setCargando] = useState(false);

	const huespedEditar = location.state?.huespedEditar || null;
	const indexEditar = location.state?.indexEditar;
	const huespedesPrevios = location.state?.huespedes || [];

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

	useEffect(() => {
		if (huespedEditar) {
			const fecha = huespedEditar.fecha_nacimiento ? new Date(huespedEditar.fecha_nacimiento).toISOString().split("T")[0] : "";

			setFormData({
				nombre: huespedEditar.nombre || "",
				apellido: huespedEditar.apellido || "",
				documento_identidad: huespedEditar.documento_identidad || "DNI",
				numero_documento: huespedEditar.numero_documento || "",
				correo: huespedEditar.email || "",
				telefono: huespedEditar.telefono || "",
				ruc: huespedEditar.ruc || "",
				nacionalidad: huespedEditar.nacionalidad || "PARAGUAY",
				fecha_nacimiento: fecha,
			});
		}
	}, [huespedEditar]);

	const handleChange = (e) => {
		const { id, value, maxLength } = e.target;
		setFormData({
			...formData,
			[id]: maxLength ? value.slice(0, maxLength) : value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (cancelado) {
			navigate('/ConfirmarReserva');
			return;
		}

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
			setCargando(true);
			let huespedActualizado;

			if (huespedEditar && typeof huespedEditar.id_huesped === 'number') {
				const response = await client.updateHuesped(huespedEditar.id_huesped, nuevoHuesped);
				huespedActualizado = response.data.data;

				const nuevosHuespedes = [...huespedesPrevios];
				nuevosHuespedes[indexEditar] = huespedActualizado;

				navigate('/ConfirmarReserva', {
					state: { huespedes: nuevosHuespedes }
				});
			} else {
				const response = await client.postHuesped(nuevoHuesped);
				huespedActualizado = response.data;

				navigate('/ConfirmarReserva', {
					state: { huespedes: [...huespedesPrevios, huespedActualizado] }
				});
			}
		} catch (error) {
			console.error("Error al guardar huésped:", error.response?.data || error.message);
			alert(error.response?.data?.error || "Error al guardar huésped");
		} finally {
			setCargando(false);
		}
	};

	return (
		<div className="container py-4">
			<div className="row justify-content-center">
				<div className="col-lg-10">
					<div className="card shadow p-4">
						<div className="card-body">
							<h3 className="text-center fw-bold mb-4">Datos del Huésped</h3>
							<form className="px-2" onSubmit={handleSubmit}>
								<div className="row g-4">
									{[
										{ id: "nombre", label: "Nombre", type: "text", maxLength: 30 },
										{ id: "apellido", label: "Apellido", type: "text", maxLength: 30 },
										{ id: "numero_documento", label: "Número de Documento", type: "text", maxLength: 20 },
										{ id: "ruc", label: "RUC", type: "text", maxLength: 20 },
										{ id: "correo", label: "Correo", type: "email", maxLength: 50 },
										{ id: "telefono", label: "Teléfono", type: "tel", maxLength: 20 },
										//{ id: "fecha_nacimiento", label: "Fecha de Nacimiento", type: "date" }
									].map(({ id, label, type, maxLength }) => (
										<div className="col-md-6" key={id}>
											<label htmlFor={id} className="form-label mb-1 text-start d-block">
												{label}
											</label>
											<input
												type={type}
												className="form-control"
												id={id}
												placeholder={`Inserte ${label.toLowerCase()}...`}
												value={formData[id]}
												onChange={handleChange}
												style={{ maxWidth: "100%", width: "400px" }}
												{...(maxLength ? { maxLength } : {})}
											/>
										</div>
									))}

									{/* Fecha Nacimiento*/}
									<div className="col-md-6">
										<label htmlFor="fecha_nacimiento" className="form-label mb-1 text-start d-block">
											Fecha de Nacimiento
										</label>
										<input
											type="date"
											className="form-control"
											id="fecha_nacimiento"
											value={formData.fecha_nacimiento}
											onChange={handleChange}
											style={{ maxWidth: "100%", width: "400px" }}
											maxLength={11}
										/>
									</div>

									{/* Nacionalidad */}
									<div className="col-md-6">
										<label htmlFor="nacionalidad" className="form-label mb-1 text-start d-block">
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

									{/* Tipo de Documento */}
									<div className="col-md-6">
										<label htmlFor="documento_identidad" className="form-label mb-1 text-start d-block">
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
								</div>

								<div className="text-center mt-4">
									<button
										type="submit"
										className="btn btn-secondary px-4 mx-1"
										disabled={cargando}
										onClick={() => setCancelado(true)}
									>
										Cancelar
									</button>
									<button
										type="submit"
										className="btn btn-primary px-4 mx-1"
										disabled={cargando}
									>
										{cargando ? "Guardando..." : huespedEditar ? "Guardar cambios" : "Agregar"}
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
