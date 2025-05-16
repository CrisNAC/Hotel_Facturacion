import React, { useContext, useRef } from "react";
import "./InvoiceStyleEli.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { HuespedesActivosContext } from "../context/HuespedesActivosContexto.jsx";

const Invoice = () => {
  const {
    setMainPage,
    setVistaFactura,
    huespedSeleccionado,
    datosFacturacion,
  } = useContext(HuespedesActivosContext);
  const invoiceRef = useRef();

  const irADetCuenta = () => {
    setMainPage(false);
    setVistaFactura(false);
  };
  const huesped = huespedSeleccionado?.huesped || {};
  const cuenta = huespedSeleccionado?.cuenta?.[0] || {};
  const tarifa = huespedSeleccionado?.tarifa || {};
  const habitacion = huespedSeleccionado?.habitacion || {};
  //const precioHabitacion = tarifa.precio;
  console.log(tarifa.precio)
  // Calcular noches de estadía
  const calcularNoches = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return 0;
    const unDia = 24 * 60 * 60 * 1000;
    const fechaInicio = new Date(checkIn);
    const fechaFin = new Date(checkOut);
    return Math.round(Math.abs((fechaFin - fechaInicio) / unDia));
  };
  const noches = calcularNoches(huespedSeleccionado.checkIn, huespedSeleccionado.checkOut);
  const precioHabitacion = tarifa?.precio;
  const totalHabitacion = noches * precioHabitacion;
  const itemEstadia = {
    id_consumo: habitacion?.id_habitacion,
    Productos: { descripcion: habitacion?.tipoHabitacion?.nombre,
                precio_unitario: precioHabitacion
     },
    cantidad: noches,
    monto: totalHabitacion
  };

  const invoiceItems = [itemEstadia, ...(cuenta?.consumos || [])];

  const invoiceData = {
    hotelName: "Hotel Jazel",
    activity: "Servicios de hospedaje y alojamiento",
    address: "Av. Dr. Francia, Encarnación, Paraguay Comercial",
    ruc: "1234567",
    timbrado: "12557904",
    vigencia: "12/01/2025",
    invoiceNumber: "001-001-8000915",
    customer: {
      name: huesped?.nombre +' '+ huesped?.apellido|| "No definido",
      document: huesped?.ruc || "Sin documento",
      email: huesped?.email || "Sin correo",
      phone: huesped?.telefono || "Sin teléfono"
    },
    invoiceDetails: {
      date: new Date().toLocaleString(),
      condition: datosFacturacion.condicionVenta || "Contado",
      currency: "Guaraní"
    },
    items:invoiceItems|| [],

    totals: {
      subtotal: cuenta?.consumos.reduce((acc, item) => acc + (item.monto|| 0), 0)+totalHabitacion,
      totalOperation: cuenta?.consumos.reduce((acc, item) => acc + (item.monto|| 0), 0)+totalHabitacion,
      totalGuaranies: cuenta?.consumos.reduce((acc, item) => acc + (item.monto|| 0), 0)+totalHabitacion,
      taxLiquidation: ""
    }
  };

console.log("Cuenta consumos:", cuenta.consumos);
console.log("invoiceData.items:", invoiceData.items);
   const handleDownload = () => {
    const element = document.querySelector(".invoice");

    // Ocultar todos los elementos con clase no-print
    const noPrintElements = document.querySelectorAll(".no-print");
    noPrintElements.forEach(el => el.style.visibility = "hidden");

    import("html2pdf.js").then((html2pdf) => {
      html2pdf.default()
        .set({
          margin: 0,
          filename: `factura-.pdf`,
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



  return (
    <div className="invoice" ref={invoiceRef}>     
      <div className="invoice-header">
        <div className="hotel-name">{invoiceData.hotelName}</div>
        <div className="invoice-title">Factura Electrónica</div>
        <div className="commercial-info">
          {invoiceData.activity}
          <br />
          {invoiceData.address}
        </div>
        <div className="invoice-meta text-start">
          <div><span>RUC:</span> {invoiceData.ruc}</div>
          <div><span>Timbrado N°:</span> {invoiceData.timbrado}</div>
          <div><span>Inicio Vigencia:</span> {invoiceData.vigencia}</div>
          <div>
            <span>Factura Electrónica<br />N°:</span> {invoiceData.invoiceNumber}
          </div>
        </div>
      </div>
      <br></br>
      {/* Información del cliente */}
      <div className="customer-section">
        <div className="customer-info text-start">
          <div><span>Nombre o Razón Social: </span>{invoiceData.customer.name}</div>
          <div><span>RUC / Documento de Identidad: </span>{invoiceData.customer.document}</div>
          <div><span>Correo Electrónico: </span>{invoiceData.customer.email}</div>
          <div><span>Teléfono: </span>{invoiceData.customer.phone}</div>
        </div>
        <div className="invoice-details text-start">
          <div><span>Fecha y hora de emisión: </span>{invoiceData.invoiceDetails.date}</div>
          <div><span>Cond. Venta: </span>{invoiceData.invoiceDetails.condition}</div>
          <div><span>Moneda: </span>{invoiceData.invoiceDetails.currency}</div>
        </div>
      </div>
      <br></br>
      {/* Tabla de items */}
      <table className="items-table">
        <thead>
          <tr className="table-header table-bordered">
            <th>Código</th>
            <th>Descripción</th>
            <th>Unidad</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Descuentos</th>
            <th>Exentas</th>
            <th>5%</th>
            <th>10%</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, index) => (
            <tr className="table-row" key={index}>
              <td>{'0'+ item.id_consumo}</td>
              <td>{item.Productos?.descripcion || "Sin descripción"}</td>
              <td>UNI</td>
              <td>{item.cantidad}</td>
              <td>{item.Productos?.precio_unitario.toLocaleString("de-DE") || 0}</td>
              <td>0</td> {/* descuentos */}
              <td>0</td> {/* exentas */}
              <td>0</td> {/* 5% */}
              <td>{item.monto.toLocaleString("de-DE")}</td>
            </tr>
          ))}

        </tbody>
      </table>
      <br></br>
      {/* Totales */}
      <div className="totals-section">
        <div className="total-row">
          <div className="total-label">SUBTOTAL:</div>
          <div>{invoiceData.totals.subtotal.toLocaleString("de-DE")}</div>
        </div>
        <div className="total-row">
          <div className="total-label">TOTAL DE LA OPERACIÓN:</div>
          <div>{invoiceData.totals.totalOperation.toLocaleString("de-DE")}</div>
        </div>
        <div className="total-row">
          <div className="total-label">TOTAL EN GUARANÍES:</div>
          <div>{invoiceData.totals.totalGuaranies.toLocaleString("de-DE")}</div>
        </div>
        <div className="total-row d-flex justify-content-between">
          <div className="d-flex justify-content-between w-100">
            <span><strong>LIQUIDACIÓN IVA:</strong></span>
            <span><strong>5%</strong></span>
            <span>0</span>
            <span><strong>10%</strong></span>
            <span>{(invoiceData.totals.totalGuaranies * 0.1).toLocaleString("de-DE")}</span>
            <span><strong>TOTAL IVA:</strong> {(invoiceData.totals.totalGuaranies * 0.1).toLocaleString("de-DE")}</span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center  mt-4" style={{ gap: "30px" }}>
        <button className="btn btn-secondary fw-bold" style={{ width: "150px", height: "40px" }} onClick={irADetCuenta}>Cancelar</button>
        <button className="btn btn-success fw-bold" style={{ width: "150px", height: "40px" }} onClick={handleDownload}>Generar</button>
      </div>
    </div>
  );
};

export default Invoice;