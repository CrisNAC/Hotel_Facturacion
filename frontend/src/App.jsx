import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from './pages/Inicio.jsx'
import NavBar from './components/navbar.jsx'
import HuespedesActivosPage from './pages/HuespedesActivosPage.jsx';
import DetallesCuentas from "./components/DetallesCuenta"
import InvoiceComponentEli from "./components/InvoiceComponentEli"

import Login from './components/Login'
import FacturaTable from "./components/FacturaTable"

import Invoice from "./components/Invoice"

import CheckIn from './components/CheckIn'
import ConfirmarReserva from './components/ConfirmarReserva'
import AgregarHuesped from './pages/AgregarHuesped'
import SeleccionHabitacion from './components/SeleccionHabitacion'

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Huespedes" element={<HuespedesActivosPage />} />

            <Route path="/DetallesCuentas/:idIngreso" element={<DetallesCuentas />} />
            <Route path="/VistaFactura" element={<InvoiceComponentEli />}></Route>

            <Route path="/IngresoHuesped" element={<CheckIn />}></Route>
            <Route path="/ConfirmarReserva" element={<ConfirmarReserva />}></Route>
            <Route path="/AgregarHuesped" element={<AgregarHuesped />}></Route>
            <Route path="/SeleccionHabitacion" element={<SeleccionHabitacion />}></Route>

            <Route path="/" element={<Login />} />
            <Route path="/FacturasEmitidas" element={
              <div style={{ marginTop: "6rem" }}>
                <FacturaTable />
              </div>
            }
            ></Route>
            <Route path="/invoice/:numeroFactura" element={<Invoice />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
