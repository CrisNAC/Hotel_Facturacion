import { useState } from "react";
import WalkIn from "./WalkIn";
import CheckInReserva from "./CheckInReserva";

const CheckIn = () => {
	const [tieneReserva, setTieneReserva] = useState(true);

	const handleSwitch = () => {
		setTieneReserva((prev) => !prev);
	};
	};

	return (
		<div className="container py-4">
			<div className="row justify-content-center">
				<div className="col-12 col-md-11 col-lg-10" style={{ maxWidth: "1150px" }}>
					<div className="card shadow p-4">
						<div className="card-body">
							<h3 className="text-center mb-3">
								{tieneReserva ? "Check-In" : "Walk-In"}
							</h3>

							{/* Switch de reserva */}
							<div className="d-flex align-items-center justify-content-center mb-4">
								<div className="form-check form-switch">
									<input
										className="form-check-input"
										type="checkbox"
										id="reservaSwitch"
										checked={tieneReserva}
										onChange={handleSwitch}
									/>
									<label
										className="form-check-label ms-2"
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
							{/* Switch de reserva */}
							<div className="d-flex align-items-center justify-content-center mb-4">
								<div className="form-check form-switch">
									<input
										className="form-check-input"
										type="checkbox"
										id="reservaSwitch"
										checked={tieneReserva}
										onChange={handleSwitch}
									/>
									<label
										className="form-check-label ms-2"
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

