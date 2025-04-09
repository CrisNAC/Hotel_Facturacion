import React from "react";
import { FaWifi, FaSnowflake, FaTv, FaBath, FaCouch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const habitaciones = [
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
			{ nombre: "Cama super acolchonada", icono: <FaCouch></FaCouch>}
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
			{ nombre: "Cama super acolchonada", icono: <FaCouch></FaCouch>}
		],
		tarifas: [
		{ tipo: "Solo habitación", descripcion: "con cancelación gratuita", precio: "460.000" },
		{ tipo: "Habitación y Desayuno", descripcion: "incluido con cancelación gratuita", precio: "500.000" },
		{ tipo: "Habitación, Desayuno y Cena", descripcion: "incluidos con cancelación gratuita", precio: "560.000" }
		]
	},	
];

const SeleccionHabitacion = () => {

	const navigate = useNavigate();
	
	return (
		<div>
			<div className="container py-4" style={{ marginTop: '50px' }}>
				<h4 className="fw-bold mb-4 text-center">Seleccione habitación y tarifa</h4>
				{ habitaciones.map((hab) => (
					<div key={hab.id} className="row mb-5 border rounded shadow">

						<div className="col-md-4 border rounded ">
							<img src={hab.imagen} alt={hab.titulo} className="img-fluid rounded" />
							<h6 className="mt-2 fw-bold text-center">{hab.titulo}</h6>
							<p className="text-center">Habitacion {hab.numero}</p>
							<ul>
								{hab.servicios.map((serv, idx) => (
									<li key={idx} className="d-flex align-items-center gap-2 mb-1">
										<div>{serv.icono}</div>
										<span>{serv.nombre}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="col-md-8 border rounded d-grid">
							{hab.tarifas.map((tarifa, i) => (
								<div key={i} className="d-flex justify-content-between align-items-center border-bottom py-2 mb-3">

									<div>
										{i === 0 && <span className="badge bg-dark mb-1">Económico</span>}
										<h4 className="m-0">{tarifa.tipo}</h4>
										<h6>{tarifa.descripcion}</h6>
									</div>

									<div className="text-end">
										<strong>Gs. {tarifa.precio}</strong>
										<button className="btn btn-warning btn-sm ms-3 text-white fw-bold"
												style={{width: '180px', height: '50px'}}
												onClick={() => navigate('/ConfirmarReserva')}>Seleccionar
										</button>
									</div>	
								</div>
							))}
						</div>

					</div>
				))}
			</div>
		</div>
	);
}

export default SeleccionHabitacion;

