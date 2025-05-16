import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
// import { debounce } from "lodash";
import NavBar from "./navbar";
import { useReserva } from "../context/ReservaContext.jsx";

const CheckInReserva = () => {
	const navigate = useNavigate();
	const [reservaId, setReservaId] = useState('');
	const [reserva, setReserva] = useState(null);
	const [loading, setLoading] = useState(false);
	const { setReservaSeleccionada } = useReserva();

	const getUserInSession = async () => {
		try {
			const response = await axios.get('/api/session/user-session', {
				withCredentials: true,
			});
			const dataUser = response.data.user;
			return dataUser;

		} catch (error) {
			console.error('Error obteniendo usuario en sesión:', error.response?.data?.error || error.message);
			return null;
		}
	}

	const getReservaById = async (id) => {
		try {
			setLoading(true);
			const res = await axios.get(`/api/reserva/${id}`);
			setReserva(res.data);
			console.log(res.data);
		} catch (error) {
			console.error(error);
			setReserva(null);
		}finally{
			setLoading(false);
		};
	};

	const calcularNoches = () => {
		if (reserva && reserva.check_in && reserva.check_out) {
			const checkInDate = new Date(reserva.check_in);
			const checkOutDate = new Date(reserva.check_out);
			const diffTime = Math.abs(checkOutDate - checkInDate);
			const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
			return diffDays;
		}
		return 0;
	}

	/*useEffect(() => {
		getReservaById(reservaId);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);*/

	useEffect(() => {
		getUserInSession();
	}, []);

	const handleReservaIdChange = (e) => {
		setReservaId(e.target.value);
	}

	const handleBuscarReserva = () => {
		if (reservaId) getReservaById(reservaId);
		//getUserInSession();
	};

	return (
		<div>
			<NavBar />
			{/* Formulario */}
			<form>
				<div className="row justify-content-center my-5">

					<div className="col-md-6 col-lg-4">
						<label htmlFor="numReserva" className="form-label">
							Nº Reserva
						</label>
						<div className="d-flex">
							<input
								type="text"
								className="form-control me-2"
								id="numReserva"
								value={reservaId}
								onChange={handleReservaIdChange}
							/>
							<button type="button" className="btn btn-primary" onClick={handleBuscarReserva} disabled={loading}>
								{loading?"Cargando":"Buscar"}
							</button>
						</div>
					</div>
				</div>

				<div className="row g-5">
					<div className="col-md-6 col-lg-4">
						<label htmlFor="titular" className="form-label">
							Titular
						</label>
						<input
							type="text"
							className="form-control"
							id="titular"
							value = {reserva ? `${reserva.huesped.nombre} ${reserva.huesped.apellido}` : ""}
							readOnly
						/>
					</div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="tipo_habitacion" className="form-label">
							Tipo Habitacion
						</label>
						<select className="form-select" id="tipo_habitacion" value={reserva ? reserva.tipoHabitacion.nombre : ""} readOnly>
						{reserva && reserva.tipoHabitacion && (
							<option value={reserva.tipoHabitacion.nombre}>
								{reserva.tipoHabitacion.nombre}
							</option>
						)}
						</select>
					</div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="recepcionista" className="form-label">
							Recepcionista
						</label>
						<input type="text" className="form-control" id="recepcionista" value={reserva && reserva.usuario ? reserva.usuario.nombre_usuario : ""} readOnly/>
					</div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="checkin" className="form-label">
							Check-in
						</label>
						<input 
							type="date" 
							className="form-control" 
							id="checkin"
							value={reserva ? reserva.check_in.substring(0, 10) : ""}
							readOnly />
					</div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="checkout" className="form-label">
							Check-out
						</label>
						<input 
							type="date" 
							className="form-control" 
							id="checkout"
							value={reserva ? reserva.check_out.substring(0, 10) : ""}
							readOnly />
					</div>

					<div className="col-md-6 col-lg-4"></div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="noches" className="form-label">
							Noches
						</label>
						<input
							type="number"
							className="form-control"
							id="noches"
							value={reserva ? calcularNoches() : ""}
							readOnly
						></input>
					</div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="huespedes" className="form-label">
							Huéspedes
						</label>
						<input
							type="number"
							className="form-control"
							id="huespedes"
							value={reserva && reserva.ingreso.length > 0 ? reserva.ingreso[0].huespedesHabitaciones.length : ""}
							readOnly
						/>
					</div>

				</div>

				<div className="text-center" style={{ marginTop: '60px'}}>
					<button type="button" className="btn btn-success" 
						onClick={() => {
							setReservaSeleccionada(reserva);
							navigate('/SeleccionHabitacion')
						}}
					>
						Verificar Disponibilidad
					</button>
				</div>
			</form>
		</div>
	);
};

export default CheckInReserva;