import { useState } from "react";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import HTTPClient from "../api/HTTPClient.js";
import { useReserva } from "../context/Reserva/ReservaContext.jsx";
import { useTarifa } from "../context/tarifa/TarifaContext.jsx";
import { useHabitacion } from "../context/habitacion/HabitacionContext.jsx";
import dayjs from "dayjs";

const ConfirmarReserva = () => {
	const client = new HTTPClient();
	const navigate = useNavigate();
	const location = useLocation();

	const [listaHuespedes, setListaHuespedes] = useState(location.state?.huespedes || []);
	const { reservaSeleccionada } = useReserva();
	const { tarifaSeleccionada } = useTarifa();
	const { habitacionSeleccionada } = useHabitacion();
	const [loading, setLoading] = useState(false);

	//console.log(reservaSeleccionada);
	//console.log(tarifaSeleccionada);
	//console.log(habitacionSeleccionada);
	//console.log(listaHuespedes);

	// Función para eliminar huésped
	const eliminarHuesped = async (id) => {
		alert("Huésped eliminado con éxito");
		setListaHuespedes(prev => prev.filter(h => h.id_huesped !== id));
	};

	const formatDMY = (fecha) => {
		const fechaCompletaSplit = fecha.split("T")[0];
		const [year, month, day] = fechaCompletaSplit.split("-");
		const fechaFormateada = `${day}/${month}/${year}`;
		return fechaFormateada;
	};

	const verificarOcupacion = async (idHuesped) => {
		try {
			const res = await client.getHuespedEnHabitacion(idHuesped);
			return res.data.ocupado;
		} catch (error) {
			console.error("Error verificando ocupación", error);
			return false;
		}
	}

	const handleCancelar = () => {
		setListaHuespedes([]);
		navigate('/Inicio');
	}

	const id_ingreso = reservaSeleccionada ? reservaSeleccionada.id_ingreso : null;
	const fk_reserva = reservaSeleccionada ? reservaSeleccionada.fk_reserva : null;
	const check_in = reservaSeleccionada ? reservaSeleccionada.check_in : "";
	const check_out = reservaSeleccionada ? reservaSeleccionada.check_out : "";
	const numero_habitacion = habitacionSeleccionada ? habitacionSeleccionada.numero : 0;
	const piso_habitacion = habitacionSeleccionada ? habitacionSeleccionada.piso : 0;
	const nombre_habitacion = habitacionSeleccionada ? habitacionSeleccionada.tipoHabitacion.nombre : "";
	const capacidad_habitacion = habitacionSeleccionada ? habitacionSeleccionada.tipoHabitacion.capacidad : 0;
	const descripcion_tarifa = tarifaSeleccionada ? tarifaSeleccionada.descripcion : "";
	const precio_tarifa = tarifaSeleccionada ? tarifaSeleccionada.precio : 0;
	const noches = reservaSeleccionada ? reservaSeleccionada.noches : 0;
	const costoTotal = precio_tarifa * noches;
	const maxHuespedes = reservaSeleccionada ? reservaSeleccionada.huespedes : 0;
	//const companions = listaHuespedes?.filter(h => h.id_huesped !== listaHuespedes[0]?.id_huesped);

	const handleSubmit = async () => {

		for (const huesped of listaHuespedes) {
			const ocupied = await verificarOcupacion(huesped.id_huesped);
			if (ocupied) {
				toast.error(`El huesped ${huesped.nombre} ya se encuentra en el hotel`, {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				return;
			}
		}

		if (!reservaSeleccionada.id_ingreso) {
			setLoading(true);

			const payloadWalkIn = {
				fk_reserva: null,
				checkIn: check_in,
				checkOut: check_out,
				fk_habitacion: habitacionSeleccionada.id_habitacion,
				fk_tarifa: tarifaSeleccionada.id_tarifa,
				fk_huesped: listaHuespedes[0]?.id_huesped,
				fk_usuario: reservaSeleccionada.id_usuario,
				companions: listaHuespedes?.filter(h => h.id_huesped !== listaHuespedes[0]?.id_huesped)
			}

			try {
				const response = await client.postIngreso(payloadWalkIn);
				// eslint-disable-next-line no-unused-vars
				const dataPost = response.data.data;
				//console.log(dataPost);
				navigate("/Inicio");
			} catch (error) {
				console.error("Error al crear el ingreso: ", error.response.data.error);
			} finally {
				setLoading(false);
			}
		}
		else {
			setLoading(true);

			const payloadReserva = {
				id_ingreso: id_ingreso,
				fk_reserva: fk_reserva,
				checkIn: dayjs(check_in).toDate(),
				checkOut: dayjs(check_out).toDate(),
				fk_habitacion: habitacionSeleccionada.id_habitacion,
				fk_tarifa: tarifaSeleccionada.id_tarifa,
				fk_huesped: listaHuespedes[0]?.id_huesped,
				fk_usuario: reservaSeleccionada.fk_usuario,
				companions: listaHuespedes?.filter(h => h.id_huesped !== listaHuespedes[0]?.id_huesped)
			}

			try {
				// eslint-disable-next-line no-unused-vars
				const response = await client.updateIngreso(id_ingreso, payloadReserva);
				//const dataPost = response.data.data;
				//console.log(dataPost);
				navigate("/Inicio");
			} catch (error) {
				console.error("Error al crear el ingreso: ", error.response.data.error);
			} finally {
				setLoading(false);
			}
		}
	}

	return (
		<div>
			<ToastContainer></ToastContainer>
			<div className="container py-4" style={{ marginTop: '50px' }}>
				{/* Titulo y boton */}
				<div className="d-flex justify-content-between align-items-center mb-3">
					<h3>Huéspedes habitación {numero_habitacion}</h3>
					<button
						type="button"
						className="btn btn-primary btn-sm ms-3"
						onClick={() => {
							if (listaHuespedes.length < maxHuespedes) {
								navigate('/AgregarHuesped', { state: { huespedes: listaHuespedes } });
							} else {
								toast.error(`No se pueden agregar mas huespedes. Capacidad maxima: ${maxHuespedes}`, {
									position: "top-right",
									autoClose: 3000,
									hideProgressBar: false,
									closeOnClick: true,
									pauseOnHover: true,
									draggable: true,
									progress: undefined,
								});
							}
						}}
					>
						<FaUserPlus className="me-2" style={{ fontSize: '1rem', paddingBottom: '2px' }} />Agregar<span></span>
					</button>
				</div>
				{/* Tabla */}
				<table className="table table-bordered table-hover w-100 text-center">
					<thead>
						<tr>
							<th style={thStyle}>#</th>
							<th style={thStyle}>Nombre</th>
							<th style={thStyle}>Apellido</th>
							<th style={thStyle}>Nacionalidad</th>
							<th style={thStyle}>Teléfono</th>
							<th style={thStyle}>Correo</th>
							<th style={thStyle}>Acciones</th>
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

					{/* Resumen Reserva*/}
					<div className="col-md-6 mx-auto">
						<div className="shadow p-4 rounded">

							<h4 className="fw-bold mb-3 text-center">Resumen</h4>

							<p className="mb-1"><span className="fw-semibold">Check in:</span> {formatDMY(check_in)}</p>
							<p className="mb-1"><span className="fw-semibold">Check out:</span> {formatDMY(check_out)}</p>
							<p className="fw-bold mt-3 mb-2">Habitación {numero_habitacion} ({nombre_habitacion})</p>
							<p className="mb-1"><span className="fw-semibold">Ubicacion:</span> Piso {piso_habitacion}</p>
							<p className="mb-1"><span className="fw-semibold">Ocupación:</span> {capacidad_habitacion} persona/s</p>
							<p className="fw-bold mt-3 mb-2">Tarifas</p>
							<p className="mb-1"><span className="fw-semibold">Descripcion:</span> {descripcion_tarifa}</p>
							<p className="mb-1"><span className="fw-semibold">Costo:</span> {precio_tarifa} Gs.</p>
							<p className="mb-1"><span className="fw-semibold">Noches:</span> {noches} noche/s</p>

							<hr></hr>
							<p className="fw-bold fs-5">Costo Total:<span className="ms-3">{costoTotal} Gs.</span></p>

						</div>
					</div>

				</div>

				{/* Button */}
				<div className="d-flex justify-content-center gap-5 mt-5">
					<button type="button" className="btn btn-secondary fw-bold" onClick={handleCancelar}>
						Cancelar
					</button>
					<button type="button" className="btn btn-success fw-bold" disabled={loading || listaHuespedes.length === 0} onClick={handleSubmit}>
						{loading ? "Espere..." : "Confirmar Ingreso"}
					</button>
				</div>

			</div>

		</div>
	);
};

const thStyle = {
	backgroundColor: "#E6E6E6",
	color: "#2E2E2E"
};

export default ConfirmarReserva;
