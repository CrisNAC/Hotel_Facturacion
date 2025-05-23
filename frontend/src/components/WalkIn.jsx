import React from "react";
import { useNavigate } from 'react-router-dom';

const WalkIn = () => {
	//Todavia no funcional
	const navigate = useNavigate();
	const [fechaActual, setFechaActual] = useState('');
	
	return (
		<div style={{ marginTop: '50px' }}>

			<h2 className="text-center mb-4">Seleccione sus Preferencias</h2>

			{/* Formulario */}
			<form style={{ marginTop: '70px' }}>
				<div className="row g-5">

					<div className="col-md-6 col-lg-4">
						<label htmlFor="checkin" className="form-label">
							Check-in
						</label>
						<input type="date" className="form-control" id="checkin" />
					</div>

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
						<label htmlFor="tipo_habitacion" className="form-label">
							Tipo Habitacion
						</label>
						<select className="form-select" id="tipo_habitacion" defaultValue="Doble-Matrimonial">
							<option value="1">Individual</option>
							<option value="2">Doble</option>
							<option value="3">Doble-Matrimonial</option>
							<option value="4">Twin</option>
							<option value="5">Triple</option>
							<option value="6">Cuadruple</option>
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
						<label htmlFor="recepcionista" className="form-label">
							Recepcionista
						</label>
						<input type="text" className="form-control" id="recepcionista" defaultValue="Eliana Sanchez" />
					</div>

					<div className="col-md-6 col-lg-4"></div>

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

export default WalkIn;