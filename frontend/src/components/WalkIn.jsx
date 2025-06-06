/* eslint-disable no-unused-vars */
import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { useReserva } from "../context/Reserva/ReservaContext";
import HTTPClient from "../api/HTTPClient.js";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

dayjs.extend(utc);
dayjs.extend(timezone);

const WalkIn = () => {	
	const client = new HTTPClient();
	const navigate = useNavigate();

	//Formato US para mostrar en el formulario de forma amigable
	const fechaHoy = dayjs().format('YYYY-MM-DD');

	//Estados iniciales de los datos del formulario
	const initialState = {
		check_in: fechaHoy,
		check_out: '',
		noches: 1,
		tipo_habitacion: '1',
		huespedes: 1,
		id_usuario: 0,
		nombre_usuario: ''
	}

	const [form, setForm] = useState(initialState);
	const {setReservaSeleccionada} = useReserva();

	//Estados para manejar el payload para guardar en la base de datos (Hora Real)
	const [checkInCompleto, setCheckInCompleto] = useState('');
	const [checkOutCompleto, setCheckOutCompleto] = useState('');

	//Efecto para modificar el check_out segun la cantidad de noches que se elijan
	useEffect(() => {
		/*const checkInDate = new Date(form.check_in);
		checkInDate.setDate(checkInDate.getDate() + parseInt(form.noches));
		const fechaSalida = checkInDate.toISOString().split("T")[0];
		const fechaIngreso = dayjs(form.check_in);
		const fechaSalida = fechaIngreso.add(parseInt(form.noches), 'day').format('YYYY-MM-DD');*/

		const horaActual = dayjs().format('HH:mm:ss');
		const fechaConHoraActual = dayjs(`${form.check_in}T${horaActual}`);
		setCheckInCompleto(fechaConHoraActual.toISOString());

		//Calculamos el check_out segun las noches
		const checkOut = fechaConHoraActual.add(parseInt(form.noches), 'day');
		setCheckOutCompleto(checkOut.toISOString());

		// Para el formulario
		setForm(prev => ({ ...prev, check_out: checkOut.format('YYYY-MM-DD')}));
	}, [form.check_in, form.noches]);

	//Efecto para obtener los datos del usuario en sesion
	useEffect(() => {
		const getUserInSession = async () => {
			try {
				const response = await client.getUser();
				const dataUser = response.data.user;
				setForm(prev => ({
					...prev,
					id_usuario: dataUser.id_usuario,
					nombre_usuario: dataUser.nombre_usuario
				}));
			} catch (error) {
				console.error( "Error obteniendo usuario en sesión:", error.response?.data?.error || error.message);
				return null;
			}
		};

		getUserInSession();
	}, []);

	//Funcion para manejar cambios en el formulario
	const handleChange = (e) => {
		setForm(prev => ({ ...prev, [e.target.name]: e.target.value}));
	}

	// Convierte a UTC en formato ISO 8601 (para timestamptz)
	const formatToDatabaseFormat = (fechaStr) => {
		return dayjs(fechaStr).utc().toISOString();
	};

	//Pasamos el payload al contexto al hacer Submit
	const handleSubmit = () => {
		const { nombre_usuario, ...restForm } = form;

		const payload = {
			...restForm,
			check_in: checkInCompleto,
			check_out: checkOutCompleto
		};

		//console.log(payload);
		setForm(initialState);
		setReservaSeleccionada(payload);
		navigate('/SeleccionHabitacion');
	}

	return (
		<div style={{ marginTop: '50px' }}>

			<h2 className="text-center mb-4">Seleccione sus Preferencias</h2>

			{/* Formulario */}
			<form style={{ marginTop: '70px' }}>
				<div className="row g-5">

					<div className="col-md-6 col-lg-4">
						<label htmlFor="check_in" className="form-label">
							Check-in
						</label>
						<input 
							type="date"
							className="form-control" 
							id="check_in"
							name="check_in"
							value={form.check_in}
							readOnly
						/>
					</div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="noches" className="form-label">
							Noches
						</label>
						<input
							type="number"
							className="form-control"
							id="noches"
							name="noches"
							min="1"
							max="30"
							value={form.noches}
							onChange={handleChange}
						/>
					</div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="check_out" className="form-label">
							Check_out
						</label>
						<input
							type="date"
							className="form-control"
							id="check_out"
							name="check_out"
							value={form.check_out}
							onChange={handleChange}
							readOnly
						/>
					</div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="tipo_habitacion" className="form-label">
							Tipo Habitacion
						</label>
						<select className="form-select" id="tipo_habitacion" name="tipo_habitacion" value={form.tipo_habitacion} onChange={handleChange}>
							<option value="1">Cama-Doble Matrimonial Estandar</option>
							<option value="2">Cama-Doble Matrimonial Deluxe</option>
							<option value="3">Cama-Doble Matrimonial Suite</option>
							<option value="4">Cama-Simple Estándar</option>
							<option value="5">Cama-Simple Deluxe</option>
							<option value="6">Cama-Simple Suite</option>
							<option value="7">Cama-Doble Estándar</option>
							<option value="8">Cama-Doble Deluxe</option>
							<option value="9">Cama-Doble Suite</option>
						</select>
					</div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="huespedes" className="form-label">
							Huéspedes
						</label>
						<select className="form-select" id="huespedes" name="huespedes" value={form.huespedes} onChange={handleChange}>
							<option value="1">1 huesped</option>
							<option value="2">2 huespedes</option>
							<option value="3">3 huespedes</option>
						</select>
					</div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="usuario" className="form-label">
							Recepcionista
						</label>
						<input 
							type="text" 
							className="form-control" 
							id="usuario" 
							value={form.nombre_usuario} 
							readOnly
						/>
					</div>

					<div className="col-md-6 col-lg-4"></div>

				</div>

				<div className="text-center" style={{ marginTop: '40px'}}>
					<button type="button" className="btn btn-success fw-bold py-2" onClick={handleSubmit}>
						Verificar Disponibilidad
					</button>
				</div>
			</form>

		</div>
	);
};

export default WalkIn;