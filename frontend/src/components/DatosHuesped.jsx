import React from "react";
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
import NavBar from "./navbar";
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1

const DatosHuesped = () => {
	const navigate = useNavigate();

	return (
		<div className="container py-4">
<<<<<<< HEAD
			<div className="row justify-content-center">
				<div className="col-lg-10">
					<div className="card shadow-sm">
=======
			<NavBar />
			<div className="row justify-content-center">
				<div className="col-lg-10">
					<div className="card shadow p-4">
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
						<div className="card-body">
							<h3 className="text-center fw-bold mb-4">Datos del Huésped</h3>

							<form className="px-2">
								<div className="row g-4">
									{[
										{ id: "nombre", label: "Nombre", placeholder: "Inserte su nombre..." },
										{ id: "apellido", label: "Apellido", placeholder: "Inserte su apellido..." },
										{ id: "documento", label: "Documento", placeholder: "Inserte su documento..." },
										{ id: "correo", label: "Correo", placeholder: "Inserte su correo...", type: "email" },
										{ id: "telefono", label: "Teléfono", placeholder: "Inserte nº de contacto...", type: "tel" },
										{ id: "ruc", label: "RUC", placeholder: "Inserte su RUC..." },
									].map(({ id, label, placeholder, type = "text" }) => (
										<div className="col-md-6" key={id}>
											<label htmlFor={id} className="form-label mb-1 text-start d-block">{label}</label>
											<input
												type={type}
												className="form-control"
												id={id}
												placeholder={placeholder}
												style={{ maxWidth: "100%", width: "400px" }}
											/>
										</div>
									))}

									{/* Nacionalidad */}
									<div className="col-md-6">
										<label htmlFor="nacionalidad" className="form-label mb-1 text-start d-block">Nacionalidad</label>
										<select
											className="form-select"
											id="nacionalidad"
											defaultValue="1"
											style={{ maxWidth: "100%", width: "400px" }}
										>
											<option value="1">Paraguay</option>
											<option value="2">Brasil</option>
											<option value="3">Argentina</option>
										</select>
									</div>

									{/* Fecha de Nacimiento */}
									<div className="col-md-6">
										<label htmlFor="fecha_nacimiento" className="form-label mb-1 text-start d-block">Fecha de Nacimiento</label>
										<input
											type="date"
											className="form-control"
											id="fecha_nacimiento"
											style={{ maxWidth: "100%", width: "400px" }}
										/>
									</div>
								</div>

								<div className="text-center mt-4">
									<button
										type="submit"
										className="btn btn-primary px-4"
										onClick={() => navigate('/ConfirmarReserva')}
									>
										Agregar
									</button>
								</div>
							</form>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DatosHuesped;
