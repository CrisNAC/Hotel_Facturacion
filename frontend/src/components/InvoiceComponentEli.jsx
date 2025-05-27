import React, { useContext, useRef,useState,useEffect   } from "react";
import "../styles/InvoiceStyleEli.css";
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
  const [error, setError] = useState('');
    
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
  const [numeroFactura, setNumeroFactura] = useState(null);

  const obtenerNumeroFactura = async () => {
    try {
      setError('');
      
      const response = await fetch(`http://localhost:4000/api/facturas/ultimafactura`, {
        method: 'GET',
        cache: 'no-store'
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al obtener número de factura');
      }

      const data = await response.json();
      console.log("Factura recibida:", data);
      setNumeroFactura(data.siguienteNumeroFactura);

    } catch (error) {
      setError('Error al obtener número de factura: ' + error.message);
    } 
};

  const invoiceItems = [itemEstadia, ...(cuenta?.consumos || [])];

  const detallesFactura = invoiceItems.map(item => ({
    descripcion: item.Productos.descripcion.trim(),
    cantidad: item.cantidad,
    precio_unitario: item.Productos.precio_unitario,
    descuento: 0,
    porcentaje_iva: item.Productos.porcentaje_iva ?? 10
  }));

  const invoiceData = {
    fk_cuenta: cuenta.id_cuenta,
    condicion_venta: "Contado",
    fecha_emision: new Date().toLocaleString(),
    total: cuenta?.consumos.reduce((acc, item) => acc + (item.monto|| 0), 0)+totalHabitacion,
    numero_factura: numeroFactura ? "001-001-" + numeroFactura.toString().padStart(7, "0") : "Cargando...",
    detalles:detallesFactura|| [],
  };


  console.log("Cuenta consumos:", cuenta.id_cuenta);
  console.log("invoiceData:", detallesFactura);
  const calcularIVA = (detalles) => {
    let iva5 = 0, iva10 = 0;
    detalles.forEach(item => {
      const totalItem = item.precio_unitario * item.cantidad;
      if (item.porcentaje_iva === 5) iva5 += totalItem;
      else if (item.porcentaje_iva === 10) iva10 += totalItem;
    });
    return {
      iva5: Math.round(iva5 * 5 / 105),
      iva10: Math.round(iva10 * 10 / 110),
      totalIVA: Math.round(iva5 * 5 / 105 + iva10 * 10 / 110)
    };
  };

  const iva = calcularIVA(detallesFactura);

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
  const irAHuespedes = () => {
    setMainPage(true);
    setVistaFactura(false);
  };

  const generarPDFBlob = async () => {
  const element = document.querySelector(".invoice");

  const opt = {
    margin: 0,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
  };

  return await import("html2pdf.js").then((html2pdf) => {
    return html2pdf.default()
      .set(opt)
      .from(element)
      .outputPdf('blob'); // <- genera un Blob en vez de guardar el archivo
  });
};

  const enviarFactura = async () => {
  try {
    const pdfBlob = await generarPDFBlob();

    const formData = new FormData();
    formData.append('factura', new Blob([JSON.stringify(invoiceData)], { type: 'application/json' }));
    formData.append('pdf', pdfBlob, 'factura.pdf');

    const response = await fetch('http://localhost:4000/api/facturas', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al guardar la factura');
    }

    const data = await response.json();
    alert('Factura guardada y enviada por correo con éxito');
    console.log('Factura registrada:', data);
    irAHuespedes();

  } catch (error) {
    setError('Error al guardar/enviar factura: ' + error.message);
    console.error('Error al enviar factura:', error);
  }
};


  useEffect(() => {
    obtenerNumeroFactura();
  }, []);

  return (
    <div className="invoice" ref={invoiceRef}>     
      <div className="invoice-header">
        <div className="hotel-name">Hotel Jazel</div>
        <div className="invoice-title">Factura Electrónica</div>
        <div className="commercial-info">
          Servicios de hospedaje y alojamiento
          <br />
          Av. Dr. Francia, Encarnación, Paraguay Comercial
        </div>
        <div className="invoice-meta text-start">
          <div><span>RUC:</span> 80000519-8</div>
          <div><span>Timbrado N°:</span> 12557904</div>
          <div><span>Inicio Vigencia:</span> 01/01/2025</div>
          <div>
            <span>Factura Electrónica<br />N°:</span> {invoiceData.numero_factura}
          </div>
        </div>
      </div>
      <br></br>
      {/* Información del cliente */}
      <div className="customer-section">
        <div className="customer-info text-start">
          <div><span>Nombre o Razón Social: </span>{huesped.nombre + " "+ huesped.apellido}</div>
          <div><span>RUC / Documento de Identidad: </span>{huesped.ruc}</div>
          <div><span>Correo Electrónico: </span>{huesped.email}</div>
          <div><span>Teléfono: </span>{huesped.telefono}</div>
        </div>
        <div className="invoice-details text-start">
          <div><span>Fecha y hora de emisión: </span>{invoiceData.fecha_emision}</div>
          <div><span>Cond. Venta: </span>{invoiceData.condicion_venta}</div>
          <div><span>Moneda: </span>Guarani</div>
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
          {invoiceData.detalles.map((item, index) => (
            <tr className="table-row" key={index}>
              <td>{'0' + (index + 1)}</td> {/* ID temporal para la tabla */}
              <td>{item.descripcion || "Sin descripción"}</td>
              <td>UNI</td>
              <td>{item.cantidad}</td>
              <td className="text-end">{item.precio_unitario.toLocaleString("de-DE")}</td>
              <td>{item.descuento}</td>
              <td className="text-end">{item.porcentaje_iva === 0 ? (item.precio_unitario * item.cantidad).toLocaleString("de-DE") : 0}</td>
              <td className="text-end">{item.porcentaje_iva === 5 ? (item.precio_unitario * item.cantidad).toLocaleString("de-DE") : 0}</td>
              <td className="text-end">{item.porcentaje_iva === 10 ? (item.precio_unitario * item.cantidad).toLocaleString("de-DE") : 0}</td>
            </tr>
          ))}

        </tbody>
      </table>
      <br></br>
      {/* Totales */}
      <div className="totals-section">
        <div className="total-row">
          <div className="total-label">SUBTOTAL:</div>
          <div>{invoiceData.total.toLocaleString("de-DE")}</div>
        </div>
        <div className="total-row">
          <div className="total-label">TOTAL DE LA OPERACIÓN:</div>
          <div>{invoiceData.total.toLocaleString("de-DE")}</div>
        </div>
        <div className="total-row">
          <div className="total-label">TOTAL EN GUARANÍES:</div>
          <div>{invoiceData.total.toLocaleString("de-DE")}</div>
        </div>
        <div className="total-row d-flex justify-content-between">
            <div className="d-flex justify-content-between w-100">
              <span><strong>LIQUIDACIÓN IVA:</strong></span>
              <span><strong>5%</strong></span>
              <span>{iva.iva5.toLocaleString("de-DE")}</span>
              <span><strong>10%</strong></span>
              <span>{iva.iva10.toLocaleString("de-DE")}</span>
              <span><strong>TOTAL IVA:</strong> {iva.totalIVA.toLocaleString("de-DE")}</span>
            </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center  mt-4" style={{ gap: "30px" }}>
        <button className="btn btn-secondary fw-bold" style={{ width: "150px", height: "40px" }} onClick={irADetCuenta}>Cancelar</button>
        <button className="btn btn-success fw-bold" style={{ width: "150px", height: "40px" }} onClick={enviarFactura}>Generar Factura</button>
      </div>
    </div>
  );
};

export default Invoice;