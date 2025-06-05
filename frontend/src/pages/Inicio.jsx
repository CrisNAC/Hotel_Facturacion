// Styles
import 'bootstrap/dist/css/bootstrap.min.css';

import HTTPClient from '../api/HTTPClient.js';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, Table } from 'react-bootstrap';
import InicioSkeleton from "../skeleton/Inicio.skeleton.jsx";

const Inicio = () => {
	const client = new HTTPClient();
	const navigate = useNavigate();

	// Estados
	const [datos, setDatos] = useState({
		libres: 0,
		reservadas: 0,
		ocupadas: 0,
		huespedesActivos: 0,
		ingresosHoy: [],
		egresosHoy: []
	});
	// Funcionalidad de la pagina
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [status, setStatus] = useState(null);

	// Función para obtener datos del dashboard
	const fetchDatos = async () => {
		try {
			setLoading(true);
			const response = await client.getDashboard();
			setDatos(response.data);
		} catch (err) {
			setError(err.response.data?.error || err.message);
			setStatus(err.response.status);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchDatos();
	}, []);

	/**
	 * Para el manejo de error
	 */
	useEffect(() => {
		if (error) {
			navigate('/ErrorPage', {
				state: {
					code: status,
					message: error
				},
				replace: true,
			});
		}
	}, [error, status, navigate]);

	// Fecha actual en formato legible
	const fechaActual = new Date().toLocaleDateString('es-ES', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});

	const cards = [
		{ color: '#B3F2B4', value: datos.libres, label: 'Habitaciones Libres' },
		{ color: '#D0EFFF', value: datos.reservadas, label: 'Habitaciones Reservadas' },
		{ color: '#FFCCBC', value: datos.ocupadas, label: 'Habitaciones Ocupadas' },
		{ color: '#FFF9C4', value: datos.huespedesActivos, label: 'Huéspedes Activos' },
	];

	return (
		<>
			{loading ? <InicioSkeleton></InicioSkeleton> : (
				<Container className="pt-4 mt-3">
					{/* Tarjetas */}
					<Row className="mb-5">
						{cards.map((card, i) => (
							<Col key={i} md={6} lg={3}>
								<Card
									className="mb-3 shadow"
									style={{
										backgroundColor: card.color,
										height: '180px',
										color: '#333'
									}}
								>
									<Card.Body className="d-flex flex-column justify-content-center">
										<Card.Title className="text-center" style={{ fontSize: '2.5rem' }}>
											{loading ? '...' : card.value}
										</Card.Title>
										<Card.Text className="text-center" style={{ fontSize: '1.2rem' }}>
											{card.label}
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
					{/* Tablas */}
					<h4 className="text-center mb-4">Ingresos y Egresos del día: {fechaActual}</h4>
					<Row>
						<Col md={6}>
							<Card className="mb-4 shadow-sm" style={{ backgroundColor: '#DDE7EA' }}>
								<Card.Body>
									<h5 className="text-center mb-3">Check-in</h5>
									<Table bordered hover>
										<thead>
											<tr>
												<th className='text-center' style={{ width: '10%' }}>Nº</th>
												<th className='text-center' style={{ width: '60%' }}>Nombre</th>
												<th className='text-center' style={{ width: '30%' }}>Hora</th>
											</tr>
										</thead>
										<tbody>
											{loading ? (
												<tr><td colSpan="3" className='text-center'>Cargando...</td></tr>
											) : datos.ingresosHoy.length === 0 ? (
												<tr><td colSpan="3" className='text-center'>Sin ingresos</td></tr>
											) : (
												datos.ingresosHoy.map((ing, idx) => (
													<tr key={idx}>
														<td className='text-center'>{ing.id}</td>
														<td>{`${ing.nombre} ${ing.apellido}`}</td>
														<td>{ing.hora}</td>
													</tr>
												))
											)}
										</tbody>
									</Table>
								</Card.Body>
							</Card>
						</Col>
						{/* Tabla de Check-out */}
						<Col md={6}>
							<Card className="mb-4 shadow-sm" style={{ backgroundColor: '#DDE7EA' }}>
								<Card.Body>
									<h5 className="text-center mb-3">Check-out</h5>
									<Table bordered hover>
										<thead>
											<tr>
												<th className='text-center' style={{ width: '10%' }}>#</th>
												<th className='text-center' style={{ width: '60%' }}>Nombre</th>
												<th className='text-center' style={{ width: '30%' }}>Hora</th>
											</tr>
										</thead>
										<tbody>
											{loading ? (
												<tr><td colSpan="3" className='text-center'>Cargando...</td></tr>
											) : datos.egresosHoy.length === 0 ? (
												<tr><td colSpan="3" className='text-center'>Sin egresos</td></tr>
											) : (
												datos.egresosHoy.map((salida, idx) => (
													<tr key={idx}>
														<td className='text-center'>{salida.id}</td>
														<td>{`${salida.nombre} ${salida.apellido}`}</td>
														<td>{salida.hora}</td>
													</tr>
												))
											)}
										</tbody>
									</Table>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			)}
		</>
	);
};

export default Inicio;
