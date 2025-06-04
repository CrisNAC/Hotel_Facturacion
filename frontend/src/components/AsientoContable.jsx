import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HTTPClient from "../api/HTTPClient";
import * as XLSX from 'xlsx';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

const AsientoContable = () => {
  const client = new HTTPClient();
  const [asientos, setAsientos] = useState([]);
  const [fechaDesde, setFechaDesde] = useState('');
  const [fechaHasta, setFechaHasta] = useState('');

  const formatoGs = (valor) =>
    valor != null ? valor.toLocaleString('es-PY') : '';

  const formatoFecha = (fechaIso) => {
    const fecha = new Date(fechaIso);
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
  };

  const fetchAsientos = async () => {
    try {
      const { data } = await client.getAsientos();
      if (Array.isArray(data)) {
        setAsientos(data);
      } else {
        console.error("Respuesta inesperada:", data);
      }
    } catch (error) {
      console.error("Error al obtener asientos contables:", error);
    }
  };

  useEffect(() => {
    fetchAsientos();
  }, []);

  // Filtro por fechas (frontend)
  const asientosFiltrados = asientos.filter((a) => {
    const fecha = new Date(a.fecha);
    const desde = fechaDesde ? new Date(fechaDesde) : null;
    const hasta = fechaHasta ? new Date(fechaHasta) : null;

    if (desde && fecha < desde) return false;
    if (hasta && fecha > hasta) return false;
    return true;
  });

  // Calcular saldo progresivo
  let saldo = 0;
  const asientosConSaldo = asientosFiltrados.map((a) => {
    const debe = a.debe || 0;
    const haber = a.haber || 0;
    saldo = saldo + debe - haber;
    return { ...a, saldo: saldo };
  });

  const totalDebe = asientosFiltrados.reduce((acc, a) => acc + (a.debe || 0), 0);
  const totalHaber = asientosFiltrados.reduce((acc, a) => acc + (a.haber || 0), 0);



  // Encabezados con estilos
  const handleExportarXLSX = async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Asientos');

  // Encabezados con estilos
  worksheet.columns = [
    { header: 'Fecha', key: 'fecha', width: 15 },
    { header: 'Concepto', key: 'concepto', width: 35 },
    { header: 'Debe', key: 'debe', width: 15, style: { alignment: { horizontal: 'right' } } },
    { header: 'Haber', key: 'haber', width: 15, style: { alignment: { horizontal: 'right' } } },
    { header: 'Saldo', key: 'saldo', width: 15, style: { alignment: { horizontal: 'right' } } },
  ];

  // Cuerpo
  asientosConSaldo.forEach((a) => {
    worksheet.addRow({
      fecha: formatoFecha(a.fecha),
      concepto: a.concepto,
      debe: a.debe ?? 0,
      haber: a.haber ?? 0,
      saldo: a.saldo ?? 0,
    });
  });

  // Totales con estilo
  const filaTotales = worksheet.addRow({
    concepto: 'Totales',
    debe: totalDebe,
    haber: totalHaber,
    saldo: saldo,
  });

  filaTotales.eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFD1E7DD' }, 
    };
    cell.font = { bold: true };
  });

  // Estilo de encabezado
  worksheet.getRow(1).font = { bold: true };
  worksheet.getRow(1).fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'D9D9D9' },
  };

  // Descargar
  const buffer = await workbook.xlsx.writeBuffer();
  const nombreArchivo = `asientos_${fechaDesde || 'inicio'}_a_${fechaHasta || 'hoy'}.xlsx`;
  saveAs(new Blob([buffer]), nombreArchivo);
};

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Asiento Contable</h2>

      {/* Filtro de fechas */}
      <div className="border border-gray rounded-2 p-3 d-inline-flex gap-3 align-items-end mb-3">
        <div>
          <label>Desde:</label>
          <input
            type="date"
            className="form-control"
            value={fechaDesde}
            onChange={(e) => setFechaDesde(e.target.value)}
          />
        </div>
        <div>
          <label>Hasta:</label>
          <input
            type="date"
            className="form-control"
            value={fechaHasta}
            onChange={(e) => setFechaHasta(e.target.value)}
          />
        </div>
        <div>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setFechaDesde('');
              setFechaHasta('');
              fetchAsientos();
            }}
          >
            Reestablecer
          </button>
          </div>
          <button className="btn btn-success ms-2" onClick={handleExportarXLSX}>
            Exportar XLSX
          </button>

      </div>

      <div className="table-responsive">
        <table className="table table-sm table-hover table-bordered text-center">

          <thead >
            <tr>
              <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Fecha</th>
              <th className="text-start" style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Concepto</th>
              <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Debe</th>
              <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Haber</th>
              <th style={{ backgroundColor: "#E6E6E6", color: "#2E2E2E" }}>Saldo</th>
            </tr>
          </thead>
          <tbody>
            {asientosConSaldo.map((a, index) => (
              <tr key={a.id_asiento || index}>
                <td>{formatoFecha(a.fecha)}</td>
                <td className="text-start">{a.concepto}</td>
                <td className="text-end">{formatoGs(a.debe)}</td>
                <td className="text-end">{formatoGs(a.haber)}</td>
                <td className="text-end">{formatoGs(a.saldo)}</td>
              </tr>
            ))}
            {asientosConSaldo.length > 0 && (
              <tr className="table-success fw-bold">
                <td colSpan="2">Totales</td>
                <td className="text-end">{formatoGs(totalDebe)}</td>
                <td className="text-end">{formatoGs(totalHaber)}</td>
                <td className="text-end">{formatoGs(saldo)}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AsientoContable;
