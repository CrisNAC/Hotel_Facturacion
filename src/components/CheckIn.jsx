import React, { useState } from "react";
import WalkIn from "./WalkIn";
import CheckInReserva from "./CheckInReserva";

const CheckIn = () => {

	const [tieneReserva, setTieneReserva] = useState(true);
	
	const handleSwitch = () => {
		setTieneReserva( (prev) => !prev);
	}
	
	return (
		/*<div className="d-flex justify-content-center align-items-center vh-100">*/
		<div>
			<div className="container py-4" style={{ marginTop: '50px' }}>

				<h2 className="text-center mb-4">Check-In</h2>

				{/* Switch */}
				<div className="form-check form-switch d-flex align-items-center gap-2 justify-content-center mb-3">
					<input
						className="form-check-input"
						type="checkbox"
						id="reservaSwitch"
						checked={tieneReserva}
						onChange={handleSwitch}
					/>
					<label className="form-check-label" htmlFor="reservaSwitch">
						Indique si el huésped tiene una reserva
					</label>
				</div>

				{/* Formulario */}
				{ tieneReserva ? <CheckInReserva></CheckInReserva> : <WalkIn></WalkIn> }

			</div>
		</div>
	);
};

export default CheckIn;