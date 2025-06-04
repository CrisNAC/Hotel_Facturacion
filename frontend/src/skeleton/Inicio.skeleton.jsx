import { Container, Row, Col, Card, Placeholder, Table } from "react-bootstrap";

const InicioSkeleton = () => {
    return (
        <Container className="pt-5 mt-3">
            {/* Skeleton de tarjetas */}
            <Row className="mb-5">
                {Array(4).fill(null).map((_, i) => (
                    <Col key={i} md={6} lg={3}>
                        <Card className="mb-3 shadow" style={{ height: "180px", backgroundColor: "#f0f0f0" }}>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Placeholder className="text-center" as={Card.Title} animation="glow">
                                    <Placeholder xs={4} className="mx-auto" style={{ height: "2.5rem" }} />
                                </Placeholder>
                                <Placeholder className="text-center" as={Card.Text} animation="glow">
                                    <Placeholder xs={8} className="mx-auto mt-3" style={{ height: "1.2rem" }} />
                                </Placeholder>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Skeleton de tablas */}
            <h4 className="text-center mb-4">
                Ingresos y Egresos del día: <Placeholder xs={2} animation="glow" />
            </h4>
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
                                                    <Placeholder as="span" animation="glow">
                                                        <Placeholder xs={3} />
                                                    </Placeholder>
                                                </td>
                                                <td>
                                                    <Placeholder as="span" animation="glow">
                                                        <Placeholder xs={10} />
                                                    </Placeholder>
                                                </td>
                                                <td>
                                                    <Placeholder as="span" animation="glow">
                                                        <Placeholder xs={5} />
                                                    </Placeholder>
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
