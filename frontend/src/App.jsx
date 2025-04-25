import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material'
<<<<<<< HEAD

import Inicio from './components/Inicio.jsx'
import NavBar from './components/navbar.jsx'

=======
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from './pages/Inicio.jsx'
import NavBar from './components/navbar.jsx'
import HuespedesActivosPage from './pages/HuespedesActivosPage.jsx';
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
import DetallesCuentas from "./components/DetallesCuenta"
import InvoiceComponentEli from "./components/InvoiceComponentEli"

import Login from './components/Login'
import FacturaTable from "./components/FacturaTable"
import FacturaFilters from "./components/FacturaFilters"
import Invoice from "./components/Invoice"

import CheckIn from './components/CheckIn'
import ConfirmarReserva from './components/ConfirmarReserva'
import DatosHuesped from './components/DatosHuesped'
import SeleccionHabitacion from './components/SeleccionHabitacion'

function App() {
  return (
<<<<<<< HEAD
    <>
      <Router>
        <Container>

		  <NavBar></NavBar>
		  <Routes>
            <Route path="/" element={<Inicio />} />

            <Route path="/DetallesCuentas" element={<DetallesCuentas />}></Route>
            <Route path="/VistaFactura" element={<InvoiceComponentEli />}></Route>

            <Route path="/IngresoHuesped" element={<CheckIn />}></Route>
            <Route path="/ConfirmarReserva" element={<ConfirmarReserva />}></Route>
            <Route path="/DatosHuesped" element={<DatosHuesped />}></Route>
            <Route path="/SeleccionHabitacion" element={<SeleccionHabitacion />}></Route>

            <Route path="/Login" element={<Login />} />
            <Route path="/FacturasEmitidas" element={
              <div style={{ marginTop: "6rem" }}>
                <FacturaFilters />
                <FacturaTable />
              </div>
            }
=======
      <>
      <Router>
        <Container>

		  
		  <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Huespedes" element={<HuespedesActivosPage />} />

          <Route path="/DetallesCuentas" element={<DetallesCuentas />}></Route>
          <Route path="/VistaFactura" element={<InvoiceComponentEli />}></Route>

          <Route path="/IngresoHuesped" element={<CheckIn />}></Route>
          <Route path="/ConfirmarReserva" element={<ConfirmarReserva />}></Route>
          <Route path="/DatosHuesped" element={<DatosHuesped />}></Route>
          <Route path="/SeleccionHabitacion" element={<SeleccionHabitacion />}></Route>

          <Route path="/" element={<Login />} />
          <Route path="/FacturasEmitidas" element={
            <div style={{ marginTop: "6rem" }}>
              <FacturaFilters />
              <FacturaTable />
            </div>
          }
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
            ></Route>
            <Route path="/invoice/:numeroFactura" element={<Invoice />} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
