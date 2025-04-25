import React from "react";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ConfirmarReserva = () => {

	const navigate = useNavigate();

	return (
		<div>
			<div className="container py-4" style={{ marginTop: '50px' }}>
				<div className="d-flex justify-content-between align-items-center mb-3">
					<h3>Huéspedes habitación 205</h3>
					<button
						type="button"
						className="btn btn-primary btn-sm ms-3"
						style={{
							backgroundColor: "#003366",
							color: "white",
							border: "#003366",
						}}
						onClick={() => navigate('/DatosHuesped')}
					>
						<FaUserPlus className="me-2" /> Agregar
					</button>
				</div>

				<table className="table table-hover">
					<thead style={{ backgroundColor: "#003366" }}>
						<tr>
							<th style={{ backgroundColor: "#003366", color: "white" }}>#</th>
							<th style={{ backgroundColor: "#003366", color: "white" }}>
								Nombre
							</th>
							<th
								style={{ backgroundColor: "#003366", color: "white" }}
							>
								Apellido
							</th>
							<th
								style={{ backgroundColor: "#003366", color: "white" }}
							>
								Nacionalidad
							</th>
							<th
								style={{ backgroundColor: "#003366", color: "white" }}
							>
								Teléfono
							</th>
							<th
								style={{ backgroundColor: "#003366", color: "white" }}
							>
								Correo
							</th>
							<th
								style={{ backgroundColor: "#003366", color: "white" }}
							>
								Acciones
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Juan</td>
							<td>Pérez</td>
							<td>Paraguay</td>
							<td>+595998123456</td>
							<td>juan@mail.com</td>
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
								>
									<FaTrash />
								</button>
							</td>
						</tr>
						<tr>
							<td>2</td>
							<td>María</td>
							<td>López</td>
							<td>Paraguay</td>
							<td>+595981654234</td>
							<td>maria@mail.com</td>
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
								>
									<FaTrash />
								</button>
							</td>
						</tr>
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

							<h4 className="fw-bold mb-3">Resumen Reserva</h4>

							<p className="mb-1"><span className="fw-semibold">Check in:</span> 03/16/2025</p>
							<p className="mb-1"><span className="fw-semibold">Check out:</span> 03/18/2025</p>
							<p className="fw-bold mt-3 mb-2">Habitación 205 (Doble-Matrimonial Estándar)</p>
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
					<button type="button" className="btn btn-success" style={{ width: '180px', height: '50px' }} onClick={() => navigate('/')}>
						Confirmar Reserva
					</button>
				</div>

			</div>

		</div>
	);
};

export default ConfirmarReserva;
