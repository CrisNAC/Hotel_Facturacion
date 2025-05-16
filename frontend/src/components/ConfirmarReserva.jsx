import React, { useState } from "react";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';
import NavBar from "./navbar";
import HTTPClient from "../api/HTTPClient";
import { useReserva } from "../context/ReservaContext.jsx";

const ConfirmarReserva = () => {
	const client = new HTTPClient();
	const navigate = useNavigate();
	const location = useLocation();

	const [listaHuespedes, setListaHuespedes] = useState(location.state?.huespedes || []);
	const { reservaSeleccionada } = useReserva();
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(false);

	// Función para eliminar huésped
	const eliminarHuesped = async (id) => {
		try {
			/* const response = await fetch(`http://localhost:4000/api/huesped/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			}); */
			const response = client.deleteAHuespedById(id);
			const data = await response.json();

			if (response.ok) {
				alert(data.message || "Huésped eliminado con éxito");
				setListaHuespedes(prev => prev.filter(h => h.id_huesped !== id));
			} else {
				alert(data.error || "Error al eliminar huésped");
			}
		} catch (error) {
			console.log(error.message);
			alert("Error de conexión con el servidor");
		}
	};

	/**
		 * Para cambiar el formato de la fecha a Dia/Mes/Año
		 * @param {*} dateString Se le pasa el una fecha
		 * @returns Retorna la fecha modifica en caso de exito o si no en caso de fracaso -
		 */
	const formatDMY = (dateString) => {
		if (!dateString) return '--/--/----';
		try {
			const date = new Date(dateString);
			return new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
		} catch {
			return '—';
		}
	};

	return (
		<div>
			<NavBar />
			<div className="container py-4" style={{ marginTop: '50px' }}>
				{/* Titulo y boton */}
				<div className="d-flex justify-content-between align-items-center mb-3">
					<h3>Huéspedes habitación 205</h3>
					<button
						type="button"
						className="btn btn-primary btn-sm ms-3"
						onClick={() => navigate('/AgregarHuesped', { state: { huespedes: listaHuespedes } })}
					>
						<FaUserPlus className="me-2" style={{ fontSize: '1rem', paddingBottom: '2px' }} />Agregar<span></span>
					</button>
				</div>
				{/* Tabla */}
				<table className="table table-bordered table-hover w-100 text-center">
					<thead>
						<tr>
							<th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>#</th>
							<th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Nombre</th>
							<th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Apellido</th>
							<th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Nacionalidad</th>
							<th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Teléfono</th>
							<th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Correo</th>
							<th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{(listaHuespedes.length === 0) ? (<tr><td colSpan={7}>Sin huespedes</td></tr>)
							: (listaHuespedes.map((huesped, index) => (
								<tr key={huesped.id_huesped}>
									<td>{index + 1}</td>
									<td>{huesped.nombre}</td>
									<td>{huesped.apellido}</td>
									<td>{huesped.nacionalidad}</td>
									<td>{huesped.telefono}</td>
									<td>{huesped.email}</td>
									<td className="d-flex justify-content-center align-items-center">
										<button
											type="button"
											className="btn plus rounded-circle d-flex align-items-center justify-content-center"
											style={{
												backgroundColor: "#003366",
												color: "white",
												width: "30px",
												height: "30px",
												padding: 0,
												fontSize: "14px",
											}}
											onClick={() =>
												navigate('/AgregarHuesped', {
													state: {
														huespedEditar: listaHuespedes[index],
														indexEditar: index,
														huespedes: listaHuespedes
													}
												})
											}
										>
											<FaEdit />
										</button>
										<button
											type="button"
											className="btn plus rounded-circle d-flex align-items-center justify-content-center"
											style={{
												backgroundColor: "#003366",
												color: "white",
												width: "30px",
												height: "30px",
												padding: 0,
												fontSize: "14px",
											}}
											onClick={() => eliminarHuesped(huesped.id_huesped)}
										>
											<FaTrash />
										</button>
									</td>
								</tr>
							)))}
					</tbody>
				</table>

				<div className="row g-4" style={{ marginTop: '50px' }}>

					{/* Comentarios */}
					<div className="col-md-6">
						<div className="shadow p-4 rounded">
							<h5 className="fw-bold">Preparar Estancia</h5>
							<p className="mt-3"><strong>¿Tiene algún tipo de solicitud especial para el hotel?</strong></p>
							<label htmlFor="comentarios" className="form-label">Comentarios</label>
							<textarea id="comentarios" className="form-control" rows="5" placeholder="Agregar cama sencilla a la habitación"></textarea>
						</div>
					</div>

					{/* Resumen Reserva*/}
					<div className="col-md-6">
						<div className="shadow p-4 rounded">

							<h4 className="fw-bold mb-3">Resumen {reservaSeleccionada ? "Reserva" : "Ingreso"}</h4>

							<p className="mb-1"><span className="fw-semibold">Check in:</span> {reservaSeleccionada ? formatDMY(reservaSeleccionada.check_in) : "03/16/2025"}</p>
							<p className="mb-1"><span className="fw-semibold">Check out:</span> {reservaSeleccionada ? formatDMY(reservaSeleccionada.check_out) :"03/18/2025"}</p>
							<p className="fw-bold mt-3 mb-2">Habitación 205 {reservaSeleccionada ? ("("+reservaSeleccionada.tipoHabitacion.nombre+")") :"(Doble-Matrimonial Estándar)"}</p>
							<p className="mb-1"><span className="fw-semibold">Costo Base:</span> 300.000 Gs.</p>
							<p className="mb-1"><span className="fw-semibold">Ocupación:</span> 2 adultos</p>
							<p className="mb-1"><span className="fw-semibold">Noches:</span> 2 noches</p>
							<p className="mb-1"><span className="fw-semibold">Costo:</span> 600.000 Gs.</p>
							<p className="mb-1"><span className="fw-semibold">Extra:</span> Desayuno (2 días)</p>
							<p className="mb-3"><span className="fw-semibold">Costo Extra:</span> 80.000 Gs.</p>

							<hr></hr>
							<p className="fw-bold fs-5">Costo Total <span className="ms-3">680.000 Gs.</span></p>

						</div>
					</div>

				</div>

				{/* Button */}
				<div className="d-flex justify-content-center mt-4">
					<button type="button" className="btn btn-success" onClick={() => navigate('/')}>
						Confirmar Reserva
					</button>
				</div>

			</div>

		</div>
	);
};

export default ConfirmarReserva;
