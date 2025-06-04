import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { Alert } from "@mui/material";
import HTTPClient from "../api/HTTPClient.js";

const AgregarHuesped = () => {
	const client = new HTTPClient();
	const navigate = useNavigate();
	const location = useLocation();
	/**
	 * Estados
	 */
	const [cargando, setCargando] = useState(false);
	const [cargandoBusqueda, setCargandoBusqueda] = useState(false);
	const [huespedExistente, setHuespedExistente] = useState(false);

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

	/**
	 * Utilizado para la parte de editar
	 */
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

	/**
	 * Captura los datos ingresados en los inputs.
	 * @param {*} e 
	 */
	const handleChange = (e) => {
		const { id, value, maxLength } = e.target;
		setFormData({
			...formData,
			[id]: maxLength ? value.slice(0, maxLength) : value
		});
	};

	/**
	 * Para el boton Agregar
	 * @returns 
	 */
	const handleAgregar = async () => {
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
				if (huespedExistente) {
					// Huesped ya existe: obtener sus datos actuales
					const response = await client.getHuespedPorDocumento(formData.numero_documento.trim());
					huespedActualizado = response.data;
				} else {
					// Modifica huésped
					const response = await client.updateHuesped(huespedEditar.id_huesped, nuevoHuesped);
					huespedActualizado = response.data.data;
				}
				const nuevosHuespedes = [...huespedesPrevios];
				nuevosHuespedes[indexEditar] = huespedActualizado;
				navigate('/ConfirmarReserva', {
					state: { huespedes: nuevosHuespedes }
				});
			} else {
				if (huespedExistente) {
					// Huesped ya existe: obtener sus datos actuales
					const response = await client.getHuespedPorDocumento(formData.numero_documento.trim());
					huespedActualizado = response.data;
				} else {
					// Crear nuevo huésped
					const response = await client.postHuesped(nuevoHuesped);
					huespedActualizado = response.data;
				}

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


	const handleCancelar = () => {
		navigate('/ConfirmarReserva');
	};

	/**
	 * Busca a un huesped por su documento.
	 * Si existe rellena los campos, si no las vacia.
	 */
	const buscarHuespedPorDocumento = async () => {
		try {
			if (!formData.numero_documento.trim()) {
				alert("Debe ingresar un número de documento.");
				return;
			}

			setCargandoBusqueda(true);
			const response = await client.getHuespedPorDocumento(formData.numero_documento.trim());

			if (response.data && response.data.id_huesped) {
				const huesped = response.data;

				const fecha = huesped.fecha_nacimiento
					? new Date(huesped.fecha_nacimiento).toISOString().split("T")[0]
					: "";

				setFormData({
					nombre: huesped.nombre || "",
					apellido: huesped.apellido || "",
					documento_identidad: huesped.documento_identidad || "DNI",
					numero_documento: huesped.numero_documento || "",
					correo: huesped.email || "",
					telefono: huesped.telefono || "",
					ruc: huesped.ruc || "",
					nacionalidad: huesped.nacionalidad || "PARAGUAY",
					fecha_nacimiento: fecha
				});
				setHuespedExistente(true);
			}
		} catch (error) {
			if (error.response?.status === 404) {
				setHuespedExistente(false);
				// <Alert severity="info">No se encontró ningún huésped con ese documento.</Alert>
				alert("No se encontró ningún huésped con ese documento.");
				clearData();
			} else {
				console.error(error);
				// <Alert severity="error">Ocurrió un error inesperado al buscar el huésped.</Alert>
				alert("Ocurrió un error inesperado al buscar el huésped.");
			}
		} finally {
			setCargandoBusqueda(false);
		}
	};

	/**
	 * Funcion para vaciar los campos, menos el numero de documento.
	 */
	const clearData = () => {
		setFormData({
			nombre: "",
			apellido: "",
			documento_identidad: "DNI",
			numero_documento: formData.numero_documento,
			correo: "",
			telefono: "",
			ruc: "",
			nacionalidad: "PARAGUAY",
			fecha_nacimiento: ""
		});
	}

	return (
		<div className="container py-4">
			<div className="row justify-content-center">
				<div className="col-lg-10">
					<div className="card shadow p-4">
						<div className="card-body">
							<h3 className="text-center fw-bold mb-4">Datos del Huésped</h3>
							{/* Formulario */}
							<div className="px-2">
								<div className="row g-4">
									<div className="col-md-4" key="numero_documento">
										<label htmlFor="numero_documento" className="form-label mb-1 text-start d-block">
											Número de Documento
										</label>
										<div className="input-group">
											<input
												type="text"
												className="form-control"
												id="numero_documento"
												placeholder="Inserte número de documento..."
												value={formData.numero_documento}
												onChange={handleChange}
												maxLength={20}
											/>
											<button
												type="button"
												className="btn btn-outline-primary"
												onClick={buscarHuespedPorDocumento}
												disabled={formData.numero_documento.trim() === ""}
											>
												{cargandoBusqueda ? "Buscando..." : "Buscar"}
											</button>
										</div>
									</div>
									{[
										{ id: "nombre", label: "Nombre", type: "text", maxLength: 30 },
										{ id: "apellido", label: "Apellido", type: "text", maxLength: 30 },
										{ id: "ruc", label: "RUC", type: "text", maxLength: 20 },
										{ id: "correo", label: "Correo", type: "email", maxLength: 50 },
										{ id: "telefono", label: "Teléfono", type: "tel", maxLength: 20 }
									].map(({ id, label, type, maxLength }) => (
										<div className="col-md-4" key={id}>
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
												{...(maxLength ? { maxLength } : {})}
											/>
										</div>
									))}

									{/* Fecha Nacimiento*/}
									<div className="col-md-4">
										<label htmlFor="fecha_nacimiento" className="form-label mb-1 text-start d-block">
											Fecha de Nacimiento
										</label>
										<input
											type="date"
											className="form-control"
											id="fecha_nacimiento"
											value={formData.fecha_nacimiento}
											onChange={handleChange}
											maxLength={11}
										/>
									</div>

									{/* Nacionalidad */}
									<div className="col-md-4">
										<label htmlFor="nacionalidad" className="form-label mb-1 text-start d-block">
											Nacionalidad
										</label>
										<select
											id="nacionalidad"
											className="form-select"
											value={formData.nacionalidad}
											onChange={handleChange}
										>
											<option value="PARAGUAY">Paraguaya</option>
											<option value="BRASIL">Brasilera</option>
											<option value="ARGENTINA">Argentina</option>
										</select>
									</div>

									{/* Tipo de Documento */}
									<div className="col-md-4">
										<label htmlFor="documento_identidad" className="form-label mb-1 text-start d-block">
											Tipo de Documento
										</label>
										<select
											id="documento_identidad"
											className="form-select"
											value={formData.documento_identidad}
											onChange={handleChange}
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
										disabled={cargando || cargandoBusqueda}
										onClick={handleCancelar}
									>
										Cancelar
									</button>
									<button
										type="submit"
										className="btn btn-success px-4 mx-1"
										disabled={cargando || cargandoBusqueda}
										onClick={handleAgregar}
									>
										{cargando ? "Guardando..." : huespedEditar ? "Guardar cambios" : "Agregar"}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AgregarHuesped;
