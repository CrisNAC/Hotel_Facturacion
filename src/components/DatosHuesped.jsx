import React from "react";
import { useNavigate } from 'react-router-dom';

const DatosHuesped = () => {

	const navigate = useNavigate();

	return (
		<div>
			<div className="container py-4" style={{ marginTop: '50px' }}>
				<h2 className="text-center mb-4 fw-bold">Datos del Huésped</h2>
				{/* Formulario */}
				<form style={{ marginTop: '70px' }}>
					<div className="row g-5">

						<div className="col-md-6 col-lg-6">
							<label htmlFor="nombre" className="form-label">
								Nombre
							</label>
							<input
								type="text"
								className="form-control"
								id="nombre"
								placeholder="Inserte su nombre..."
							/>
						</div>

						<div className="col-md-6 col-lg-6">
							<label htmlFor="apellido" className="form-label">
								Apellido
							</label>
							<input
								type="text"
								className="form-control"
								id="apellido"
								placeholder="Inserte su apellido..."
							/>
						</div>

						<div className="col-md-6 col-lg-6">
							<label htmlFor="nacionalidad" className="form-label">
								Nacionalidad
							</label>
							<select className="form-select" id="nacionalidad" defaultValue="1">
								<option value="1">Paraguay</option>
								<option value="2">Brasil</option>
								<option value="3">Argentina</option>
							</select>
						</div>

						<div className="col-md-6 col-lg-6">
							<label htmlFor="Documento" className="form-label">
								Documento
							</label>
							<input
								type="text"
								className="form-control"
								id="documento"
								placeholder="Inserte su documento..."
							/>
						</div>

						<div className="col-md-6 col-lg-6">
							<label htmlFor="Correo" className="form-label">
								Correo
							</label>
							<input
								type="text"
								className="form-control"
								id="correo"
								placeholder="Inserte su correo..."
							/>
						</div>

						<div className="col-md-6 col-lg-6">
							<label htmlFor="telefono" className="form-label">
								Telefono
							</label>
							<input type="tel" className="form-control" id="telefono" placeholder="Inserte nº de contacto..." />
						</div>

						<div className="col-md-6 col-lg-6">
							<label htmlFor="ruc" className="form-label">
								RUC
							</label>
							<input type="text" className="form-control" id="ruc" placeholder="Inserte su ruc..." />
						</div>

						<div className="col-md-6 col-lg-6">
							<label htmlFor="fecha_nacimiento" className="form-label">
								Fecha de Nacimiento
							</label>
							<input type="date" className="form-control" id="fecha_nacimiento" />
						</div>

					</div>

					<div className="text-center" style={{ marginTop: '60px'}}>
						<button type="submit"  style={{backgroundColor: '#003366', color: 'white', border: 'none', padding: '10px 30px', borderRadius: '5px'}} onClick={() => navigate('/ConfirmarReserva')}>
							Agregar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default DatosHuesped;