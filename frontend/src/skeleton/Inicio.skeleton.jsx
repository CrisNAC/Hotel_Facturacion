import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { Skeleton } from "@mui/material";

const InicioSkeleton = () => {
    return (
        <Container className="pt-4 mt-3">
            {/* Skeleton de tarjetas */}
            <Row className="mb-5">
                {Array(4).fill(null).map((_, i) => (
                    <Col key={i} md={6} lg={3}>
                        <Card className="mb-3 shadow" style={{ height: "180px", backgroundColor: "#f0f0f0" }}>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <Skeleton variant="text" animation="wave" width="20%" height="50px" />
                                    <Skeleton variant="text" animation="wave" width="60%" height="32px" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Skeleton de tablas */}
            <div className="d-flex flex-row justify-content-center">
                <h4 className="text-center mb-4">Ingresos y Egresos del día:</h4>
                <Skeleton className="mx-2" variant="text" animation="wave" width="15%" height="32px" />
            </div>
            <Row>
                {["Check-in", "Check-out"].map((titulo, i) => (
                    <Col md={6} key={i}>
                        <Card className="mb-4 shadow-sm" style={{ backgroundColor: "#DDE7EA" }}>
                            <Card.Body>
                                <h5 className="text-center mb-3">{titulo}</h5>
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th className="text-center" style={{ width: "10%" }}>#</th>
                                            <th className="text-center" style={{ width: "60%" }}>Nombre</th>
                                            <th className="text-center" style={{ width: "30%" }}>Hora</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array(3).fill(null).map((_, idx) => (
                                            <tr key={idx}>
                                                <td className="text-center">
                                                    <div className="d-flex justify-content-center">
                                                        <Skeleton variant="text" animation="wave" width="25%" height="32px" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <Skeleton variant="text" animation="wave" width="50%" height="32px" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <Skeleton variant="text" animation="wave" width="30%" height="32px" />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default InicioSkeleton;
