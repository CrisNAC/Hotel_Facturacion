import HTTPClient from "../api/HTTPClient.js";
import { useState } from "react";

function ModalDelete({ item, setShowDeleteModal, refresh }) {
    const client = new HTTPClient();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    /**
     * Para cambiar el formato de la fecha a Dia/Mes/Año
     * @param {*} dateString Se le pasa el una fecha
     * @returns Retorna la fecha modifica en caso de exito o si no en caso de fracaso -
     */
    const formatDMY = (dateString) => {
        if (!dateString) return '—';
        try {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
        } catch {
            return '—';
        }
    };

    /**
     * Para la cancelacion del Ingreso
     */
    const handleDelete = () => {
        const cancelarIngreso = async () => {
            try {
                setLoading(true);
                await client.cancelarIngreso(item.id_ingreso);
                // await client.eliminarRelacionHuespedHabitacion(item.id_ingreso);
                if (item.reserva) await client.cancelarReserva(item.reserva.id_reserva);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
                setShowDeleteModal(false);
                refresh();
            };
        };
        cancelarIngreso();
    };

    const calcularNoches = (checkIn, checkOut) => {
        if (!checkIn || !checkOut) return 0;

        const unDia = 24 * 60 * 60 * 1000; // milisegundos en un día
        const fechaInicio = new Date(checkIn);
        const fechaFin = new Date(checkOut);

        // Redondear hacia arriba para contar noches completas
        return Math.round(Math.abs((fechaFin - fechaInicio) / unDia));
    };

    return (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-center">
                        <h5 className="modal-title">¿Estás seguro de que quieres cancelar este ingreso?</h5>
                    </div>
                    {/* Presentacion del contenido */}
                    <div className="modal-body row row-cols-2 text-start py-5">
                        <p><strong>Nombre:</strong> {item.huesped.nombre}</p>
                        <p><strong>Habitación:</strong> {item.habitacion ? item.habitacion.numero : "Sin asignar"}</p>
                        <p><strong>Check-in:</strong> {formatDMY(item.checkIn)}</p>
                        <p><strong>Check-out:</strong> {formatDMY(item.checkOut)}</p>
                        <p><strong>Estado ingreso:</strong> {item.estado}</p>
                        <p><strong>Total:</strong> {(() => {
                            const noches = calcularNoches(item.checkIn, item.checkOut);
                            const costoHabitacion = noches * (item.tarifa?.precio || 0);
                            const totalConsumos = item.cuenta?.[0]?.consumos
                                ?.filter(consumo => consumo.activo)
                                ?.reduce((acc, consumo) => acc + (Number(consumo.monto) || 0), 0) || 0;
                            const total = costoHabitacion + totalConsumos;

                            return total > 0 ? `${total.toLocaleString()} Gs` : '—';
                        })()} Gs</p>
                    </div>
                    {/* Botones */}
                    <div className="modal-footer d-flex justify-content-center">
                        <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>Volver</button>
                        <button type="button" className="btn btn-danger" onClick={handleDelete} disabled={loading}>{loading ? "Cancelando..." : "Cancelar"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalDelete;