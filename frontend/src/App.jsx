import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

import Login from './components/Login'
import Inicio from './pages/Inicio.jsx'

import Huespedes from './components/Huespedes.jsx';
import DetallesCuenta from './components/DetallesCuenta.jsx'
import InvoiceCierre from './components/InvoiceCierre.jsx'

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

import AsientoContable from './components/AsientoContable.jsx';

import MainLayout from './context/navbar/MainLayout.jsx';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Rutas sin NavBar */}
          <Route path="/" element={<Login />} />
          <Route path="/Invoice/:id" element={<Invoice />} />
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
            <Route path="/Huespedes" element={<Huespedes />} />
            <Route path="/DetallesCuenta/:id" element={<DetallesCuenta />} />
            <Route path="/InvoiceCierre/:id" element={<InvoiceCierre />} />
            
            <Route element={<ReservaLayout></ReservaLayout>}>
              <Route element={<TarifaLayout></TarifaLayout>}>
                <Route path="/IngresoHuesped" element={<CheckIn />}></Route>
                <Route path="/AgregarHuesped" element={<AgregarHuesped />}></Route>
                <Route path="/SeleccionHabitacion" element={<SeleccionHabitacion />}></Route>
                <Route path="/ConfirmarReserva" element={<ConfirmarReserva />}></Route>
              </Route>
            </Route>

            <Route path="/FacturasEmitidas" element={<FacturaPage />} />
            <Route path="/Reportes" element={<ReportesPage />} />
            <Route path="/AsientoContable" element={<AsientoContable />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App

