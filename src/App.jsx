import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Inicio from './components/inicio'
import NavBar from './components/navbar.jsx'

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
    <>
      <Router basename="/Hotel_Facturacion">
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
          ></Route>
          <Route path="/invoice/:numeroFactura" element={<Invoice />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
