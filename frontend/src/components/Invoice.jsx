import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Skeleton, Container } from "@mui/material";
import html2pdf from "html2pdf.js";
import NavBar from "../components/navbar.jsx";
import "../styles/Invoice.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Invoice = () => {
  const { id } = useParams();
  const [factura, setFactura] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const invoiceRef = useRef();

  useEffect(() => {
    const fetchFactura = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/facturas/${id}`);
        if (!res.ok) {
          throw new Error("Error al obtener la factura");
        }
        const data = await res.json();
        setFactura(data);
      } catch (err) {
        setError(err.message);
        console.error("Error al obtener la factura:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFactura();
  }, [id]);

  /**
 * Para cambiar el formato de la fecha a Dia/Mes/Año
 * @param {*} dateString Se le pasa el una fecha
 * @returns Retorna la fecha modifica en caso de exito o si no en caso de fracaso -
 */
  const formatDMY = (dateString) => {
    if (!dateString) return '—';
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'UTC'
      }).format(date);
    } catch {
      return '—';
    }
  };

  const handleBack = () => navigate("/FacturasEmitidas");

const handleDownload = () => {
  const element = document.querySelector(".invoice");

  // Ocultar todos los elementos con clase no-print
  const noPrintElements = document.querySelectorAll(".no-print");
  noPrintElements.forEach(el => el.style.visibility = "hidden");

  import("html2pdf.js").then((html2pdf) => {
    html2pdf.default()
      .set({
        margin: 0,
        filename: `factura-${factura?.id_factura}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save()
      .then(() => {
        // Restaurar visibilidad
        noPrintElements.forEach(el => el.style.visibility = "visible");
      });
  });
};


const handlePrint = () => {
  window.print();
};


  // Skeleton loading UI
  if (loading) {
    return (
      <>
        <NavBar className="no-print" />
        <Container className="mt-5">
          <div className="d-flex justify-content-center mt-3">
            <Skeleton variant="rectangular" animation="wave" width={701} height={480} sx={{ marginTop: "5px" }} />
          </div>
          <div className="d-flex justify-content-center mt-3" style={{ gap: "30px" }}>
            <Skeleton variant="rectangular" animation="wave" width={150} height={40} />
            <Skeleton variant="rectangular" animation="wave" width={150} height={40} />
            <Skeleton variant="rectangular" animation="wave" width={150} height={40} />
          </div>
        </Container>
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavBar className="no-print" />
        <Container className="mt-5">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </Container>
      </>
    );
  }

  if (!factura) return null; // Precaución extra

  const {
    id_factura,
    fecha_emision,
    total,
    condicion_venta,
    usuario,
    detalles = [],
    cuenta,
    timbrado
  } = factura;

  const titular = cuenta?.ingreso?.huesped;
  const ingreso = cuenta?.ingreso;

  let subtotalGeneral = 0;
  let iva5Total = 0;
  let iva10Total = 0;

  detalles.forEach(detalle => {
    const subtotal = detalle.cantidad * detalle.precio_unitario;
    const descuento = detalle.descuento || 0;
    const base = subtotal - descuento;

    if (detalle.porcentaje_iva === 5) {
      iva5Total += base * 0.05;
    } else if (detalle.porcentaje_iva === 10) {
      iva10Total += base * 0.10;
    }

    subtotalGeneral += base;
  });

  const ivaTotal = iva5Total + iva10Total;
  const totalOperacion = subtotalGeneral + ivaTotal;

  return (
    <>
      <NavBar className="no-print" />
      <div className="invoice" ref={invoiceRef}>
        {/* Encabezado */}
        <div className="invoice-header">
          <div className="hotel-name">Hotel Jazel</div>
          <div className="invoice-title">Factura Electrónica</div>
          <div className="commercial-info">
            Servicios de hospedaje y alojamiento<br />
            Av. Dr. Francia, Encarnación, Paraguay
          </div>
          <div className="invoice-meta text-start">
            <div><span>RUC:</span> 80000519-8</div>
            <div><span>Timbrado N°:</span> 12557904</div>
            <div><span>Inicio Vigencia:</span> {formatDMY(timbrado?.fecha_inicio) || '--------'}</div>
            <div>
              <span>Factura Electrónica<br />N°:</span> {factura?.numero_factura || '---------------'}
            </div>
          </div>
        </div>
        <br />
        {/* Información del huésped */}
        <div className="customer-section">
          <div className="customer-info text-start">
            <div><span>Nombre o Razón Social:</span> {titular?.nombre} {titular?.apellido}</div>
            <div><span>RUC / Documento de Identidad:</span> {titular?.ruc || titular?.numero_documento || '---------'}</div>
            <div><span>Correo Electrónico:</span> {titular?.email || '-----------------'}</div>
            <div><span>Teléfono:</span> {titular?.telefono || '----------'}</div>
          </div>
          <div className="invoice-details text-start">
            <div><span>Fecha y hora de emisión:</span> {new Date().toLocaleString()}</div>
            <div><span>Cond. Venta:</span> {condicion_venta}</div>
            <div><span>Moneda:</span> Guaraní</div>
          </div>
        </div>
        <br />
        <table className="items-table">
          <thead>
            <tr className="table-header table-bordered">
              <th>Código</th>
              <th>Descripción</th>
              <th>Unidad</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Descuento</th>
              <th>Exenta</th>
              <th>5 (%)</th>
              <th>10 (%)</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(detalles) && detalles.map((detalle, index) => {
              const subtotal = detalle.cantidad * detalle.precio_unitario;
              const descuento = detalle.descuento || 0;
              const base = subtotal - descuento;
              const iva5 = detalle.porcentaje_iva === 5 ? base * 0.05 : 0;
              const iva10 = detalle.porcentaje_iva === 10 ? base * 0.10 : 0;
              const totalConIva = base + iva5 + iva10;

              return (
                <tr className="table-row" key={index}>
                  <td>{detalle.id_detalle_factura}</td>
                  <td>{detalle.descripcion}</td>
                  <td>UNI</td>
                  <td>{detalle.cantidad}</td>
                  <td>{detalle.precio_unitario}</td>
                  <td>{detalle.descuento}</td>
                  <td>0</td>
                  <td>{iva5 ? iva5.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) : '0'}</td>
                  <td>{iva10 ? iva10.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) : '0'}</td>
                  <td>{totalConIva.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        {/* Totales */}
        <div className="totals-section">
          <div className="total-row">
            <div className="total-label">SUBTOTAL:</div>
            <div>{subtotalGeneral.toLocaleString()}</div>
          </div>
          <div className="total-row">
            <div className="total-label">TOTAL DE LA OPERACIÓN:</div>
            <div>{totalOperacion.toLocaleString()}</div>
          </div>
          <div className="total-row">
            <div className="total-label">TOTAL EN GUARANÍES:</div>
            <div>{totalOperacion.toLocaleString()}</div>
          </div>
          <div className="total-row">
            <div className="total-label">LIQUIDACIÓN IVA:</div>
            <div className="total-label">5%</div>
            <div>{iva5Total.toLocaleString()}</div>
            <div className="total-label">10%</div>
            <div>{iva10Total.toLocaleString()}</div>
            <div className="total-label">TOTAL IVA</div>
            <div>{ivaTotal.toLocaleString()}</div>
          </div>
        </div>
        {/* Botones */}
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
            Descargar PDF
          </button>
          <button
            className="btn btn-primary fw-bold"
            onClick={handlePrint}
            style={{ width: "150px", height: "40px" }}
          >
            Imprimir
          </button>
        </div>
      </div>
    </>
  );
};

export default Invoice;
