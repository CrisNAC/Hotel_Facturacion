import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import html2pdf from "html2pdf.js"; // para descargar PDF
import { useRef } from "react"; // para descargar PDF
import "../styles/Invoice.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Invoice = () => {
  const { id } = useParams();
  const [factura, setFactura] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const invoiceRef = useRef(); // para descargar PDF

  useEffect(() => {
    const fetchFactura = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/facturas/${id}`);
        const data = await res.json();
        setFactura(data);
      } catch (error) {
        console.error("Error al obtener la factura:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFactura();
  }, [id]);

  if (!factura) {
    return <div>Cargando...</div>;
  }

  const {
    id_factura,
    fecha_emision,
    total,
    condicion_venta,
    usuario,
    detalles,
    cuenta,
    timbrado
  } = factura;

  const ingreso = cuenta?.ingreso;
  const habitacion = ingreso?.habitacion;
  const tarifa = ingreso?.tarifa;

  const handleBack = () => {
    navigate("/FacturasEmitidas");
  };

  // Función para descargar la factura como PDF
  const handleDownload = () => {
    const element = document.querySelector(".invoice");
    const buttons = document.querySelector(".no-print");

    // Ocultar botones antes de exportar
    if (buttons) buttons.style.display = "none";

    import("html2pdf.js").then((html2pdf) => {
      html2pdf.default()
        .set({
          margin: 0,
          filename: `factura-${id_factura}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
        })
        .from(element)
        .save()
        .then(() => {
          // Restaurar botones después de guardar
          if (buttons) buttons.style.display = "flex";
        });
    });
  };

  return (
    <div className="invoice" ref={invoiceRef}>
      {/* Encabezado */}
      <div className="invoice-header">
        <div className="hotel-name">Hotel Jazel</div>
        <div className="invoice-title">Factura Electrónica</div>
        <div className="commercial-info">
          Actividad Comercial<br />
          Dirección del Hotel
        </div>
        <div className="invoice-meta text-start">
          <div><span>RUC:</span> {usuario?.documento || 'Sin RUC'}</div>
          <div><span>Timbrado N°:</span> {timbrado?.numero || '---'}</div>
          <div><span>Inicio Vigencia:</span> {timbrado?.fecha_inicio || '---'}</div>
          <div>
            <span>Factura Electrónica<br />N°:</span> {id_factura}
          </div>
        </div>
      </div>

      {/* Cliente */}
      <div className="customer-section">
        <div className="customer-info text-start">
          <div><span>Nombre o Razón Social:</span> {usuario?.nombre} {usuario?.apellido}</div>
          <div><span>RUC / Documento de Identidad:</span> {usuario?.documento || '---'}</div>
          <div><span>Correo Electrónico:</span> {usuario?.correo || '---'}</div>
          <div><span>Teléfono:</span> {usuario?.telefono || '---'}</div>
        </div>
        <div className="invoice-details text-start">
          <div><span>Fecha y hora de emisión:</span> {new Date(fecha_emision).toLocaleString()}</div>
          <div><span>Cond. Venta:</span> {condicion_venta}</div>
          <div><span>Moneda:</span> Guaraní</div>
        </div>
      </div>

      {/* Tabla */}
      <table className="items-table">
        <thead>
          <tr className="table-header table-bordered">
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Descuento</th>
            <th>IVA (%)</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {detalles.map((detalle, index) => (
            <tr className="table-row" key={index}>
              <td>{detalle.descripcion}</td>
              <td>{detalle.cantidad}</td>
              <td>{detalle.precio_unitario}</td>
              <td>{detalle.descuento}</td>
              <td>{detalle.porcentaje_iva}</td>
              <td>
                {(detalle.cantidad * detalle.precio_unitario - detalle.descuento).toLocaleString()} Gs.
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totales */}
      <div className="totals-section">
        <div className="total-row">
          <div className="total-label">TOTAL:</div>
          <div>{total.toLocaleString()} Gs.</div>
        </div>
        {/* Puedes calcular o mostrar IVA aquí si está en los datos */}
      </div>

      {/* Botón */}
      <div
        className="d-flex justify-content-center align-items-center mt-4 no-print"
        style={{ gap: "30px" }}
      >
        <button
          className="btn btn-secondary fw-bold"
          onClick={handleBack}
          style={{ width: "150px", height: "40px" }}
        >
          Atrás
        </button>
        <button
          className="btn btn-success fw-bold"
          onClick={handleDownload}
          style={{ width: "150px", height: "40px" }}
        >
          Descargar
        </button>
      </div>
    </div>
  );
};

export default Invoice;
