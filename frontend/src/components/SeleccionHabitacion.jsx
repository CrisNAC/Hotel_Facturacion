import React, { useEffect, useState } from "react";
import { FaWifi, FaSnowflake, FaTv, FaBath, FaCouch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useReserva } from "../context/Reserva/ReservaContext.jsx";
import { useTarifa } from "../context/tarifa/TarifaContext.jsx";
import { useHabitacion } from "../context/habitacion/HabitacionContext.jsx";
import HTTPClient from "../api/HTTPClient.js";

const SeleccionHabitacion = () => {
	const client = new HTTPClient();

	const { reservaSeleccionada } = useReserva();
	const { setTarifaSeleccionada } = useTarifa();
	const { setHabitacionSeleccionada } = useHabitacion();

	//console.log(reservaSeleccionada);

	const navigate = useNavigate();

	const [habitacionesDisponibles, setHabitacionesDisponibles] = useState([]);
	const [tarifasDisponibles, setTarifasDisponibles] = useState([]);
	const [tarifaMasBarata, setTarifaMasBarata] = useState(null);
	const [cargando, setCargando] = useState(true);

	const handleSelection = (tarifa, habitacion) => {
		setTarifaSeleccionada(tarifa);
		setHabitacionSeleccionada(habitacion);
		navigate("/ConfirmarReserva");
	}

	const fetchHabitacionesPorId = async (tipoHabitacionId) => {
		try {
			const res = await client.getHabitaciones();
			const allHabitaciones = res.data;
			const filtradas = allHabitaciones.filter(hab => hab.tipoHabitacion.id_tipo_habitacion === parseInt(tipoHabitacionId));
			setHabitacionesDisponibles(filtradas);
			//console.log(filtradas);
		} catch (error) {
			console.error("Error al obtener las habitaciones por Id: ", error);
		} finally {
			setCargando(false);
		}
	};

	const fetchTarifasPorId = async (tipoHabitacionId) => {
		try {
			const res = await client.getTarifas();
			const allTarifas = res.data;
			const filtradas = allTarifas.filter(tar => tar.tipoHabitacion.id_tipo_habitacion === parseInt(tipoHabitacionId));
			setTarifasDisponibles(filtradas);
			//console.log(filtradas);
		} catch (error) {
			console.error("Error al obtener las tarifas por Id: ", error);
		} finally {
			setCargando(false);
		}
	};

	const fetchTarifasPorIdEnReserva = async (tarifaId) => {
		try {
			const res = await client.getTarifas();
			const allTarifas = res.data;
			const filtradas = allTarifas.filter(tar => tar.id_tarifa === parseInt(tarifaId));
			setTarifasDisponibles(filtradas);
			//console.log(filtradas);
		} catch (error) {
			console.error("Error al obtener las tarifas por Id: ", error);
		} finally {
			setCargando(false);
		}
	}

	useEffect(() => {
		if(reservaSeleccionada) {

			if (!reservaSeleccionada.id_ingreso) {
				fetchHabitacionesPorId(reservaSeleccionada.tipo_habitacion);
				fetchTarifasPorId(reservaSeleccionada.tipo_habitacion);
			} else {
			fetchHabitacionesPorId(reservaSeleccionada.tipo_habitacion);
			fetchTarifasPorIdEnReserva(reservaSeleccionada.fk_tarifa);
			}
			
		} else {
			setHabitacionesDisponibles([]);
			setTarifasDisponibles([]);
			setCargando(false);
		}
	}, []);

	useEffect(() => {
		if (!reservaSeleccionada.id_ingreso) {
			if (tarifasDisponibles.length > 0) {
				const tarifaEconomica = tarifasDisponibles.reduce((min, actual) => 
					actual.precio < min.precio ? actual : min
				);
				setTarifaMasBarata(tarifaEconomica.id_tarifa);
			}
		}
	}, [tarifasDisponibles]);

	return (
		<>
			<div>
				<div className="container py-4" style={{ marginTop: '50px' }}>
					<h4 className="fw-bold mb-4 text-center">Seleccione habitación y tarifa</h4>
					{cargando ? (
						<div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
							<div className="spinner-border text-primary" role="status">
								<span className="visually-hidden">Cargando habitaciones...</span>
							</div>
						</div>
					) : 					
					habitacionesDisponibles.length === 0 ? (
						<p className="text-center">No hay habitaciones disponibles para esta reserva</p>
					) : (
						habitacionesDisponibles.map((hab) => (
							<div key={hab.id_habitacion} className="row mb-5 border rounded shadow">
								
								<div className="col-md-4 border rounded ">
									<img src={`/img/hab${hab.id_habitacion}-imagen.png`} alt={hab.tipoHabitacion.nombre} className="img-fluid rounded" />
									<h6 className="mt-2 fw-bold text-center">{hab.tipoHabitacion.nombre}</h6>
									<p className="text-center">Habitacion {hab.numero}</p>
									<ul>
										<li className="d-flex align-items-center gap-2 mb-1">
											<FaWifi /> <span>Wifi libre</span>
										</li>
										<li className="d-flex align-items-center gap-2 mb-1">
											<FaSnowflake /> <span>Aire Acondicionado</span>
										</li>
										<li className="d-flex align-items-center gap-2 mb-1">
											<FaTv /> <span>TV Smart</span>
										</li>
										<li className="d-flex align-items-center gap-2 mb-1">
											<FaBath /> <span>Baño privado</span>
										</li>
										<li className="d-flex align-items-center gap-2 mb-1">
											<FaCouch /> <span>Cama super acolchonada</span>
										</li>
									</ul>
								</div>

								<div className="col-md-8 border rounded d-grid">
									{tarifasDisponibles.map((tar) => (
										<div key={tar.id_tarifa} className="d-flex justify-content-between align-items-center border-bottom py-2 mb-3">

										<div>
											{tar.id_tarifa === tarifaMasBarata && (
												<span className="badge bg-dark mb-1">Economico</span>
											)}
											<h5>{tar.descripcion}</h5>
										</div>

										<div className="text-end">
											<strong>Gs. {tar.precio}</strong>
											<button type="button" className="btn btn-warning btn-sm ms-3 text-white fw-bold"
												style={{ width: '180px', height: '50px' }}
												onClick={() => handleSelection(tar, hab)}>Seleccionar
											</button>
										</div>
									</div>
									))}
								</div>

							</div>
						))
					)}
				</div>
			</div>
		</>
	);
}

export default SeleccionHabitacion;

