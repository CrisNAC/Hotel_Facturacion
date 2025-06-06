import HTTPClient from "../api/HTTPClient";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useReserva } from "../context/Reserva/ReservaContext";
import dayjs from "dayjs";

const CheckInReserva = () => {
    const client = new HTTPClient();
	const navigate = useNavigate();

    /*** Estados ***/
    const [reservaId, setReservaId] = useState("");
    const [reserva, setReserva] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mensaje, setMensaje] = useState("");

    /*** Contexto ***/
    const { setReservaSeleccionada } = useReserva();

    /**
     * Para obtener los datos del usuario en sesion
     * @returns Retorna los datos en caso de exito, si no null
     */
    const getUserInSession = async () => {
        try {
            const response = await client.getUser();
            const dataUser = response.data.user;
            return dataUser;
        } catch (error) {
            console.error("Error obteniendo usuario:", error.response?.data?.error || error.message);
            return null;
        }
    };

    /**
     * Para obtener los datos de la reserva segun su numero.
     * @param {*} id El numero de la reserva que se quiere obtener
     */
    const getReservaById = async (id) => {
        try {
            setLoading(true);
            const res = await client.getAReservaById(id);
            setReserva(res.data);
			//console.log(res.data);
            setMensaje("");
        } catch (error) {
            console.error(error);
            setReserva(null);
            setMensaje("No se encontró ninguna reserva con ese número.");
        } finally {
            setLoading(false);
        }
    };

	const formatDMY = (fecha) => {
		const fechaCompletaSplit = fecha.split("T")[0];
		const [year, month , day] = fechaCompletaSplit.split("-");
		const fechaFormateada = `${day}/${month}/${year}`;
		return fechaFormateada;
	};

    const calcularNoches = () => {
		if (reserva?.checkIn && reserva?.checkOut) {
			const checkIn = dayjs(reserva.checkIn);
			const checkOut = dayjs(reserva.checkOut);
			return checkOut.diff(checkIn, 'day');
		}
		return 0;
	};

    const handleReservaIdChange = (e) => {
        const value = e.target.value;
        // Solo permitir números positivos, sin espacios ni signos
        if (/^\d*$/.test(value)) {
            setReservaId(value);
        }
    };

    const handleBuscarReserva = () => {
        const id = Number(reservaId);
        if (id > 0) getReservaById(id);
        else setMensaje("Ingrese un número válido de reserva.");
    };

	const handleSubmit = () => {

		if (reserva.estado === "Confirmada"  || reserva.estado === "Finalizada") {
			setMensaje("La reserva ya fue confirmada o finalizada. No es posible hacer el check-in nuevamente");
			return;
		}

		const payload = {
			// Ingreso anteriormente creado
			id_ingreso: reserva.ingreso[0].id_ingreso,
			fk_reserva: reserva.id_reserva,
			fk_habitacion: null,
			fk_huesped: reserva.huesped.id_huesped,
			fk_tarifa: reserva.ingreso[0].fk_tarifa,
			check_in: dayjs(reserva.checkIn).format("YYYY-MM-DDTHH:mm:ss"),
			check_out: dayjs(reserva.checkOut).format("YYYY-MM-DDTHH:mm:ss"),
			noches: noches,
			tipo_habitacion: reserva.fk_tipo_habitacion,
			huespedes: reserva.tipoHabitacion.capacidad,
			fk_usuario: reserva.usuario.id_usuario
		}
		setReservaSeleccionada(payload);
		navigate('/SeleccionHabitacion');
	}

	useEffect(() => {
        getUserInSession();
    }, []);

	const noches = calcularNoches();

    return (
        <div>
            <div className="container">
                {/* Buscar reserva */}
                <div className="row justify-content-center my-5">
                    <div className="col-md-6 col-lg-4">
                        <label htmlFor="numReserva" className="form-label">Nº Reserva</label>
                        <div className="d-flex">
                            <input
                                type="text"
                                className="form-control me-2"
                                id="numReserva"
                                value={reservaId}
                                onChange={handleReservaIdChange}
                                maxLength={5}
                                placeholder="Solo números"
                            />
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleBuscarReserva}
                                disabled={loading}
                            >
                                {loading ? "Cargando..." : "Buscar"}
                            </button>
                        </div>
                        {mensaje && (
                            <div className="alert alert-warning mt-2 p-2">
                                {mensaje}
                            </div>
                        )}
                    </div>
                </div>

                {/* Mostrar resultado si hay reserva */}
                {reserva && (
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="card shadow rounded-4">
                                <div className="card-header text-center rounded-top-4" style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>
                                    <h5 className="mb-0">Detalles de la Reserva</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <p><b>Titular:</b> {reserva.huesped.nombre} {reserva.huesped.apellido}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p><b>Tipo de Habitación:</b> {reserva.tipoHabitacion.nombre}</p>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
										<div className="col-md-6">
                                            <p><b>Cantidad de Huéspedes:</b> {reserva.tipoHabitacion.capacidad || 0}</p>
                                        </div>
										<div className="col-md-6">
                                            <p><b>Noches:</b> {reserva ? noches : ""}</p>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <p><b>Check-in:</b> {formatDMY(reserva.checkIn)}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p><b>Check-out:</b> {formatDMY(reserva.checkOut)}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p><b>Recepcionista: </b>{reserva.usuario?.nombre_usuario}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-4">
                                <button
                                    className="btn btn-success"
                                    onClick={handleSubmit}
                                >
                                    Verificar Disponibilidad
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckInReserva;
