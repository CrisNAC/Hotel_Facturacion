function ModalDelete({ item, setShowDeleteModal, handleDelete }) {

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

    return (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-center">
                        <h5 className="modal-title">¿Estás seguro de que quieres cancelar este ingreso?</h5>
                    </div>
                    <div className="modal-body row row-cols-2 text-start py-5">
                        <p><strong>Nombre:</strong> {item.huesped.nombre}</p>
                        <p><strong>Habitación:</strong> {item.habitacion.numero}</p>
                        <p><strong>Check-in:</strong> {item.reserva ?
                            formatDMY(item.reserva.check_in)
                            : '-- -- ----'}</p>
                        <p><strong>Check-out:</strong> {item.reserva ?
                            formatDMY(item.reserva.check_out)
                            : '-- -- ----'}</p>
                        <p><strong>Estado ingreso:</strong> {item.estado}</p>
                        <p><strong>Total:</strong> {
                            item.cuenta[0]?.consumos[0]
                                ? (item.cuenta[0].consumos[0].cantidad * item.cuenta[0].consumos[0].monto).toLocaleString()
                                : '0'
                        } Gs</p>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>Volver</button>
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalDelete;