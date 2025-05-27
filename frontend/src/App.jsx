import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

import Inicio from './pages/Inicio.jsx'
import NavBar from './components/navbar.jsx'
import HuespedesActivosPage from './pages/HuespedesActivosPage.jsx';
import DetallesCuentas from "./components/DetallesCuenta"
import InvoiceComponentEli from "./components/InvoiceComponentEli"

import Login from './components/Login'
import FacturaTable from "./components/FacturaTable.jsx"

import Invoice from "./components/Invoice.jsx"

import CheckIn from './components/CheckIn'
import ConfirmarReserva from './components/ConfirmarReserva'
import AgregarHuesped from './pages/AgregarHuesped.jsx';
import SeleccionHabitacion from './components/SeleccionHabitacion'

import TarifaLayout from './context/tarifa/TarifaLayout.jsx';
import ReservaLayout from "./context/Reserva/ReservaLayout.jsx";

import FacturaPage from './pages/FacturaPage.jsx';
import ErrorComponent from './components/ErrorComponent.jsx';

import ReportesPage from './pages/ReportesPage.jsx';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Huespedes" element={<HuespedesActivosPage />} />

            <Route element={<ReservaLayout></ReservaLayout>}>
              <Route path="/IngresoHuesped" element={<CheckIn />}></Route>
              <Route path="/AgregarHuesped" element={<AgregarHuesped />}></Route>
              <Route element={<TarifaLayout></TarifaLayout>}>
                <Route path="/SeleccionHabitacion" element={<SeleccionHabitacion />}></Route>
                <Route path="/ConfirmarReserva" element={<ConfirmarReserva />}></Route>
			  </Route>
            </Route>


            <Route path="/FacturasEmitidas" element={
              <div style={{ marginTop: "5rem" }}>
                <FacturaPage />
              </div>
            }
            ></Route>
            <Route path="/Invoice/:id" element={<Invoice />}></Route>

            <Route path="/Reportes" element={<ReportesPage />} />
            <Route path='*' element={<ErrorComponent code={404} message='Pagina no encontrada'></ErrorComponent>}></Route>
          </Routes>
        </Router>
      </QueryClientProvider>

    </>
  )
}

export default App

