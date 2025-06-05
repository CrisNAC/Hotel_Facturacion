import { Skeleton } from "@mui/material";

function HuespedesSkeleton() {
    const styles = { backgroundColor: "#E6E6E6", color: "2E2E2E" };
    return (
        <>
            <h2 className="text-3xl font-bold text-center p-2">Huéspedes</h2>
            <div className='d-flex justify-content-center mb-3'><Skeleton variant='rectangular' animation='wave' width="100%" height={100}></Skeleton></div>
            <div className='d-flex justify-content-center'>
                <table id="tablaFacturas" className="table table-bordered table-hover w-100 text-center">
                    <thead>
                        <tr>
                            <th style={styles}>#</th>
                            <th style={styles}>Huésped</th>
                            <th style={styles}>Número de factura</th>
                            <th style={styles}>Check-in</th>
                            <th style={styles}>Check-out</th>
                            <th style={styles}>Estado</th>
                            <th style={styles}>Total</th>
                            <th style={styles}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(10)].map((_, i) => (
                            <tr key={i}>
                                <td className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <Skeleton variant="text" animation="wave" width="15%" height="32px" />
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <Skeleton variant="text" animation="wave" width="80%" height="32px" />
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <Skeleton variant="text" animation="wave" width="40%" height="32px" />
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <Skeleton variant="text" animation="wave" width="50%" height="32px" />
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <Skeleton variant="text" animation="wave" width="60%" height="32px" />
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <Skeleton variant="text" animation="wave" width="60%" height="32px" />
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <Skeleton variant="text" animation="wave" width="60%" height="32px" />
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="d-flex justify-content-center">
                                        <Skeleton variant="circular" animation="wave" width="25px" height="25px" sx={{ marginTop: "3.5px" }} />
                                        <Skeleton variant="circular" animation="wave" width="25px" height="25px" sx={{ marginTop: "3.5px" }} />
                                        <Skeleton variant="circular" animation="wave" width="25px" height="25px" sx={{ marginTop: "3.5px" }} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-center mt-2'>
                <div className='d-flex'>
                    <Skeleton variant='rectangular' animation='wave' width={100} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                    <Skeleton variant='rectangular' animation='wave' width={30} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                    <Skeleton variant='rectangular' animation='wave' width={30} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                    <Skeleton variant='rectangular' animation='wave' width={30} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                    <Skeleton variant='rectangular' animation='wave' width={100} height={30} style={{ margin: "0 0.2rem 0 0.2rem" }}></Skeleton>
                </div>
            </div>
        </>
    );
}

export default HuespedesSkeleton;