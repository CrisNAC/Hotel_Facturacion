import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { debounce } from "lodash";
import NavBar from "./navbar";

const CheckInReserva = () => {

	const [reservaId, setReservaId] = useState('');
	const [reserva, setReserva] = useState(null);
	const navigate = useNavigate();

	const getReservaById = async (id) => {
		try {
			const res = await axios.get(`/api/reserva/${id}`);
			setReserva(res.data);
		} catch (error) {
			console.error(error);
			setReserva(null);
		}
	};

	/*useEffect(() => {
		getReservaById(reservaId);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);*/

	const handleReservaIdChange = (e) => {
		setReservaId(e.target.value);
	}

	const handleBuscarReserva = debounce(() => {
		if (reservaId) getReservaById(reservaId);
	}, 3000);

	return (
		<div>
			<NavBar />
			{/* Formulario */}
			<form style={{ marginTop: '70px' }}>
				<div className="row g-5">

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
							<button type="button" className="btn btn-primary" onClick={handleBuscarReserva}>
								Buscar
							</button>
						</div>
					</div>

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

					<div className="col-md-6 col-lg-4"></div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="noches" className="form-label">
							Noches
						</label>
						<select className="form-select" id="noches" defaultValue="2">
							<option value="1">1 noche</option>
							<option value="2">2 noches</option>
							<option value="3">3 noches</option>
						</select>
					</div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="huespedes" className="form-label">
							Huéspedes
						</label>
						<select className="form-select" id="huespedes" defaultValue="2">
							<option value="1">1 huesped</option>
							<option value="2">2 huespedes</option>
							<option value="3">3 huespedes</option>
						</select>
					</div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="tipo_habitacion" className="form-label">
							Tipo Habitacion
						</label>
						<select className="form-select" id="tipo_habitacion" value={reserva ? reserva.tipoHabitacion.nombre : ""}>
							
						</select>
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
						<label htmlFor="horaLlegada" className="form-label">
							Hora de llegada
						</label>
						<input type="time" className="form-control" id="horaLlegada" />
					</div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="recepcionista" className="form-label">
							Recepcionista
						</label>
						<input type="text" className="form-control" id="recepcionista" value={reserva && reserva.usuario ? reserva.usuario.nombre_usuario : ""} readOnly/>
					</div>

				</div>

				<div className="text-center" style={{ marginTop: '60px'}}>
					<button type="button" className="btn btn-success" onClick={() => navigate('/SeleccionHabitacion')}>
						Verificar Disponibilidad
					</button>
				</div>
			</form>
		</div>
	);
};

export default CheckInReserva;