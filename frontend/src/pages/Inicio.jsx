// Styles
import 'bootstrap/dist/css/bootstrap.min.css';

import HTTPClient from '../api/HTTPClient.js';
import { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';
import NavBar from '../components/navbar.jsx';
import ErrorComponent from "../components/ErrorComponent.jsx";

const Inicio = () => {
  const client = new HTTPClient();

  // Estados
  const [datos, setDatos] = useState({
    libres: 0,
    reservadas: 0,
    ocupadas: 0,
    huespedesActivos: 0,
    ingresosHoy: [],
    egresosHoy: []
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  // Función para obtener datos del dashboard
  const fetchDatos = async () => {
    try {
      setLoading(true);
      const response = await client.getDashboard();
      setDatos(response.data);
      console.log(response.data);
    } catch (err) {
      setError(err.response.data?.error || err.message);
      setStatus(err.response.status);
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDatos();
  }, []);

  // Fecha actual en formato legible
  const fechaActual = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const cards = [
    { color: '#B3F2B4', value: datos.libres, label: 'Habitaciones Libres' },
    { color: '#D0EFFF', value: datos.reservadas, label: 'Habitaciones Reservadas' },
    { color: '#FFCCBC', value: datos.ocupadas, label: 'Habitaciones Ocupadas' },
    { color: '#FFF9C4', value: datos.huespedesActivos, label: 'Huéspedes Activos' },
  ];

  return (
    <>
      {error ? <ErrorComponent code={status} message={error}></ErrorComponent> : (
        <>
          <NavBar />
          <Container className="pt-5 mt-3">
            {/* Tarjetas */}
            <Row className="mb-5">
              {cards.map((card, i) => (
                <Col key={i} md={6} lg={3}>
                  <Card
                    className="mb-3 shadow"
                    style={{
                      backgroundColor: card.color,
                      height: '180px',
                      color: '#333'
                    }}
                  >
                    <Card.Body className="d-flex flex-column justify-content-center">
                      <Card.Title className="text-center" style={{ fontSize: '2.5rem' }}>
                        {loading ? '...' : card.value}
                      </Card.Title>
                      <Card.Text className="text-center" style={{ fontSize: '1.2rem' }}>
                        {card.label}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            {/* Tablas */}
            <h4 className="text-center mb-4">Ingresos y Egresos del día: {fechaActual}</h4>
            <Row>
              <Col md={6}>
                <Card className="mb-4 shadow-sm" style={{ backgroundColor: '#DDE7EA' }}>
                  <Card.Body>
                    <h5 className="text-center mb-3">Check-in</h5>
                    <Table bordered hover>
                      <thead>
                        <tr>
                          <th className='text-center' style={{ width: '10%' }}>Nº</th>
                          <th className='text-center' style={{ width: '60%' }}>Nombre</th>
                          <th className='text-center' style={{ width: '30%' }}>Hora</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr><td colSpan="3" className='text-center'>Cargando...</td></tr>
                        ) : datos.ingresosHoy.length === 0 ? (
                          <tr><td colSpan="3" className='text-center'>Sin ingresos</td></tr>
                        ) : (
                          datos.ingresosHoy.map((ing, idx) => (
                            <tr key={idx}>
                              <td className='text-center'>{ing.id}</td>
                              <td>{`${ing.nombre} ${ing.apellido}`}</td>
                              <td>{ing.hora}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="mb-4 shadow-sm" style={{ backgroundColor: '#DDE7EA' }}>
                  <Card.Body>
                    <h5 className="text-center mb-3">Check-out</h5>
                    <Table bordered hover>
                      <thead>
                        <tr>
                          <th className='text-center' style={{ width: '10%' }}>#</th>
                          <th className='text-center' style={{ width: '60%' }}>Nombre</th>
                          <th className='text-center' style={{ width: '30%' }}>Hora</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr><td colSpan="3" className='text-center'>Cargando...</td></tr>
                        ) : datos.egresosHoy.length === 0 ? (
                          <tr><td colSpan="3" className='text-center'>Sin egresos</td></tr>
                        ) : (
                          datos.egresosHoy.map((salida, idx) => (
                            <tr key={idx}>
                              <td className='text-center'>{salida.id}</td>
                              <td>{`${salida.nombre} ${salida.apellido}`}</td>
                              <td>{salida.hora}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )
      }
    </>
  );
};

export default Inicio;
