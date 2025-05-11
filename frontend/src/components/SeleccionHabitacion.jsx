import React, { useEffect, useState } from "react";
import { FaWifi, FaSnowflake, FaTv, FaBath, FaCouch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/navbar.jsx";
import { useReserva } from "../context/ReservaContext.jsx";
import axios from "axios";

const tarifs = [
	{ tipo: "Solo habitación", descripcion: "con cancelación gratuita", precio: "300.000" },
	{ tipo: "Habitación y Desayuno", descripcion: "incluido con cancelación gratuita", precio: "340.000" },
	{ tipo: "Habitación, Desayuno y Cena", descripcion: "incluidos con cancelación gratuita", precio: "440.000" }
]

/*const habitaciones = [
	{
		id: 1,
		titulo: "Cama Doble-Matrimonial Estándar",
		numero: 205,
		imagen: "/img/hab1-imagen.png",
		servicios: [
			{ nombre: "Wifi libre", icono: <FaWifi></FaWifi> },
			{ nombre: "Aire Acondicionado", icono: <FaSnowflake></FaSnowflake> },
			{ nombre: "TV Smart 50", icono: <FaTv></FaTv> },
			{ nombre: "Baño con regadera", icono: <FaBath></FaBath> },
			{ nombre: "Cama super acolchonada", icono: <FaCouch></FaCouch> }
		],
		tarifas: [
			{ tipo: "Solo habitación", descripcion: "con cancelación gratuita", precio: "300.000" },
			{ tipo: "Habitación y Desayuno", descripcion: "incluido con cancelación gratuita", precio: "340.000" },
			{ tipo: "Habitación, Desayuno y Cena", descripcion: "incluidos con cancelación gratuita", precio: "440.000" }
		]
	},
	{
		id: 2,
		titulo: "Cama Doble-Matrimonial Deluxe",
		numero: 206,
		imagen: "/img/hab2-imagen.png",
		servicios: [
			{ nombre: "Wifi libre", icono: <FaWifi></FaWifi> },
			{ nombre: "Aire Acondicionado", icono: <FaSnowflake></FaSnowflake> },
			{ nombre: "TV Smart 50", icono: <FaTv></FaTv> },
			{ nombre: "Baño con regadera", icono: <FaBath></FaBath> },
			{ nombre: "Cama super acolchonada", icono: <FaCouch></FaCouch> }
		],
		tarifas: [
			{ tipo: "Solo habitación", descripcion: "con cancelación gratuita", precio: "460.000" },
			{ tipo: "Habitación y Desayuno", descripcion: "incluido con cancelación gratuita", precio: "500.000" },
			{ tipo: "Habitación, Desayuno y Cena", descripcion: "incluidos con cancelación gratuita", precio: "560.000" }
		]
	},
];*/

const SeleccionHabitacion = () => {

	const { reservaSeleccionada } = useReserva();

	console.log(reservaSeleccionada);

	const navigate = useNavigate();

	const [habitacionesDisponibles, setHabitacionesDisponibles] = useState([]);
	const [cargando, setCargando] = useState(true);

	useEffect(() => {
		const fetchHabitaciones = async () => {
			try {
				const res = await axios.get('/api/habitacion');
				const allHabitaciones = res.data;

				const filtradas = allHabitaciones.filter(hab => hab.tipoHabitacion.nombre === reservaSeleccionada.tipoHabitacion.nombre);
				setHabitacionesDisponibles(filtradas);
			} catch (error) {
				console.error("Error al obtener las habitaciones: ", error);
			} finally {
				setCargando(false);
			}
		};

		if(reservaSeleccionada) {
			fetchHabitaciones();
		}
	}, [reservaSeleccionada]);

	return (
		<>
			<NavBar />
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
									<img src={"/img/hab1-imagen.png"} alt={hab.tipoHabitacion.nombre} className="img-fluid rounded" />
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
									{tarifs.map((t, idx) => (
										<div key={idx} className="d-flex justify-content-between align-items-center border-bottom py-2 mb-3">

										<div>
											{idx === 0 && <span className="badge bg-dark mb-1">Económico</span>}
											<h4 className="m-0">{t.tipo}</h4>
											<h6>{t.descripcion}</h6>
										</div>

										<div className="text-end">
											<strong>Gs. {t.precio}</strong>
											<button type="button" className="btn btn-warning btn-sm ms-3 text-white fw-bold"
												style={{ width: '180px', height: '50px' }}
												onClick={() => navigate('/ConfirmarReserva')}>Seleccionar
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

