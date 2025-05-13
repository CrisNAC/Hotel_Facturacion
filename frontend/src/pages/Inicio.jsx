//import React, { useState, useEffect } from 'react';
import { FaRegTrashAlt, FaEye } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import HTTPClient from '../api/HTTPClient.js';
import NavBar from '../components/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';


const Inicio = () => {
  const cards = [
    { color: '#B3F2B4', value: 15, label: 'Habitaciones Libres' },    // Verde pastel
    { color: '#D0EFFF', value: 10, label: 'Habitaciones Reservadas' }, // Celeste pastel
    { color: '#FFF9C4', value: 17, label: 'Habitaciones Libres' },    // Amarillo pastel
    { color: '#FFCCBC', value: 100, label: 'Huéspedes Activos' }       // Naranja pastel
  ];
  return (
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
                  <Card.Title className="text-center" style={{ fontSize: '2.5rem' }}>{card.value}</Card.Title>
                  <Card.Text className="text-center" style={{ fontSize: '1.2rem' }}>
                    {card.label}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Tablas */}
        <h4 className="text-center mb-4">Ingresos y Egresos del día: 24/04/2025</h4>
        <Row>
          <Col md={6}>
            <Card className="mb-4 shadow-sm" style={{ backgroundColor: '#DDE7EA' }}>
              <Card.Body>
                <h5 className="text-center mb-3">Check-in</h5>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nombre</th>
                      <th>Habitación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td>Juan Pérez</td><td>101</td></tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 shadow-sm" style={{ backgroundColor: '#DDE7EA' }}>
              <Card.Body>
                <h5 className="text-center mb-3">Check-out</h5>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nombre</th>
                      <th>Habitación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td>María Gómez</td><td>202</td></tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>

    </>
  );
};
export default Inicio;