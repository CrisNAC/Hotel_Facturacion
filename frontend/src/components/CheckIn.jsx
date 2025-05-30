import { useState } from "react";
import WalkIn from "./WalkIn";
import CheckInReserva from "./CheckInReserva";
import NavBar from "./navbar";

const CheckIn = () => {
	const [tieneReserva, setTieneReserva] = useState(true);

	const handleSwitch = () => {
		setTieneReserva((prev) => !prev);
	};

	return (
		<div className="container py-4">
			<div className="row justify-content-center">
				<div className="col-12 col-md-11 col-lg-10">
					<div className="card shadow p-2">
						<div className="card-body">
							<h3 className="text-center mb-1">
								{tieneReserva ? "Check-In" : "Walk-In"}
							</h3>
							{/* Switch de reserva */}
							<div className="d-flex align-items-center justify-content-center mb-2">
								<div className="form-check form-switch">
									<input
										className="form-check-input"
										type="checkbox"
										id="reservaSwitch"
										checked={tieneReserva}
										onChange={handleSwitch}
									/>
									<label
										className="form-check-label ms-1"
										htmlFor="reservaSwitch"
									>
										¿Tiene reserva?
									</label>
								</div>
							</div>
							{/* Formulario correspondiente */}
							{tieneReserva ? <CheckInReserva /> : <WalkIn />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckIn;
