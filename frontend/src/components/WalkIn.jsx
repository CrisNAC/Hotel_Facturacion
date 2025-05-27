/* eslint-disable no-unused-vars */
import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useReserva } from "../context/Reserva/ReservaContext";

const WalkIn = () => {	
	const navigate = useNavigate();

	const hoyUTC = new Date();
	
	//Formato ES para mostrar en el formulario de forma amigable
	const fechaActual = hoyUTC.toLocaleDateString('es-ES', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	});

	//Formato US para mostrar en el formulario de forma amigable
	const fechaHoy = hoyUTC.toISOString().split("T")[0];

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

	//Efecto para modificar el check_out segun la cantidad de noches que se elijan
	useEffect(() => {
		const checkInDate = new Date(form.check_in);
		checkInDate.setDate(checkInDate.getDate() + parseInt(form.noches));
		const fechaSalida = checkInDate.toISOString().split("T")[0];
		setForm(prev => ({ ...prev, check_out: fechaSalida}));
	}, [form.check_in, form.noches]);

	//Efecto para obtener los datos del usuario en sesion
	useEffect(() => {
		const getUserInSession = async () => {
			try {
				const response = await axios.get("/api/session/user-session", {
					withCredentials: true,
				});
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

	const formatToDatabaseFormat = (fechaStr) => {
		const date = new Date(fechaStr);
		return date.toISOString();
	};

	//Pasamos el payload al contexto al hacer Submit
	const handleSubmit = () => {
		const { nombre_usuario, ...restForm } = form;

		const payload = {
			...restForm,
			check_in: formatToDatabaseFormat(form.check_in),
			check_out: formatToDatabaseFormat(form.check_out)
		};

		console.log(payload);
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
							<option value="10">Cama-Doble Matrimonial Estándar</option>
						</select>
					</div>

					<div className="col-md-6 col-lg-4">
						<label htmlFor="huespedes" className="form-label">
							Huéspedes
						</label>
						<select className="form-select" id="huespedes" name="huespdes" value={form.huespedes} onChange={handleChange}>
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

				<div className="text-center" style={{ marginTop: '60px'}}>
					<button type="button" className="btn btn-success" onClick={handleSubmit}>
						Verificar Disponibilidad
					</button>
				</div>
			</form>

		</div>
	);
};

export default WalkIn;