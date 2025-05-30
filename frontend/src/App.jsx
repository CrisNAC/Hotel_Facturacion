import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

import Login from './components/Login'
import Inicio from './pages/Inicio.jsx'
import HuespedesActivosPage from './pages/HuespedesActivosPage.jsx';

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

import MainLayout from './context/navbar/MainLayout.jsx';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Rutas sin NavBar */}
          <Route path="/" element={<Login />} />
          <Route
            path="*"
            element={
              <Navigate
                to="/ErrorPage"
                state={{ code: 404, message: "Página no encontrada" }}
                replace
              />
            }
          />
          <Route path="/ErrorPage" element={<ErrorComponent code={404} message="Página no encontrada" />} />

          {/* Rutas con NavBar */}
          <Route element={<MainLayout />}>
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Huespedes" element={<HuespedesActivosPage />} />

            <Route element={<ReservaLayout />}>
              <Route path="/IngresoHuesped" element={<CheckIn />} />
              <Route path="/AgregarHuesped" element={<AgregarHuesped />} />
              <Route element={<TarifaLayout />}>
                <Route path="/SeleccionHabitacion" element={<SeleccionHabitacion />} />
                <Route path="/ConfirmarReserva" element={<ConfirmarReserva />} />
              </Route>
            </Route>

            <Route path="/FacturasEmitidas" element={<FacturaPage />} />
            <Route path="/Invoice/:id" element={<Invoice />} />
            <Route path="/Reportes" element={<ReportesPage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App

