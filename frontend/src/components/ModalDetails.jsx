function ModalDetails({ item, setShowDetailModal}) {
    return (
        <div className="modal modal-lg fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-center">
                        <h4 className="modal-title">Detalles del huésped</h4>
                    </div>
                    <div className="modal-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className='text-center' scope='col' style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>#</th>
                                    <th className='text-center' scope='col' style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Nombre</th>
                                    <th className='text-center' scope='col' style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Apellido</th>
                                    <th className='text-center' scope='col' style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Nacionalidad</th>
                                    <th className='text-center' scope='col' style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Telefono</th>
                                    <th className='text-center' scope='col' style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Correo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='text-center'>1</td>
                                    <td className='text-center'>{item.huesped.nombre}</td>
                                    <td className='text-center'>{item.huesped.apellido}</td>
                                    <td className='text-center'>{item.huesped.nacionalidad}</td>
                                    <td className='text-center'>{item.huesped.telefono}</td>
                                    <td className='text-center'>{item.huesped.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button type="button" className="btn btn-secondary" onClick={() => setShowDetailModal(false)}>Volver</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalDetails;